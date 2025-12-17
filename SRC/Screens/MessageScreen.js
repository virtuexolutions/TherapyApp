import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
  Actions,
  Day,
  MessageContainer,
  Time,
  Message,
} from 'react-native-gifted-chat';
import { Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomHeader from '../Components/CustomHeader';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import ChatHeader from '../Components/ChatHeader';
const MessageScren = () => {
  const [messages, setMessages] = useState([]);
  console.log("🚀 ~ Chat ~ messages:", messages)

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Concierge',
          avatar: 'https://i.pravatar.cc/150?img=12',
        },
      },
      {
        _id: 2,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Me',
        },
      },
      {
        _id: 3,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Me',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  return (

<>
      <CustomStatusBar
        backgroundColor={Color.themeDarkBlueGray}
        barStyle={'light-content'}
      />

      <ChatHeader/>
      <View style={styles.main_view}>
        <GiftedChat
          alignTop={true}
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
            name: 'Me',
          }}
          showUserAvatar={false}
          showAvatarForEveryMessage={false}
          renderAvatarOnTop={true}
         
          renderInputToolbar={props => {
            return (
              <InputToolbar
                {...props}
                containerStyle={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: windowWidth,
                  backgroundColor:Color.themeNavyBlue,
                  justifyContent: 'center',

                  gap:scale(5),
                  borderTopWidth:0,
                  borderRadius: moderateScale(12, 0.6),
                }}
             primaryStyle={{
              paddingBottom:scale(20),
              paddingTop:scale(10),
              paddingHorizontal:scale(15),
              width: windowWidth,
              gap:scale(5),
              alignItems:"center"
             }}
                renderSend={props => (
                  <Send
                    {...props}
                    containerStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius:moderateScale(10,0.2),
                      width: scale(50),
                      height: scale(50),
                      backgroundColor:Color.themeBrand600,
                      bottom:2
      
                    }}>
                    <CustomImage
                    style={{width:scale(15), height:scale(15)}}
                    source={require('../Assets/Images/send.png')}
                    />
                  </Send>
                )}
                />

            );
          }}
         
          alwaysShowSend
          renderComposer={props => (
           
            <Composer
              {...props}

              placeholder='Write a Message'
              // composerHeight={scale(40)}
              multiline={true}
              placeholderTextColor={Color.gray50}
              textInputProps={{
               style:styles.inputField
              }}
              
            />
          )}
          renderMessage={props => {
            const { currentMessage, user, previousMessage, nextMessage} = props;
            console.log("🚀 ~ nextMessage:", nextMessage?.user?._id)
            const showName = nextMessage != undefined &&
            nextMessage?.user?._id !== currentMessage?.user?._id;
      // !nextMessage || 

            return(
            <View>
              <Bubble
                {...props}
                renderTime={() => null}
                wrapperStyle={{
                  right: {
                    backgroundColor: Color.themeBrand600,
                    borderRadius: moderateScale(20, 0.6),
                    paddingVertical: moderateScale(8, 0.6),
                    paddingHorizontal: moderateScale(10, 0.6),
                    borderTopLeftRadius: moderateScale(15, 0.6),
                    borderTopRightRadius: moderateScale(15,0.6),
                    borderBottomLeftRadius: moderateScale(15, 0.6),
                    borderBottomRightRadius: moderateScale(0),
                    marginRight: moderateScale(10, 0.6),
                    marginVertical: moderateScale(5, 0.6),
                  },
                  left: {
                    backgroundColor: Color.themeNavyBlue,
                    borderTopLeftRadius: moderateScale(15, 0.6),
                    borderTopRightRadius: moderateScale(15, 0.6),
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: moderateScale(15, 0.6),
                    marginVertical: moderateScale(5, 0.6),
                    paddingVertical: moderateScale(8, 0.6),
                    paddingHorizontal: moderateScale(10, 0.6),
                    marginLeft: moderateScale(10,0.6),
                  },
                }}
                textStyle={{
                  right: {
                    color: Color.gray50,
                    fontSize: moderateScale(11, 0.6),
                  },
                  left: {
                    color: Color.gray50,
                    fontSize: moderateScale(11, 0.6),
                  },
                }}
                timeTextStyle={{
                  right: { color: Color.gray50, },
                  left: { color: Color.gray50,},
                }}
              />    
              <View style={[{
                paddingHorizontal:scale(10)
                ,flexDirection:"row",alignItems:"center",
         
            }, 
            currentMessage.user._id === user._id && {
              alignSelf:"flex-end",
              // backgroundColor:"red"
            },
            currentMessage.user._id !== user._id && {
              alignSelf:"flex-start",

              // backgroundColor:"red"
            },
            ]}>
  {showName && (
    <CustomText style={[
            styles.name,
          
          ]}
          children={currentMessage.user.name === user.name ? 'You' : currentMessage.user.name}
          />
          
          
          )}
              <Time
              {...props}
              containerStyle={{
                left:{
                  alignSelf:"flex-start",
                  top:verticalScale(3),
                },
                right:{
                  top:verticalScale(3),
                  
                  // backgroundColor:"green"
                }

              }}
              timeTextStyle={{
                left:{
                  fontSize:moderateScale(12,0.2)
                }, 
                right:{
                  fontSize:moderateScale(12,0.2)
                }
              }}
              />
              </View>       
            </View>
          )}}

        />
      </View>
    {/* // </ScreenBoiler> */}
</>

  );
};

export default MessageScren;

const styles = ScaledSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.themeDarkBlueGray,
  },
  main_view: {
    // paddingHorizontal: moderateScale(10, 0.6),
    // paddingVertical: moderateScale(10, 0.6),
    flex: 1,
    backgroundColor: Color.themeDarkBlueGray,
    
  },
  image_view: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.12,
    marginTop: moderateScale(10, 0.6)
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  txt: {
    color: '#686868',
  },
  heading: {
    fontSize: moderateScale(26, 0.6),
    color: Color.themeTextColor,
    width: '70%',
    textAlign: "center",
    marginTop: moderateScale(12, 0.6),
    letterSpacing: 0.6
  },
  inputField:{
    width: windowWidth * 0.75,
    borderWidth:1,
    borderColor:Color.themeLightBlueGray,
    backgroundColor: Color.themeDarkBlueGray,
    // height: windowHeight * 0.4,
    paddingVertical:verticalScale(10),
    borderRadius: moderateScale(10, 0.2),
    paddingHorizontal: moderateScale(15, 0.6),
    color: '#f3e8e8', 
  } ,
  name:{
    color:Color.white,
    fontSize:moderateScale(12,0.2),

  }
});