import Svg, { G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Dart() {
  return (
    <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G fill="#fff">
        <Path d="M12 21.75A9.75 9.75 0 1121.75 12 9.76 9.76 0 0112 21.75zm0-18A8.25 8.25 0 1020.25 12 8.26 8.26 0 0012 3.75z" />
        <Path d="M12 17.46A5.46 5.46 0 1117.46 12 5.47 5.47 0 0112 17.46zM12 8a4 4 0 100 8 4 4 0 000-8z" />
        <Path d="M21 12.75H3a.75.75 0 110-1.5h18a.75.75 0 110 1.5z" />
        <Path d="M12 21.75a.76.76 0 01-.75-.75V3a.75.75 0 111.5 0v18a.76.76 0 01-.75.75z" />
      </G>
    </Svg>
  );
}

export default Dart;
