import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import FormWrapper from '../Components/FormWrapper';
import ScreenBoiler from '../Components/ScreenBoiler';
import OnBoardingHeader from '../Components/OnBoardingHeader';
const LifeStyle = ({onContinue}) => {
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
    <OnBoardingHeader  
    subtitle={`Next: Set up your AI Coach`}
    />
    <LinearGradient
      style={styles.mainScreen}
      colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
      <ScrollView
        style={styles.mainScreen}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomText children={'Lifestyle'} style={styles.text1} isBold />
        <CustomText
          children={
            "We'll ask a few questions about your routine for finding the best ways to support your goals"
          }
          style={styles.text2}
        />
        <View style={styles.form}>
          <DropDownSingleSelect
            title={'How many hours of sleep do you typically get?'}
            titleColor={Color.gray50}
            array={['Male', 'Female']}
            item={''}
            setItem={() => {}}
            width={windowWidth * 0.9}
            // placeHolderColor={Color.darkGray}
            // placeholder={'Ápproval for Admittance'}
            placeholder={'Select your hours of sleep'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.9,
              marginTop: 10,
            }}
            leftIcon={true}
            iconIsImage={true}
            imageSrc={require('../Assets/Images/calendar.png')}
            placeHolderColor={Color.gray50}
            btnStyle={styles.dropDownBtnStyle}
          />
          <DropDownSingleSelect
            title={'How would you describe your stress levels?'}
            titleColor={Color.gray50}
            array={['Male', 'Female']}
            item={''}
            setItem={() => {}}
            width={windowWidth * 0.9}
            // placeHolderColor={Color.darkGray}
            // placeholder={'Ápproval for Admittance'}
            placeholder={'Select your level'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.9,
              marginTop: 10,
            }}
            leftIcon={true}
            iconIsImage={true}
            imageSrc={require('../Assets/Images/user7.png')}
            placeHolderColor={Color.gray50}
            btnStyle={styles.dropDownBtnStyle}
          />
          <DropDownSingleSelect
            title={'How many days a week are you physically active?'}
            titleColor={Color.gray50}
            array={['Male', 'Female']}
            item={''}
            setItem={() => {}}
            width={windowWidth * 0.9}
            // placeHolderColor={Color.darkGray}
            // placeholder={'Ápproval for Admittance'}
            placeholder={'Select the days'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.9,
              marginTop: 10,
            }}
            leftIcon={true}
            iconIsImage={true}
            imageSrc={require('../Assets/Images/user7.png')}
            placeHolderColor={Color.gray50}
            btnStyle={styles.dropDownBtnStyle}
          />
          <DropDownSingleSelect
            title={'How would you rate your typical diet?'}
            titleColor={Color.gray50}
            array={['Male', 'Female']}
            item={''}
            setItem={() => {}}
            width={windowWidth * 0.9}
            // placeHolderColor={Color.darkGray}
            // placeholder={'Ápproval for Admittance'}
            placeholder={'Select your rate of diet'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.9,
              marginTop: 10,
            }}
            leftIcon={true}
            iconIsImage={true}
            imageSrc={require('../Assets/Images/user7.png')}
            placeHolderColor={Color.gray50}
            btnStyle={styles.dropDownBtnStyle}
          />
        
        </View>
        {/* </FormWrapper> */}
        {/* </FormWrapper> */}
        <Divider color={Color.themeGrayColor} />
        <CustomButton
          isBold
          text={'Next: Set up your AI Coach'}
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
      </ScrollView>
    </LinearGradient>
    </ScreenBoiler>
  );
};

export default LifeStyle;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    // paddingHorizontal: scale(10),
  },
  text1: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(16, 0.2),
    color: Color.white,
    fontWeight: 'bold',
    textTransform: 'none',
    // left:scale(10)
    // textAlign: 'center',
    // marginTop: verticalScale(10),
  },
  text2: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    textAlign: 'left',
    textTransform: 'none',
    marginTop: verticalScale(2),
  },
  form: {
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: verticalScale(100),
    height: windowHeight * 0.7
    // alignSelf:"center",
    // width: windowWidth
  },
  dropDownBtnStyle: {
    // alignSelf:"center",
    borderColor: Color.themeLightBlueGray,
    borderRadius: moderateScale(15, 0.2),
    backgroundColor: Color.themeDarkBlueGray,
    height: windowHeight * 0.06,
  },
});
