import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';

const SubscriptionCard = ({item}) => {
  return (
    <ImageBackground style={styles.card} source={item?.image}>
      <CustomText isBold style={styles.heading}>
        {item?.title}
      </CustomText>
      <View style={styles.row}>
        <View
          style={{
            backgroundColor: Color.btn_Color,
            borderWidth: 1,
            width: windowWidth * 0.02,
            height: windowWidth * 0.02,
            borderRadius: (windowWidth * 0.02) / 2,
            marginTop : moderateScale(6,.6) ,
            marginRight : moderateScale(2,.6)

          }}></View>
        <View style={styles.firs_con}>
          {item?.features?.map((item, index) => {
            return (
              <CustomText
                style={{
                  fontSize: moderateScale(10, 0.6),
                  color: Color.white,
                  paddingVertical: moderateScale(3, 0.6),
                }}>
                {item}
              </CustomText>
            );
          })}
        </View>
        <View style={styles.sec_con}>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(14, 0.6),
              color: Color.white,
              paddingHorizontal: moderateScale(12, 0.6),
            }}>
            just
          </CustomText>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(25, 0.6),
              color: Color.white,
              paddingHorizontal: moderateScale(10, 0.6),
            }}>
            $30.00
          </CustomText>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(14, 0.6),
              color: Color.white,
              alignSelf: 'flex-end',
              paddingRight : moderateScale(5,.6)
            }}>
            Monthly
          </CustomText>
        </View>
      </View>
      <View style={[styles.row ,{
        paddingTop: moderateScale(10,.6) 
      }]}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Color.btn_Color,
            },
          ]}>
          <CustomText
            style={[
              styles.btn_txt,
              {
                color: Color.btntextColor,
                borderColor: Color.btntextColor,
              },
            ]}>
            subscribe now
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              width: windowWidth * 0.3,
              backgroundColor: Color.btntextColor,
              borderColor: Color.btn_Color,
              borderWidth: 1,
            },
          ]}>
          <CustomText
            style={[
              styles.btn_txt,
              {
                color: Color.btn_Color,
              },
            ]}>
            view detail
          </CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.86,
    height: windowHeight * 0.27,
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(20, 0.6),
    overflow: 'hidden',
  },
  heading: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
  },
  row: {
    flexDirection: 'row',
  },
  firs_con: {
    width: '65%',
  },
  sec_con: {
    width: '35%',
    paddingTop: windowHeight * 0.05,
  },
  button: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.35,

    borderRadius: 20,
    marginRight: moderateScale(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
