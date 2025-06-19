import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import {moderateScale} from 'react-native-size-matters';

const BookingConfrimModel = ({isVisible = true, setIsVisible}) => {
  return (
    <Modal
      hasBackdrop={true}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}>
      <View style={styles.main_con}>
        <View
          style={{
            height: windowHeight * 0.2,
            width: windowWidth * 0.4,
            marginTop: moderateScale(-20, 0.6),

          }}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
              backgroundColor :'red'
            }}
            source={require('../Assets/Images/check.png')}
          />
        </View>
        <CustomText style={{
            fontSize : moderateScale(10,.6) ,
        }}> success !</CustomText>
        <CustomText>
       
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.
        </CustomText>
        <TouchableOpacity>
          <CustomText>Confirm Booking</CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BookingConfrimModel;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight * 0.3,
    backgroundColor: Color.btntextColor,
    width: windowWidth * 0.9,
    alignItems :'center'
  },
});
