import { View } from 'native-base';
import React from 'react';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import { windowHeight, windowWidth } from '../Utillity/utils';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_Container}>
        <CustomImage
          // source={require('../Assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>
      <CustomText style={styles.text}>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        efficitur consectetur ligula eget ultrices.
      </CustomText>
    </View>
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
    height: windowHeight * 0.1,
    width: windowWidth * 0.6,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  bottomImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
  },
  text:{
    width:'80%',
    textAlign:'center',
    fontSize:moderateScale(11,.6),
    position:'absolute',
    bottom:35,

  },

  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
});

export default SplashScreen;
