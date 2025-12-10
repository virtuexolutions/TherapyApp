import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import ScreenBoiler from '../Components/ScreenBoiler';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Avatar, Divider} from 'native-base';
import StepComponent from '../Components/StepComponent';
import CustomSteps from '../Components/CustomSteps';
import CustomButton from '../Components/CustomButton';

const GetStarted = () => {
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <View style={styles.imageContainer}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/headerlogo.png')}
            style={styles.image}
          />
        </View>
        <CustomText
          children={'Glad to have you with us!'}
          style={styles.text1}
        />
        <CustomText
          children={
            "To create your 100% personalized health experience, we'll guide you through 3 quick steps."
          }
          style={styles.text2}
        />

        <CustomSteps />
        <Divider color={Color.themeGrayColor} />
        <CustomButton
          isBold
          text={'Start'}
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
          onPress={() => {}}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    // justifyContent:"center"
  },
  imageContainer: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    marginTop: windowHeight * 0.05,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text1: {
    width: windowWidth * 0.7,
    fontSize: moderateScale(22, 0.2),
    color: Color.white,
    textTransform: 'none',
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  text2: {
    width: windowWidth * 0.7,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    textAlign: 'center',
    textTransform: 'none',
    marginTop: verticalScale(2),
  },
});
