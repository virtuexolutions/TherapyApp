import {View} from 'native-base';
import React from 'react';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {ImageBackground} from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../Assets/Images/bg.jpg')}>
      <View style={styles.logo_Container}>
        <CustomImage
          source={require('../Assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>
    </ImageBackground>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  logo_Container: {
    height: windowHeight * 0.22,
    width: windowWidth * 0.45,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  bottomImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
  },
});

export default SplashScreen;
