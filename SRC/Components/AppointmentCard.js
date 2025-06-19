import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';

const AppointmentCard = ({item}) => {
  const selectedItem = {id: 1};
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            selectedItem?.id == item?.id ? Color.btntextColor : '#8B9781',
        },
      ]}>
      <View style={styles.image_con}>
        <CustomImage source={item?.image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <CustomText style={styles.title}>{item?.title}</CustomText>
        <CustomText style={styles.desc}>{item?.description}</CustomText>
        <View style={styles.actions}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedItem?.id == item?.id
                    ? Color?.btn_Color
                    : Color.btntextColor,
              },
            ]}>
            <CustomText
              style={[
                styles.buttonText,
                {
                  color:
                    selectedItem?.id == item?.id
                      ? Color.btntextColor
                      : Color?.white,
                },
              ]}>
              Book Now
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.secondary,
              {
                borderColor:
                  selectedItem?.id == item?.id
                    ? Color.btn_Color
                    : Color?.btntextColor,
              },
            ]}>
            <CustomText style={styles.secondaryText}>Available Now</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    height: windowHeight * 0.12,

    borderRadius: moderateScale(12, 0.6),
    marginVertical: moderateScale(6),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    // flex: 1,
    paddingTop: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },
  title: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  desc: {
    fontSize: moderateScale(10, 0.0),
    marginVertical: moderateScale(2, 0.6),
    width: windowWidth * 0.7,
    color: Color.white,
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3c5f41',
    height: windowHeight * 0.03,
    width: windowWidth * 0.17,
    borderRadius: moderateScale(30, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(9, 0.6),
  },
  secondary: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.2,
    borderRadius: moderateScale(30, 0.6),
    alignItems: 'center',
    marginHorizontal: moderateScale(5, 0.6),
    justifyContent: 'center',
    borderWidth: 1,
  },
  secondaryText: {
    fontSize: moderateScale(10),
    color: Color.white,
  },
  image_con: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.22,
    borderRadius: moderateScale(10, 0.6),
    marginVertical: moderateScale(5, 0.6),
    marginHorizontal: moderateScale(5, 0.6),
    overflow: 'hidden',
  },
});

export default AppointmentCard;
