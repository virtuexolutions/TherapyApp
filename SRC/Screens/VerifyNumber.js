import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import {Post} from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
// import CardContainer from '../Components/CardContainer';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomStatusBar from '../Components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const VerifyNumber = props => {
  const SelecteduserRole = useSelector(
    state => state.commonReducer.selectedRole,
  );
  const navigationN = useNavigation();

  //params
  const email = props?.route?.params?.email;
  const phoneNumber = props?.route?.params?.phoneNumber;

  //states
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [abcd, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const [time, settime] = useState(120);
  const [timerLabel, settimerLabel] = useState('Resend In ');
  if (time > 0) {
    setTimeout(function () {
      settime(time - 1);
    }, 1000);
  }

  const label = () => {
    time == 0 && (settimerLabel('Resend otp '), settime(''));
  };

  useEffect(() => {
    label();
  }, [time]);

  const sendOTP = async () => {
    const url = 'password/email';
    setIsLoading(true);
    const response = await Post(url, {email: email}, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show(`OTP sent to ${email}`, ToastAndroid.SHORT)
        : alert(`OTP sent to ${email}`);
    }
  };

  const VerifyOTP = async () => {
    const url = 'password/code/check';
    setIsLoading(true);
    console.log(code);
    const response = await Post(url, {code: code}, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show(`otp verified`, ToastAndroid.SHORT)
        : alert(`otp verified`);

      navigationN.navigate('ResetPassword', {email: email});
    }
  };

  useEffect(() => {
    label();
  }, [time]);

  useEffect(() => {
    if (timerLabel == 0) {
      sendOTP();
    }
  }, [timerLabel]);

  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar backgroundColor={Color.white} barStyle={'dark-content'} />

      <CustomText
        isBold
        style={{
          color: '#2A3821',
          textAlign: 'center',
          fontSize: moderateScale(15, 0.6),
        }}>
        OTP Verification
      </CustomText>


      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.3),
          marginTop: windowHeight * 0.2,
          alignItems: 'center',
          width: '100%',
          height: windowHeight,
        }}>
        <CustomText style={styles.h1}>Enter Verification Code</CustomText>
        <CustomText style={styles.h2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque turpis iaculis{' '}
        </CustomText>
        <CodeField
          placeholder={'0'}
          ref={ref}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}>
              <CustomText
                style={[styles.cellText, isFocused && {color: Color.black}]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </CustomText>
            </View>
          )}
        />
        <CustomText style={[styles.txt3, {width: windowWidth * 0.6}]}>
          Don’t receive the OTP ?
          {
            <TouchableOpacity
              disabled={timerLabel == 'Resend otp ' ? false : true}
              onPress={() => {
                settimerLabel('ReSend in '), settime(120);
              }}>
              <CustomText style={[styles.txt4]}>
                {timerLabel} {time}
              </CustomText>
            </TouchableOpacity>
          }
        </CustomText>
        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Verify'
            )
          }
          isBold
          textColor={Color.white}
          width={windowWidth * 0.85}
          height={windowHeight * 0.065}
          borderRadius={30}
          marginTop={moderateScale(30, 0.3)}
          onPress={() => {
            VerifyOTP();
          }}
          bgColor={Color.btntextColor}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,           
    paddingTop: windowHeight * 0.021,
    backgroundColor: Color.bgColor,
  },
  txt3: {
    color: Color.darkGray,
    fontSize: moderateScale(11, 0.6),
    textAlign: 'center',
    width: '95%',
    marginTop: moderateScale(10, 0.3),
    lineHeight: moderateScale(20, 0.3),
  },
  txt4: {
    color: Color.btntextColor,
    fontSize: moderateScale(13, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.white,
    fontWeight: '800',
    marginTop: moderateScale(5, 0.6),
    // backgroundColor :'red',
    height: windowHeight * 0.03,
    paddingHorizontal: moderateScale(5, 0.6),
  },

  codeFieldRoot: {
    marginTop: moderateScale(20, 0.3),
    marginBottom: moderateScale(15, 0.3),
    width: windowWidth * 0.7,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: moderateScale(45, 0.3),
    height: moderateScale(45, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.themeBlack,
    borderWidth: 1,
    borderRadius: moderateScale(5, 0.3),
  },
  focusCell: {
    borderColor: Color.themeBlack,
    borderWidth: 1,
  },
  cellText: {
    color: Color.themeBlack,
    fontSize: moderateScale(20, 0.3),
    textAlign: 'center',
  },
  h1: {
    fontSize: moderateScale(20, 0.6),
    color: Color.themeBlack,
    textAlign: 'center',
    width: '80%',
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  h2: {
    fontSize: moderateScale(11.6),
    color: Color.mediumGray,
    textAlign: 'center',
    width: '80%',
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'none',
  },
});

export default VerifyNumber;
