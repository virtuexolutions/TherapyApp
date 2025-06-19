import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import {Post} from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import ImagePickerModal from '../Components/ImagePickerModal';
import ScreenBoiler from '../Components/ScreenBoiler';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {SignupSchema} from '../Constant/schema';
import {setUserData} from '../Store/slices/common';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';

const Signup = () => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.main_con}
      source={require('../Assets/Images/loginbg.png')}>
      <CustomStatusBar backgroundColor={Color.white} barStyle={'dark-light'} />

      <View style={styles.image_con}>
        <CustomImage
          resizeMode="contain"
          source={require('../Assets/Images/logo.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View style={styles.input_container}>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            color: Color.white,
          }}>
          login into your account
        </CustomText>
        <CustomText style={styles.txt}>
          Lorem Ipsum is simply dummy text of the printing typesetting
          industry.printing and typesetting
        </CustomText>
        <View style={styles.row}>
          <TextInputWithTitle
            titleText={'Username'}
            placeholder={'Enter Name'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.43}
            inputWidth={0.4}
            border={1}
            fontSize={moderateScale(9, 0.6)}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
          <TextInputWithTitle
            titleText={'Username'}
            placeholder={'Enter Name'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.42}
            inputWidth={0.4}
            border={1}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
        </View>
        <TextInputWithTitle
          secureText={true}
          placeholder={'Password'}
          // setText={handleChange('password')}
          // value={values.password}
          viewHeight={0.06}
          viewWidth={0.85}
          inputWidth={0.8}
          border={1}
          borderRadius={30}
          backgroundColor={'transparent'}
          borderColor={Color.themtxtColor}
          marginTop={moderateScale(10, 0.3)}
          placeholderColor={Color.darkGray}
          titleStlye={{right: 10}}
        />
        <View style={styles.row}>
          <TextInputWithTitle
            // fontSize={moderateScale(10,.6)}
            placeholder={'Select Health Interests'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.43}
            inputWidth={0.8}
            border={1}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={30}
            backgroundColor={'Choose Membership Plan'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
          <TextInputWithTitle
            placeholder={'Monthly'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.42}
            inputWidth={0.4}
            border={1}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
        </View>
        <View style={styles.row}>
          <TextInputWithTitle
            placeholder={'Annual'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.43}
            inputWidth={0.4}
            border={1}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
          <TextInputWithTitle
            titleText={'Username'}
            placeholder={'Enter Name'}
            // setText={handleChange('email')}
            // value={values.email}
            viewHeight={0.05}
            viewWidth={0.42}
            inputWidth={0.4}
            border={1}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.themtxtColor}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
          />
        </View>
      </View>
      <CustomButton
        isBold
        text={
          // isLoading ? (
          //   <ActivityIndicator size={'small'} color={Color.white} />
          // ) : (
          'sign up '
          // )
        }
        fontSize={moderateScale(15, 0.3)}
        textColor={Color.btntextColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.9}
        height={windowHeight * 0.065}
        bgColor={Color.btn_Color}
        textTransform={'capitalize'}
        marginTop={windowHeight * 0.02}
        elevation={false}
        // onPress={handleSubmit}
      />
      <View style={styles.button_container}>
        <View style={styles.line}></View>
        <CustomText style={styles.soc_text}>you can connect with</CustomText>
        <View style={styles.line}></View>
      </View>
      <View style={styles.btn_con}>
        <TouchableOpacity style={styles.btn_icon}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../Assets/Images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_icon}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../Assets/Images/mac.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
    paddingTop: windowHeight * 0.15,
    alignItems: 'center',
  },

  input_container: {
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 20,
    height: windowHeight * 0.4,
    width: windowWidth * 0.92,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: 'rgba(127,138,115,255)',
  },
  image_con: {
    height: windowHeight * 0.15,
    width: windowHeight * 0.21,
    marginTop: moderateScale(-8, 0.3),
    marginVertical: windowHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: moderateScale(9, 0.6),
    textAlign: 'center',
    paddingVertical: moderateScale(5, 0.6),
    color: Color.white,
  },
  button_container: {
    paddingTop: moderateScale(15, 0.6),
    paddingBottom: moderateScale(5, 0.6),
    flexDirection: 'row',
  },
  soc_text: {
    fontSize: moderateScale(6, 6),
    paddingHorizontal: moderateScale(8, 0.6),
    textAlign: 'center',
    letterSpacing: 0.7,
    color: Color.white,
  },
  line: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.001,
    borderWidth: 0.3,
    marginTop: moderateScale(8, 0.6),
    borderColor: Color.white,
  },
  image_con: {
    height: windowHeight * 0.15,
    width: windowHeight * 0.21,
    marginTop: moderateScale(-8, 0.3),
    marginVertical: windowHeight * 0.02,
  },

  btn_icon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.08) / 2,
    backgroundColor: 'red',
    marginHorizontal: moderateScale(3, 0.6),
  },
  btn_con: {
    flexDirection: 'row',
    // paddingVertical : moderateScale(5,.6)
  },
});

export default Signup;
