import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import ThemeIconButton from './ThemeIconButton'
import CustomButton from './CustomButton'
import Color from '../Assets/Utilities/Color'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { windowWidth } from '../Utillity/utils'

const ProviderComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.imageContainer}>
          <CustomImage source={item.image} style={styles.image} />
        </View>
        <View style={styles.info}>
          <CustomText 
          children={item.title} 
          isBold
          style={styles.heading} />
          <CustomText 
          isBold
          children={item.subtitle} 
          style={styles.heading} />
          
        </View>
        <ThemeIconButton style={styles.icon} favourite={true} />
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.location}>
          <CustomImage source={require('../Assets/Images/marker.png')} />
          <CustomText children={item.location} style={styles.text2} />
        </View>
        <View style={styles.location}>
          <CustomImage
            source={require('../Assets/Images/clock.png')}
            style={{tintColor: Color.white}}
          />
          <CustomText children={`Price range: ${item.priceRange} `} style={styles.text2} />
        </View>
      </View>
      <View style={styles.specialityContainer}>
        {item.specialities.map((speciality,index) => <CustomText
        numerOfLines={2}
        style={styles.speciality}
        children={`${speciality} `}
        />)}
        </View>
      <View style={styles.containerFooter}>
        {/* <View>
          <CustomText children={'From'} style={styles.text2} />
          <CustomText children={item.price} style={styles.heading} isBold />
        </View> */}
        <CustomButton
          isBold
          text={'Request a call'}
          fontSize={moderateScale(12, 0.3)}
          textColor={Color.white}
        //   paddingHorizontal={scale(10)}
        width={scale(110)}
          borderWidth={1.5}
          borderColor={Color.themeVeryLightGrey}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeMediumGrey}
          textTransform={'none'}
        />
        <CustomButton
          isBold
          text={'Send Message'}
          fontSize={moderateScale(12, 0.3)}
          textColor={Color.white}
        //   paddingHorizontal={scale(10)}
          width={scale(110)}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeBrand500}
          textTransform={'none'}
        />
      </View>
    </View>
  )
}

export default ProviderComponent

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.7,
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(4),
        alignItems: 'center',
        backgroundColor: Color.themeDarkBlueGray,
        gap: scale(20),
        borderColor: Color.themeLightBlueGray,
        borderWidth: 1,
        borderRadius: moderateScale(12, 0.2),
      },
      containerHeader: {
        flexDirection: 'row',
        gap: scale(10),
        alignItems: 'center',
      },
      icon: {width: scale(30), height: scale(30)},
      imageContainer: {
        width: scale(25),
        height: scale(25),
        overflow: 'hidden',
        borderRadius: moderateScale(4, 0.5),
      },
      image: {
        width: '100%',
        height: '100%',
      },
      info: {
        // backgroundColor:"red",
        width: '65%',
      },
      heading: {
        fontSize: moderateScale(14, 0.2),
        color: Color.white,
      },
      infoFooter: {
        flexDirection: 'row',
        gap: scale(5),
        alignItems: 'center',
      },
      text1: {
        fontSize: moderateScale(10, 0.2),
        color: Color.white,
      },
      text2: {
        fontSize: moderateScale(12, 0.2),
        color: Color.white,
      },
      containerCenter: {
        width: '95%',
        gap: scale(5),
      },
      location: {
        flexDirection: 'row',
        gap: scale(5),
        alignItems: 'center',
        //   width:"100%",
        //   backgroundColor:"red"
      },
      specialityContainer:{
          width: "95%",
       backgroundColor:Color.themeGrey60,
       flexDirection:"row",
       flexWrap:"wrap",
       paddingVertical:verticalScale(10),
       paddingHorizontal:scale(10),
       gap:scale(5),
       borderRadius:moderateScale(6,0.3)

      },
      speciality:{
          color:Color.white,
          fontSize: moderateScale(11, 0.2),
      },
      textBtn: {
        fontSize: moderateScale(10, 0.2),
        color: Color.white,
        textDecorationLine: 'underline',
      },
      containerFooter: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',

      },
})