import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenBoiler from '../Components/ScreenBoiler'
import Header from '../Components/Header'
import LinearGradient from 'react-native-linear-gradient'
import Color from '../Assets/Utilities/Color'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'

const MenuScreen = () => {
  return (
    <ScreenBoiler
    statusBarBackgroundColor={Color.themeBluishBlack}
    statusBarContentStyle={'light-content'}>
    <Header showGreeting={true} showCart />
    <LinearGradient
      style={styles.mainScreen}
      colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <CustomText
        isBold
        children={"Menu"}
        style={styles.text}
        />
  </LinearGradient>
  </ScreenBoiler>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    mainScreen: {
        width: windowWidth,
        height: windowHeight * 0.925,
        alignItems: 'center',
        justifyContent:"center"
      },
      text:{
        fontSize:moderateScale(24, 0.2),
        color:Color.white
      }
})