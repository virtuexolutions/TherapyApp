import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, s, scale, verticalScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import {Divider} from 'native-base';
import {PieChart} from 'react-native-gifted-charts';
import CustomButton from './CustomButton';

const LayawayPlans = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomText children={'Layaway plans'} style={styles.heading} isBold />
      <View style={styles.card}>
        <CustomText children={'Active plan'} style={styles.text1} isBold />
        <CustomText
          children={'Created on July 12, 2025'}
          style={styles.text2}
          // isBold
        />
        <View style={styles.stats}>

        <PieChart
          data={[{value: 30, color:Color.themeGreen500}, {value: 70, color:Color.white}]}
          donut
          showText
          innerCircleColor={Color.themeDarkBlueGray}
          innerCircleBorderColor={Color.white}
          innerRadius={80}
          radius={120} 

        />
        <View style={styles.total}>
          <CustomText
          children={"$12,800.00"}
          style={styles.heading}
          />
          <CustomText
          children={"Total"}
          style={styles.text2}
          />

        </View>
        <View style={styles.details}>
          <View style={styles.square}/>
          <CustomText
          children={"4 Payments made"}
          style={styles.text1}
          />
        </View>
          </View>
    <Divider width={windowWidth * 0.9} color={Color.white} />
        <View style={styles.timestamp}>
          <CustomText
            children={'Next payment date'}
            style={styles.text3}
            // isBold
          />
          <CustomText
            children={'December 12, 2025'}
            style={styles.text3}
            // isBold
          />
        </View>
        <CustomButton
          isBold
          text={'Pay Now'}
          fontSize={moderateScale(12, 0.3)}
          textColor={Color.white}
        //   paddingHorizontal={scale(10)}
          width={windowWidth * 0.9}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeBrand500}
          textTransform={'none'}
        />
      </View>
    </View>
  );
};

export default LayawayPlans;

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    paddingHorizontal: scale(10),
    gap: scale(10),
  },
  card: {
    backgroundColor: Color.themeDarkBlueGray,
    borderColor: Color.themeLightBlueGray,
    borderWidth: 1,
    borderRadius: moderateScale(12, 0.2),
    gap: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(15),
  },
  heading: {
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    // width: windowWidth * 0.3
  },
  text1: {
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
  },
  timestamp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:verticalScale(5)
  },
  text2: {
    fontSize: moderateScale(10, 0.2),
    color: Color.white,
  },
  text3: {
    fontSize: moderateScale(12, 0.2),
    color: Color.white,
  },
  stats:{
    alignItems:"center",
  },
  total:{
    alignItems:"center",
    position:"absolute",
    top:verticalScale(80)
  },
  square:{width: scale(15), height: scale(15), backgroundColor:Color.themeGreen500},
  details:{
    marginTop:verticalScale(10),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:scale(10),
    marginVertical:verticalScale(10)
  }
});
