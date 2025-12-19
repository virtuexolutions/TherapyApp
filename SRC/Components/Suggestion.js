import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {Icon} from 'native-base';
import Color from '../Assets/Utilities/Color';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomImage from './CustomImage';
import { windowWidth } from '../Utillity/utils';

const Suggestion = ({title, description, mode, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <CustomText children={title ?? ''} style={styles.text} />
      <View style={styles.descContainer}>
        {mode == "chat" ? <CustomImage style={styles.image} source={require("../Assets/Images/user7.png")}/> : <Icon
          style={{
            // marginRight: scale(5),
          }}
          as={SimpleLineIcons}
          name="call-out"
          size={scale(14)}
          color={Color.white}
        />}
        <CustomText children={description ?? ''} style={styles.text} />
      </View>
    </Pressable>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
    container:{
        // marginHorizontal:scale(10)
        paddingVertical:verticalScale(10),
        width: windowWidth * 0.85,
        gap:scale(4)
        
    },
    descContainer:{
        flexDirection:"row",
        paddingVertical:verticalScale(5),
        gap:scale(10)
    },
    image:{
        width:scale(14),
        height:scale(14),
        tintColor:Color.white,
    },
    text:{
        fontSize:moderateScale(14,0.2),
         color:Color.white,
         
      }
});
