import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Color from '../Assets/Utilities/Color';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomImage from './CustomImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ThemeIconButton = ({
  onPress = () => {},
  style,
  cart = false,
  cross = false,
  explore = false,
  favourite = false,
  isFavSelected = false,
}) => {
  const iconSource = cart
    ? require('../Assets/Images/cart.png')
    : explore
    ? require('../Assets/Images/categories.png')
    : cross
    ? require('../Assets/Images/cross.png')
    : require('../Assets/Images/headphones.png');
  return (
    <Pressable
      style={[
        styles.button,
        style,
        favourite && {borderRadius: scale(17)},
      ]}
      onPress={onPress}>
      {iconSource && <CustomImage source={iconSource} style={styles.icon} />}
      {favourite && (
        <Icon
          size={scale(18)}
          as={Ionicons}
          color={Color.themeLightGray}
          name={isFavSelected ? 'heart' : 'heart-outline'}
        />
      )}
    </Pressable>
  );
};

export default ThemeIconButton;

const styles = StyleSheet.create({
  button: {
    width: scale(34),
    height: scale(34),
    // paddingVertical:verticalScale(5),
    borderColor: '#778B9C',
    backgroundColor: '#354654',
    borderWidth: 1,
    borderRadius: moderateScale(8, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: scale(15),
    height: scale(15),
    tintColor: Color.white,
  },
});
