import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import Color from '../Assets/Utilities/Color';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import BackButton from '../Components/BackButton';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import ThemeIconButton from '../Components/ThemeIconButton';
import LinearGradient from 'react-native-linear-gradient';
import {weakMapMemoize} from '@reduxjs/toolkit';
import CustomImage from '../Components/CustomImage';
import AskYourAICoach from '../Components/AskYourAICoach';
import SuggestedWellnessRoutines from '../Components/SuggestedWellnessRoutines';
import TravelPackages from '../Components/TravelPackages';
import Header from '../Components/Header';

const HomeScreen = () => {
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showGreeting={true} showCart />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <AskYourAICoach />
        <SuggestedWellnessRoutines/>
        <TravelPackages/>
      </LinearGradient>
    </ScreenBoiler>
  );
};



export default HomeScreen;

const styles = StyleSheet.create({
  mainScreen:{
    width:windowWidth,
    height: windowHeight * 0.925,
    alignItems:"center",
  },
  
});
