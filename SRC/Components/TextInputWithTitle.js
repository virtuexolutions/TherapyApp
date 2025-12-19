import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  I18nManager,
  Platform,
  Image,
} from 'react-native';

import { Icon } from 'native-base';
import Color from '../Assets/Utilities/Color';
import { useState } from 'react';
import { moderateScale, scale, ScaledSheet } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomText from './CustomText';

const TextInputWithTitle = props => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {props?.title && (
        <CustomText isBold
          style={[
            {
              color: props.titleColor ? props?.titleColor : Color.black,
              fontSize: moderateScale(16, 0.3),
              top:5,
              // left:1,
              // marginBottom: moderateScale(5, 0.3),
              width: windowWidth * props.viewWidth,
              paddingHorizontal: moderateScale(15, 0.6),
              marginTop: props.marginTop
                ? props.marginTop
                : moderateScale(10, 0.3),
            },
            props?.titleStlye,
          ]}>
          {props?.title}
        </CustomText>
      )}
      <View
        style={[
          styles.fieldSet,
          {
            width: windowWidth * props.viewWidth,
            borderWidth: props.border,
            backgroundColor: props.backgroundColor ? props?.backgroundColor : Color.themtxtColor,
            borderBottomWidth: props.borderBottomWidth,
            borderColor: props.borderColor ? props.borderColor : Color.themtxtColor,
          },
          props.elevation && {
            shadowColor: Color.darkGray,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          },
          props.marginBottom && {
            marginBottom: props.marginBottom,
          },
          props.autoCapitalize && {
            textTransform: props.autoCapitalize,
          },
          props.borderRadius && {
            borderRadius: props.borderRadius,
          },
          props.multiline && {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          props.viewHeight && {
            height: windowHeight * props.viewHeight,
          },

          props.marginTop >= 0 && {
            marginTop: props.marginTop,
          },
          props.alignItems && {
            alignItems: props.alignItems,
          },
          props.iconName &&
          !props.rightIcon && {
            paddingLeft: moderateScale(15, 0.3),
          },
        ]}>
        {props.foundation && (
          <Foundation
            color={props.iconColor}
            name={props.iconName}
            size={moderateScale(20, 0.2)}
          />
        )}
        {props?.leftIcon && props.iconIsImage && (
          <Image
          resizeMode='cover' 
          source={props.iamgeSrc}
          style={{
            // width:scale(30),
            // height:scale(30),
            // position:"absolute",
            left:scale(10),
          }}
          />
        )}
        {props.iconName && !props.foundation && (
          <Icon
            name={props.iconName}
            as={props.iconType}
            style={[
              {
                // backgroundColor :'green',
                textAlign: 'center',
                width: windowWidth * 0.07,
                // paddingTop :moderateScale(10,.6),
                color:
                  props.color && !props.disable
                    ? props.color
                    : Color.veryLightGray,
                fontSize: moderateScale(16, 0.6),
                // paddingLeft: Dimensions.get("window").width * 0.0175,
              },
              props.numberOfLines > 1 && {
                paddingTop: Dimensions.get('window').height * 0.005,
              },
              props.iconHeight && {
                height: windowHeight * props.iconHeight,
              },
              props.rightIcon && {
                position: 'absolute',
                right: moderateScale(10, 0.3),
              },

              props.leftIcon && {
                position: 'absolute',
                left: moderateScale(10, 0.3),
              },
            ]}
            size={moderateScale(17, 0.3)}
            onPress={props.onPressLeft}
          // color={props.iconColor ? props.iconColor :'black'}
          />
        )}

        {props.secureText ? (
          <>
            <TextInput
              style={[
                {
                  width: windowWidth * props.inputWidth,
                },
                props.inputColor && {
                  color: props.inputColor,
                },
                Platform.OS === 'android'
                  ? [
                    styles.inputBox,
                    {
                      paddingBottom: 10,
                      fontSize: props?.fontSize
                        ? props?.fontSize
                        : moderateScale(12, 0.6),
                      fontWeight: '400',
                      color: Color.white
                    },
                  ]
                  : [
                    styles.inputBox,
                    {paddingLeft:scale(10)},
                    {
                      paddingBottom: 0,
                    },
                  ],
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              secureTextEntry={!showPassword}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor ? props.placeholderColor : Color.white
              }
              keyboardType={props.keyboardType}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{
                paddingHorizontal: Dimensions.get('window').width * 0.04,
                position: 'absolute',
                right: 0,
                height:
                  Platform.OS === 'android'
                    ? Dimensions.get('window').height * 0.0725
                    : Dimensions.get('window').height * 0.0525,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: "red",
              }}>
              {/* <IconComponent name={showPassword ? open_eye : close_eye} fill={Color.white}/> */}
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                as={FontAwesome}
                color={props?.iconColor ? props?.iconColor : Color.black}
                size={moderateScale(18, 0.3)}
              />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity activeOpacity={1} onPress={props.onPressLeft}>
            <TextInput
              maxLength={props?.maxLength}
              style={[
                {
                  width: windowWidth * props.inputWidth,

                  // backgroundColor:"red",
                },
                Platform.OS === 'android'
                  ? styles.inputBox
                  : [styles.inputBox, { paddingBottom: 0 }],
                props.numberOfLines > 1 && {
                  textAlignVertical: 'top',
                },
                 {
                  paddingLeft:props.leftIcon ? scale(20) : scale(10)
                },
                props.inputHeight && {
                  height: windowHeight * props.inputHeight,
                },
                props.disable && {
                  color: Color.veryLightGray,
                },
                props.multiline && {
                  paddingTop: moderateScale(10, 0.5),
                  textAlignVertical: 'top',
                  // marginLeft: moderateScale(15, 0.3),
                },
                props.color && {
                  color: props?.color,
                },
                props.inputColor && {
                  color: props.inputColor,
                },
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor ? props.placeholderColor : Color.white
              }
              keyboardType={props.keyboardType}
              multiline={props.multiline || false}
              numberOfLines={props.numberOfLines || 1}
              editable={props.disable ? false : true}
              autoCapitalize="none"
            // onPressIn={()=>{console.log('fdadsas');}}
            // textAlignVertical={props.textAlignVertical}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
const styles = ScaledSheet.create({
  fieldSet: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    // backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: Color.lightGrey,
    flexDirection: 'row',
    placeholderTextColor: Color.white,
    // textTransform: 'capitalize',
  },
  inputBox: {
    // paddingLeft: moderateScale(10, 0.6),
    borderRadius: 8,
    fontSize: moderateScale(16, 0.3),
    // textTransform: 'capitalize',
    // fontFamily: 'PlusJakartaDisplay-Regular',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: Color.themeLightGray,
    // ...FONTS.Regular11,
  },
});
export default TextInputWithTitle;
