import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import MembershipCard from '../Components/MembershipCard';
import AppointmentCard from '../Components/AppointmentCard';
import CustomImage from '../Components/CustomImage';
import {mode} from 'native-base/lib/typescript/theme/tools';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const MemberPerks = () => {
  const vouchers = [
    {
      id: '1',
      title: 'Membership 01',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
      image: require('../Assets/Images/vocher1.png'),
    },
    {
      id: '2',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
      image: require('../Assets/Images/voucher2.png'),
    },

    {
      id: '3',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
      image: require('../Assets/Images/vocher1.png'),
    },
  ];

  const appointments = [
    {
      id: '1',
      title: 'Discount Codes #1',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Tempor Lacus Eros, At Scelerisque Arcu Feugiat Ut. Praesent Tempus Ipsum Leo, A Gravida Metus Luctus Et.',
      image: require('../Assets/Images/qrCode.png'),
    },
    {
      id: '2',
      title: 'Discount Codes #2',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Tempor Lacus Eros, At Scelerisque Arcu Feugiat Ut. Praesent Tempus Ipsum Leo, A Gravida Metus Luctus Et.',
      image: require('../Assets/Images/qrCode.png'),
    },
    {
      id: '3',
      title: 'Discount Codes #3',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Maecenas Tempor Lacus Eros, At Scelerisque Arcu Feugiat Ut. Praesent Tempus Ipsum Leo, A Gravida Metus Luctus Et.',
      image: require('../Assets/Images/qrCode.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        textstyle={{
          right: 25,
        }}
        title={'Member Perks'}
        headerColor={Color.bgColor}
      />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: moderateScale(20, 0.6),
          }}>
          <ImageBackground
            style={styles.first_con}
            source={require('../Assets/Images/image2.png')}>
            <CustomText isBold style={styles.h1}>
              Exclusive Offers
            </CustomText>
            <CustomText style={styles.txt}>
              At Vitality Access, We Believe Optimal Wellness Should Be Within
              Everyone's Reach. Our Curated Membership Unlocks Exclusive Pricing
              And Access To The Most Advanced Holistic And Regenerative
              Treatments Available Today.
            </CustomText>
          </ImageBackground>
          <View style={styles.row_view}>
            <CustomText isBold style={[styles.h1, {color: Color.btntextColor}]}>
              Redeemable Vouchers
            </CustomText>
            <CustomText style={styles.text}>View All</CustomText>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={vouchers}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
              <View
                style={{
                  width: windowWidth * 0.6,
                  height: windowWidth * 0.4,
                  marginRight: moderateScale(10, 0.6),
                  marginTop: moderateScale(15, 0.6),
                }}>
                <CustomImage
                  source={item?.image}
                  style={{
                    width: '100%',
                    height: '90%',
                    borderRadius: moderateScale(10, 0.6),
                  }}
                />
              </View>
            )}
          />
          <View style={[styles.row_view]}>
            <CustomText isBold style={[styles.h1, {color: Color.btntextColor}]}>
              Discount Codes
            </CustomText>
            <CustomText style={styles.text}>View All</CustomText>
          </View>
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <AppointmentCard
                title={item.title}
                description={item.description}
                image={item.image}
                style={{
                  backgroundColor: Color.primary,
                }}
                textstyles={{
                  color: Color.white,
                }}
                isAvailable={false}
                btn_style={{
                  width: moderateScale(100, 0.6),
                  backgroundColor: Color.btntextColor,
                  height: moderateScale(30, 0.6),
                  borderRadius: moderateScale(20, 0.6),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                btn_text={'Book Appointment'}
              />
            )}
          />
          <View style={{height: windowHeight * 0.1}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemberPerks;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
  },
  first_con: {
    height: windowHeight * 0.17,
    width: windowWidth * 0.92,
    borderRadius: moderateScale(10, 0.6),
    alignItems: 'flex-start',
    paddingHorizontal: moderateScale(15, 0.6),
    paddingTop: moderateScale(30, 0.6),
  },
  text: {
    fontSize: moderateScale(10, 0.6),
    color: Color.btntextColor,
  },
  h1: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  txt: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
  },
  memberships_con: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.9,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15, 0.6),
    paddingVertical: moderateScale(9, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  title: {
    fontSize: moderateScale(14, 0.6),
    color: Color.btntextColor,
    letterSpacing: 0.6,
    fontWeight: '700',
  },
  sub_txt: {
    fontSize: moderateScale(11, 0.6),
    color: Color.btntextColor,
  },

  sectionTitle: {
    fontSize: moderateScale(15, 0.6),
    color: Color.btntextColor,
    alignSelf: 'flex-start',
    paddingHorizontal: moderateScale(20, 0.6),
    paddingTop: moderateScale(10, 0.6),
  },
});
