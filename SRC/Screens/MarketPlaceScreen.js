import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import MarketCard from '../Components/MarketCard';
import ScreenBoiler from '../Components/ScreenBoiler';
import SearchContainer from '../Components/SearchContainer';
import {windowHeight, windowWidth} from '../Utillity/utils';

const MarketPlaceScreen = () => {
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showGreeting={true} showCart />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <View
          style={{
            // backgroundColor :'red',
            height: windowHeight * 0.1,
          }}>
          <SearchContainer
            placeHolder={'Search your product, provider...'}
            input
            IconSize={moderateScale(22, 0.6)}
            IconColor={Color.white}
            width={windowWidth * 0.9}
            height={windowHeight * 0.053}
            style={{
              backgroundColor: 'transparent',
              borderRadius: moderateScale(10, 0.6),
              borderColor: Color.white,
              borderWidth: 0.1,

              marginTop: moderateScale(15, 0.6),
            }}
            inputStyle={{
              paddingHorizontal: moderateScale(15, 0.5),
              paddingTop: moderateScale(10, 0.6),
              color: Color.white,
              fontSize: moderateScale(14, 0.6),
            }}
          />
        </View>
        <MarketCard
          data={{
            image: require('../Assets/Images/cart1.png'),
            title: 'search by products',
            sub_text: 'Find treatments, packages, services and more.',
          }}
        />
        <MarketCard
          data={{
            image: require('../Assets/Images/userIcon.png'),
            title: 'search by providers',
            sub_text: 'Find clinics, hospitals, doctors and more.',
          }}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default MarketPlaceScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    alignItems: 'center',
  },
});
