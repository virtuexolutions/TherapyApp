import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import { SignupSchema } from '../Constant/schema';
import { setUserData } from '../Store/slices/common';
import { SetUserRole, setUserToken } from '../Store/slices/auth';
import { Post } from '../Axios/AxiosInterceptorFunction';

const Signup = props => {
  const role = props?.route?.params?.role || 'user';
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onPressSignUp = async values => {
    const body = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      confirm_password: values.confirmPassword,
      role: role.toLowerCase(),
    };

    console.log('Signup Body:', body);
    const url = 'register';
    setIsLoading(true);

    try {
      const response = await Post(url, body, apiHeader());
      console.log('Signup Response:', response?.data);

      if (response?.data) {
        Platform.OS === 'android'
          ? ToastAndroid.show('Sign up successfully', ToastAndroid.SHORT)
          : Alert.alert('Sign up successfully');

        dispatch(setUserData(response.data.user_info));
        dispatch(setUserToken({ token: response.data.token }));
        dispatch(SetUserRole(response.data.role));
      }
    } catch (error) {
      console.log('Signup Error:', error);
      Alert.alert('Error', 'Something went wrong during signup.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      style={styles.main_con}
      source={require('../Assets/Images/loginbg.jpg')}>
      <CustomStatusBar backgroundColor={'transparent'} barStyle={'dark-light'} />

      <View style={styles.image_con}>
        <CustomImage
          resizeMode="contain"
          source={require('../Assets/Images/logo.png')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onPressSignUp}>
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.input_container}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(20, 0.6),
                  color: Color.white,
                }}>
                Create your account
              </CustomText>
              <CustomText style={styles.txt}>
                Please enter your information below to sign up.
              </CustomText>

              {/* FIRST + LAST NAME */}
              <View style={styles.row}>
                <View>
                  <TextInputWithTitle
                    titleText={'First Name'}
                    placeholder={'Enter first name'}
                    setText={handleChange('first_name')}
                    value={values.first_name}
                    viewHeight={0.05}
                    viewWidth={0.42}
                    inputWidth={0.4}
                    border={1}
                    fontSize={moderateScale(9, 0.6)}
                    borderRadius={30}
                    borderColor={Color.white}
                    marginTop={moderateScale(10, 0.3)}
                    placeholderColor={Color.btntextColor}
                    titleStlye={{ right: 10 }}
                    inputColor={Color.white}
                  />
                  {touched.first_name && errors.first_name && (
                    <CustomText style={styles.errorText}>
                      {errors.first_name}
                    </CustomText>
                  )}
                </View>

                <View>
                  <TextInputWithTitle
                    titleText={'Last Name'}
                    placeholder={'Enter last name'}
                    setText={handleChange('last_name')}
                    value={values.last_name}
                    viewHeight={0.05}
                    viewWidth={0.42}
                    inputWidth={0.4}
                    border={1}
                    fontSize={moderateScale(9, 0.6)}
                    borderRadius={30}
                    borderColor={Color.white}
                    marginTop={moderateScale(10, 0.3)}
                    placeholderColor={Color.btntextColor}
                    titleStlye={{ right: 10 }}
                    inputColor={Color.white}
                  />
                  {touched.last_name && errors.last_name && (
                    <CustomText style={styles.errorText}>
                      {errors.last_name}
                    </CustomText>
                  )}
                </View>
              </View>

              {/* EMAIL */}
              <TextInputWithTitle
                placeholder={'Enter your email'}
                setText={handleChange('email')}
                value={values.email}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderRadius={30}
                borderColor={Color.white}
                marginTop={moderateScale(10, 0.3)}
                placeholderColor={Color.btntextColor}
                inputColor={Color.white}
              />
              {touched.email && errors.email && (
                <CustomText style={styles.errorText}>{errors.email}</CustomText>
              )}

              {/* PASSWORD */}
              <TextInputWithTitle
                secureText={true}
                placeholder={'Enter password'}
                setText={handleChange('password')}
                value={values.password}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderRadius={30}
                borderColor={Color.white}
                marginTop={moderateScale(10, 0.3)}
                placeholderColor={Color.btntextColor}
                inputColor={Color.white}
              />
              {touched.password && errors.password && (
                <CustomText style={styles.errorText}>{errors.password}</CustomText>
              )}

              {/* CONFIRM PASSWORD */}
              <TextInputWithTitle
                secureText={true}
                placeholder={'Confirm password'}
                setText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderRadius={30}
                borderColor={Color.white}
                marginTop={moderateScale(10, 0.3)}
                placeholderColor={Color.btntextColor}
                inputColor={Color.white}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <CustomText style={styles.errorText}>
                  {errors.confirmPassword}
                </CustomText>
              )}
            </View>

            <CustomButton
              isBold
              text={
                isLoading ? (
                  <ActivityIndicator size={'small'} color={Color.white} />
                ) : (
                  'Sign Up'
                )
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
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>

      <View style={styles.button_container}>
        <View style={styles.line}></View>
        <CustomText style={styles.soc_text}>you can connect with</CustomText>
        <View style={styles.line}></View>
      </View>

      <View style={styles.btn_con}>
        <TouchableOpacity style={styles.btn_icon}>
          <CustomImage
            style={{ height: '100%', width: '100%' }}
            source={require('../Assets/Images/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_icon}>
          <CustomImage
            style={{ height: '100%', width: '100%' }}
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
    paddingTop: windowHeight * 0.09,
    alignItems: 'center',
  },
  input_container: {
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 20,
    width: windowWidth * 0.92,
    paddingVertical: moderateScale(10, 0.6),
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: 'rgba(127,138,115,255)',
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
    fontSize: moderateScale(10, 0.6),
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
  },
  errorText: {
    fontSize: moderateScale(10, 0.6),
    color: Color.red,
    alignSelf: 'flex-start',
    marginLeft: moderateScale(10, 0.6),
  },
});

export default Signup;
