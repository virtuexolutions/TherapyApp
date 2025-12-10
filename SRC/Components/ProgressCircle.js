// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { scale } from "react-native-size-matters";
// import Svg, { Circle } from "react-native-svg";

// const ProgressCircle = ({ progress = 2, total = 3 }) => {
//   const percentage = (progress / total) * 100;
//   const radius = 40;
//   const strokeWidth = 6;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <View style={styles.container}>
//       <Svg width={100} height={100}>
//         <Circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke="#444"
//           strokeWidth={strokeWidth}
//           fill="none"
//         />

//         <Circle
//           cx="50"
//           cy="50"
//           r={radius}
//           stroke="green"
//           strokeWidth={strokeWidth}
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//         />
//       </Svg>

//       <Text style={styles.text}>{progress}/{total}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     right:scale(100)
//   },
//   text: {
//     position: "absolute",
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default ProgressCircle;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Circle } from "react-native-svg";
import Color from "../Assets/Utilities/Color";

const ProgressCircle = ({ progress = 2, total = 3, size = 60 }) => {
  const percentage = (progress / total) * 100;
  const radius = size / 3;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={Color.themeLightGray}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="green"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={[styles.text, { fontSize: size / 4 }]}>
        {progress}/{total}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    right:scale(10)
  },
  text: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
  },
});

export default ProgressCircle;