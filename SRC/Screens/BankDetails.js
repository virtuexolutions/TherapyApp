import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomStatusBar from '../Components/CustomStatusBar';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import {Circle} from 'native-base';

const BankDetails = () => {
  const [cardNUmber, setCardNumber] = useState(0);
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <CustomText isBold style={styles.heading}>
        Bank Details For Payout
      </CustomText>
      <View style={styles.image_con}>
        <CustomImage
          style={styles.image}
          source={require('../Assets/Images/card.png')}
        />
      </View>
      <TextInputWithTitle
        placeholder={'Ida L. Dudley'}
        setText={setName}
        value={name}
        viewHeight={0.06}
        viewWidth={0.9}
        inputWidth={0.85}
        borderBottomWidth={1}
        fontSize={moderateScale(10, 0.6)}
        borderRadius={30}
        backgroundColor={'transparent'}
        borderColor={Color.themtxtColor}
        marginTop={moderateScale(10, 0.3)}
        placeholderColor={Color.btntextColor}
      />
      <TextInputWithTitle
        title={'Card Number'}
        placeholder={'0000 0000 0000 0000'}
        setText={setCardNumber}
        value={cardNUmber}
        viewHeight={0.06}
        viewWidth={0.9}
        inputWidth={0.85}
        borderBottomWidth={1}
        fontSize={moderateScale(10, 0.6)}
        borderRadius={30}
        backgroundColor={'transparent'}
        borderColor={Color.themtxtColor}
        marginTop={moderateScale(10, 0.3)}
        placeholderColor={Color.btntextColor}
        titleStlye={{
          //   right: ,
          top: 20,
          fontSize: moderateScale(14, 0.6),
          color: '#2A3821',
        }}
      />
      <View style={styles.row}>
        <TextInputWithTitle
          placeholder={'Exp Date'}
          setText={setExpDate}
          value={expDate}
          viewHeight={0.06}
          viewWidth={0.4}
          inputWidth={0.4}
          borderBottomWidth={1}
          fontSize={moderateScale(10, 0.6)}
          backgroundColor={'transparent'}
          borderColor={Color.themtxtColor}
          marginTop={moderateScale(10, 0.3)}
          marginHorizontal={moderateScale(10, 0.6)}
          placeholderColor={Color.btntextColor}
          titleStlye={{
            right: 10,
            top: 20,
            fontSize: moderateScale(14, 0.6),
            color: '#2A3821',
          }}
        />
        <TextInputWithTitle
          placeholder={'Cvv'}
          setText={setCvv}
          value={cvv}
          viewHeight={0.06}
          viewWidth={0.4}
          inputWidth={0.4}
          borderBottomWidth={1}
          fontSize={moderateScale(10, 0.6)}
          backgroundColor={'transparent'}
          borderColor={Color.themtxtColor}
          marginTop={moderateScale(10, 0.3)}
          placeholderColor={Color.btntextColor}
          titleStlye={{
            right: 10,
            top: 20,
            fontSize: moderateScale(14, 0.6),
            color: '#2A3821',
          }}
        />
      </View>
      <View style={styles.sec_row}>
        <View style={styles.Circle}>
          <View style={styles.Circle_bg} />
        </View>
        <CustomText style={styles.txt}>
          By continuing, you agree to our Terms and Privacy Policy
        </CustomText>
      </View>

      <CustomButton
        text={'save'}
        isBold
        textColor={Color.white}
        width={windowWidth * 0.85}
        height={windowHeight * 0.06}
        borderRadius={30}
        marginTop={moderateScale(25, 0.3)}
        onPress={() => {}}
        bgColor={Color.btntextColor}
        style={{
          position: 'absolute',
          bottom: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: Color.bgColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(10, 0.6),
        paddingTop: windowHeight * 0.02,
    },
    heading: {
        fontSize: moderateScale(18, 0.6),
        color: Color.btntextColor,
    },
  image_con: {
    height: windowHeight * 0.28,
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.04,
    marginBottom: moderateScale(10, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-between',
  },
  sec_row: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: moderateScale(15, 0.6),
    marginTop: moderateScale(15, 0.6),
  },
  Circle: {
    width: windowWidth * 0.03,
    height: windowWidth * 0.03,
    borderRadius: (windowWidth * 0.03) / 2,
    borderWidth: 1,
    borderColor: Color.btntextColor,
    marginTop: moderateScale(2, 0.6),
    marginRight: moderateScale(3, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: moderateScale(10, 0.6),
    color: Color.black,
  },
  Circle_bg: {
    height: '70%',
    width: '70%',
    borderRadius: moderateScale(30, 0.6),
    backgroundColor: Color.btntextColor,
  },
});
