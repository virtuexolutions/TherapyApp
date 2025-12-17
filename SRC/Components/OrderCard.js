import {Icon} from 'native-base';
import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import FilterModal from './FilterModal';
import navigationService from '../navigationService';
import RequestModal from './RequestModal';

const OrderCard = ({item}) => {
  const refRBSheet = useRef();
  console.log(
    'first= ========================= >>>> item from detailed',
    refRBSheet,
  );
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigationService.navigate('DetailedScreen', {
            fromOrder: true,
          });
        }}
        style={[styles.card_con]}>
        <View style={styles.row}>
          <View style={styles.image_con}>
            <CustomImage style={styles.image} source={item?.providerLogo} />
          </View>
          <View>
            <CustomText numberOfLines={2} style={styles.h1}>
              {item?.title}
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(11, 0.6),
                color: Color.white,
                paddingHorizontal: moderateScale(5, 0.6),
              }}>
              Provided by{' '}
              <CustomText
                style={{
                  fontSize: moderateScale(11, 0.6),
                  color: '#17B28A',
                  borderBottomWidth: 1,

                  textDecorationLine: 'underline',
                }}>
                {item?.provider}
              </CustomText>
            </CustomText>
          </View>
          <TouchableOpacity style={styles.like_btn}>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(11, 0.6),
              }}>
              {' '}
              buy again
            </CustomText>
            <Icon
              name={'arrow-rotate-left'}
              as={FontAwesome6}
              size={moderateScale(11, 0.6)}
              color={Color.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text_con}>
          <View style={styles.text_Row}>
            <CustomText style={styles.text}>{item?.price}</CustomText>
            <CustomText style={styles.text}>|</CustomText>
            <CustomText style={styles.text}>{item?.price}</CustomText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingTop: moderateScale(10, 0.6),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet?.current?.open();
            }}
            style={styles.detail_btn}>
            <CustomText style={styles.btn_text}>request a call</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.detail_btn,
              {
                backgroundColor: '#069571',
                borderWidth: 0,
              },
            ]}>
            <CustomText style={styles.btn_text}>send message</CustomText>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <RequestModal ref={refRBSheet} />
    </>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card_con: {
    backgroundColor: '#1B2730',
    width: windowWidth * 0.94,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: '#374653',
    borderRadius: moderateScale(10, 0.6),
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
  like_btn: {
    height: windowHeight * 0.03,
    width: windowHeight * 0.1,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 0.4,
    backgroundColor: '#354654',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.white,
    paddingHorizontal: moderateScale(5, 0.6),
    marginTop: moderateScale(5, 0.6),
  },
  h1: {
    fontSize: moderateScale(14, 0.6),
    color: Color.white,
    width: windowWidth * 0.55,
    marginTop: moderateScale(7, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },

  text_con: {
    paddingTop: moderateScale(15, 0.6),
  },
  text_Row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(13, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
    color: Color.white,
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },

  detail_btn: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.036,
    marginTop: moderateScale(6, 0.6),
    backgroundColor: '#354654',
    borderColor: Color.white,
    borderWidth: 0.6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
