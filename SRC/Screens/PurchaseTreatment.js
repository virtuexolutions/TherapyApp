import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';

const PurchaseTreatment = () => {
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
      <Header showBack={true} title={'summary'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.mainScreen,
          {
            paddingBottom: moderateScale(190, 0.6),
          },
        ]}>
        <View style={styles.card_con}>
          <View style={styles.row}>
            <View style={styles.image_con}>
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/other.png')}
              />
            </View>

            <CustomText style={styles.text_pro}>
              Provided by
              <CustomText style={styles.pro_text}>
                HealthFirst Medical
              </CustomText>
            </CustomText>
          </View>

          <CustomText numberOfLines={2} style={styles.h1}>
            Ultrasound for fetal anatomy assessment
          </CustomText>
        </View>
        <View style={styles.pay_con}>
          <CustomText numberOfLines={2} style={styles.h2}>
            payment summary
          </CustomText>
          <View style={styles.map_con}>
            {paymentData?.map(item => {
              return (
                <View style={styles.map_row}>
                  <CustomText style={styles.text_tal}>{item?.label}</CustomText>
                  <CustomText
                    style={[
                      styles.text_tal,
                      {
                        textDecorationLine:
                          item?.label == 'treatment' ? 'none' : 'line-through',
                      },
                    ]}>
                    {item?.value}
                  </CustomText>
                </View>
              );
            })}
          </View>
          <View style={styles.row_Con}>
            <CustomText style={styles.text_tal}>
              Vitality Access discount
            </CustomText>
            <CustomText style={styles.text_tal}>20%</CustomText>
          </View>
          <View style={styles.sec_row}>
            <CustomText style={styles.text_tal}>total</CustomText>
            <CustomText style={styles.text_tal}>$350.00</CustomText>
          </View>
        </View>
        <View style={styles.master_card}>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(14, 0.6),
              color: Color.white,
              letterSpacing: 0.8,
            }}>
            Payment method
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: Color.white,
              letterSpacing: 0.5,
            }}>
            All your payment information is safe
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(15, 0.6),
            }}>
            <View style={styles.card_image}>
              <CustomImage
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../Assets/Images/Mastercard.png')}
              />
            </View>
            <View>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.white,
                  letterSpacing: 0.8,
                }}>
                **** **** **** 2345
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                  letterSpacing: 0.5,
                }}>
                09 / 2029
              </CustomText>
            </View>
            <CustomText style={styles.text_edit}>edit</CustomText>
          </View>
        </View>
        <CustomButton
        //   isBold
          text={'Pay now $350.00'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.white}
          borderWidth={1.5}
          borderColor={Color.btntextColor}
          borderRadius={moderateScale(15, 0.3)}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          bgColor={Color.themeBrand600}
          textTransform={'capitalize'}
          marginTop={moderateScale(30,.6)}
          elevation={true}
          // onPress={() => {
          //   navigationService.navigate('TabNavigation')
          // }}
        //   onPress={onContinue}
        />
      </ScrollView>
    </ScreenBoiler>
  );
};

export default PurchaseTreatment;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#1F2D37',
  },

  card_con: {
    backgroundColor: '#354654',
    width: windowWidth * 0.9,
    borderRadius: 10,
    marginTop: moderateScale(20, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
  },
  text_pro: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(5, 0.6),
    marginTop: moderateScale(15, 0.6),
    width: '87 %',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_con: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.1,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: moderateScale(7, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },

  h1: {
    fontSize: moderateScale(19, 0.6),
    color: Color.white,
    width: windowWidth * 0.6,
    marginTop: moderateScale(7, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },
  h2: {
    color: Color.white,
    fontSize: moderateScale(13, 0.6),
    paddingBottom: moderateScale(10, 0.6),
  },
  pro_text: {
    fontSize: moderateScale(11, 0.6),
    color: '#17B28A',
    borderBottomWidth: 1,
    textDecorationLine: 'underline',
  },
  pay_con: {
    width: windowWidth * 0.9,
    borderRadius: 10,
    alignSelf: 'center',
    height: windowHeight * 0.3,
    marginVertical: moderateScale(20, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    borderWidth: 0.2,
    borderColor: Color.white,
  },
  sec_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(13, 0.6),
  },
  text_tal: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  row_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15, 0.6),
    borderBottomWidth: 0.2,
    borderColor: Color.white,
  },
  map_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(4, 0.6),
  },
  map_con: {
    paddingVertical: moderateScale(15, 0.6),
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: Color.white,
  },
  master_card: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.13,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    borderWidth: 0.2,
    borderColor: Color.white,
    alignSelf: 'center',
    borderRadius: 10,
  },
  card_image: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.07,
    marginRight: moderateScale(10, 0.6),
    marginTop: moderateScale(10, 0.6),
  },
  text_edit: {
    width: windowWidth * 0.35,
    textAlign: 'right',
    fontSize: moderateScale(12, 0.6),
    textDecorationLine: 'underline',
    color: Color.white,
    letterSpacing: 0.5,
  },
});
