import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight, windowWidth} from '../Utillity/utils';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import CustomButton from '../Components/CustomButton';

const AppointmentManagement = () => {
  const [proivder, setProvider] = useState('');
  const [service, setService] = useState('');
  const [distance, setDistance] = useState('');
  const [pickedDate, setPickedDate] = useState('');
  const [pickedTime, setPickedTime] = useState('');
  const dummyItems = {
    provider: ['Provider 1', 'Provider 2', 'Provider 3'],
    service: ['Service 1', 'Service 2', 'Service 3'],
    distance: ['5 km', '10 km', '15 km'],
    time: ['10:00 AM', '11:00 AM', '12:00 PM'],
    date: ['2023-10-01', '2023-10-02', '2023-10-03'],
  };

  return (
    <SafeAreaView style={styles.mainScreen}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        textstyle={{
          fontWeight: 'bold',
          fontSize: moderateScale(18, 0.2),
          color: Color.white,
          opacity: 0.85,
        }}
        // notificationIcon={true}
        headerColor={Color.primaryColor}
        title={'Appointment Management'}
      />
      <LinearGradient
        colors={[Color.primaryColor, Color.secondaryColor]}
        start={{x: 0.4, y: 0.1}}
        end={{x: 0.4, y: 0.4}}
        style={{width: windowWidth, height: '100%', alignItems: 'center'}}>
        <DropDownSingleSelect
          array={dummyItems.provider}
          item={proivder}
          setItem={setProvider}
          width={windowWidth * 0.9}
          placeHolderColor={Color.white}
          // placeholder={'Ápproval for Admittance'}
          placeholder={'Provider+'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: '#737d6b',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.07,
          }}
        />
        <DropDownSingleSelect
          array={dummyItems.service}
          item={service}
          setItem={setService}
          width={windowWidth * 0.9}
          placeHolderColor={Color.white}
          // placeholder={'Ápproval for Admittance'}
          placeholder={'Services'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: '#737d6b',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.07,
          }}
        />
        <DropDownSingleSelect
          array={dummyItems.distance}
          item={distance}
          setItem={setDistance}
          width={windowWidth * 0.9}
          placeHolderColor={Color.white}
          // placeholder={'Ápproval for Admittance'}
          placeholder={'Distance'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: '#737d6b',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.07,
          }}
        />
        <DropDownSingleSelect
          array={dummyItems.date}
          item={pickedDate}
          setItem={setPickedDate}
          width={windowWidth * 0.9}
          placeHolderColor={Color.white}
          // placeholder={'Ápproval for Admittance'}
          placeholder={'Pick Date'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: '#737d6b',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.07,
          }}
        />
        <DropDownSingleSelect
          array={dummyItems.time}
          item={pickedTime}
          setItem={setPickedTime}
          width={windowWidth * 0.9}
          placeHolderColor={Color.white}
          // placeholder={'Ápproval for Admittance'}
          placeholder={'Pick Time'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: '#737d6b',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.07,
          }}
        />

        <CustomButton
          isBold
          text={'Confirm Booking'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.btntextColor}
          borderWidth={2}
          borderColor={'#FFFFFF5C'}
          borderRadius={moderateScale(30, 0.3)}
          width={windowWidth * 0.9}
          height={windowHeight * 0.08}
          bgColor={Color.btn_Color}
          textTransform={'capitalize'}
          marginTop={windowHeight * 0.04}
          elevation={true}
          onPress={() => {
            // Handle booking confirmation logic here
            console.log('Booking Confirmed');
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AppointmentManagement;

const styles = StyleSheet.create({});
