import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { loginSchema } from '../Constant/schema';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { setUserToken } from '../Store/slices/auth';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const role = useSelector(state => state.authReducer.role);
  console.log("🚀 ~ role:", role,token)
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [device_token, setDeviceToken] = useState(null);

  const login = async values => {
    dispatch(setUserToken({token:"token123"}))
  };

  return (
    <ImageBackground
      style={styles.main_con}
      source={require('../Assets/Images/loginbg.png')}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-light'}
      />

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
          login {role?.toLowerCase() == "provider" ? "providers" : "into your account"}
        </CustomText>
        <CustomText style={styles.txt}>
          Lorem Ipsum is simply dummy text of the printing typesetting
          industry.printing and typesetting
        </CustomText>
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
                  inputColor={"white"}
                  backgroundColor={'transparent'}
                  borderColor={Color.themtxtColor}
                  marginTop={moderateScale(10, 0.3)}
                  placeholderColor={Color.darkGray}
                  titleStlye={{right: 10, color:Color.white}}
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
                  placeholder={'**********'}
                  setText={handleChange('password')}
                  value={values.password}
                  inputColor={'white'}
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
                  Forgot password
                </CustomText>
                <View style={{marginTop: moderateScale(10, 0.6)}} />
                <CustomButton
                  isBold
                  text={
                    isLoading ? (
                      <ActivityIndicator size={'small'} color={Color.white} />
                    ) : (
                      'sign in '
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
                  marginTop={windowHeight * 0.04}
                  elevation={false}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
      </View>
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

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
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
    borderColor: Color.white,
    borderRadius: 20,
    height: windowHeight * 0.3,
    width: windowWidth * 0.9,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: 'rgba(127,138,115,255)',
  },

  forgotpassword: {
    fontSize: moderateScale(10, 0.6),
    color: Color.white,
    textAlign: 'right',
    width: '95%',
    paddingVertical: moderateScale(4, 0.6),
    fontWeight: '600',
  },
  button_container: {
    paddingTop: windowHeight * 0.11,
    paddingBottom  : moderateScale(5,.6),
    flexDirection: 'row',
  },
  soc_text: {
    fontSize: moderateScale(6, 6),
    paddingHorizontal: moderateScale(8, 0.6),
    textAlign: 'center',
    letterSpacing: 0.7,
    color: Color.white,
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
  txt: {
    fontSize: moderateScale(9, 0.6),
    textAlign: 'center',
    paddingVertical: moderateScale(5, 0.6),
    color: Color.white,
  },
  btn_icon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.08) / 2,
    backgroundColor: 'red',
    marginHorizontal : moderateScale(3,.6)
  },
  btn_con: {
    flexDirection :'row' ,
    // paddingVertical : moderateScale(5,.6)
  }
});

export default LoginScreen;
