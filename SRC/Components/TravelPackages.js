import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { Icon } from 'native-base';
import { moderateScale } from 'react-native-size-matters';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Color from '../Assets/Utilities/Color';

const TravelPackages = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <CustomText 
        children={"Travel Packages"}
        style={styles.heading}
        />
        <CustomText 
        children={"Travel Packages"}
        style={styles.heading}
        />
        <Pressable style={styles.txtBtn} onPress={()=>{}}>
        <CustomText 
        children={"See all"}
        />
        <Icon
        name='arrow-right'
        as={FontAwesome6}
        color={Color.white}
        size={moderateScale(14,0.2)}
        />
        </Pressable>

      </View>
    </View>
  )
}

export default TravelPackages

const styles = StyleSheet.create({
    heading:{
        fontSize:moderateScale(20,0.2),
        color:Color.white,
                          
    }
})