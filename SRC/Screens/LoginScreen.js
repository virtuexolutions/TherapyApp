import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import ImagePickerModal from '../Components/ImagePickerModal';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { loginSchema } from '../Constant/schema';
import { windowHeight, windowWidth } from '../Utillity/utils';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);

  const [isLoading, setIsLoading] = useState(false);
  const [imagePicker, setImagePicker] = useState(false);
  const [image, setImage] = useState({});
  const navigation = useNavigation();
  const [device_token, setDeviceToken] = useState(null);

 
  const login = async values => {
   
  };



  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <ScrollView
        scrollEnabled={false}
        style={{
          height: windowHeight,
          width: windowWidth,
          backgroundColor: 'white',
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: moderateScale(90, 0.6),
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: windowHeight * 0.1,
            width: windowHeight * 0.2,
            marginTop: windowHeight * 0.04,
          }}>
          <CustomImage
            resizeMode="contain"
            // source={require('../Assets/Images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <CustomText isBold style={styles.text}>
          Sign in
        </CustomText>
        <View style={styles.input_container}>
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
                    title={'email Id *'}
                    titleText={'Username'}
                    placeholder={'Email'}
                    setText={handleChange('email')}
                    value={values.email}
                    viewHeight={0.06}
                    viewWidth={0.85}
                    inputWidth={0.8}
                    border={1}
                    fontSize={moderateScale(10, 0.6)}
                    borderRadius={30}
                    backgroundColor={'transparent'}
                    borderColor={Color.lightGrey}
                    marginTop={moderateScale(10, 0.3)}
                    placeholderColor={Color.darkGray}
                    titleStlye={{right: 10}}
                  />
                  {touched.email && errors.email && (
                    <CustomText
                      textAlign={'left'}
                      style={{
                        fontSize: moderateScale(10, 0.6),
                        color: Color.red,
                        alignSelf: 'flex-start',
                      }}>
                      {errors.email}
                    </CustomText>
                  )}
                  <TextInputWithTitle
                    secureText={true}
                    title={'password *'}
                    placeholder={'**********'}
                    setText={handleChange('password')}
                    value={values.password}
                    viewHeight={0.06}
                    viewWidth={0.85}
                    inputWidth={0.8}
                    border={1}
                    borderRadius={30}
                    backgroundColor={'transparent'}
                    borderColor={Color.lightGrey}
                    marginTop={moderateScale(10, 0.3)}
                    // color={Color.white}
                    placeholderColor={Color.darkGray}
                    titleStlye={{right: 10}}
                  />
                  {touched.password && errors.password && (
                    <CustomText
                      textAlign={'left'}
                      style={{
                        fontSize: moderateScale(10, 0.6),
                        color: Color.red,
                        alignSelf: 'flex-start',
                      }}>
                      {errors.password}
                    </CustomText>
                  )}
                  <CustomText
                    onPress={() => {
                      navigation.navigate('VerifyEmail');
                    }}
                    style={styles.forgotpassword}>
                    Forgot password ?
                  </CustomText>
                  <View style={{marginTop: moderateScale(10, 0.6)}} />
                  <CustomButton
                    text={
                      isLoading ? (
                        <ActivityIndicator size={'small'} color={Color.white} />
                      ) : (
                        'sign in '
                      )
                    }
                    fontSize={moderateScale(15, 0.3)}
                    textColor={Color.white}
                    borderWidth={1.5}
                    borderColor={Color.white}
                    borderRadius={moderateScale(30, 0.3)}
                    width={windowWidth * 0.8}
                    height={windowHeight * 0.075}
                    bgColor={Color.btn_Color}
                    textTransform={'capitalize'}
                    elevation={false}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </View>
        <View style={styles.button_container}>
          <CustomText style={styles.soc_text}>
            or connecting using social account
          </CustomText>
         
         
        </View>
        <CustomText style={styles.do_text}>
          Don’t have an account?
          <CustomText
            onPress={() => {
              navigation.navigate('Signup');
            }}
            isBold
            style={styles.Sign_text}>
            Sign Up
          </CustomText>
        </CustomText>

        <ImagePickerModal
          show={imagePicker}
          setShow={setImagePicker}
          setFileObject={setImage}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(24, 0.6),
    color: Color.themeBlack,
    paddingVertical: moderateScale(10, 0.6),
    paddingTop: windowHeight * 0.02,
  },
  input_container: {
    borderWidth: 1,
    borderColor: Color.mediumGray,
    borderRadius: 20,
    height: windowHeight * 0.4,
    width: windowWidth * 0.9,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
  feild_container: {
    borderWidth: 0.5,
    borderColor: '#28272369',
    borderRadius: 20,
    height: windowHeight * 0.38,
    width: windowWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 22,
    paddingHorizontal: moderateScale(20, 0.6),
  },
  forgotpassword: {
    fontSize: moderateScale(10, 0.6),
    color: Color.black,
    textAlign: 'right',
    width: '95%',
    paddingVertical: moderateScale(4, 0.6),
    fontWeight: '700',
  },
  button_container: {
    paddingTop: windowHeight * 0.08,
  },
  soc_text: {
    fontSize: moderateScale(8, 6),
    paddingVertical: moderateScale(8, 0.6),
    textAlign: 'center',
    letterSpacing: 0.7,
    fontWeight: '700',
  },
  do_text: {
    paddingVertical: moderateScale(35, 0.6),
    textTransform: 'none',
    letterSpacing: 0.5,
    fontSize: moderateScale(12, 0.6),
  },
  Sign_text: {
    color: Color.themeBlack,
    paddingRight: moderateScale(5, 0.6),
    fontSize: moderateScale(12, 0.6),
  },
});

export default LoginScreen;
