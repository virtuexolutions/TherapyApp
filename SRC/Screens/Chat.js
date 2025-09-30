import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
  Actions,
} from 'react-native-gifted-chat';
import { Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomHeader from '../Components/CustomHeader';

// const Color = {
//   white: '#FFFFFF',
//   black: '#000000',
//   blue: '#6B8E23',
//   lightBlue: '#E6F0FA',
//   darkGray: '#555555',
//   lightGrey: '#F2F2F2',
//   themeColor: '#6B8E23',
//   darkBlue: '#003366',
// };

const Chat = () => {
  const [messages, setMessages] = useState([]);

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
    <SafeAreaView style={styles.mainScreen}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <CustomHeader
        title={'Trust & Safety Badge'}
        backgroundColor={Color.bgColor}
        isSearch
      />
      <View style={styles.main_view}>
        <GiftedChat
          alignTop={true}
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
            name: 'Me',
          }}
          renderAvatarOnTop={true}
          placeholder="Type a message..."
          placeholderTextColor={Color.darkGray}
          textInputStyle={{
            color: Color.black,
            marginTop: moderateScale(5, 0.3),
          }}
          renderDay={() => null}
          // renderInputToolbar={props => {
          //   return (
          //     <InputToolbar
          //       {...props}
          //       containerStyle={{
          //         flexDirection: 'row',
          //         alignItems: 'flex-start',
          //         backgroundColor: Color.lightGrey,
          //         height: moderateScale(50, 0.6),
          //         justifyContent: 'center',
          //         marginHorizontal: moderateScale(6, 0.6),
          //         borderRadius: moderateScale(12, 0.6),
          //         bottom: 10,
          //       }}>
          //       <Composer
          //         {...props}
          //         textInputStyle={{
          //           flex: 1,
          //           color: 'black',
          //           padding: 10,
          //           alignSelf: 'flex-start',
          //         }}></Composer>
          //     </InputToolbar>
          //   );
          // }}
          alwaysShowSend
          renderSend={props => (
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
                color={Color.themeColor}
              />
            </Send>
          )}
          renderBubble={props => (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: Color.themeColor,
                  borderRadius: moderateScale(20, 0.6),
                  paddingVertical: moderateScale(8, 0.6),
                  paddingHorizontal: moderateScale(10, 0.6),
                  borderTopLeftRadius: moderateScale(15, 0.6),
                  borderTopRightRadius: moderateScale(0),
                  borderBottomLeftRadius: moderateScale(15, 0.6),
                  borderBottomRightRadius: moderateScale(15, 0.6),
                  marginRight: moderateScale(10, 0.6),
                  marginVertical: moderateScale(5, 0.6),
                },
                left: {
                  backgroundColor: '#EFEFEF',
                  borderTopLeftRadius: moderateScale(15, 0.6),
                  borderTopRightRadius: moderateScale(15, 0.6),
                  borderBottomLeftRadius: moderateScale(15, 0.6),
                  borderBottomRightRadius: 0,
                  marginVertical: moderateScale(5, 0.6),
                  paddingVertical: moderateScale(8, 0.6),
                  paddingHorizontal: moderateScale(10, 0.6),
                },
              }}
              textStyle={{
                right: {
                  color: Color.white,
                  fontSize: moderateScale(11, 0.6),
                },
                left: {
                  color: Color.black,
                  fontSize: moderateScale(11, 0.6),
                },
              }}
              timeTextStyle={{
                right: { color: Color.white },
                left: { color: Color.darkGray },
              }}
            />
          )}
          renderActions={props => (
            <Actions
              {...props}
              icon={() => (
                <Icon
                  as={MaterialCommunityIcons}
                  name="sticker-emoji"
                  size={22}
                  color={Color.darkBlue}
                />
              )}
              onPressActionButton={() => {
                console.log('Action button pressed');
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = ScaledSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.bgColor,
  },
  main_view: {
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    flex: 1,
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
  }
});
