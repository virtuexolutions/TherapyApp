import {Platform, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import ScreenBoiler from '../Components/ScreenBoiler';
import OnBoardingHeader from '../Components/OnBoardingHeader';
import navigationService from '../navigationService';

const WellnessGoalsScreen = (
  {
    // onboardingData,
    // setOnBoardingData,
    // onContinue,
  },
) => {
  const wellnessGoals = [
    'Manage a health condition',
    'Track dietary habits',
    'Monitor physical activity',
    'Schedule regular check-ups',
    'Manage medication intake',
    'Seek professional advice',
    'Establish a support network',
  ];
  const [wellnessGoalsData, setWellnessGoalsData] = useState([]);
  console.log(
    '🚀 ~ WellnessGoalsScreen ~ wellnessGoalsData:',
    wellnessGoalsData,
  );
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <OnBoardingHeader
        // subtitle={`Next: ${pageSubtiotle}`}
        subtitle={`Next: A Few Health Bsics`}
        progress={1}
        total={3}
      />
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
        <WellNessGoals
          data={wellnessGoals}
          selectedGoals={wellnessGoalsData}
          setSelectedGoals={setWellnessGoalsData}
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
            // wellnessGoalsData?.length == 0
            //   ? Platform.OS == 'android'
            //     ? ToastAndroid.show(
            //         'Please select at least one goal to continue.',
            //         ToastAndroid.SHORT,
            //       )
            //     : alert('Please select at least one goal to continue.')
            //   :
            navigationService.navigate('HealthBasicsScreen');
          }}
          // onPress={onContinue}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default WellnessGoalsScreen;

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
    left: scale(20),
    // textAlign: 'center',
    // marginTop: verticalScale(10),
  },
  text2: {
    width: windowWidth * 0.7,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    textAlign: 'center',
    // textTransform: 'none',
    marginTop: verticalScale(2),
    left: scale(20),
  },
});
