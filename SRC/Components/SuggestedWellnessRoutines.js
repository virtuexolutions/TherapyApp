import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import WellnessRoutines from './WellnessRoutines'

const SuggestedWellnessRoutines = () => {

    const routines = [
        {
          id: 1,
          icon: require("../Assets/Images/run.png"),
          title: "Morning cardio",
          time: "45 Min",
          level: "Beginner"
        },
        {
          id: 2,
          icon: require("../Assets/Images/dancing.png"),
          title: "Dancing",
          time: "1 hr",
          level: "Beginner"
        },
        {
          id: 3,
          icon: require("../Assets/Images/swimming.png"),
          title: "Swimming",
          time: "130 hrs", // Note: This seems unusually long - might be a typo
          level: "Beginner"
        },
        {
          id: 4,
          icon: require("../Assets/Images/biking.png"),
          title: "Biking",
          time: "45 Min",
          level: "Beginner"
        }
      ];
  return (
        <View style={styles.mainContainer}>
        <CustomText
        children={"Suggested wellness routines"}
        isBold
        style={styles.heading}
        />
        <WellnessRoutines 
        data={routines}
        />
        </View>
  )
}

export default SuggestedWellnessRoutines

const styles = StyleSheet.create({
    mainContainer:{
        width: windowWidth,
        alignItems:"center"
    },
    heading:{
        fontSize:moderateScale(16,0.2),
        color:Color.white,
        width: windowWidth * 0.9
    }
})