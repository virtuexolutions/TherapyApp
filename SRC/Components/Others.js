import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Icon } from 'native-base'
import CustomText from './CustomText'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from '../Assets/Utilities/Color'
import { windowWidth } from '../Utillity/utils'
import CustomImage from './CustomImage'

const Others = () => {
  return (
    <View style={styles.mainContainer}>
     <Card
     heading={"Orders and payments"}
     iconIsImage={true}
     iconName={require("../Assets/Images/list-unordered-rec.png")}
     />
     <View style={styles.horizontalCards}>

     <Card
     width={windowWidth * 0.45}
     heading={"My favorites"}
     textBtnStyle={{marginTop:verticalScale(18)}}
     iconName={"heart-outline"}
     iconType={Ionicons}
     />
     <Card
     textBtnStyle={{marginTop:verticalScale(18)}}
     width={windowWidth * 0.45}
     iconIsImage={true}
     iconName={require("../Assets/Images/chart-line.png")}
     heading={"Wearable insights"}
     />
     </View>
    </View>
  )
}


const Card = ({iconName, iconIsImage, iconType, heading, width, paddingVertical, textBtnStyle})  => {
  return (
    <View style={[styles.card, width && { width : width}, paddingVertical && {paddingVertical:paddingVertical}]}>
      <ThemeIcon
      iconIsImage={iconIsImage}
      iconName={iconName}
      iconType={iconType} 
      />
      <CustomText
      children={heading}
      style={styles.heading}
      isBold
      />
           <Pressable 
      onPress={()=>{}}
      style={[styles.textBtn, textBtnStyle && textBtnStyle]}>
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
  )
}
const ThemeIcon = ({iconIsImage, iconName, iconType}) => {
    return (
       <View style={styles.iconContianer}>
            {iconIsImage ? <CustomImage style={styles.icon} source={iconName}/> : <Icon
            as={iconType}
            color={Color.themeGrey200}
            name={iconName}
            />}
       </View>
    );
}
export default Others

const styles = StyleSheet.create({
    mainContainer:{
        width:windowWidth,
        paddingHorizontal:scale(10),
        gap:scale(10)
    },
    card:{
        backgroundColor:Color.themeDarkBlueGray,
        borderColor:Color.themeLightBlueGray,
        borderWidth:1,
        borderRadius:moderateScale(12,0.2),
        gap:scale(10),
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(15)
    },
    iconContianer: {
        width: scale(34),
        height: scale(34),
        // paddingVertical:verticalScale(5),
        borderColor: '#778B9C',
        backgroundColor: '#354654',
        borderWidth: 1,
        borderRadius: moderateScale(18, 0.2),
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading:{
        fontSize:moderateScale(14,0.2),
        color:Color.white,          
        // width: windowWidth * 0.3              
    },
    icon: {
        width: scale(15),
        height: scale(15),
        tintColor: Color.white,
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
    horizontalCards:{
        flexDirection:"row",
        gap:scale(10)
    }
})