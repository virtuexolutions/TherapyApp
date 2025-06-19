import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import SubscriptionCard from '../Components/SubscriptionCard';

const Subscription = () => {
  const subscriptionPlans = [
    {
      id: '1',
      title: 'Best Value',
      price: 30.0,
      billingCycle: 'Monthly',
      features: [
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
      ],
      actions: [
        {
          text: 'Subscribe Now',
          type: 'primary',
        },
        {
          text: 'View benefits',
          type: 'secondary',
        },
      ],
      image: require('../Assets/Images/subcard1.png'),
    },
    {
      id: '2',
      title: 'most popular',
      price: ' $ 70.00',
      billingCycle: 'Monthly',
      features: [
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
      ],
      actions: [
        {
          text: 'Subscribe Now',
          type: 'primary',
        },
        {
          text: 'View benefits',
          type: 'secondary',
        },
      ],
      image: require('../Assets/Images/subcard2.png'),
    },
    {
      id: '3',
      title: 'most popular',
      price: ' $ 70.00',
      billingCycle: 'Monthly',
      features: [
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
        'Lorem Ipsum Dolor Sit Amet, Consectetu',
      ],
      actions: [
        {
          text: 'Subscribe Now',
          type: 'primary',
        },
        {
          text: 'View benefits',
          type: 'secondary',
        },
      ],
      image: require('../Assets/Images/subcard2.png'),
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
        title={'Good Morning, Sarah!'}
        headerColor={Color.bgColor}
      />
      <ImageBackground
        style={styles.first_con}
        source={require('../Assets/Images/subimage.png')}>
        <CustomText isBold style={styles.h1}>
          Basic Plan
        </CustomText>
        <CustomText style={styles.txt}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.
        </CustomText>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: Color.btn_Color,
              },
            ]}>
            <CustomText
              style={[
                styles.btn_txt,
                {
                  color: Color.btntextColor,
                  borderColor: Color.btntextColor,
                },
              ]}>
              Upgrade
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                width: windowWidth * 0.3,
                backgroundColor: Color.btntextColor,
                borderColor: Color.btn_Color,
              },
            ]}>
            <CustomText
              style={[
                styles.btn_txt,
                {
                  color: Color.btn_Color,
                },
              ]}>
              Cancel Membership
            </CustomText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.sec_con}>
        <CustomText isBold style={styles.h2}>
          Subscription Plans
        </CustomText>
        <CustomText style={styles.sub_txt}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.
        </CustomText>
        <FlatList
          data={subscriptionPlans}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          renderItem={({item}) => {
            return <SubscriptionCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    color: Color.btntextColor,
  },

  first_con: {
    height: windowHeight * 0.13,
    width: windowWidth * 0.92,
    borderRadius: moderateScale(20, 0.6),
    alignItems: 'flex-start',
    paddingHorizontal: moderateScale(15, 0.6),
    paddingTop: moderateScale(10, 0.6),
    overflow: 'hidden',
  },
  h1: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
  },
  txt: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
  },
  row: {
    flexDirection: 'row',
    paddingTop: moderateScale(5, 0.6),
  },
  button: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.2,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: moderateScale(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_txt: {
    fontSize: moderateScale(10, 0.6),
  },
  sec_con: {
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
    height: windowHeight * 0.7,
    width: windowWidth * 0.9,
    backgroundColor: Color.white,
    marginTop: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: Color.btntextColor,
    borderRadius: moderateScale(10, 0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  h2: {
    fontSize: moderateScale(16, 0.6),
    color: Color.btntextColor,
    letterSpacing: 0.4,
  },
  sub_txt: {
    fontSize: moderateScale(10, 0.6),
    color: Color.black,
  },
});
