import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowWidth} from '../Utillity/utils';
import ThemeIconButton from './ThemeIconButton';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import CustomButton from './CustomButton';

const PackageComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.imageContainer}>
          <CustomImage source={item.image} style={styles.image} />
        </View>
        <View style={styles.info}>
          <CustomText children={item.title} style={styles.heading} />
          <View style={styles.infoFooter}>
            <CustomText children={'Provided by'} style={styles.text1} />
            <CustomText children={item.poweredBy} style={styles.textBtn} />
          </View>
        </View>
        <ThemeIconButton style={styles.icon} favourite={true} />
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.location}>
          <CustomImage source={require('../Assets/Images/marker.png')} />
          <CustomText children={item.location} style={styles.text2} />
        </View>
        <View style={styles.location}>
          <CustomImage
            source={require('../Assets/Images/clock.png')}
            style={{tintColor: Color.white}}
          />
          <CustomText children={'6 days and 5 Nights'} style={styles.text2} />
        </View>
      </View>
      <View style={styles.containerFooter}>
        <View>
          <CustomText children={'From'} style={styles.text2} />
          <CustomText children={item.price} style={styles.heading} isBold />
        </View>
        <CustomButton
          isBold
          text={'See all details'}
          fontSize={moderateScale(10, 0.3)}
          textColor={Color.white}
          paddingHorizontal={scale(30)}
          borderWidth={1.5}
          borderColor={Color.themeVeryLightGrey}
          borderRadius={moderateScale(10, 0.3)}
          height={scale(30)}
          bgColor={Color.themeMediumGrey}
          textTransform={'none'}
        />
      </View>
    </View>
  );
};

export default PackageComponent;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.7,
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(4),
    alignItems: 'center',
    backgroundColor: Color.themeDarkBlueGray,
    gap: scale(20),
    borderColor: Color.themeLightBlueGray,
    borderWidth: 1,
    borderRadius: moderateScale(12, 0.2),
  },
  containerHeader: {
    flexDirection: 'row',
    gap: scale(10),
    alignItems: 'center',
  },
  icon: {width: scale(30), height: scale(30)},
  imageContainer: {
    width: scale(25),
    height: scale(25),
    overflow: 'hidden',
    borderRadius: moderateScale(4, 0.5),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    // backgroundColor:"red",
    width: '60%',
  },
  heading: {
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
  },
  infoFooter: {
    flexDirection: 'row',
    gap: scale(5),
    alignItems: 'center',
  },
  text1: {
    fontSize: moderateScale(10, 0.2),
    color: Color.white,
  },
  text2: {
    fontSize: moderateScale(12, 0.2),
    color: Color.white,
  },
  containerCenter: {
    width: '90%',
    gap: scale(5),
  },
  location: {
    flexDirection: 'row',
    gap: scale(5),
    alignItems: 'center',
    //   width:"100%",
    //   backgroundColor:"red"
  },
  textBtn: {
    fontSize: moderateScale(10, 0.2),
    color: Color.themeBrand500,
    textDecorationLine: 'underline',
  },
  containerFooter: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
});
