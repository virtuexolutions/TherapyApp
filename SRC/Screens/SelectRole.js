import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import {useDispatch} from 'react-redux';
import {SetUserRole} from '../Store/slices/auth';
import navigationService from '../navigationService';

const SelectRole = () => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.main_con}
      source={require('../Assets/Images/loginbg.png')}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <View
        style={{
          borderWidth: 1,
          borderColor: Color.white,
          borderRadius: 20,
          height: windowHeight * 0.3,
          width: windowWidth * 0.9,
          alignItems: 'center',
          paddingTop: moderateScale(15, 0.6),
          paddingHorizontal: moderateScale(10, 0.6),
          backgroundColor: 'rgba(127,138,115,255)',
        }}>
        <CustomText style={styles.txt}>Select Your Role</CustomText>
        <CustomText style={{
          fontSize : moderateScale(10,.6) ,color : Color.white,
          textAlign : 'center',
          width : windowWidth *0.7,
        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CustomText>
        <CustomButton
          isBold
          text={'Provider'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.btntextColor}
          borderWidth={1.5}
          borderColor={Color.themtxtColor}
          borderRadius={moderateScale(30, 0.3)}
          width={windowWidth * 0.8}
          height={windowHeight * 0.065}
          bgColor={Color.btn_Color}
          textTransform={'capitalize'}
          marginTop={windowHeight * 0.03}
          elevation={false}
          onPress={() => {
            dispatch(SetUserRole('Provider'));
            navigationService.navigate('LoginScreen');
          }}
        />
        <CustomButton
          isBold
          text={'User'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.btntextColor}
          borderWidth={1.5}
          borderColor={Color.themtxtColor}
          borderRadius={moderateScale(30, 0.3)}
          width={windowWidth * 0.8}
          height={windowHeight * 0.065}
          bgColor={Color.btn_Color}
          textTransform={'capitalize'}
          marginTop={windowHeight * 0.02}
          elevation={false}
          onPress={() => {
            dispatch(SetUserRole('user'));
            navigationService.navigate('LoginScreen');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SelectRole;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: moderateScale(20, 0.2),
    color: Color.white,
    fontWeight: 'bold',
    // marginBottom: moderateScale(20, 0.2),
  },
});
