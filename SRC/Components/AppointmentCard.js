import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';

const AppointmentCard = ({ title, description, isAvailable = true, btn_text, btn_style, image, style, textstyles }) => (
  <View style={[styles.container, style]}>
    <View style={{
      width: moderateScale(80),
      height: moderateScale(80),
      alignSelf: 'center',
      marginLeft: moderateScale(4, 0.6),
      borderRadius: moderateScale(10, 0.6)
    }}>
      <CustomImage source={image} style={styles.image} />
    </View>
    <View style={styles.content}>
      <CustomText style={[styles.title, textstyles]}>{title}</CustomText>
      <CustomText numberOfLines={2} style={[styles.desc, textstyles]}>{description}</CustomText>
      <View style={[styles.actions, textstyles]}>
        <TouchableOpacity style={[styles.button, btn_style]}>
          <CustomText style={styles.buttonText}>{btn_text ? btn_text : 'Book Now'}</CustomText>
        </TouchableOpacity>
        {
          isAvailable &&
          <TouchableOpacity style={styles.secondary}>
            <CustomText style={styles.secondaryText}>Available Now</CustomText>
          </TouchableOpacity>
        }
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
    borderRadius: moderateScale(10, 0.6)
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
