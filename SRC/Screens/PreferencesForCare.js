import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import Preferences from '../Components/Preferences';
const PreferencesForCare = () => {
    const data = [
        "Physical therapy exercises",
        "Mindfulness exercises", 
        "Meditation",
        "Nutritional guidance",
        "Talk therapy",
        "Alternative medicine"
    ];
  return (
    <LinearGradient
    style={styles.mainScreen}
    colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
    <CustomText
      children={'What are your wellness goals?'}
      style={styles.text1}
      //  isBold
    />
    <CustomText
      children={'Feel free of selecting more than one goal'}
      style={styles.text2}
    />
    <Preferences
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
      // onPress={() => {
      //   navigationService.navigate('TabNavigation')
      // }}
      onPress={onContinue}
    />
  </LinearGradient>
  )
}

export default PreferencesForCare

const styles = StyleSheet.create({})