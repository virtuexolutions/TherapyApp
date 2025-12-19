import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
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
import LayawayPlans from '../Components/LayawayPlans';
import AiRecommendations from '../Components/AiRecommendations';
import ActiveGiveaways from '../Components/ActiveGiveaways';
import TopProviders from '../Components/TopProviders';
import Others from '../Components/Others';
import LayoutBottomSheet from '../Components/LayoutBottomSheet';

const HomeScreen = () => {
  const refRBSheet= useRef();
  const [showMoreWidgets, setShowMoreWidgets] = useState(false)
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showGreeting={true} showCart />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
      <ScrollView 
      contentContainerStyle={{
        paddingBottom:scale(50)
      }}
      >
        <AskYourAICoach 
        onIconPress={()=>{
          refRBSheet.current?.open();
        }}
        />
        <SuggestedWellnessRoutines />
        <TravelPackages />
     {showMoreWidgets == false &&   <CustomButton
          isBold
          text={'See all Widgets'}
          fontSize={moderateScale(12, 0.3)}
          textColor={Color.white}
          paddingHorizontal={scale(10)}
          borderWidth={1.5}
          borderColor={Color.themeVeryLightGrey}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeMediumGrey}
          textTransform={'none'}
          onPress={()=>{
            setShowMoreWidgets(true)

          }}
        />}
{showMoreWidgets && <>
        <LayawayPlans/>
        <TopProviders/>
        <AiRecommendations />
        <ActiveGiveaways />
        <Others/>
        </>}
        <View 
        style={{height:windowHeight * 0.1}}
        />
        <LayoutBottomSheet
        ref={refRBSheet}
        
        />
        </ScrollView>
        
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    alignItems: 'center',
  },
});
