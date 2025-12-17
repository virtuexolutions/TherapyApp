import {Icon} from 'native-base';
import React, { useRef, useState } from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import FilterModal from './FilterModal';

const SeeAllCard = ({item, from}) => {
 
 

  return (
    <View
      style={[
        styles.card_con,
        {
          // height: windowHeight * 0.21,
        },
      ]}>
      <View style={styles.row}>
        <View style={styles.image_con}>
          <CustomImage style={styles.image} source={item?.image} />
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
          <Icon
            name={'heart'}
            as={item?.isFav ? FontAwesome : Feather}
            size={moderateScale(15, 0.6)}
            color={item?.isFav ? '#17B28A' : Color.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.text_con}>
        <View style={styles.text_Row}>
          <Icon
            style={{
              marginTop: moderateScale(3, 0.6),
            }}
            as={Feather}
            name="map-pin"
            size={moderateScale(13, 0.6)}
            color={Color.white}
          />
          <CustomText
            style={[
              styles.text,
              {
                textDecorationLine: 'underline',
              },
            ]}>
            {item?.location}
          </CustomText>
          <Icon
            style={{
              marginTop: moderateScale(3, 0.6),
            }}
            as={Feather}
            name="arrow-up-right"
            size={moderateScale(13, 0.6)}
            color={Color.white}
          />
        </View>
        <View
          style={[
            styles.text_Row,
            {
              marginTop: moderateScale(5, 0.6),
            },
          ]}>
          <Icon
            style={{
              marginTop: moderateScale(3, 0.6),
            }}
            as={Feather}
            name={'dollar-sign'}
            size={moderateScale(13, 0.6)}
            color={Color.white}
          />
          {/* {from == 'treatments' ? (
            <> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
            }}>
            <CustomText style={styles.text}>Vitality Access</CustomText>
            <CustomText style={styles.text}>
              {item?.vitality_access_price}
            </CustomText>
          </View>
          {/* </> */}
          {/* ) : from == 'packages' ? (
            <CustomText style={styles.text}>{item?.duration} </CustomText>
          ) : (
            <CustomText style={styles.text}>{item?.time} </CustomText>
          )} */}
        </View>
        {/* {from == 'treatments' && (
          <> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <CustomText
            style={[
              styles.text,
              {
                marginLeft: moderateScale(13, 0.6),
              },
            ]}>
            other
          </CustomText>
          <CustomText style={styles.text}>{item?.others_price} </CustomText>
        </View>
        <View style={styles.saving_con}>
          <CustomText style={styles.saving_text}>
            Saving {item?.saving}
          </CustomText>
        </View>
        {/* </> */}
        {/* )} */}
      </View>
      {/* {from != 'packages' ? (
        <TouchableOpacity style={styles.btn}>
          <CustomText style={styles.btn_text}>see more information</CustomText>
        </TouchableOpacity>
      ) : (
        <View style={styles.package_row}>
          <View>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.white,
              }}>
              from
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(14, 0.6),
                color: Color.white,
              }}>
              {item?.price}
            </CustomText>
          </View>
          <TouchableOpacity style={styles.detail_btn}>
            <CustomText
              style={{color: Color.white, fontSize: moderateScale(12, 0.6)}}>
              see all details
            </CustomText>
          </TouchableOpacity>
        </View>
      )} */}
     
    </View>
  );
};

export default SeeAllCard;

const styles = StyleSheet.create({
  card_con: {
    backgroundColor: '#1B2730',
    width: windowWidth * 0.93,
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
    // backgroundColor: 'pink',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: moderateScale(7, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  like_btn: {
    height: windowHeight * 0.032,
    width: windowHeight * 0.032,
    borderRadius: (windowHeight * 0.032) / 2,
    borderWidth: 1,
    backgroundColor: '#354654',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    marginTop: moderateScale(5, 0.6),
  },
  h1: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
    width: windowWidth * 0.67,
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
  btn: {
    width: windowWidth * 0.68,
    borderWidth: 1,
    backgroundColor: '#354654',
    padding: moderateScale(4, 0.6),
    borderColor: Color.white,
    borderRadius: moderateScale(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(8, 6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  saving_con: {
    width: windowWidth * 0.21,
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
    borderRadius: 5,
    // paddingHorizontal: moderateScale(, 0.6),
    paddingVertical: moderateScale(2, 0.6),
    backgroundColor: '#36D1A333',
  },
  saving_text: {
    fontSize: moderateScale(11, 0.6),
    color: '#17B28A',
  },
  package_row: {
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.6),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  detail_btn: {
    width: windowWidth * 0.38,
    height: windowHeight * 0.03,
    marginTop: moderateScale(6, 0.6),

    backgroundColor: '#354654',
    // paddingVertical : moderateScale(2,.6),
    borderColor: Color.white,
    borderWidth: 0.6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
