import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import CustomText from './CustomText'
import CustomButton from './CustomButton'
import Color from '../Assets/Utilities/Color'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { windowWidth } from '../Utillity/utils'
import CustomImage from './CustomImage'

const GiveAwayComponent = ({item}) => {
  return (
    <ImageBackground
    source={item.image}
    style={styles.card}
    >
        <CustomText
        children={item.title}
        style={styles.title}
        isBold
        />
        <CustomText
        children={item.desc}
        style={styles.desc}
        />
        <View style={styles.imageContainer}>
          <CustomImage
          style={styles.image}
          source={item.iconSource}
          />
        </View>
         <CustomButton
          isBold
          text={'See more'}
          fontSize={moderateScale(12, 0.3)}
          textColor={"#25381E"}
          paddingHorizontal={scale(10)}
          borderWidth={1.5}
          style={styles.btn}
          borderColor={Color.themeVeryLightGrey}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeBrand50}
          textTransform={'none'}
        />
    </ImageBackground>
  )
}

export default GiveAwayComponent

const styles = StyleSheet.create({
    card:{
        width: windowWidth * 0.5,

        paddingVertical:verticalScale(10),
        borderRadius:moderateScale(16,0.2),
        overflow:"hidden"
    },
    title:{
      fontSize:moderateScale(14,0.2),
      color:Color.white,
      paddingHorizontal:scale(10),
    },
    desc:{
      fontSize:moderateScale(12,0.2),
      color:Color.white,
      paddingHorizontal:scale(10),

    },
    imageContainer:{
      width: windowWidth * 0.45,
      height:windowWidth * 0.45,
      overflow:"hidden",
      // right:scale(-5)
    },
    image:{
      width:"100%",
      height:"100%",
      resizeMode:"contain"
    },
    btn:{
      left:scale(-30)
    }
})