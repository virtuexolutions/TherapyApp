import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import Color from '../Assets/Utilities/Color';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {Formik} from 'formik';
import {loginSchema} from '../Constant/schema';
import {SetUserRole, setUserToken} from '../Store/slices/auth';
import {setUserData} from '../Store/slices/common';
import {ToastAndroid} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import CustomButton from '../Components/CustomButton';
import {Divider} from 'native-base';

const AuthScreen = props => {
  const role = props?.route?.params?.role;
  console.log('🚀 ~ LoginScreen ~ role:', role);
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  // const role = useSelector(state => state.authReducer.role);
  const [isLoading, setIsLoading] = useState(false);
  // const navigation = useNavigation();
  const login = async values => {
    const url = 'login';
    setIsLoading(true);
    const response = await Post(url, values, apiHeader());
    console.log('🚀 ~ onPressSignUp ~ response:', response?.data);
    setIsLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show('Sign In successfully', ToastAndroid.SHORT)
        : Alert.alert('Sign In successfully');
      dispatch(setUserData(response?.data?.user_info));
      dispatch(setUserToken({token: response?.data?.token}));
      dispatch(SetUserRole(response?.data?.role));
    }
  };

  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkGreen}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          style={styles.bg}
          imageStyle={styles.image}
          resizeMode="cover"
          source={require('../Assets/Images/backgroundGradient.jpg')}>
          <View style={styles.imageContainer}>
            <CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/headerlogo.png')}
              style={styles.image}
            />
          </View>
          <CustomText
            children={'Welcome to Vitality Access'}
            style={styles.text}
          />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={login}>
            {({handleChange, handleSubmit, values, errors, touched}) => {
              return (
                <>
                  <TextInputWithTitle
                    title={'Email Address'}
                    titleColor={Color.gray50}
                    placeholder={'Enter your email'}
                    setText={handleChange('email')}
                    value={values.email}
                    viewHeight={0.06}
                    viewWidth={0.85}
                    inputWidth={0.8}
                    border={2}
                    color={Color.white}
                    borderRadius={15}
                    borderColor={Color.themeLightGreene}
                    marginTop={moderateScale(10, 0.3)}
                    placeholderColor={Color.gray50}
                    titleStlye={{right: 10}}
                    backgroundColor={Color.themeDarkGreen}
                    // titleStlye={{ right: 10, color: Color.white }}
                  />
                  {touched.email && errors.email && (
                    <CustomText
                      textAlign={'left'}
                      style={{
                        fontSize: moderateScale(10, 0.6),
                        color: Color.red,
                        alignSelf: 'flex-start',
                        marginLeft: moderateScale(10, 0.6),
                      }}>
                      {errors.email}
                    </CustomText>
                  )}
                  <TextInputWithTitle
                    title={'Passsword'}
                    titleColor={Color.gray50}
                    iconColor={Color.gray50}
                    secureText={true}
                    placeholder={'Enter your password'}
                    setText={handleChange('password')}
                    value={values.password}
                    // inputColor={Color.white}
                    viewHeight={0.06}
                    viewWidth={0.85}
                    inputWidth={0.8}
                    border={2}
                    color={Color.white}
                    borderRadius={15}
                    borderColor={Color.themeLightGreen}
                    marginTop={moderateScale(5, 0.3)}
                    placeholderColor={Color.gray50}
                    titleStlye={{right: 10}}
                    backgroundColor={Color.themeDarkGreen}
                    // inputColor={Color.white}
                  />
                  {touched.password && errors.password && (
                    <CustomText
                      textAlign={'left'}
                      style={{
                        fontSize: moderateScale(10, 0.6),
                        color: Color.red,
                        alignSelf: 'flex-start',
                        marginLeft: moderateScale(10, 0.6),
                      }}>
                      {errors.password}
                    </CustomText>
                  )}
                  <CustomText
                    onPress={() => {
                      // navigation.navigate('VerifyEmail');
                    }}
                    style={styles.forgotpassword}>
                    Forgot your password?
                  </CustomText>
                  {/* <View style={{ marginTop: moderateScale(10, 0.6) }} /> */}
                  <CustomButton
                    isBold
                    text={
                      isLoading ? (
                        <ActivityIndicator size={'small'} color={Color.white} />
                      ) : (
                        'Login '
                      )
                    }
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
                    onPress={handleSubmit}
                  />
                  <CustomButton
                    isBold
                    text={
                      isLoading ? (
                        <ActivityIndicator size={'small'} color={Color.white} />
                      ) : (
                        'Create Account'
                      )
                    }
                    fontSize={moderateScale(15, 0.3)}
                    textColor={Color.white}
                    borderWidth={1}
                    borderColor={Color.themeBrand800}
                    borderRadius={moderateScale(15, 0.3)}
                    width={windowWidth * 0.85}
                    height={windowHeight * 0.06}
                    bgColor={Color.themeDarkGreen}
                    textTransform={'capitalize'}
                    marginTop={scale(20)}
                    elevation={true}
                    // onPress={() => {
                    //   navigationService.navigate('TabNavigation')
                    // }}
                    onPress={() =>{}}
                  />
                  <OptionText />
                  <CustomButton
                    isBold
                    text={
                      isLoading ? (
                        <ActivityIndicator size={'small'} color={Color.white} />
                      ) : (
                        'Continue with Google'
                      )
                    }
                    iconName={"google"}
                    iconType={AntDesign}
                    fontSize={moderateScale(15, 0.3)}
                    textColor={Color.white}
                    borderWidth={1}
                    borderColor={Color.themeBrand800}
                    borderRadius={moderateScale(15, 0.3)}
                    width={windowWidth * 0.85}
                    height={windowHeight * 0.06}
                    style={{alignItems:"center", gap:scale(5)}}
                    bgColor={Color.themeDarkGreen}
                    textTransform={'capitalize'}
                    marginTop={scale(20)}
                    elevation={true}
                    // onPress={() => {
                    //   navigationService.navigate('TabNavigation')
                    // }}
                    onPress={() =>{}}
                  />
                  <CustomButton
                    isBold
                    text={
                      isLoading ? (
                        <ActivityIndicator size={'small'} color={Color.white} />
                      ) : (
                        'Continue with Apple'
                      )
                    }
                    style={{alignItems:"center", gap:scale(5)}}
                    iconName={"apple"}
                    iconType={Fontisto}
                    fontSize={moderateScale(15, 0.3)}
                    textColor={Color.white}
                    borderWidth={1}
                    borderColor={Color.themeBrand800}
                    borderRadius={moderateScale(15, 0.3)}
                    width={windowWidth * 0.85}
                    height={windowHeight * 0.06}
                    bgColor={Color.themeDarkGreen}
                    textTransform={'capitalize'}
                    marginTop={scale(20)}
                    elevation={true}
                    // onPress={() => {
                    //   navigationService.navigate('TabNavigation')
                    // }}
                    onPress={() =>{}}
                  />
          <View
          style={{height:windowHeight * 0.2}}
          />
                </>
              );
            }}
          </Formik>
        </ImageBackground>
      </ScrollView>
    </ScreenBoiler>
  );
};

const OptionText = () => {
  return (
    <View style={styles.optionTextView}>
      <Divider width={windowWidth * 0.35} color={Color.gray300} />
      <CustomText style={styles.optionText} children={'OR'} />
      <Divider width={windowWidth * 0.35} color={Color.gray300} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  scrollView: {
    width: windowWidth,
    height: windowHeight,
  },
  bg: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    marginTop: windowHeight * 0.15
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: Color.gray50,
    fontSize: moderateScale(32, 0.2),
    textAlign: 'center',
    width: windowWidth * 0.7,
  },
  forgotpassword: {
    fontSize: moderateScale(16, 0.2),
    color: Color.gray50,
    textAlign: 'right',
    width: windowWidth * 0.8,
    marginTop: verticalScale(3),
  },
  optionTextView: {
    marginTop: verticalScale(10),
    width: windowWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    color: Color.gray300,
    fontSize: moderateScale(14, 0.2),
  },
});
