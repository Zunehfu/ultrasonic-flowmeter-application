#include <WiFi.h>
#include <WebServer.h>
#include <Preferences.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WebSocketsClient.h>

const String fm_id = "FL001";
const String ssidStr = "SENSE_FLOW-" + fm_id; // Name of the Network created by this flowmeter

const char* ap_ssid = ssidStr.c_str(); 
const char* ap_pass = "12345678"; // Should be unique for the flowmeter. User can see this via the app.

const char* backend_api = "http://192.168.1.116:3000/data";  
const char* backend = "192.168.1.116";  


Preferences preferences;

WebServer server(80);
WebSocketsClient webSocket;

String htmlForm = R"rawliteral(
<!DOCTYPE html><html>
  <body>
    <h2>Configure Wi-Fi</h2>
    <form action="/submit" method="POST">
      SSID:<br><input type="text" name="ssid"><br>
      Password:<br><input type="password" name="password"><br><br>
      <input type="submit" value="Save and Connect">
    </form>
  </body>
</html>
)rawliteral";

void startAP() {
  WiFi.softAP(ap_ssid, ap_pass);
  
  Serial.println("AP Mode Started");
  Serial.print("AP IP address: ");
  Serial.println(WiFi.softAPIP());
}

void connectSTA(String ssid, String password) {
  WiFi.begin(ssid.c_str(), password.c_str());
  Serial.print("Connecting to Wi-Fi");
 
  int tries = 0;
 
  while (WiFi.status() != WL_CONNECTED && tries < 20) {
    delay(500);
    Serial.print(".");
    tries++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nConnected to Wi-Fi!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\nFailed to connect.");
  }
}

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {
  switch(type) {
    case WStype_DISCONNECTED:
      Serial.println("Disconnected");
      break;
    case WStype_CONNECTED:
      Serial.println("Connected to Backend");
      webSocket.sendTXT("Hello from ESP32");
      break;
    case WStype_TEXT:
      Serial.printf("Received: %s\n", payload);
      break;
  }
}


void setup() {
  Serial.begin(115200);

  preferences.begin("wifi", false);
  String ssid = preferences.getString("ssid", ""); // Take ssid from flash. Default ""
  String pass = preferences.getString("pass", ""); // Take pass from flash. Default ""

  // Start AP so user can connect and update if needed
  startAP();

  // If credentials exist already, Try to connect
  if (ssid != "") {
    connectSTA(ssid, pass);
  }

  // On requesting edit form
  server.on("/", HTTP_GET, []() {
    // Give them the html form
    server.send(200, "text/html", htmlForm);
  });

  // On performing submit
  server.on("/submit", HTTP_POST, []() {
    String newSSID = server.arg("ssid");
    String newPass = server.arg("password");

    preferences.putString("ssid", newSSID);
    preferences.putString("pass", newPass);

    server.send(200, "text/html", "<h3>Credentials Saved. Restarting...</h3>");

    delay(1000);
    ESP.restart();  // Reboot with new credentials
  });

  server.begin();

  webSocket.begin(backend, 8080, "/");
  webSocket.onEvent(webSocketEvent);

  Serial.println("Web server started!");
}

void loop() {
  server.handleClient();
  webSocket.loop();

  static unsigned long lastReconnectAttempt = 0;
  static unsigned long lastSendTime = 0;

  // Reconnect if disconnected
  if (WiFi.getMode() == WIFI_STA && WiFi.status() != WL_CONNECTED) {
    unsigned long now = millis();
    // Attempt every 10s
    if (now - lastReconnectAttempt > 10000) {
      Serial.println("Wi-Fi lost. Attempting to reconnect...");
      String ssid = preferences.getString("ssid", "");
      String pass = preferences.getString("pass", "");
      if (ssid != "") {
        WiFi.begin(ssid.c_str(), pass.c_str());
      }
      lastReconnectAttempt = now;
    }
  }

  // Send JSON data every 5 seconds
  if (WiFi.status() == WL_CONNECTED && millis() - lastSendTime > 1000) {
    HTTPClient http;
    http.begin(backend_api);
    http.addHeader("Content-Type", "application/json");

    // Create JSON
    StaticJsonDocument<200> doc;
    doc["sensor"] = "ESP32";
    doc["value"] = random(100); // Just a dummy value
    doc["uptime"] = millis();

    String jsonString;
    serializeJson(doc, jsonString);

    int httpResponseCode = http.POST(jsonString);

    Serial.print("POST Response code: ");
    Serial.println(httpResponseCode);
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Response: " + response);
    }

    http.end();
    lastSendTime = millis();
  }
}
