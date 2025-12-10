import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Color from '../Assets/Utilities/Color'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import CustomButton from './CustomButton'

const WellnessRoutines = ({data}) => {
  return (
    <View style={styles.mainContainer}>
       {data.map((item,index) => <Routine key={index} index={index} item={item} /> )}
    </View>
  )
}
const Routine = ({item, index}) =>{
   return (
    <View style={[styles.routine, index == 0 && {marginTop:0}]}>
        <View style={styles.iconContainer}>
          <CustomImage
          source={item.icon}
          style={styles.icon}
          />    
        </View>
        <View style={styles.routineInfo}>
            <CustomText
            children={item.title}
            style={styles.text1}
            isBold
            />
            <View style={styles.routineInfoFooter}>
                  <View style={styles.timeLevelContainer}>
                    <CustomImage
                    style={styles.icon2}
                    source={require("../Assets/Images/clock.png")}
                    />
                    <CustomText
                    style={styles.text2}
                    children={item.time}
                    />
                    </View>  
                  <View style={styles.timeLevelContainer}>
                    <CustomImage
                    style={styles.icon2}
                    source={require("../Assets/Images/kanban.png")}
                    />
                    <CustomText
                    style={styles.text2}
                    children={item.level}
                    />
                    </View>  
            </View>
            </View>    
            <CustomButton
        isBold
        text={'Start Routine'}
        fontSize={moderateScale(10, 0.3)}
        textColor={Color.white}
        borderWidth={1.5}
        borderColor={Color.themeVeryLightGrey}
        borderRadius={moderateScale(10, 0.3)}
        width={windowWidth * 0.25}
        height={scale(30)}
        bgColor={Color.themeMediumGrey}
        textTransform={'capitalize'}
        // marginTop={scale(20)}

        elevation={true}
        // onPress={() => {
          //   navigationService.navigate('TabNavigation')
          // }}
        //   onPress={onContinue}
          />
    </View>
   )
}

export default WellnessRoutines

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:verticalScale(10),
        width: windowWidth * 0.9,
        backgroundColor:Color.themeDarkBlueGray,
        borderColor:Color.themeLightBlueGray,
        borderWidth:1,
        borderRadius:moderateScale(15,0.2),
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10),
    },
    routine:{
        width: windowWidth * 0.84,
        flexDirection:"row",
        // justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:verticalScale(8),
        paddingHorizontal:scale(7),
        backgroundColor:Color.themeBluishBlack,
        gap:scale(10),
        borderColor:Color.themeLightBlueGray,
        borderWidth:1,
        borderRadius: moderateScale(12, 0.2),    
        marginTop:verticalScale(8)
    },
    iconContainer:{
        width: scale(36),
    height: scale(36),
    // paddingVertical:verticalScale(5),
    backgroundColor:Color.themeBluishBlack,
    borderColor:Color.themeLightBlueGray,
    borderWidth:1,
    borderRadius: moderateScale(8, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
    },
    icon: {
        width: scale(18),
        height: scale(18),
        tintColor: Color.white,
      },
    text1:{
        fontSize:moderateScale(12,0.2),
        color:Color.white,
    },
    timeLevelContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:scale(2)
    },
    icon2:{
        // width:scale(10)
    },
    text2:{
        fontSize:moderateScale(10,0.2),
        color:Color.white
    },
    routineInfo:{
        width:"48%",
        gap:scale(4),
        // backgroundColor:Color.red
    },
    routineInfoFooter:{
        flexDirection:"row",
        gap:scale(10)
    }

})