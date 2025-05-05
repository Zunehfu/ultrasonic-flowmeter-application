import React from "react";
import IconHumidity from "./IconHumidity";
import IconSpeed from "./IconSpeed";
import IconTemperature from "./IconTempurature";

const HomeCardIcon = ({ name }) => {
  return (
    <React.Fragment>
      {name == "Speed" ? (
        <IconSpeed />
      ) : name == "Temperature" ? (
        <IconTemperature />
      ) : name == "Humidity" ? (
        <IconHumidity />
      ) : (
        <IconSpeed />
      )}
    </React.Fragment>
  );
};

export default HomeCardIcon;
