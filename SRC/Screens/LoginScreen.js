import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import CustomButton from '../Components/CustomButton';
import {Divider} from 'native-base';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {width} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const LoginScreen = props => {
  const role = props?.route?.params?.role;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);
  // const role = useSelector(state => state.authReducer.role);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  // const navigation = useNavigation();
  const login = async values => {
    const url = 'login';
    setLoading(true);
    const response = await Post(url, values, apiHeader());
    setLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show('Sign In successfully', ToastAndroid.SHORT)
        : Alert.alert('Sign In successfully');
      dispatch(setUserData(response?.data?.user_info));
      dispatch(setUserToken({token: response?.data?.token}));
      dispatch(SetUserRole(response?.data?.role));
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '926398445960-6f98tf5ga88hlm4qna4m847eguv4m8vk.apps.googleusercontent.com',
      offlineAccess: true,
      // forceCodeForRefreshToken: true,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    // return console.log("Google Sign-In Clicked")
    // if (googleLoading) return; // prevent double tap

    try {
      // setGoogleLoading(true);

      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // (optional) stuck state me helpful
      // await GoogleSignin.signOut();
      // await GoogleSignin.revokeAccess();

      const userInfo = await GoogleSignin.signIn();
      console.log(
        'userInfo ===> ================== ',
        JSON.stringify(userInfo, null, 2),
      );

      // TODO: yahan apni API call
      await loginWithGoogle(userInfo);
    } catch (e) {
      // Friendly error mapping
      if (e.code === statusCodes.IN_PROGRESS) {
        // ye wahi error tha
        Platform.OS === 'android' &&
          ToastAndroid.show('Sign-in already in progress', ToastAndroid.SHORT);
      } else if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        Platform.OS === 'android' &&
          ToastAndroid.show('Sign-in cancelled', ToastAndroid.SHORT);
      } else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Platform.OS === 'android' &&
          ToastAndroid.show('Update Google Play services', ToastAndroid.SHORT);
      } else {
        Platform.OS === 'android' &&
          ToastAndroid.show(String(e.message || e), ToastAndroid.SHORT);
      }
      console.log('Google Sign-In Error ==> ', e);
    } finally {
      setGoogleLoading(false);
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
                    fontSize={moderateScale(14, 0.6)}
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
                        width: windowWidth * 0.8,
                        
                        // alignSelf: 'flex-start',
                        
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
                    fontSize={moderateScale(14, 0.6)}
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

                        width: windowWidth * 0.8,
                        // marginLeft : moderateScale(20,.6),
                        // alignSelf: 'flex-start',
                        // marginLeft: moderateScale(10, 0.6),
                      }}>
                      {errors.password}
                    </CustomText>
                  )}
                  <CustomText
                    onPress={() => {
                      navigation.navigate('VerifyEmail');
                    }}
                    style={styles.forgotpassword}>
                    Forgot your password?
                  </CustomText>
                  {/* <View style={{ marginTop: moderateScale(10, 0.6) }} /> */}
                  <CustomButton
                    isBold
                    text={
                      loading ? (
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
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}
                    // onPress={() =>{}}
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
                    iconName={'google'}
                    iconType={AntDesign}
                    fontSize={moderateScale(15, 0.3)}
                    textColor={Color.white}
                    borderWidth={1}
                    borderColor={Color.themeBrand800}
                    borderRadius={moderateScale(15, 0.3)}
                    width={windowWidth * 0.85}
                    height={windowHeight * 0.06}
                    style={{alignItems: 'center', gap: scale(5)}}
                    bgColor={Color.themeDarkGreen}
                    textTransform={'capitalize'}
                    marginTop={scale(20)}
                    elevation={true}
                    // onPress={() => {
                    //   navigationService.navigate('TabNavigation')
                    // }}
                    onPress={() => {
                      // handleGoogleSignIn();
                    }}
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
                    style={{alignItems: 'center', gap: scale(5)}}
                    iconName={'apple'}
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
                    onPress={() => {}}
                  />
                  <View style={{height: windowHeight * 0.2}} />
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
    marginTop: windowHeight * 0.15,
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

export default LoginScreen;
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import React, { useState } from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   ImageBackground,
//   Platform,
//   StyleSheet,
//   ToastAndroid,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';
// import { useDispatch, useSelector } from 'react-redux';
// import Color from '../Assets/Utilities/Color';
// import CustomButton from '../Components/CustomButton';
// import CustomImage from '../Components/CustomImage';
// import CustomStatusBar from '../Components/CustomStatusBar';
// import CustomText from '../Components/CustomText';
// import TextInputWithTitle from '../Components/TextInputWithTitle';
// import { loginSchema } from '../Constant/schema';
// import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
// import { SetUserRole, setUserToken } from '../Store/slices/auth';
// import navigationService from '../navigationService';
// import { Post } from '../Axios/AxiosInterceptorFunction';
// import { setUserData } from '../Store/slices/common';

// const LoginScreen = props => {
//   const role = props?.route?.params?.role;
//   const dispatch = useDispatch();
//   const token = useSelector(state => state.authReducer.token);
//   // const role = useSelector(state => state.authReducer.role);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigation = useNavigation();
//   const [device_token, setDeviceToken] = useState(null);

//   const login = async values => {
//     const url = 'login';
//     setIsLoading(true);
//     const response = await Post(url, values, apiHeader());
//     setIsLoading(false);
//     if (response != undefined) {
//       Platform.OS == 'android'
//         ? ToastAndroid.show('Sign In successfully', ToastAndroid.SHORT)
//         : Alert.alert('Sign In successfully');
//       dispatch(setUserData(response?.data?.user_info));
//       dispatch(setUserToken({ token: response?.data?.token }));
//       dispatch(SetUserRole(response?.data?.role))
//     }
//   };

//   return (
//     <ImageBackground
//       style={styles.main_con}
//       source={require('../Assets/Images/loginbg.jpg')}>
//       <CustomStatusBar backgroundColor={'transparent'} barStyle={'dark-light'} />
//       <View style={styles.image_con}>
//         <CustomImage
//           resizeMode="contain"
//           source={require('../Assets/Images/logo.png')}
//           style={{
//             width: '100%',
//             height: '100%',
//           }}
//         />
//       </View>
//       <View style={styles.input_container}>
//         <CustomText
//           isBold
//           style={{
//             fontSize: moderateScale(22, 0.6),
//             color: Color.white,
//           }}>
//           login{' '}
//           {role?.toLowerCase() == 'provider'
//             ? 'providers'
//             : 'into your account'}
//         </CustomText>
//         <CustomText style={styles.txt}>
//           Lorem Ipsum is simply dummy text of the printing typesetting
//           industry.printing and typesetting
//         </CustomText>
//         <Formik
//           initialValues={{
//             email: '',
//             password: '',
//           }}
//           validationSchema={loginSchema}
//           onSubmit={login}
//         >
//           {({ handleChange, handleSubmit, values, errors, touched }) => {
//             return (
//               <>
//                 <TextInputWithTitle
//                   titleText={'Username'}
//                   placeholder={'Email'}
//                   setText={handleChange('email')}
//                   value={values.email}
//                   viewHeight={0.06}
//                   viewWidth={0.85}
//                   inputWidth={0.8}
//                   border={1}
//                   fontSize={moderateScale(10, 0.6)}
//                   borderRadius={30}
//                   inputColor={'white'}
//                   borderColor={Color.white}
//                   marginTop={moderateScale(10, 0.3)}
//                   backgroundColor={Color.themtxtColor}
//                   placeholderColor={Color.btntextColor}
//                   titleStlye={{ right: 10, color: Color.white }}
//                 />
//                 {touched.email && errors.email && (
//                   <CustomText
//                     textAlign={'left'}
//                     style={{
//                       fontSize: moderateScale(10, 0.6),
//                       color: Color.red,
//                       alignSelf: 'flex-start',
//                       marginLeft: moderateScale(10, 0.6),
//                     }}>
//                     {errors.email}
//                   </CustomText>
//                 )}
//                 <TextInputWithTitle
//                   iconColor={Color.btntextColor}
//                   secureText={true}
//                   placeholder={'**********'}
//                   setText={handleChange('password')}
//                   value={values.password}
//                   // inputColor={Color.white}
//                   viewHeight={0.06}
//                   viewWidth={0.85}
//                   inputWidth={0.8}
//                   border={1}
//                   color={Color.white}
//                   borderRadius={30}
//                   borderColor={Color.white}
//                   marginTop={moderateScale(10, 0.3)}
//                   placeholderColor={Color.btntextColor}
//                   titleStlye={{ right: 10 }}
//                   backgroundColor={Color.themtxtColor}
//                 // inputColor={Color.white}
//                 />
//                 {touched.password && errors.password && (
//                   <CustomText
//                     textAlign={'left'}
//                     style={{
//                       fontSize: moderateScale(10, 0.6),
//                       color: Color.red,
//                       alignSelf: 'flex-start',
//                       marginLeft: moderateScale(10, 0.6),
//                     }}>
//                     {errors.password}
//                   </CustomText>
//                 )}
//                 <CustomText
//                   onPress={() => {
//                     navigation.navigate('VerifyEmail');
//                   }}
//                   style={styles.forgotpassword}>
//                   Forgot password
//                 </CustomText>
//                 <View style={{ marginTop: moderateScale(10, 0.6) }} />
//                 <CustomButton
//                   isBold
//                   text={
//                     isLoading ? (
//                       <ActivityIndicator size={'small'} color={Color.white} />
//                     ) : (
//                       'sign in '
//                     )
//                   }
//                   fontSize={moderateScale(15, 0.3)}
//                   textColor={Color.btntextColor}
//                   borderWidth={1.5}
//                   borderColor={Color.btntextColor}
//                   borderRadius={moderateScale(30, 0.3)}
//                   width={windowWidth * 0.9}
//                   height={windowHeight * 0.07}
//                   bgColor={Color.btn_Color}
//                   textTransform={'capitalize'}
//                   marginTop={windowHeight * 0.07}
//                   elevation={true}
//                   // onPress={() => {
//                   //   navigationService.navigate('TabNavigation')
//                   // }}
//                   onPress={handleSubmit}
//                 />
//               </>
//             );
//           }}
//         </Formik>
//       </View>
//       <View style={styles.button_container}>
//         <View style={styles.line}></View>
//         <CustomText style={styles.soc_text}>you can connect with</CustomText>
//         <View style={styles.line}></View>
//       </View>
//       <View style={styles.btn_con}>
//         <TouchableOpacity style={styles.btn_icon}>
//           <CustomImage
//             style={{
//               height: '100%',
//               width: '100%',
//             }}
//             source={require('../Assets/Images/google.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btn_icon}>
//           <CustomImage
//             style={{
//               height: '100%',
//               width: '100%',
//             }}
//             source={require('../Assets/Images/mac.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <CustomText style={styles.do_text}>
//         Don’t have an account?
//         <CustomText
//           onPress={() => {
//             navigation.navigate('Signup', { role: role });
//           }}
//           isBold
//           style={styles.Sign_text}>
//           Sign Up
//         </CustomText>
//       </CustomText>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   main_con: {
//     height: windowHeight,
//     width: windowWidth,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: moderateScale(24, 0.6),
//     color: Color.themeBlack,
//     paddingVertical: moderateScale(10, 0.6),
//     paddingTop: windowHeight * 0.02,
//   },
//   input_container: {
//     borderWidth: 1,
//     borderColor: Color.white,
//     borderRadius: 20,
//     height: windowHeight * 0.3,
//     width: windowWidth * 0.9,
//     alignItems: 'center',
//     paddingTop: moderateScale(15, 0.6),
//     paddingHorizontal: moderateScale(10, 0.6),
//     // backgroundColor: 'rgba(127,138,115,255)',
//     backgroundColor: Color.themtxtColor,
//   },

//   forgotpassword: {
//     fontSize: moderateScale(10, 0.6),
//     color: Color.white,
//     textAlign: 'right',
//     width: '95%',
//     fontWeight: '600',
//     letterSpacing: 0.5,
//     marginTop: moderateScale(12, 0.6),
//     textDecorationLine: 'underline'
//   },
//   button_container: {
//     paddingTop: windowHeight * 0.17,
//     paddingBottom: moderateScale(5, 0.6),
//     flexDirection: 'row',
//   },
//   soc_text: {
//     fontSize: moderateScale(10, 6),
//     paddingHorizontal: moderateScale(8, 0.6),
//     textAlign: 'center',
//     letterSpacing: 0.7,
//     color: Color.white,
//   },
//   do_text: {
//     paddingVertical: moderateScale(35, 0.6),
//     textTransform: 'none',
//     letterSpacing: 0.5,
//     fontSize: moderateScale(12, 0.6),
//     color: Color.white
//   },
//   Sign_text: {
//     color: Color.white,
//     paddingRight: moderateScale(5, 0.6),
//     fontSize: moderateScale(12, 0.6),
//   },
//   line: {
//     width: windowWidth * 0.2,
//     height: windowHeight * 0.001,
//     borderWidth: 0.3,
//     marginTop: moderateScale(8, 0.6),
//     borderColor: Color.white,
//   },
//   image_con: {
//     height: windowHeight * 0.155,
//     width: windowHeight * 0.23,
//     // backgroundColor :'red' ,
//     // marginTop: moderateScale(-8, 0.3),
//     marginVertical: windowHeight * 0.02,
//   },
//   txt: {
//     fontSize: moderateScale(9, 0.6),
//     textAlign: 'center',
//     paddingVertical: moderateScale(5, 0.6),
//     color: Color.white,
//   },
//   btn_icon: {
//     width: windowWidth * 0.08,
//     height: windowWidth * 0.08,
//     borderRadius: (windowWidth * 0.08) / 2,
//     marginHorizontal: moderateScale(3, 0.6),
//   },
//   btn_con: {
//     flexDirection: 'row',
//     // paddingVertical : moderateScale(5,.6)
//   },
// });

// export default LoginScreen;
