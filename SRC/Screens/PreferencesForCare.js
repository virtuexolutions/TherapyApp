import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import Preferences from '../Components/Preferences';
import ScreenBoiler from '../Components/ScreenBoiler';
import OnBoardingHeader from '../Components/OnBoardingHeader';
import navigationService from '../navigationService';
const PreferencesForCare = () => {
    const data = [
        "Physical therapy exercises",
        "Mindfulness exercises", 
        "Meditation",
        "Nutritional guidance",
        "Talk therapy",
        "Alternative medicine"
    ];
    const [preference, setPreference] = useState("")
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <OnBoardingHeader  
      // subtitle={`Next: ${pageSubtiotle}`}
      subtitle={`Next: LifeStyle`}
      progress={1}
      total={3}
      />
    <LinearGradient
    style={styles.mainScreen}
    colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
    <CustomText
      children={'Your preferences for care'}
      style={styles.text1}
      //  isBold
    />
    <CustomText
      children={"Let us know which areas of care you'd like to explore"}
      style={styles.text2}
    />
    <Preferences
    selectedPreference={preference}
    setSelectedPreference={setPreference}
    data={data}
    />

    <Divider color={Color.themeGrayColor} />
    <CustomButton
      isBold
      text={'Continue'}
      fontSize={moderateScale(15, 0.3)}
      textColor={Color.white}
      borderWidth={1.5}
      borderColor={Color.btntextColor}
      borderRadius={moderateScale(15, 0.3)}
      width={windowWidth * 0.85}
      height={windowHeight * 0.06}
      bgColor={Color.themeBrand600}
      textTransform={'capitalize'}
      marginTop={scale(20)}
      elevation={true}
      onPress={() => {
        navigationService.navigate('LifeStyle')
      }}
      // onPress={onContinue}
    />
  </LinearGradient>
  </ScreenBoiler>
  )
}

export default PreferencesForCare

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    // paddingHorizontal: scale(10),
    // alignItems:"center",
    // justifyContent: 'center',
  },
  text1: {
    width: windowWidth * 0.7,
    fontSize: moderateScale(16, 0.2),
    color: Color.white,
    fontWeight: 'semibold',
    textTransform: 'none',
    left:scale(20)
    // textAlign: 'center',
    // marginTop: verticalScale(10),
},
text2: {
    width: windowWidth * 0.7,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    // textAlign: 'center',
    // textTransform: 'none',
    marginTop: verticalScale(2),
    left:scale(20)
  },
})