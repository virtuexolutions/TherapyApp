
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Pressable} from 'react-native'
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomTile from './CustomTile';

const WellNessGoals = ({data, selectedGoals=[], setSelectedGoals}) => {
  console.log("🚀 ~ WellNessGoals ~ selectedGoals:", selectedGoals)
  
    return (
    <View style={styles.mainContainer}>
     {data?.map((item,index) => <CustomTile 
     title={item}
     selected={selectedGoals?.includes(item)}
     onPress={()=>{
        if(selectedGoals?.includes(item)){
            setSelectedGoals(prev => prev.filter(goal => goal != item));
        }else{
            setSelectedGoals((prev) => [...prev, item]);
        }
     }}/>)}
     <View style={{height: windowHeight * 0.075}}/>
    </View>
  )
}
 

export default WellNessGoals

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:"center",
        paddingVertical:verticalScale(10)
    },
})