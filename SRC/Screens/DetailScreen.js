import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomHeader from '../Components/CustomHeader';
import Color from '../Assets/Utilities/Color';
import { moderateScale } from 'react-native-size-matters';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';

import { AirbnbRating, Rating } from 'react-native-ratings';
import CustomButton from '../Components/CustomButton';
import { Icon } from 'native-base';
// import {moderateScale} from 'react-native-size-matters';
const DetailScreen = () => {
  const [rating, setRating] = useState(5);
  const contactArray = [
    {
      id: 1,
      icon: {
        name: 'phone',
        as: FontAwesome,
      },
      label: 'phone no',
    },

    {
      id: 3,
      icon: {
        name: 'email',
        as: Zocial,
      },
      label: 'email',
    },
    {
      id: 2,
      icon: {
        name: 'whatsapp',
        as: FontAwesome,
      },
      label: 'whatsapp',
    },
  ];
  const servicesArray = [
    {
      id: 1,
      label: 'Cardiology\n Checkups',
      image: require('../Assets/Images/services1.png'),
    },
    {
      id: 2,
      label: 'Ecg And \nStress Test',
      image: require('../Assets/Images/service2.png'),
    },
    {
      id: 3,
      label: 'Hypertension \n Management',
      image: require('../Assets/Images/service3.png'),
    },
    {
      id: 4,
      label: 'Online \n Consultation',
      image: require('../Assets/Images/service4.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
      <CustomHeader
        title={'Find Doctors/Clinic'}
        backgroundColor={Color.bgColor}
      />
      <View style={styles.inner_container}>
        <View style={styles.row}>
          <View style={styles.image_con}>
            <CustomImage
              style={{ height: '100%', width: '100%' }}
              source={require('../Assets/Images/doctor.png')}
            />
          </View>
          <View style={styles.text_container}>
            <CustomText isBold style={styles.h1}>
              dr. sarah ahmed
            </CustomText>
            <CustomText style={styles.text1}>cardiologist </CustomText>
            <View style={styles.row}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={15}
                startingValue={rating}
              />
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.black,
                }}>
                (230 Reviews)
              </CustomText>
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                },
              ]}>
              <CustomText
                style={[
                  styles.text1,
                  {
                    fontSize: moderateScale(13, 0.6),
                  },
                ]}>
                cardiology
              </CustomText>
              <CustomText
                style={[
                  styles.text1,
                  {
                    // paddingHorizontal : moderateScale(10,.6)
                  },
                ]}>
                10 +year
              </CustomText>
            </View>
            <View
              style={[
                styles.row,
                {
                  justifyContent: 'space-between',
                },
              ]}>
              <CustomText
                style={{
                  color: Color.black,
                  fontSize: moderateScale(13, 0.6),
                }}>
                cardiology
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.black,
                }}>
                10 +year
              </CustomText>
            </View>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
              },
            ]}>
            <CustomText isBold style={styles.heading}>
              About
            </CustomText>
            <CustomButton
              isBold
              text={'Book appiontment'}
              fontSize={moderateScale(16, 0.6)}
              textColor={Color.white}
              borderWidth={2}
              borderColor={'#FFFFFF5C'}
              borderRadius={moderateScale(20, 0.3)}
              width={windowWidth * 0.6}
              height={windowHeight * 0.064}
              bgColor={Color.primary}
              textTransform={'capitalize'}
              onPress={() => {
                console.log('Booking Confirmed');
              }}
            />
          </View>
          <View style={[styles.row]}>
            <View style={{ width: windowWidth * 0.3 }}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.black,
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </CustomText>
            </View>

            <View style={styles.contact_con}>
              <CustomText isBold style={[styles.heading]}>
                Consult online
              </CustomText>
              <View style={styles.box_con}>
                {contactArray?.map((item, index) => {
                  return (
                    <View style={styles.sec_btn}>
                      <Icon
                        as={item?.icon?.as}
                        name={item?.icon?.name}
                        color={Color.black}
                        size={moderateScale(18, 0.6)}
                      />
                      <CustomText
                        style={{
                          fontSize: moderateScale(14, 0.6),
                          color: Color.black,
                          paddingHorizontal: moderateScale(5, 0.6),
                        }}>
                        {item?.label}
                      </CustomText>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
          <CustomText isBold style={styles.heading}>
            services
          </CustomText>
          <View
            style={[
              styles.box_con,
              {
                width: '100%',
              },
            ]}>
            {servicesArray?.map((item, index) => {
              return (
                <TouchableOpacity style={styles.service_btn}>
                  <View
                    style={{
                      height: windowHeight * 0.04,
                      width: windowHeight * 0.04,
                    }}>
                    <CustomImage
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      source={item.image}
                    />
                  </View>
                  <CustomText
                    style={[
                      styles.btn_text,
                      {
                        textAlign: 'center',
                        marginLeft: moderateScale(5, 0.6),
                      },
                    ]}>
                    {item?.label}
                  </CustomText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

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
  row: {
    flexDirection: 'row',
  },
  image_con: {
    height: windowHeight * 0.15,
    width: windowHeight * 0.15,
    borderRadius: (windowHeight * 0.15) / 2,
  },
  text_container: {
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
  },
  h1: {
    fontSize: moderateScale(22, 0.6),
    color: Color.black,
  },

  text1: {
    fontSize: moderateScale(13, 0.6),
    color: Color.black,
    paddingVertical: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(22, 0.6),
    color: Color.black,
    paddingVertical: moderateScale(15, 0.6),
  },
  contact_con: {
    marginLeft: moderateScale(20, 0.6),
  },
  box_con: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sec_btn: {
    flexDirection: 'row',
    padding: moderateScale(5, 0.6),
    borderRadius: 15,
  },
  service_btn: {
    flexDirection: 'row',
    marginVertical: moderateScale(10, 0.6),
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(5, 0.6),
    backgroundColor: '#8B9781',
    borderRadius: 20,
  },
});
