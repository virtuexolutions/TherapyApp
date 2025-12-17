import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
const MarketCard = ({data}) => {
  console.log('dataaaaaaa ,,,,,,,,,,,,,,,', data);
  return (
     <LinearGradient
        colors={["#0b7a70", "#166f6a", "#115a53"]}
      start={{ x:1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card_Con}
    >
    {/* <View style={styles.card_Con}> */}
      <View style={styles.text_con}>
        <CustomText style={styles.h1}>{data?.title}</CustomText>
        <CustomText style={styles.h2}>{data?.sub_text}</CustomText>
        <TouchableOpacity style={styles.btn}>
          <CustomText style={styles.btn_text}>See more</CustomText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop:
            data?.title == 'search by products'
              ? moderateScale(15, 0.6)
              : moderateScale(10, 0.6),
          // backgroundColor :'red',
          height:
            data?.title == 'search by products'
              ? windowHeight * 0.1
              : windowHeight * 0.13,
          width:
            data?.title == 'search by products'
              ? windowWidth * 0.25
              : windowWidth * 0.22,
        }}>
        <CustomImage style={styles.image} source={data?.image} />
      </View>
    {/* </View> */}
    </LinearGradient>
  );
};

export default MarketCard;

const styles = StyleSheet.create({
  card_Con: {
    // backgroundColor: 'red',
    height: windowHeight * 0.13,
    width: windowWidth * 0.9,
    borderWidth: 1,
    borderColor: Color.white,
    marginVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    flexDirection: 'row',
  },
  text_con: {
    width: windowWidth * 0.619,
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
  },
  image_con: {},
  image: {
    height: '100%',
    width: '100%',
  },
  h1: {
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
  },
  h2: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  btn: {
    paddingVertical: moderateScale(4, 0.6),
    paddingHorizontal: moderateScale(6, 0.6),
    backgroundColor: Color.white,
    width: windowWidth * 0.21,
    borderRadius: moderateScale(6, 0.6),
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.black,
    textTransform: 'none',
  },
});
