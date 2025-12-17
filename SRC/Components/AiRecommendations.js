import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../Utillity/utils'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import CustomText from './CustomText'

const AiRecommendations = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomText 
      children={"AI Recommendations"}
      style={styles.heading}
      isBold
      />
      <View style={styles.card}>
        <View style={styles.cardHeader}> 
        <View style={styles.dayContainer}>
        <CustomText 
      children={"MON"}
      style={styles.day}
      />
        <CustomText
        isBold 
      children={"24"}
      style={styles.date}
      />
        </View>
        <CustomText 
        isBold
      children={"Today's recommendation"}
      style={styles.heading}
      />
        </View>
      <CustomText 
      numberOfLines={3}
      children={"Prioritize your well-being with a balanced diet, regular exercise, and mindfulness to cultivate a healthier and happier you."}
      style={styles.text2}
      />
      <CustomText 
      // numberOfLines={3}
      children={'"'}
      style={styles.comma}
      isBold
      />

      </View>
    </View>
  )
}

export default AiRecommendations

const styles = StyleSheet.create({
  mainContainer:{
    width:windowWidth,
    alignItems:"center",
    gap:verticalScale(10)

  },
  heading:{
    fontSize:moderateScale(16,0.2),
    color:Color.white,
    width:windowWidth * 0.9                        
},

card:{
  width: windowWidth * 0.9,
  backgroundColor: Color.themeDarkBlueGray,
  gap: scale(10),
  borderColor: Color.themeLightBlueGray,
  borderWidth: 1,
  borderRadius:moderateScale(14,0.2),
  paddingHorizontal:scale(10),
  // paddingVertical:verticalScale(10)
  paddingTop:verticalScale(8),
},
cardHeader:{
 flexDirection:"row",
 alignItems:"center",
 gap:scale(10)
},
day:{
  color:Color.white,
  fontSize:moderateScale(9)
},
date:{
  color:Color.white,
  fontSize:moderateScale(12)
},
text2:{
  // lineHeight:"100",
  color:Color.white,
  fontSize:moderateScale(13)
},
dayContainer:{
  borderColor:Color.themeGrey200,
  borderWidth:1,
  paddingHorizontal:scale(5),
  paddingVertical:verticalScale(2),
alignItems:"center",
  borderRadius:moderateScale(6,0.2)
},
comma:{
  fontSize:moderateScale(50,0.2),
  color:Color.white,
  width: "100%",
  // backgroundColor:Color.red,
  height:scale(30),
  top:scale(-10),
  textAlign:"right",
  // position:"absolute",
  // right:scale(20),
  // bottom:scale(-20)
}
})