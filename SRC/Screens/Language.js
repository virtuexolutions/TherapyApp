import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomStatusBar from '../Components/CustomStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../Components/CustomText';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import * as Progress from 'react-native-progress';
import CustomHeader from '../Components/CustomHeader';
import Card from '../Components/Card';
import CustomButton from '../Components/CustomButton';
import { Icon } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Language = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <CustomHeader
        isProfile={false}
        title={'Language'}
        backgroundColor={Color.bgColor}
      />
      <View style={styles.main_view}>
        <View
          style={{
            width: windowWidth * 0.95,
            height: windowWidth * 0.14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.08,
              height: windowWidth * 0.08,
            }}>
            <CustomImage
              source={require('../Assets/Images/translated.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginLeft: moderateScale(10, 0.6),
            }}>
            <CustomText isBold style={styles.heading}>
              Translated
            </CustomText>
            <CustomText style={styles.txt}>
              lorem ipsum is simply dummy text
            </CustomText>
          </View>
          <Icon
            name="right"
            as={AntDesign}
            size={moderateScale(20, 0.6)}
            color={Color.veryLightGray}
          />
        </View>
        <View
          style={{
            width: windowWidth * 0.95,
            height: windowWidth * 0.14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.08,
              height: windowWidth * 0.08,
            }}>
            <CustomImage
              source={require('../Assets/Images/pharseBook.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginLeft: moderateScale(10, 0.6),
            }}>
            <CustomText isBold style={styles.heading}>
              Pharsebook
            </CustomText>
            <CustomText style={styles.txt}>
              lorem ipsum is simply dummy text
            </CustomText>
          </View>
          <Icon
            name="right"
            as={AntDesign}
            size={moderateScale(20, 0.6)}
            color={Color.veryLightGray}
          />
        </View>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            textAlign: 'left',
            width: windowWidth * 0.9,
            color: Color.themeTextColor,
            marginTop: moderateScale(20, 0.6),
          }}>
          Travel
        </CustomText>
        <View
          style={{
            width: windowWidth * 0.95,
            height: windowWidth * 0.14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.08,
              height: windowWidth * 0.08,
            }}>
            <CustomImage
              source={require('../Assets/Images/recommendations.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginLeft: moderateScale(10, 0.6),
            }}>
            <CustomText isBold style={styles.heading}>
              Local Recommendations
            </CustomText>
            <CustomText style={styles.txt}>
              lorem ipsum is simply dummy text
            </CustomText>
          </View>
          <Icon
            name="right"
            as={AntDesign}
            size={moderateScale(20, 0.6)}
            color={Color.veryLightGray}
          />
        </View>
        <View
          style={{
            width: windowWidth * 0.95,
            height: windowWidth * 0.14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.09,
              height: windowWidth * 0.08,
            }}>
            <CustomImage
              source={require('../Assets/Images/help.png')}
              style={styles.image}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginLeft: moderateScale(10, 0.6),
            }}>
            <CustomText isBold style={styles.heading}>
              Emergency Help
            </CustomText>
            <CustomText style={styles.txt}>
              lorem ipsum is simply dummy text
            </CustomText>
          </View>
          <Icon
            name="right"
            as={AntDesign}
            size={moderateScale(20, 0.6)}
            color={Color.veryLightGray}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.bgColor,
  },
  main_view: {
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    alignItems: 'center',
  },
  image_view: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.12,
    marginTop: moderateScale(10, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: Color.themeTextColor
  },
  txt: {
    color: Color.black,
    fontSize: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(13, 0.6),
    color: Color.themeTextColor,
    letterSpacing: 0.6,
  },
});
