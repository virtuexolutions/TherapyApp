import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomStatusBar from '../Components/CustomStatusBar'
import Color from '../Assets/Utilities/Color'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../Components/CustomImage'
import CustomButton from '../Components/CustomButton'

const ServicesManagement = () => {
   
      
  return (
    <SafeAreaView style={styles.mainScreen}>
        <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
       <Header 
       textstyle={{
        fontWeight:'bold',
        fontSize:moderateScale(14,0.2),
        color:Color.primaryColor,
        opacity:0.85,
    }}
    // notificationIcon={true}
       title={"Services Management"}/>
       <View style={{paddingHorizontal:moderateScale(15,0.2), paddingVertical:moderateScale(10,0.2)}}>
        {/* <CustomText style={styles.heading}>Notifications</CustomText> */}
        <CustomText style={styles.desc}>AI Auto-Tagging: This Is A Great Addition. Will Providers Have The Option To Override AI Suggestions?</CustomText>
       </View>
      

    </SafeAreaView>
  )
}

export default ServicesManagement

const styles = StyleSheet.create({
    mainScreen:{
        width: windowWidth,
        height:windowHeight
    },
    
    desc:{
        color:Color.primaryColor,
        fontSize:moderateScale(18,0.2),
    },
})