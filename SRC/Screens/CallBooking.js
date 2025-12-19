import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import navigationService from '../navigationService';

// const CallBooking = ({isvisible ,setIsVisible}) => {
//   console.log("🚀 ~ CallBooking ~ isvisible:", isvisible)

//   const paymentData = [
//     {
//       id: 1,
//       label: 'id',
//       value: '9388295',
//     },
//     {
//       id: 2,
//       label: 'Convenience Fees',
//       value: '$100.00',
//     },
//     {
//       id: 3,
//       label: 'Estimated taxes',
//       value: '$120.00',
//     },
//   ];

//   return (
//     <Modal
//       transparent={true}
//       animationType="fade"
//       visible={isvisible}
//       onRequestClose={() => setIsVisible(false)}>
//         <CustomText>dhfjkahsdjkfh </CustomText>
//     </Modal>
//   );
// };

// export default CallBooking;

const CallBooking = ({navigation,route}) => {
  const fromcall =route?.params?.fromCall;
  //  props?.params?.route?.fromcall
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <View style={styles.header}>
        <CustomText isBold style={styles.title}>
          Call
        </CustomText>
        <TouchableOpacity style={styles.cross_btn} onPress={()=>{
          navigation.goBack();
        }}>
          <Icon
            as={Entypo}
            color={Color.white}
            name="cross"
            size={moderateScale(18, 0.6)}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.mainScreen,
          {
            paddingBottom: moderateScale(190, 0.6),
          },
        ]}>
        <View style={styles.verify_image}>
          <CustomImage
            style={styles.image}
            source={require('../Assets/Images/check1.png')}
          />
        </View>
        <CustomText style={styles.h1}>
          Your call request was successfully made!
        </CustomText>
        <CustomText style={styles.sub_title}>
          Check your order details below
        </CustomText>

        <View style={styles.pay_con}>
          <CustomText numberOfLines={2} style={styles.h2}>
            summary
          </CustomText>
          {/* <View style={styles.text_con}>
            <CustomText numberOfLines={2} style={styles.h3}>
              Ultrasound for fetal anatomy assessment
            </CustomText>
            <CustomText numberOfLines={2} style={styles.h4}>
              service
            </CustomText>
            <CustomText
              numberOfLines={2}
              style={[
                styles.h3,
                {
                  paddingTop: moderateScale(10, 0.6),
                },
              ]}>
              HealthFirst Medical
            </CustomText>
            <CustomText numberOfLines={2} style={styles.h4}>
              provider
            </CustomText>
          </View> */}

          {/* <View
            style={[
              styles.sec_row,
              {
                paddingTop: moderateScale(10, 0.6),
              },
            ]}> */}
          <CustomText
            style={[
              styles.text_tal,
              {
                marginTop: moderateScale(10, 0.6),
                fontSize : moderateScale(13,.6)

              },
            ]}>
            HealthFirst Medical
          </CustomText>
          <CustomText style={styles.text_tal}>Provider</CustomText>
          {/* </View> */}

          {/* <View style={styles.sec_row}> */}
          <CustomText
            style={[
              styles.text_tal,
              {
                marginTop: moderateScale(10, 0.6),
                fontSize : moderateScale(13,.6)

              },
            ]}>
            Audio call
          </CustomText>
          <CustomText style={styles.text_tal}>type</CustomText>
          {/* </View>
          <View style={styles.sec_row}> */}
          <CustomText
            style={[
              styles.text_tal,
              {
                marginTop: moderateScale(10, 0.6),
                fontSize : moderateScale(13,.6)

              },
            ]}>
            Monday 24, 2025
          </CustomText>
          <CustomText style={styles.text_tal}>date</CustomText>
          {/* </View>
          <View style={styles.sec_row}> */}
          <CustomText
            style={[
              styles.text_tal,
              {
                marginTop: moderateScale(10, 0.6),
                fontSize : moderateScale(13,.6)
              },
            ]}>
            13:00 PM
          </CustomText>
          <CustomText style={styles.text_tal}>$time</CustomText>
          {/* </View> */}
        </View>
    { !fromcall &&   <CustomButton
          text={'go to home'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.white}
          borderWidth={0.5}
          borderColor={Color.white}
          borderRadius={moderateScale(15, 0.3)}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          bgColor={'#354654'}
          onPress={()=>{
            navigationService.navigate("TabNavigation")
          }}
          textTransform={'capitalize'}
          marginTop={moderateScale(10, 0.6)}
        />}
        <CustomButton
          text={fromcall ? 'join call' :'see my call requests'}
          fontSize={moderateScale(15, 0.3)}
          textColor={Color.white}
          borderRadius={moderateScale(15, 0.3)}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          bgColor={Color.themeBrand600}
          textTransform={'capitalize'}
          marginTop={fromcall ?  windowHeight*0.13:moderateScale(10, 0.6)}
          onPress={() =>{
            fromcall ? 
            navigationService.navigate('AudioCAllScreen',{
              fromcallBooking :true 
            })
            :
            navigationService.navigate('ChatScreen',{
              fromcallBooking :true 
            })
          }}
        />
      </View>
    </ScreenBoiler>
  );
};

export default CallBooking;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#374653',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verify_image: {
    height: windowHeight * 0.13,
    width: windowWidth * 0.3,
    alignSelf: 'center',
    marginTop: moderateScale(35, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: windowHeight * 0.075,
    fontSize: moderateScale(18, 0.6),
    textAlign: 'center',
    paddingTop: moderateScale(20, 0.6),
    color: Color.white,
    fontWeight: '700',
    borderBottomWidth: 0.4,
    borderColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F2D37',
    paddingHorizontal: moderateScale(15, 0.6),
  },
  h1: {
    fontSize: moderateScale(22, 0.6),
    color: Color.white,
    textAlign: 'center',
    textTransform: 'none',
    width: windowWidth * 0.9,
    alignSelf: 'center',
    marginTop: moderateScale(7, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },
  sub_title: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    textTransform: 'none',

    textAlign: 'center',
  },
  h2: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
    paddingBottom: moderateScale(10, 0.6),
    fontWeight: '700',
    borderBottomWidth: 0.4,
    borderColor: Color.white,
  },
  h3: {
    color: Color.white,
    fontSize: moderateScale(13, 0.6),
    fontWeight: '700',
    // paddingBottom: moderateScale(10, 0.6),
  },
  h4: {
    color: Color.white,
    fontSize: moderateScale(13, 0.6),
  },
  pay_con: {
    width: windowWidth * 0.9,
    borderRadius: 10,
    alignSelf: 'center',
    height: windowHeight * 0.3,
    marginVertical: moderateScale(20, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    borderWidth: 0.2,
    borderColor: Color.white,
  },
  sec_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: moderateScale(5, 0.6),
  },
  text_tal: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  row_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15, 0.6),
    borderBottomWidth: 0.2,
    borderColor: Color.white,
  },
  map_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(4, 0.6),
  },
  text_con: {
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: Color.white,
    paddingVertical: moderateScale(10, 0.6),
  },
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   paddingVertical: moderateScale(15, 0.6),
  //   paddingHorizontal: moderateScale(15, 0.6),
  //   borderBottomWidth: 0.2,
  //   borderBottomColor: Color.white,
  // },
  title: {
    letterSpacing: 0.8,
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
    marginTop: moderateScale(5, 0.6),
    textTransform: 'none',
  },
  loc: {
    paddingTop: moderateScale(15, 0.6),
    color: Color.white,
    fontSize: moderateScale(14, 0.6),
  },

  cross_btn: {
    height: windowHeight * 0.035,
    width: windowWidth * 0.1,
    borderWidth: 0.5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    backgroundColor: '#354654',
  },
});
