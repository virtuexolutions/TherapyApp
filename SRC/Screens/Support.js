import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import ScreenBoiler from '../Components/ScreenBoiler'
import { Icon } from 'native-base'
import { moderateScale, s, scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
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
import Suggestion from '../Components/Suggestion';
import AISuggestions from './AISuggestions';
const Support = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      
      }, []);
    
      const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, newMessages),
        );
      }, []);
  return (
    <ScreenBoiler
    statusBarBackgroundColor={Color.themeBluishBlack}
    statusBarContentStyle={'light-content'}>
    <View style={styles.header}>
      <CustomText isBold style={styles.title}>
        Support
      </CustomText>
      <TouchableOpacity style={styles.cross_btn}>
        <Icon
          as={Entypo}
          color={Color.white}
          name="cross"
          size={moderateScale(18, 0.6)}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.main_view}>
     <AISuggestions/>
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
    </ScreenBoiler>
  )
}

export default Support

const styles = StyleSheet.create({
    mainScreen: {
        width: windowWidth,
        height: windowHeight * 0.925,
        backgroundColor: '#374653',
      },
      cross_btn: {
        height: scale(30),
        width: scale(30),
        borderWidth: 0.5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Color.white,
        backgroundColor: '#354654',
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
      title: {
        letterSpacing: 0.8,
        color: Color.white,
        fontSize: moderateScale(15, 0.6),
        marginTop: moderateScale(5, 0.6),
        textTransform: 'none',
      },
      main_view: {
        // paddingHorizontal: moderateScale(10, 0.6),
        // paddingVertical: moderateScale(10, 0.6),
        flex: 1,
        backgroundColor: Color.themeDarkBlueGray,
        
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
    
      },
      heading:{
        fontSize:moderateScale(26,0.2),
         color:Color.white,
         
      },
      description:{
        fontSize:moderateScale(14,0.2),
         color:Color.white,
         width: windowWidth * 0.8,
         textAlign:"center"
         
      },
      suggestionConatiner:{

      }

})