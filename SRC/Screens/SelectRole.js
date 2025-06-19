import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomStatusBar from '../Components/CustomStatusBar'
import CustomButton from '../Components/CustomButton'
import Color from '../Assets/Utilities/Color'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'

const SelectRole = () => {
  return (
    <ImageBackground
    style={styles.main_con}
    source={require('../Assets/Images/loginbg.png')}>
    <CustomStatusBar
      backgroundColor={Color.white}
      barStyle={'dark-content'}
    />
    <CustomText style={styles.txt}>
        Select Your Role
    </CustomText>
    <CustomButton
                isBold
                text={
                 "Provider"
                }
                fontSize={moderateScale(15, 0.3)}
                textColor={Color.btntextColor}
                borderWidth={1.5}
                borderColor={Color.themtxtColor}
                borderRadius={moderateScale(30, 0.3)}
                width={windowWidth * 0.9}
                height={windowHeight * 0.065}
                bgColor={Color.btn_Color}
                textTransform={'capitalize'}
                marginTop={windowHeight * 0.04}
                elevation={false}
                onPress={()=>{

                }}
              />
    <CustomButton
                isBold
                text={
                 "User"
                }
                fontSize={moderateScale(15, 0.3)}
                textColor={Color.btntextColor}
                borderWidth={1.5}
                borderColor={Color.themtxtColor}
                borderRadius={moderateScale(30, 0.3)}
                width={windowWidth * 0.9}
                height={windowHeight * 0.065}
                bgColor={Color.btn_Color}
                textTransform={'capitalize'}
                marginTop={windowHeight * 0.04}
                elevation={false}
                onPress={()=>{

                }}
              />
  </ImageBackground>
  )
}

export default SelectRole;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      txt:{
        fontSize: moderateScale(20, 0.2),
        color: Color.primaryColor,
        fontWeight: 'bold',
        marginBottom: moderateScale(20, 0.2),
      }
    
})