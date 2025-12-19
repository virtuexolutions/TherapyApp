import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomText from './CustomText'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import BackButton from './BackButton'
import ProgressCircle from './ProgressCircle'

const OnBoardingHeader = ({subtitle, title, progress, total}) => {
  return (
    <View style={styles.header}>
        <BackButton style={styles.backBtn}/>
        <View style={{width: windowWidth * 0.7,}}>
            <CustomText
            children={title ?? "Tell us about you"}
            style={styles.text1}
            />
            <CustomText
            children={ subtitle}
            style={styles.text2}
            />
        </View>
           <ProgressCircle
           progress={progress ?? 0}
           total={total ?? 3}
           />
            {/* <View style={styles.indicator}>
               
            <CustomText
            children={"2/3"}
            style={styles.text2}
            />
            </View> */}
    </View>
  )
}

export default OnBoardingHeader

const styles = StyleSheet.create({
    header:{
        width: windowWidth,
        paddingHorizontal:scale(10),
        paddingVertical:verticalScale(10),
        gap:scale(10),
        // height:windowHeight * 0.1,
        backgroundColor:Color.themeBluishBlack,
        borderBottomColor:"#293640",
        borderBottomWidth:1,
        alignItems:"center",
        flexDirection:"row"
    },
    backBtn:{
        // position:"absolute"
    },
    text1:{
        color:Color.white,
        fontSize:moderateScale(16,0.2),
    },
    text2:{
        color:Color.white,
        fontSize:moderateScale(14,0.2),
    },
    indicator:{
        width: scale(40),
        height: scale(40),
        borderRadius:scale(20),
        borderWidth:1,
        borderColor:Color.white,
        alignItems:"center",
        borderBottomColor:Color.themeBrand600,
        justifyContent:"center"
    }
})