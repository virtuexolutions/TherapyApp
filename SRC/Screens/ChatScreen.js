import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {FlatList, Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {Rating} from 'react-native-ratings';
import CustomButton from '../Components/CustomButton';
import Review from '../Components/Review';
import {GiftedChat, Time} from 'react-native-gifted-chat';
import navigationService from '../navigationService';

const ChatScreen = props => {
  const fromcall = props?.route?.params?.fromcallBooking
  const [messages, setMessages] = useState([]);
  const [isCall, setIsCall] = useState(fromcall ? 'call' :'messages');

  const clinicMessages = [
    {
      id: '1',
      type: 'clinic-info',
      clinicName: 'HealthFirst Medical',
      description:
        "At HealthFirst Medical, we provide comprehensive fetal anatomy scans, offering a detailed glimpse into your baby's development and well-being.",
      time: '13:45 PM',
      isHighlighted: true,
      image: require('../Assets/Images/other.png'), // This appears to be the current clinic
    },
    {
      id: '2',
      type: 'clinic-info',
      clinicName: 'Green Valley Clinic',
      description:
        "Green Valley Clinic specializes in prenatal care with 3D imaging technology to ensure the best possible imaging for your baby's development.",
      time: '14:30 PM',
      image: require('../Assets/Images/gsk.png'), // This appears to be the current clinic
    },
    {
      id: '3',
      type: 'clinic-info',
      clinicName: 'Sunny Days Obstetrics',
      description:
        'At Sunny Days Obstetrics, we prioritize expectant mothers with personalized care and state-of-the-art ultrasound equipment.',
      time: '15:00 PM',
      image: require('../Assets/Images/chat1.png'), // This appears to be the current clinic
    },
    {
      id: '4',
      type: 'clinic-info',
      clinicName: "LifeCare Women's Health",
      description:
        "LifeCare Women's Health offers state-of-the-art ultrasound services focused on maternal and fetal health monitoring.",
      time: '15:30 PM',
      image: require('../Assets/Images/other.png'), // This appears to be the current clinic
    },
    {
      id: '5',
      type: 'clinic-info',
      clinicName: 'BabySteps Healthcare',
      description:
        "BabySteps Healthcare provides expert consultations and detailed examinations to monitor your baby's growth and development.",
      time: '16:00 PM',
      image: require('../Assets/Images/chat2.png'), // This appears to be the current clinic
    },
  ];

  const callData = [
    {
      id: 1,
      name: 'Green Valley Clinic',
      image: require('../Assets/Images/other.png'),
      call_info: 'Video call outgoing',
    },
    {
      id: 2,
      name: 'Green Valley Clinic',
      image: require('../Assets/Images/gsk.png'),
      call_info: 'Audio call outgoing',
    },
  ];
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello 👋',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Support',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((msgs = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msgs));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#1B2730'}}>
      <ScreenBoiler
        statusBarBackgroundColor={Color.themeBluishBlack}
        statusBarContentStyle={'light-content'}>
        <Header
          title={'Messages and calls'}
          showBack={false}
          showCart={false}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.mainScreen,
            {
              paddingBottom: moderateScale(190, 0.6),
            },
          ]}>
          <View style={styles.first_row}>
            <TouchableOpacity
              onPress={() => {
                setIsCall('messages');
              }}
              style={[
                styles.btn,
                {
                  borderWidth: isCall == 'messages' ? 0.5 : 0,
                  borderColor:
                    isCall == 'messages' ? Color.white : 'transparent',
                },
              ]}>
              <CustomText
                onPress={() => {
                  setIsCall('messages');
                }}
                style={styles.btn_text}>
                messages
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setIsCall('calls');
              }}
              style={[
                styles.btn,
                {
                  borderWidth: isCall == 'calls' ? 0.5 : 0,
                  borderColor: isCall == 'calls' ? Color.white : 'transparent',
                },
              ]}>
              <CustomText
                style={styles.btn_text}
                onPress={() => {
                  setIsCall('calls');
                }}>
                calls
              </CustomText>
            </TouchableOpacity>
          </View>

          {isCall == 'messages' ? (
            <FlatList
              data={clinicMessages}
              contentContainerStyle={{
                paddingBottom: moderateScale(20, 0.6),
              }}
              style={
                {
                  // backgroundColor: 'green',
                  // alignSelf: 'center',
                  // marginHorizontal :moderateScale(10,.6)
                }
              }
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.chat_card}>
                    <View style={styles.card_image}>
                      <CustomImage
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        source={item?.image}
                      />
                    </View>
                    <View
                      style={{
                        width: windowWidth * 0.68,
                        marginHorizontal: moderateScale(8, 0.6),
                      }}>
                      <CustomText
                        style={[
                          styles.h1,
                          {
                            color: item?.id == 1 ? '#12B78A' : Color.white,
                          },
                        ]}>
                        {item?.clinicName}
                      </CustomText>
                      <CustomText numberOfLines={2} style={styles.h2}>
                        At HealthFirst Medical, we provide comprehensive fetal
                        anatomy scans, offering a detailed glimpse into your
                        baby's development and well-being.
                      </CustomText>
                    </View>
                    <View>
                      <CustomText
                        style={[
                          styles.time,
                          {
                            color: item?.id == 1 ? '#12B78A' : Color.white,
                          },
                        ]}>
                        13:45 PM
                      </CustomText>
                      {item?.id == 1 && (
                        <CustomText style={styles.count}>4</CustomText>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <>
              <CustomText style={styles.heading}>Next calls</CustomText>

              <View style={styles.past_call}>
                <View style={styles.card_image}>
                  <CustomImage
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={require('../Assets/Images/gsk.png')}
                  />
                </View>
                <View
                  style={{
                    width: windowWidth * 0.55,
                    marginHorizontal: moderateScale(8, 0.6),
                  }}>
                  <CustomText style={styles.h1}>
                    Sunny Days Obstetrics
                  </CustomText>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Icon
                      style={{
                        marginRight: moderateScale(8, 0.6),
                        marginTop: moderateScale(2, 0.6),
                      }}
                      name={'call-out'}
                      as={SimpleLineIcons}
                      size={moderateScale(11, 0.6)}
                      color={Color.white}
                    />
                    <CustomText
                      numberOfLines={2}
                      style={{
                        fontSize: moderateScale(11, 0.6),
                        color: Color.white,
                      }}>
                      Audio call
                    </CustomText>
                  </View>
                </View>
                <TouchableOpacity
                onPress={() =>{
                  navigationService.navigate('CallBooking' ,{
                    fromcall : true
                  })
                }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: windowWidth * 0.26,
                    // paddingVertical: moderateScale(5, 0.6),
                    backgroundColor: '#354654',
                    borderRadius: 8,
                    borderWidth : 0.4,
                    borderColor : Color.white,
                    height: windowHeight * 0.03,
                  }}>
                  <CustomText
                   onPress={() =>{
                  navigationService.navigate('CallBooking' ,{
                    fromcall : true
                  })
                }}    
                    style={{
                      color: Color.white,
                      fontSize: moderateScale(11, 0.6),
                      letterSpacing: 0.4,
                    }}>
                    see all details
                  </CustomText>
                </TouchableOpacity>
              </View>
              <CustomText style={[styles.heading ,{
                marginTop : moderateScale(20,.6)
              }]}>past calls</CustomText>

              <FlatList
                data={callData}
                contentContainerStyle={{
                  paddingBottom: moderateScale(20, 0.6),
                }}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity style={styles.chat_card}>
                      <View style={styles.card_image}>
                        <CustomImage
                          style={{
                            height: '100%',
                            width: '100%',
                          }}
                          source={item?.image}
                        />
                      </View>
                      <View
                        style={{
                          width: windowWidth * 0.66,
                          marginHorizontal: moderateScale(8, 0.6),
                        }}>
                        <CustomText style={styles.h1}>{item?.name}</CustomText>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Icon
                            style={{
                              marginRight: moderateScale(8, 0.6),
                              marginTop: moderateScale(2, 0.6),
                            }}
                            name={
                              item?.id == 2 ? 'call-in' : 'videocam-outline'
                            }
                            as={item?.id == 2 ? SimpleLineIcons : Ionicons}
                            size={
                              item?.id == 2
                                ? moderateScale(11, 0.6)
                                : moderateScale(15, 0.6)
                            }
                            color={Color.white}
                          />
                          <CustomText
                            numberOfLines={2}
                            style={{
                              fontSize: moderateScale(11, 0.6),
                              color: Color.white,
                            }}>
                            {item?.call_info}
                          </CustomText>
                        </View>
                      </View>
                      <View>
                        <CustomText
                          style={[
                            styles.time,
                            {
                              color: Color.white,
                            },
                          ]}>
                          13:45 PM
                        </CustomText>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </>
          )}
          {/* <GiftedChat
        textInputStyle={{
          color: Color.black,
          marginTop: moderateScale(5, 0.3),
          }}
        placeholderTextColor={Color.darkGray}
        messages={messages}
        isTyping={false}
        alignTop
        renderActions={props => {
          return (
            <Actions
              {...props}
              icon={() => (
                <Icon
                as={MaterialCommunityIcons}
                name="sticker-emoji"
                size={26}
                  color={Color.darkBlue}
                />
                )}
                iconTextStyle={{
                color: Color.black,
                fontSize: moderateScale(24, 0.2),
                textAlign: 'center',
                }}
                containerStyle={{
                  bottom: -8,
                left: 2,
                width: windowWidth * 0.11,
                height: windowWidth * 0.11,
                borderRadius: (windowWidth * 0.11) / 2,
                alignItems: 'center',
                justifyContent: 'center',
                }}
                />
          );
        }}
        renderSend={props => {
          return (
            <Send
            {...props}
            containerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: moderateScale(15, 0.6),
                width: moderateScale(30, 0.6),
                bottom: 3,
                }}>
                <Icon
                name="send"
                as={Feather}
                size={moderateScale(22)}
                color={Color.black}
                />
                </Send>
          );
          }}
          renderInputToolbar={props => {
            return (
              <InputToolbar
              {...props}
              containerStyle={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                backgroundColor: Color.lightGrey,
                height: moderateScale(50, 0.6),
                justifyContent: 'center',
                marginHorizontal: moderateScale(6, 0.6),
                borderRadius: moderateScale(12, 0.6),
                bottom: 10,
                marginTop: moderateScale(15, 0.6),
              }}>
              <Composer
              {...props}
              textInputStyle={{
                  flex: 1,
                  color: 'black',
                  padding: 10,
                  alignSelf: 'flex-start',
                  }}></Composer>
            </InputToolbar>
          );
          }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              containerStyle={{
                left: {
                  paddingVertical: moderateScale(10, 0.6),
                },
                }}
                wrapperStyle={{
                  left: {
                  width: windowWidth * 0.45,
                  borderRadius: moderateScale(6, 0.2),
                  backgroundColor: Color.lightBlue,
                  alignItems: 'center',
                  paddingVertical: moderateScale(8, 0.5),
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 0,
                },
                right: {
                  width: windowWidth * 0.45,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: Color.blue,
                  paddingVertical: moderateScale(8, 0.5),
                  },
                  }}
                  textStyle={{
                    right: {
                      color: 'black',
                      },
                      left: {
                  color: 'black',
                },
                }}></Bubble>
                );
                }}
                onSend={text => onSend(text)}
                alwaysShowSend={true}
                user={{
                  // _id: userData?.id,
                  // name: userData?.name,
                  // avatar: `${baseUrl}/${profileData?.photo}`,
                  }}
      />
      */}
        </ScrollView>
      </ScreenBoiler>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#1B2730',
  },
  btn: {
    width: windowWidth * 0.4,
    // backgroundColor: '#2D3F4E',
    // marginHorizontal: moderateScale(10, 0.6),
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: 5,
  },
  btn_text: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  chat_card: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: windowWidth,
    paddingHorizontal: moderateScale(13, 0.6),
    borderBottomWidth: 0.4,
    borderColor: Color.white,
    marginVertical: moderateScale(5, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    paddingBottom: moderateScale(10, 0.6),
  },
  card_image: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.085,
    // backgroundColor: Color.red,
    borderRadius: moderateScale(5, 0.6),
    marginRight: moderateScale(5, 0.6),
  },
  h1: {
    fontSize: moderateScale(14, 0.6),
    color: Color.white,
  },

  h2: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  time: {
    fontSize: moderateScale(11.6),
    color: Color.white,
  },
  count: {
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
    borderRadius: (windowWidth * 0.04) / 2,
    backgroundColor: '#12B78A',
    textAlign: 'center',
    marginTop: moderateScale(10, 0.6),
    marginHorizontal: moderateScale(15, 0.6),
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
  },
  past_call: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: windowWidth,
    paddingHorizontal: moderateScale(13, 0.6),
    borderBottomWidth: 0.4,
    borderColor: Color.white,
    marginVertical: moderateScale(5, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    paddingBottom: moderateScale(10, 0.6),
  },
  first_row: {
    flexDirection: 'row',
    borderRadius: 5,
    width: windowWidth * 0.8,
    alignSelf: 'center',
    backgroundColor: '#273844',
    justifyContent: 'space-between',
    marginVertical: moderateScale(18, 0.6),
  },
  heading: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(13, 0.6),
  },
});
