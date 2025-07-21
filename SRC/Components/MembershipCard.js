import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';

const MembershipCard = ({item}) => {
  const selectedItem = {id: 1};
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            selectedItem?.id == item?.id ? Color.btntextColor : Color.btn_Color,
        },
      ]}>
      <CustomText
        style={[
          styles.title,
          {
            color:
              selectedItem?.id == item?.id ? '#C0BDAE' : Color.btntextColor,
          },
        ]}>
        {item?.title}
      </CustomText>
      <CustomText
        style={[
          styles.desc,
          {
            color:
              selectedItem?.id == item?.id ? '#C0BDAE' : Color.btntextColor,
          },
        ]}>
        {item?.description}
      </CustomText>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              selectedItem?.id == item?.id ? '#C0BDAE' : Color.btntextColor,
          },
        ]}>
        <CustomText style={[styles.buttonText ,{
            color :  selectedItem?.id == item?.id ? Color.btntextColor :'#C0BDAE'  ,
        }]}>Book Now</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.5,
    height : windowHeight *0.113,
    paddingHorizontal : moderateScale(8,.6),
    paddingVertical: moderateScale(8, 0.6),
    borderRadius: moderateScale(10, 0.6),
    margin: moderateScale(5, 0.6),
    borderWidth : 1,
    borderColor : Color.btntextColor 
  },
  title: {
    fontSize: moderateScale(12, 0.6),
    fontWeight: 'bold',
    marginBottom: moderateScale(2, 0.6),
    color: Color.btntextColor,
  },
  desc: {
    fontSize: moderateScale(9, 0.6),
    width: windowWidth * 0.48,
    marginBottom: moderateScale(4, 0.6),
  },
  button: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.03,
    borderRadius: moderateScale(5, 0.6),
    alignItems: 'center',
    borderRadius: 30,
    justifyContent :'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(10, 0.6),
  },
});

export default MembershipCard;
