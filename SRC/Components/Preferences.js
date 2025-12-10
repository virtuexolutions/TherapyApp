
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Pressable} from 'react-native'
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomTile from './CustomTile';

const Preferences = ({data, selectedPreference, setSelectedPreference}) => {
  
    return (
    <View style={styles.mainContainer}>
     {data?.map((item,index) => <CustomTile 
     title={item}
     selected={selectedPreference?.toLowerCase() == item?.toLowerCase()}
     onPress={()=>{
        // setSelectedGoal((prev) => ({...prev, wellnessGoal:item}));
     }}/>)}
     <View style={{height: windowHeight * 0.1}}/>
    </View>
  )
}


export default Preferences;

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:"center",
        paddingVertical:verticalScale(10)
    },
})