import React, {use, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {moderateScale} from 'react-native-size-matters';
import SearchContainer from './SearchContainer';
import TextInputWithTitle from './TextInputWithTitle';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from './CustomButton';
import CallBooking from '../Screens/CallBooking';
import navigationService from '../navigationService';

const RequestModal = ({setRef, ref}) => {;
  const [minPrice, setinPrice] = useState('');
  const [callType, setCallType] = useState('');
  const [isvisible, setIsVisible] = useState(false);

  console.log('🚀 ~ RequestModal ~ callType:', isvisible);

  const timing = [
    'Monday 24 at 12:00 PM',
    'Monday 24 at 13:00 PM',
    'Monday 24 at 14:00 PM',
    'Monday 24 at 15:00 PM',
    'Monday 24 at 16:00 PM',
  ];
  return (
    <RBSheet     
      closeOnDragDown={true}
      ref={ref}
      height={450}
      dragFromTopOnly={true}
      openDuration={250}
      // closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: callType != '' ? windowHeight * 0.75 : windowHeight * 0.27,
        },
      }}>
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#293640',
        }}>
        <View style={styles.header}>
          <CustomText style={styles.title}>
            {callType != '' ? 'Call' : 'Request a call'}
          </CustomText>
          <TouchableOpacity style={styles.cross_btn} onPress={()=>{
            ref.current?.close()
          }}>
            <Icon
              as={Entypo}
              color={Color.white}
              name="cross"
              size={moderateScale(18, 0.6)}
            />
          </TouchableOpacity>
        </View>
        {callType != '' ? (
          <View
            style={{
              paddingVertical: moderateScale(10, 0.6),
              //   backgroundColor: 'red',
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
            }}>
            <CustomText style={styles.title}>Select a call type</CustomText>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(12.6),
              }}>
              Let us know what kind of call would you like to have
            </CustomText>
            <View style={styles.row_con}>
              <TouchableOpacity
                onPress={() => {
                  setCallType('audiocall');
                }}
                style={[
                  styles.btn_type,
                  {
                    borderWidth: callType == 'audiocall' ? 0.5 : 0,
                    borderColor:
                      callType == 'audiocall' ? Color.white : 'transparent',
                  },
                ]}>
                <Icon
                  style={{
                    marginRight: moderateScale(10, 0.6),
                    marginTop: moderateScale(2, 0.6),
                  }}
                  name="call-out"
                  as={SimpleLineIcons}
                  size={moderateScale(15, 0.6)}
                  color={Color.white}
                />
                <CustomText
                  onPress={() => {
                    setCallType('audiocall');
                  }}
                  style={styles.type_text}>
                  audio call
                </CustomText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCallType('videocall');
                }}
                style={[
                  styles.btn_type,
                  {
                    borderWidth: callType == 'videocall' ? 0.5 : 0,
                    borderColor:
                      callType == 'videocall' ? Color.white : 'transparent',
                  },
                ]}>
                <Icon
                  style={{
                    marginRight: moderateScale(10, 0.6),
                  }}
                  name="videocam-outline"
                  as={Ionicons}
                  size={moderateScale(18, 0.6)}
                  color={Color.white}
                />
                <CustomText
                  style={styles.type_text}
                  onPress={() => {
                    setCallType('videocall');
                  }}>
                  video call
                </CustomText>
              </TouchableOpacity>
            </View>
            <CustomText style={styles.title}>Choose date and time</CustomText>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(12.6),
                paddingBottom: moderateScale(10, 0.6),
              }}>
              Select the day and hour when you want to have your call
            </CustomText>
            {timing?.map(item => {
              return (
                <View style={styles.timing_card}>
                  <Icon
                    style={{
                      marginRight: moderateScale(8, 0.6),
                    }}
                    as={Feather}
                    name="clock"
                    size={moderateScale(18, 0.6)}
                    color={Color.white}
                  />
                  <CustomText
                    style={{
                      color: Color.white,
                      fontSize: moderateScale(14, 0.6),
                    }}>
                    {item}
                  </CustomText>
                </View>
              );
            })}
            <CustomButton
              text={'Book a call'}
              fontSize={moderateScale(15, 0.3)}
              textColor={Color.white}
              borderRadius={moderateScale(15, 0.3)}
              width={windowWidth * 0.9}
              height={windowHeight * 0.06}
              bgColor={Color.themeBrand600}
              textTransform={'capitalize'}
              marginTop={moderateScale(10, 0.6)}
              onPress={() =>{
                // setIsVisible(true)
                navigationService.navigate("CallBooking", {
                  fromCall:false
                })
                // console.log('fasjhdfjkhjaksdh fjkhad hello mai hu ')
              }}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                setCallType('videocall');
              }}
              style={[
                styles.btn,
                {
                  marginTop: moderateScale(25, 0.6),
                },
              ]}>
              <Icon
                style={{
                  marginRight: moderateScale(10, 0.6),
                }}
                as={Ionicons}
                name="videocam-outline"
                size={moderateScale(16, 0.6)}
                color={Color.white}
              />
              <CustomText
                onPress={() => {
                  setCallType('videocall');
                }}
                style={styles.btn_text}>
                Make a video call
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCallType('audiocall');
              }}
              style={styles.btn}>
              <Icon
                style={{
                  marginRight: moderateScale(10, 0.6),
                }}
                as={SimpleLineIcons}
                name="call-out"
                size={moderateScale(16, 0.6)}
                color={Color.white}
              />
              <CustomText
                onPress={() => {
                  setCallType('audiocall');
                }}
                style={styles.btn_text}>
                Make an audio call
              </CustomText>
            </TouchableOpacity>
          </>
        )}
      </View>
      {/* <CallBooking
      isvisible={isvisible}
      setIsVisible={setIsVisible}/> */}
    </RBSheet>
  );
};

export default RequestModal;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
    borderBottomWidth: 0.2,
    borderBottomColor: Color.white,
  },
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

  btn: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    borderWidth: 0.5,
    borderColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: moderateScale(10, 0.6),
    alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: moderateScale(15, 0.6),
    marginVertical: moderateScale(5, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
    textTransform: 'none',
  },
  btn_type: {
    width: windowWidth * 0.4,
    backgroundColor: '#2D3F4E',
    // marginHorizontal: moderateScale(10, 0.6),
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: windowHeight * 0.045,

    paddingVertical: moderateScale(8, 0.6),
    borderRadius: 5,
  },
  type_text: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  row_con: {
    flexDirection: 'row',
    borderRadius: 5,
    width: windowWidth * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
    height: windowHeight * 0.05,
    backgroundColor: '#273844',
    // paddingVertical : moderateScale()
    justifyContent: 'space-between',
    marginVertical: moderateScale(10, 0.6),
  },
  timing_card: {
    width: windowWidth * 0.9,
    borderWidth: 0.4,
    borderColor: Color.white,
    paddingVertical: moderateScale(13, 0.6),
    flexDirection: 'row',
    borderRadius: 8,
    marginVertical: moderateScale(5, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
});
