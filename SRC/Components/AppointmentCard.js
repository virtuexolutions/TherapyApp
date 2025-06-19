import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';

const AppointmentCard = ({title, description, image}) => (
  <View style={styles.container}>
    <Image source={{uri: image}} style={styles.image} />
    <View style={styles.content}>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText style={styles.desc}>{description}</CustomText>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <CustomText style={styles.buttonText}>Book Now</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondary}>
          <CustomText style={styles.secondaryText}>Available Now</CustomText>
        </TouchableOpacity>
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
    width: moderateScale(80),
    height: moderateScale(80),
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
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3c5f41',
    padding: moderateScale(6),
    borderRadius: moderateScale(6),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(10),
  },
  secondary: {
    padding: moderateScale(6),
  },
  secondaryText: {
    fontSize: moderateScale(10),
    color: '#333',
  },
});

export default AppointmentCard;
