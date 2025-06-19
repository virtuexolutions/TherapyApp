import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import TextInputWithTitle from '../Components/TextInputWithTitle';

const BookingScreen = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [BookingConfrim, setBookingConfrim] = useState('');

  const distances = [
    {title: '5 km', value: '5'},
    {title: '10 km', value: '10'},
    {title: '15 km', value: '15'},
  ];
  const providers = [
    {title: 'Provider A', value: 'provider_a'},
    {title: 'Provider B', value: 'provider_b'},
    {title: 'Provider C', value: 'provider_c'},
  ];
  const dates = [
    {title: '2025-06-19', value: '2025-06-19'},
    {title: '2025-06-20', value: '2025-06-20'},
    {title: '2025-06-21', value: '2025-06-21'},
  ];

  const times = [
    {title: '10:00 AM', value: '10:00'},
    {title: '12:00 PM', value: '12:00'},
    {title: '03:00 PM', value: '15:00'},
  ];
  const services = [
    {title: 'Physical Therapy', value: 'physical_therapy'},
    {title: 'Aromatherapy', value: 'aromatherapy'},
    {title: 'Occupational Therapy', value: 'occupational_therapy'},
  ];
  return (
    <ImageBackground
      style={styles.main_con}
      resizeMode="cover"
      source={require('../Assets/Images/modelbg.png')}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />

      <View style={styles.model_Con}>
        <CustomText isBold style={styles.heading}>
          Appointment Booking
        </CustomText>
        <DropDownSingleSelect
          array={providers}
          item={selectedProvider}
          setItem={setSelectedProvider}
          width={windowWidth * 0.85}
          placeHolderColor={Color.white}
          placeholder={'Select Provider'}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.8,
            marginTop: 10,
          }}
          dropDownColor={Color.secondaryColor}
          btnStyle={{
            backgroundColor: 'rgba(81,90,68,255)',
            borderColor: '#C0BDAE',
            borderWidth: 1,
            height: windowHeight * 0.055,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: moderateScale(10, 0.6),
          }}>
          <DropDownSingleSelect
            array={providers}
            item={services}
            setItem={setSelectedService}
            width={windowWidth * 0.41}
            placeHolderColor={Color.white}
            placeholder={'Choose Service'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.8,
              marginTop: 10,
            }}
            dropDownColor={Color.secondaryColor}
            btnStyle={{
              backgroundColor: 'rgba(81,90,68,255)',
              borderColor: '#C0BDAE',
              borderWidth: 1,
              height: windowHeight * 0.055,
            }}
          />
          <DropDownSingleSelect
            array={providers}
            item={selectedDistance}
            setItem={setSelectedDate}
            width={windowWidth * 0.41}
            placeHolderColor={Color.white}
            placeholder={'Distance'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.8,
              marginTop: 10,
            }}
            dropDownColor={Color.secondaryColor}
            btnStyle={{
              backgroundColor: 'rgba(81,90,68,255)',
              borderColor: '#C0BDAE',
              borderWidth: 1,
              height: windowHeight * 0.055,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: moderateScale(5, 0.6),
          }}>
          <DropDownSingleSelect
            array={dates}
            item={selectedDate}
            setItem={setSelectedDate}
            width={windowWidth * 0.41}
            placeHolderColor={Color.white}
            placeholder={'Pick Date'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.8,
              marginTop: 10,
            }}
            dropDownColor={Color.secondaryColor}
            btnStyle={{
              backgroundColor: 'rgba(81,90,68,255)',
              borderColor: '#C0BDAE',
              borderWidth: 1,
              height: windowHeight * 0.055,
            }}
          />
          <DropDownSingleSelect
            array={times}
            item={selectedTime}
            setItem={setSelectedTime}
            width={windowWidth * 0.41}
            placeHolderColor={Color.white}
            placeholder={'Distance'}
            dropdownStyle={{
              borderBottomWidth: 0,
              width: windowWidth * 0.8,
              marginTop: 10,
            }}
            dropDownColor={Color.secondaryColor}
            btnStyle={{
              backgroundColor: 'rgba(81,90,68,255)',
              borderColor: '#C0BDAE',
              borderWidth: 1,
              height: windowHeight * 0.055,
            }}
          />
        </View>
        <TextInputWithTitle
          placeholder={'Confirm Booking'}
          setText={setBookingConfrim}
          value={BookingConfrim}
          viewHeight={0.06}
          viewWidth={0.85}
          inputWidth={0.8}
          border={1}
          fontSize={moderateScale(10, 0.6)}
          borderRadius={30}
          backgroundColor={'rgba(81,90,68,255)'}
          borderColor={Color.btn_Color}
          marginTop={moderateScale(10, 0.3)}
          placeholderColor={Color.white}
          titleStlye={{right: 10}}
        />
      </View>
      <CustomButton
        isBold
        text={'Confirm Booking'}
        fontSize={moderateScale(18, 0.6)}
        textColor={Color.btntextColor}
        borderWidth={1.5}
        borderColor={Color.themtxtColor}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.8}
        height={windowHeight * 0.065}
        bgColor={Color.btn_Color}
        textTransform={'capitalize'}
        marginTop={moderateScale(-30, 0.6)}
        elevation={true}
        // onPress={}
      />
    </ImageBackground>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
  },
  model_Con: {
    height: windowHeight * 0.42,
    width: windowWidth * 0.9,
    backgroundColor: Color.btntextColor,
    alignSelf: 'center',
    marginTop: windowHeight * 0.27,
    borderRadius: moderateScale(25, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(16, 0.6),
    color: Color.btn_Color,
    letterSpacing: 0.5,
    alignSelf: 'center',
    paddingVertical: moderateScale(10, 0.6),
  },
});
