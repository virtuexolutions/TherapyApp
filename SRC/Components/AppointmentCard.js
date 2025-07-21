import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';

const AppointmentCard = ({
  title,
  description,
  isAvailable = true,
  btn_text,
  btn_style,
  image,
  style,
  textstyles,
}) => (
  <View style={[styles.container, style]}>
    <View
      style={{
        width: moderateScale(85,.6),
        height: moderateScale(90,.6),
        alignSelf: 'center',
        marginLeft: moderateScale(4, 0.6),
        borderRadius: moderateScale(10, 0.6),
      }}>
      <CustomImage source={image} style={styles.image} />
    </View>
    <View style={styles.content}>
      <CustomText style={[styles.title, textstyles]}>{title}</CustomText>
      <CustomText numberOfLines={2} style={[styles.desc, textstyles]}>
        {description}
      </CustomText>
      <View style={[styles.actions, textstyles]}>
        <TouchableOpacity style={[styles.button, btn_style]}>
          <CustomText style={styles.buttonText}>
            {btn_text ? btn_text : 'Book Appointment'}
          </CustomText>
        </TouchableOpacity>
        {isAvailable && (
          <TouchableOpacity style={styles.secondary}>
            <CustomText style={styles.secondaryText}>Available Providers</CustomText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  </View>     
  
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#dfe9dc',
    borderRadius: moderateScale(12),
    marginVertical: moderateScale(6),
    overflow: 'hidden',
  },     
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(10, 0.6),
  },
  content: {
    flex: 1,
    padding: moderateScale(10),
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  desc: {
    fontSize: moderateScale(11),
    marginVertical: moderateScale(5),
  },
  actions: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3c5f41',
    padding: moderateScale(6),
    borderRadius: moderateScale(20,.6),
    marginRight : moderateScale(5,.6)
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(10),
  },
  secondary: {
    padding: moderateScale(6),
    borderWidth : 1,
    borderRadius : moderateScale(20,.6)
  },
  secondaryText: {
    fontSize: moderateScale(10),
    color: Color.white,
  },
});

export default AppointmentCard;
