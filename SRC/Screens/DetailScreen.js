import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
      id: 2,
      icon: {
        name: 'whatsapp',
        as: FontAwesome,
      },
      label: 'whatsapp',
    },
    {
      id: 3,
      icon: {
        name: 'email',
        as: Zocial,
      },
      label: 'email',
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
        <View style={styles.row}>
          <View style={styles.image_con}>
            <CustomImage
              style={{height: '100%', width: '100%'}}
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
                  fontSize: moderateScale(14, 0.6),
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
                    fontSize: moderateScale(15, 0.6),
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
                  fontSize: moderateScale(15, 0.6),
                }}>
                cardiology
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(15, 0.6),
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
            <View style={{width: windowWidth * 0.3}}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(15, 0.6),
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
                    <View style={styles.row}>
                    {/* // <View> */}
                      <Icon
                        as={item?.icon?.as}
                        name={item?.icon?.name}
                        color={Color.black}
                        size={moderateScale(18, 0.6)}
                      />
                      <CustomText
                        style={{
                          fontSize: moderateScale(16, 0.6),
                          color: Color.black,
                          paddingHorizontal: moderateScale(5, 0.6),
                        }}>
                        {item?.label}
                      </CustomText>
                     </View> 
                    {/* </View> */}
                  );
                })}
              </View>
            </View>
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
    fontSize: moderateScale(25, 0.6),
    color: Color.black,
  },

  text1: {
    fontSize: moderateScale(15, 0.6),
    color: Color.black,
    paddingVertical: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(22, 0.6),
    color: Color.black,
    paddingVertical: moderateScale(15, 0.6),
  },
  contact_con: {
    marginLeft: moderateScale(58, 0.6),
  },
  box_con: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
