import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomHeader from '../Components/CustomHeader';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';

import {AirbnbRating, Rating} from 'react-native-ratings';
import CustomButton from '../Components/CustomButton';
import {Icon} from 'native-base';
// import {moderateScale} from 'react-native-size-matters';
const PricingComparison = () => {
  const [selected, setSelected] = useState('monthly');
  const plans = [
    {
      id: 1,
      title: 'Basic',
      price: 9.99,
      period: 'Month',
      features: [
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
      ],
      buttonText: 'Select',
    },
    {
      id: 2,
      title: 'Standard',
      price: 13.99,
      period: 'Month',
      features: [
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
      ],
      buttonText: 'Get Started',
    },
    {
      id: 3,
      title: 'Premium',
      price: 17.99,
      period: 'Month',
      features: [
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
        'Unlimited Access To All Classes',
      ],
      buttonText: 'Get Started',
    },
  ];

  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar barStyle={'dark-content'} backgroundColor={Color.red} />
      <CustomHeader
        title={'Find Doctors/Clinic'}
        backgroundColor={Color.bgColor}
      />
      <View style={styles.inner_container}>
        <CustomText style={styles.title}>Pricing & Comparison</CustomText>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setSelected('monthly');
            }}
            style={[
              styles.btn,
              {
                borderWidth: selected === 'monthly' ? 0 : 1,
                backgroundColor:
                  selected === 'monthly' ? Color.primary : Color.bgColor,
              },
            ]}>
            <CustomText
              style={[
                styles.btn_text,
                {
                  color: selected === 'monthly' ? Color.white : Color.black,
                },
              ]}>
              monthly
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelected('yearly');
            }}
            style={[
              styles.btn,
              {
                borderWidth: selected === 'yearly' ? 0 : 1,
                backgroundColor:
                  selected === 'yearly' ? Color.primary : Color.bgColor,
              },
            ]}>
            <CustomText
              style={[
                styles.btn_text,
                {
                  color: selected === 'yearly' ? Color.white : Color.black,
                },
              ]}>
              yearly
            </CustomText>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={plans}
          // data={[]}
          renderItem={({item}) => {(
            <View></View>

          )}}
          ListEmptyComponent={<CustomText style={styles.empty_text}>No Plans Found!</CustomText>}
        />
      </View>
    </SafeAreaView>
  );
};

export default PricingComparison;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
  },
  inner_container: {
    paddingHorizontal: moderateScale(20, 0.6),
    width: '100%',
    backgroundColor: Color.bgColor,
    height: '100%',
    paddingVertical: moderateScale(10, 0.6),
  },
  title: {
    fontSize: moderateScale(25, 0.6),
    color: Color.black,
    fontWeight: 'bold',
    marginBottom: moderateScale(20, 0.6),
  },
  row: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: moderateScale(15, 0.6),
  },
  btn: {
    paddingVertical: moderateScale(15, 0.6),
    width: windowWidth * 0.4,
    alignItems: 'center',
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: Color.btntextColor,
    marginHorizontal: moderateScale(5, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(17, 0.6),
    color: Color.black,
  },
  empty_text :{
    textAlign : 'center',
    marginTop : moderateScale(20,.6),
    fontSize : moderateScale(16,.6),
    color : Color.black,
    alignSelf : 'center',
    marginTop : windowHeight * 0.25,
  }
});
