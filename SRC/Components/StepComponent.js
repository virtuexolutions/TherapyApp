import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { Avatar } from 'native-base'
import { moderateScale, scale } from 'react-native-size-matters'
import { windowWidth } from '../Utillity/utils'

const StepComponent = ({number, heading, description}) => {
  return (
    <View style={styles.mainView}>
    <Avatar 
    borderColor={"#3A7B70"}
    borderWidth={1}
    children={number}
    backgroundColor={"#0D4239"}
    />
    <View>
       <CustomText
       children={heading}
       style={styles.text3}
       />
       <CustomText
       children={description}
       style={styles.text3}
       />
    </View>
</View>
  )
}

export default StepComponent

const styles = StyleSheet.create({
  mainView:{flexDirection:"row", gap:scale(10),alignItems:"center" },
  text3:{
    width: windowWidth * 0.7,
    color:Color.white,
    fontSize:moderateScale(14,0.2),
    textTransform:"none",

  },
})