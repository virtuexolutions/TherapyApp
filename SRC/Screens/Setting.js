import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import { windowHeight, windowWidth } from '../Utillity/utils';
import MembershipCard from '../Components/MembershipCard';
import AppointmentCard from '../Components/AppointmentCard';
import CustomButton from '../Components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogoutAuth } from '../Store/slices/auth';
import navigationService from '../navigationService';

const Setting = () => {
  const dispatch = useDispatch();
  const role = useSelector(state => state.authReducer.role);
  return (
    <ImageBackground
      source={require('../Assets/Images/background_image.jpg')}
      imageStyle={{ width: '100%', height: '100%' }}
      style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      {/* <View style={{ marginTop: moderateScale(20, 0.6) }} /> */}
      <Header
        textstyle={{
          right: 25,
        }}
        title={
          role?.toLowerCase() == 'user'
            ? 'Account Settings'
            : 'Account Settings'
        }
        headerColor={Color.bgColor}
      />

      <View style={styles.box_view}>
        {role?.toLowerCase() == 'user' && (
          <CustomText isBold style={styles.h1}>
            Sarah R. James
          </CustomText>
        )}
        <View
          style={{
            width: windowWidth * 0.9,
            height: 1,
            backgroundColor: Color.lightGrey,
            marginVertical: moderateScale(10, 0.6),
          }}
        />

        {/* <TouchableOpacity>
          <CustomText style={[styles.txt]}>Manage Profile Info</CustomText>
        </TouchableOpacity> */}
        {role == 'user' && (
          <TouchableOpacity
            onPress={() => {
              navigationService.navigate('PricingComparison');
            }}>
            <CustomText style={[styles.txt]}>
              Subscription Management
            </CustomText>
          </TouchableOpacity>
        )}
        {role == 'user' && (
          <TouchableOpacity
            onPress={() => {
              navigationService.navigate('MyBookings');
            }}>
            <CustomText style={[styles.txt]}>my Bookings</CustomText>
          </TouchableOpacity>
        )}
        {role == 'user' && (
          <TouchableOpacity
            onPress={() => {
              navigationService.navigate('Discount');
            }}>
            <CustomText style={[styles.txt]}>Referral Discount</CustomText>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('CompairProvider');
          }}>
          <CustomText style={[styles.txt]}>Compare providers</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('PaitentReview');
          }}>
          <CustomText style={[styles.txt]}>Reviews</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('SavedClinic');
          }}>
          <CustomText style={[styles.txt]}>Saved Clinic</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('PackagesBundles');
          }}>
          <CustomText style={[styles.txt]}>Packages / Bundles</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('TrustBadge');
          }}>
          <CustomText style={[styles.txt]}>Badges</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigationService.navigate('journeyGuide');
          }}>
          <CustomText style={[styles.txt]}>Journey Guide</CustomText>
        </TouchableOpacity>
        {role != 'user' && (
          <TouchableOpacity
            onPress={() => {
              navigationService.navigate('AppointmentManagement');
            }}>
            <CustomText style={[styles.txt]}>Appointment management</CustomText>
          </TouchableOpacity>
        )}
        {/* <TouchableOpacity>
          <CustomText style={[styles.txt]}>
            Set Notification Perfereces
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText style={[styles.txt]}>Update Payment Methods</CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText style={[styles.txt]}>Support & Faqs</CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText style={[styles.txt]}>Refer A Friend</CustomText>
        </TouchableOpacity> */}
        {role != 'user' && (
          <TouchableOpacity
            onPress={() => {
              navigationService.navigate('ServicesManagement');
            }}>
            <CustomText
              onPress={() => {
                navigationService.navigate('ServicesManagement');
              }}
              style={[styles.txt]}>
              service management
            </CustomText>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            dispatch(setUserLogoutAuth());
          }}>
          <CustomText style={[styles.txt]}>Logout</CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
};

export default Setting;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
    paddingTop: moderateScale(20, 0.6),
  },

  h1: {
    fontSize: moderateScale(18, 0.6),
    color: Color.btntextColor,
    width: windowWidth * 0.9,
  },
  txt: {
    fontSize: moderateScale(14, 0.6),
    color: '#2A3821',
    width: windowWidth * 0.9,
    marginTop: moderateScale(18, 0.6),
  },
  box_view: {
    borderRadius: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
});
