import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';
import {mode} from 'native-base/lib/typescript/theme/tools';

const AudioCAllScreen = () => {
  const iscallConnected = true;
  const paymentData = [
    {
      id: 1,
      label: 'treatment',
      value: '$350.00',
    },
    {
      id: 2,
      label: 'Convenience Fees',
      value: '$100.00',
    },
    {
      id: 3,
      label: 'Estimated taxes',
      value: '$120.00',
    },
  ];
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showBack={false} title={''} />
      <View style={styles.mainScreen}>
        <View
          style={[
            styles.box,
            {
              marginTop: iscallConnected
                ? windowHeight * 0.07
                : moderateScale(15, 0.6),
            },
          ]}>
          <Icon
            as={EvilIcons}
            name="lock"
            size={moderateScale(20, 0.6)}
            color={Color.white}
          />
          <CustomText style={styles.h1}>
            This call is HIPAA-protected. Your medical information is private
            and secure.
          </CustomText>
        </View>
        <CustomText style={styles.title}>
          {iscallConnected
            ? 'HealthFirst Medical'
            : 'We’re connecting you with HealthFirst Medical'}
        </CustomText>
        <CustomText style={styles.title2}>
          {iscallConnected ? '00:54' : 'Connecting...'}
        </CustomText>

        <View style={styles.image_con}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'pink',
              overflow: 'hidden',
            }}
            source={require('../Assets/Images/cal.png')}
          />
        </View>
        {!iscallConnected && (
          <View style={styles.note_con}>
            <View style={styles.Icon_con}>
              <Icon
                style={styles.Icon}
                as={Ionicons}
                name="warning-outline"
                size={moderateScale(16, 0.6)}
                color={Color.white}
              />
            </View>
            <View>
              <CustomText isBold style={styles.note_h1}>
                Please note that:
              </CustomText>
              <CustomText
                style={[
                  styles.note_h1,
                  {
                    width: windowWidth * 0.7,
                    // fontSize: moderateScale(12, 0.6),
                  },
                ]}>
                This could take a few minutes depending on the number of calls
                the provider is handling.
              </CustomText>
            </View>
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: iscallConnected ? windowHeight * 0.3 : windowHeight * 0.2,
            backgroundColor: '#1F2D37',
            width: windowWidth,
            // #1F2D37
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: moderateScale(18, 0.6),
            }}>
            <View>
              <TouchableOpacity style={styles.btn}>
                <View
                  style={{
                    height: windowHeight * 0.02,
                    width: windowWidth * 0.06,
                  }}>
                  <CustomImage
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={require('../Assets/Images/speaker.png')}
                  />
                </View>
              </TouchableOpacity>
              <CustomText style={styles.text}>Speaker</CustomText>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <View
                  style={{
                    height: windowHeight * 0.023,
                    width: windowWidth * 0.045,
                  }}>
                  <CustomImage
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={require('../Assets/Images/mic.png')}
                  />
                </View>
              </TouchableOpacity>
              <CustomText style={styles.text}>Mute</CustomText>
            </View>
          </View>
          <CustomButton
            //   isBold
            text={iscallConnected ? 'end call' : 'cancel call'}
            fontSize={moderateScale(15, 0.3)}
            textColor={Color.white}
            borderWidth={iscallConnected ? 0 : 1.5}
            borderColor={'#778B9C'}
            borderRadius={moderateScale(15, 0.3)}
            width={windowWidth * 0.9}
            height={windowHeight * 0.06}
            bgColor={iscallConnected ? '#C95454' : '#354654'}
            textTransform={'capitalize'}
            marginTop={
              iscallConnected ? moderateScale(15, 0.6) : moderateScale(30, 0.6)
            }
            elevation={true}
            // onPress={() => {
            //   navigationService.navigate('TabNavigation')
            // }}
            //   onPress={onContinue}
          />
        </View>
      </View>
    </ScreenBoiler>
  );
};

export default AudioCAllScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#1d2730',
  },
  h1: {
    textAlign: 'center',
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
    width: windowWidth * 0.65,
  },
  title: {
    textAlign: 'center',
    color: Color.white,
    alignSelf: 'center',
    fontSize: moderateScale(20, 0.6),
    width: windowWidth * 0.8,
    marginTop: moderateScale(35, 0.6),
  },
  title2: {
    textAlign: 'center',
    color: Color.white,
    alignSelf: 'center',
    fontSize: moderateScale(14, 0.6),
    width: windowWidth * 0.8,
  },
  box: {
    width: windowWidth * 0.85,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#273844',
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
  },
  image_con: {
    width: windowHeight * 0.13,
    height: windowHeight * 0.13,
    borderRadius: (windowHeight * 0.13) / 2,
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: moderateScale(40, 0.6),
  },
  note_con: {
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.05,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: Color.white,
    paddingVertical: moderateScale(10, 0.6),
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: moderateScale(10, 0.6),
  },
  Icon_con: {
    width: windowHeight * 0.033,
    height: windowHeight * 0.033,
    borderRadius: windowHeight * 0.033,
    borderWidth: 0.5,
    alignItems: 'center',
    marginTop: moderateScale(22, 0.6),
    marginRight: moderateScale(15, 0.6),
    borderColor: Color.white,
    justifyContent: 'center',
  },
  note_h1: {
    fontSize: moderateScale(14, 0.6),
    color: Color.white,
  },

  text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    textAlign: 'center',
    paddingVertical: moderateScale(5, 0.6),
  },
  btn: {
    height: windowHeight * 0.052,
    width: windowHeight * 0.075,
    borderRadius: 18,
    marginHorizontal: moderateScale(10, 0.6),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#354654',
    borderColor: '#778B9C',
  },
});
