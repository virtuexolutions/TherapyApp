import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, IconButton} from 'native-base';
import {windowHeight, windowWidth} from '../Utillity/utils';
import BackButton from './BackButton';
import ThemeIconButton from './ThemeIconButton';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';
const ChatHeader = () => {
  return (
    <View style={styles.header}>
      <BackButton style={styles.backBtn} />
      <View style={styles.userInfo}>
        <View style={styles.imageContainer}>
          <CustomImage 
          style={styles.image}
          source={require('../Assets/Images/health.png')} />
        </View>
        <View style={styles.info}>
          <CustomText isBold style={styles.title} children={'HealthFirst Medical'} />
          <CustomText style={styles.description} children={'Typically reply in an hour'} />
        </View>
      </View>
      <ThemeIconButton iconName="headphones" iconType={Feather} />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    height: windowHeight * 0.075,
    gap: scale(10),
    // height:windowHeight * 0.1,
    backgroundColor: Color.themeBluishBlack,
    borderBottomColor: '#293640',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backBtn: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  userInfo:{
    flexDirection:"row",
   width: windowWidth * 0.67,
   gap:scale(10)
  },
  imageContainer:{
    width:scale(35),
    height:scale(35),
    borderRadius:moderateScale(12,0.2),
    overflow:"hidden"
  },
  image:{
    width:"100%",
    height:"100%"
  }, title:{
    color:Color.white,
    fontSize:moderateScale(16,0.2),
  },
  description:{
    color:Color.white,
    fontSize:moderateScale(10,0.2),
  },
});
