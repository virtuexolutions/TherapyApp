import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from '../Components/CustomText';
import MembershipCard from '../Components/MembershipCard';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';
import BookingConfrimModel from '../Components/BookingConfrimModel';

const MyBookings = () => {
  const memberships = [
    {
      id: '1',
      title: 'Membership 01',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },
    {
      id: '2',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },

    {
      id: '3',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },
  ];
  const upcomingBookings = [
    {
      id: '01',
      title: 'Upcoming Bookings 01',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu pulvinar metus.',
    },
    {
      id: '02',
      title: 'Upcoming Bookings 02',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu pulvinar metus.',
    },
    {
      id: '03',
      title: 'Upcoming Bookings 03',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu pulvinar metus.',
    },
  ];
  const selecteditem = {id: 1};
  return (
    <SafeAreaView>

    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        textstyle={{
          color: Color.btntextColor,
          fontWeight: '800',
          letterSpacing: 0.5,
        }}
        title={'My Bookings'}
        headerColor={Color.bgColor}
      />
      <View style={styles.Container}>
        <CustomText isBold style={styles.h1}>
          Past Bookings
        </CustomText>
        <CustomText style={styles.sub_txt}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.
        </CustomText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={memberships}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.horizontalList}
          renderItem={({item}) => <MembershipCard item={item} />}
        />
      </View>
      <View style={styles.sec_con}>
        <CustomText isBold style={styles.h2}>
          Upcoming Bookings
        </CustomText>
        <CustomText style={styles.sub_txt2}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.
        </CustomText>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={upcomingBookings}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.horizontalList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: windowWidth * 0.85,
                  height: windowHeight * 0.08,
                  backgroundColor:
                    selecteditem?.id == item?.id
                      ? Color.btntextColor
                      : '#8B9781',
                  borderRadius: moderateScale(10, 0.6),
                  marginVertical: moderateScale(5, 0.6),
                  flexDirection: 'row',
                  paddingVertical: moderateScale(10, 0.6),
                  paddingHorizontal: moderateScale(10, 0.6),
                }}>
                <View
                  style={{
                    width: windowWidth * 0.6,
                  }}>
                  <CustomText
                    isBold
                    style={{
                      fontSize: moderateScale(14, 0.6),
                      color: Color.white,
                      letterSpacing: 0.3,
                    }}>
                    {item?.title}
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: moderateScale(10, 0.6),
                      color: Color.white,
                    }}>
                    {item?.description}
                  </CustomText>
                </View>
                <TouchableOpacity
                  style={{
                    width: windowWidth * 0.22,
                    height: windowHeight * 0.035,
                    backgroundColor:
                      selecteditem?.id == item?.id
                        ? Color.btn_Color
                        : Color.btntextColor,
                    marginTop: moderateScale(12, 0.6),
                    borderRadius: moderateScale(30, 0.6),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    isBold
                    style={{
                      fontSize: moderateScale(10, 0.6),
                      color:
                        selecteditem?.id == item?.id
                          ? Color.btntextColor
                          : Color.btn_Color,
                      letterSpacing: 0.5,
                    }}>
                    Read More
                  </CustomText>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <CustomButton
        isBold
        text={'Reschedule '}
        fontSize={moderateScale(15, 0.3)}
        textColor={Color.btntextColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.9}
        height={windowHeight * 0.055}
        bgColor={Color.btn_Color}
        textTransform={'capitalize'}
        // marginTop={windowHeight * 0.04}
        elevation={false}
        //   onPress={}
      />
      <CustomButton
        isBold
        text={'Add To Calendar  '}
        fontSize={moderateScale(15, 0.3)}
        textColor={Color.btntextColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.9}
        height={windowHeight * 0.055}
        bgColor={Color.btn_Color}
        textTransform={'capitalize'}
        marginTop={moderateScale(5, 0.6)}
        elevation={false}
        //   onPress={}
      />
      <CustomButton
        isBold
        text={'Cancel'}
        fontSize={moderateScale(15, 0.3)}
        textColor={Color.btntextColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.9}
        height={windowHeight * 0.055}
        bgColor={Color.btn_Color}
        textTransform={'capitalize'}
        marginTop={moderateScale(5, 0.6)}
        elevation={false}
        //   onPress={}
      />
      
    </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookings;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,

    paddingHorizontal: moderateScale(10, 0.6),
  },
  Container: {
    backgroundColor: '#8B9781',
    width: windowWidth * 0.93,
    height: windowHeight * 0.2,
    borderRadius: 20,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  h1: {
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
    letterSpacing: 0.4,
  },
  sub_txt: {
    fontSize: moderateScale(10, 0.6),
    color: Color.white,
  },
  sec_con: {
    marginVertical: moderateScale(10, 0.6),
    backgroundColor: Color.white,
    width: windowWidth * 0.93,
    height: windowHeight * 0.38,
    borderRadius: 20,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  h2: {
    fontSize: moderateScale(16, 0.6),
    color: Color.btntextColor,
    letterSpacing: 0.4,
  },
  sub_txt2: {
    fontSize: moderateScale(10, 0.6),
    color: Color.btntextColor,
    marginBottom: moderateScale(10.6),
  },
});
