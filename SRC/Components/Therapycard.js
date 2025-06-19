import {Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import { useNavigation } from '@react-navigation/core';

const Therapycard = ({item}) => {
  console.log("🚀 ~ Therapycard ~ item:", item?.title)
  const navigation= useNavigation();
  const selectedItem= {id :1}
  return (
    <View style={[styles.card ,{
       backgroundColor : selectedItem?.id == item?.id ? Color.btntextColor :  '#8B9781'
    }]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item?.title}</Text>
          <Icon
            style={{
              marginHorizontal: moderateScale(5, 0.6),
              paddingTop: moderateScale(2, 0.6),
            }}
            as={Ionicons}
            name={'heart-outline'}
            size={moderateScale(18, 0.6)}
            color="white"
          />
        </View>

        <View style={styles.ratingRow}>
          {Array.from({length: item?.rating}).map((_, index) => (
            <Icon
              as={FontAwesome}
              key={index}
              name="star"
              size={moderateScale(14, 0.6)}
              color="#F6C344"
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <CustomText style={styles.label}>Location</CustomText>
        <Text style={styles.text}>{item?.location}</Text>
      </View>

      <View style={styles.section}>
        <CustomText style={styles.label}>Services Offered</CustomText>
        {Object.values(item?.servicesOffered).map((item, idx) => (
          <CustomText key={idx} style={styles.bullet}>
            • {item}
          </CustomText>
        ))}
      </View>

      <View style={styles.section}>
        <CustomText style={styles.label}>Favorite</CustomText>
        {Object.values(item?.favoriteServices).map((item, idx) => (
          <CustomText key={idx} style={styles.bullet}>
            • {item}
          </CustomText>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() =>{
        navigation.navigate("BookingScreen")
      }}>
        <CustomText style={styles.buttonText}>Book now</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: windowHeight * 0.33,
    width: windowWidth * 0.9,
    backgroundColor: '#8B9781',
    borderRadius: 20,
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: moderateScale(6, 0.6),
  },
  title: {
    color: 'white',
    fontSize: moderateScale(13, 0.6),
    fontWeight: 'bold',
  },
  section: {
    marginTop: moderateScale(6, 0.6),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: moderateScale(5, 0.6),
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: moderateScale(12, 0.6),
    // marginBottom: moderateScale(4, 0.6),
  },
  text: {
    color: '#eee',
    fontSize: moderateScale(11, 0.6),
  },
  bullet: {
    color: '#eee',
    fontSize: moderateScale(10, 0.6),
    marginBottom: moderateScale(2, 0.6),
  },
  button: {
    backgroundColor: Color.btn_Color,
    marginVertical: moderateScale(5, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.3,
    height: windowHeight * 0.04,
    // paddingVertical: moderateScale(8, 0.6),
    borderRadius: moderateScale(30, 0.6),
    // fontSize : moderateScale(10,.6)
  },
  buttonText: {
    color: Color.btntextColor,
    // fontWeight: 'bold',
    fontSize: moderateScale(11, 0.6),
  },
});

export default Therapycard;
