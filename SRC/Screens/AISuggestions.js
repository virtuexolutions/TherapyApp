import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../Components/CustomText'
import Suggestion from '../Components/Suggestion'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Color from '../Assets/Utilities/Color'
import CustomImage from '../Components/CustomImage'
import { Divider } from 'native-base'

export default function AISuggestions() {
  return (
     <View style={styles.mainContainer}>
          <View style={{
        alignItems:"center"
      }}>
     <View style={styles.titleView}>
      <CustomText
      children={"Vitality AI"}
      isBold
      style={styles.heading}
      />
      <CustomImage
      source={require("../Assets/Images/stars.png")}
      />
      </View>   
      <CustomText
      children={"Hi, I'm Vitality AI, your virtual assistant. How can I help you today?"}
      
      style={styles.description}
      />
      </View>
      <View style={{alignItems:"center"}}>

      <CustomText
      children={"Or if you prefer:"}
      
      style={styles.description}
      />
    <Suggestion
    title={"Chat with an agent"}
    mode={"chat"}
    description={"Yes, I would like to be connected with a live support agent to discuss my issue further."}
    />
    <Divider
    backgroundColor={"#293640"}
    w={windowWidth * 0.85}
    color={"#293640"}
    />
    <Suggestion
    title={"Call with an agent"}
    // mode={"chat"}
    description={"Yes, I would like to be connected with a live support agent to discuss my issue further."}
    />
    </View>

     </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        zindex:1,
        position:"absolute",
        width:windowWidth,
        paddingVertical:verticalScale(20),
        height:windowHeight * 0.8,
        justifyContent:"space-between",
        // backgroundColor:"red"
    },
    titleView:{
        flexDirection:"row",
        alignItems:"center",
        gap:scale(10)
    },
    description:{
        fontSize:moderateScale(14,0.2),
         color:Color.white,
         width: windowWidth * 0.8,
         textAlign:"center"
      },
      heading:{
        fontSize:moderateScale(26,0.2),
         color:Color.white,
         
      },
})