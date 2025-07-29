import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
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
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Color from '../Assets/Utilities/Color';
import { Post } from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';

const VerifyNumber = props => {
  const SelecteduserRole = useSelector(
    state => state.commonReducer.selectedRole,
  );
  const navigationN = useNavigation();

  const email = props?.route?.params?.email;
  const phoneNumber = props?.route?.params?.phoneNumber;

  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
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


  const VerifyOTP = async () => {
    const url = 'password/code/check';
    setIsLoading(true);
    console.log(code);
    const response = await Post(url, { code: code }, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show(`otp verified`, ToastAndroid.SHORT)
        : alert(`otp verified`);
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
    <ImageBackground
      resizeMode="stretch"
      source={require('../Assets/Images/bg.jpg')}
      style={{
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
      imageStyle={{
        width: '100%',
        height: '100%',
      }}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'light-content'}
      />

      <CustomText
        isBold
        style={{
          color: Color.white,
          textAlign: 'center',
          fontSize: moderateScale(15, 0.6),
        }}>
        OTP Verification
      </CustomText>
      <CustomText style={styles.h1}>Enter Verification Code</CustomText>
      <CustomText style={styles.h2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque
        turpis iaculis{' '}
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
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <CustomText
              style={[styles.cellText, isFocused && { color: Color.btn_Color }]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </CustomText>
          </View>
        )}
      />
      <CustomText style={[styles.txt3, { width: windowWidth * 0.6 }]}>
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
        textColor={Color.btntextColor}
        width={windowWidth * 0.85}
        height={windowHeight * 0.065}
        borderRadius={30}
        marginTop={moderateScale(30, 0.3)}
        onPress={() => {
          VerifyOTP();
        }}
        bgColor={Color.btn_Color}
      />
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  txt3: {
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
    textAlign: 'center',
    width: '95%',
    alignItems: 'center',
    justifyContent: "center"
    // marginTop: moderateScale(10, 0.3),
    // lineHeight: moderateScale(20, 0.3),
  },
  txt4: {
    color: Color.btn_Color,
    fontSize: moderateScale(13, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.btn_Color,
    fontWeight: '800',
    // height: windowHeight * 0.03,
    // paddingHorizontal: moderateScale(5, 0.6),
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
    borderColor: Color.btn_Color,
    borderWidth: 1,
    borderRadius: moderateScale(5, 0.3),
  },
  focusCell: {
    borderColor: Color.btntextColor,
    borderWidth: 1,
  },
  cellText: {
    color: Color.white,
    fontSize: moderateScale(20, 0.3),
    textAlign: 'center',
  },
  h1: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    textAlign: 'center',
    width: '80%',
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  h2: {
    fontSize: moderateScale(11.6),
    color: Color.white,
    textAlign: 'center',
    width: '80%',
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'none',
  },
});

export default VerifyNumber;
