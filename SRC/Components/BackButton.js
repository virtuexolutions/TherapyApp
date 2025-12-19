import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'native-base';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Color from '../Assets/Utilities/Color';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/core';

const BackButton = ({style}) => {
  const navigation= useNavigation();
  return (
    <Pressable style={[styles.button, style]} onPress={() => {
        navigation.goBack()
    }}>
        <Icon
        name='keyboard-backspace'
        as={MaterialIcons}
        color={Color.themeBrand50}
        />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        width: scale(32),
        height: scale(32),
        // paddingVertical:verticalScale(5),
        borderColor:"#778B9C",
        backgroundColor:"#354654",
        borderWidth:1,
        borderRadius:moderateScale(6,0.2),
        alignItems:"center",
        justifyContent:"center"
    }
})