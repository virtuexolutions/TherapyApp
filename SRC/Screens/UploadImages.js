import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';

const UploadImages = () => {
  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <CustomText isBold style={styles.heading}>
        Upload Credentials
      </CustomText>
      <CustomText style={styles.sub_heading}>
        At Vitality Access, We Believe Optimal Wellness Should Be Within
        Everyone's Reach. Our Curated Membership Unlocks Exclusive Pricing.
      </CustomText>

      <View style={styles.btn_con}>
        <CustomText isBold style={styles.h1}>
          Upload
        </CustomText>
        <View style={styles.row}>
          <View style={styles.inner_con}>
            <View style={styles.btn}>
              <View style={styles.image_con}>
                <CustomImage
                  style={styles.image}
                  source={require('../Assets/Images/upload.png')}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.4}>
              <CustomText style={styles.button_txt}>image upload</CustomText>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.btn}>
              <View style={styles.image_con}>
                <CustomImage
                  style={styles.image}
                  source={require('../Assets/Images/capture.png')}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.4}>
              <CustomText style={styles.button_txt}>Capture</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomButton
        text={'save'}
        isBold
        textColor={Color.white}
        width={windowWidth * 0.79}
        height={windowHeight * 0.06}
        borderRadius={30}
        marginTop={moderateScale(-25, 0.3)}
        onPress={() => {}}
        bgColor={Color.btntextColor}
      />
    </SafeAreaView>
  );
};

export default UploadImages;

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
  sub_heading: {
    fontSize: moderateScale(10, 0.6),
    color: Color.btntextColor,
    textAlign: 'center',
    paddingVertical: moderateScale(10, 0.6),
  },
  btn_con: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.3,
    borderWidth: 0.4,
    borderColor: '#2A3821',
    borderRadius: moderateScale(20, 0.6),
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginTop: moderateScale(15, 0.3),
  },
  h1: {
    fontSize: moderateScale(17, 0.6),
    color: Color.btntextColor,
    letterSpacing: 0.6,
    paddingTop: moderateScale(10, 0.6),
  },
  row: {
    flexDirection: 'row',
    paddingTop: moderateScale(15, 0.6),
  },
  btn: {
    height: windowHeight * 0.12,
    width: windowWidth * 0.33,
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 4,
    borderColor: Color.btntextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: windowWidth * 0.28,
    height: windowHeight * 0.04,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: Color.btntextColor,
    backgroundColor: '#C0BDAE',
    borderRadius: 30,
    marginTop: moderateScale(-15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_txt: {fontSize: moderateScale(12, 0.6), color: Color.btntextColor},
  inner_con: {
    marginRight: moderateScale(17, 0.6),
  },
  image_con: {
    height: windowHeight * 0.044,
    width: windowWidth * 0.1,
    alignSelf: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
