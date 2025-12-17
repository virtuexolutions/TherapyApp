import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { Icon } from 'native-base';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Color from '../Assets/Utilities/Color';
import { windowWidth } from '../Utillity/utils';
import CustomImage from './CustomImage';
import ThemeIconButton from './ThemeIconButton';
import PackageComponent from './PackageComponent';

const TravelPackages = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <CustomText 
        children={"Travel Packages"}
        style={styles.heading}
        />
        <Pressable 
        onPress={()=>{}}
        style={styles.textBtn}>
        <CustomText 
        children={"See all"}
        style={styles.text2}
        />
        <Icon
        name='arrow-right'
        as={FontAwesome6}
        color={Color.white}
        size={moderateScale(14,0.2)}
        />
        </Pressable>
      </View>
      <PackagesList/>
    </View>
  )
}
const PackagesList =() => {
    const travelPackages = [
        {
          id: 1,
          title: "Cardio Check",
          poweredBy: "Bynair Group",
          image:require("../Assets/Images/travel1.png"),
          location: "Lake Lucerne, Switzerland",
          price: "$1,950"
        },
        {
          id: 2,
          title: "Cardio Checkr",
          poweredBy: "Bynair Group",
          image: require("../Assets/Images/travel2.png"),
          location: "Lake Lucerne, Switzerland",
          price: "$1,200"
        }
      ];
  return (
        <FlatList
        data={travelPackages}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width: windowWidth,}}
        contentContainerStyle={{
         paddingVertical:verticalScale(10),
         paddingHorizontal:scale(20),
         gap:scale(10)
        }}
        renderItem={({item}) =>{
            return(
              <PackageComponent item={item}/>
            )
        }}
        />
  )
}

export default TravelPackages

const styles = StyleSheet.create({
    mainContainer:{
        width: windowWidth,
        marginTop:verticalScale(12),
    },
    textContainer:{
      width: windowWidth * 0.9,
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-between",
      alignItems:"center",
      alignSelf:"center",
    //   paddingVertical:verticalScale(10)
    },
    heading:{
        fontSize:moderateScale(16,0.2),
        color:Color.white,                        
    },
    text2:{
        color:Color.white,
        fontSize:moderateScale(12,0.2)
    },
    textBtn:{
        flexDirection:"row",
        alignItems:"center",
        gap:scale(7)
    },
   
})