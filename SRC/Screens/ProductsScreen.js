import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import MarketCard from '../Components/MarketCard';
import ScreenBoiler from '../Components/ScreenBoiler';
import SearchContainer from '../Components/SearchContainer';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';

import {FlatList, Icon, ScrollView} from 'native-base';
import ProductCard from '../Components/ProductCard';
import navigationService from '../navigationService';

const ProductScreen = () => {
  const treatmentsData = [
    {
      id: 1,
      title: 'Early pregnancy scan (booking or dating scan)',
      provider: 'GSK Group',
      location: 'San Francisco, CA',
      vitalityPrice: '$335.00',
      otherPrice: '$590.00',
      savingText: 'Saving 40%',
      image: require('../Assets/Images/other.png'), // apna icon laga lena
      isFav: true,
    },
    {
      id: 2,
      title: 'Early pregnancy scan (booking or dating scan)',
      provider: 'GSK Group',
      location: 'San Francisco, CA',
      vitalityPrice: '$335.00',
      otherPrice: '$590.00',
      savingText: 'Saving 40%',
      image: require('../Assets/Images/gsk.png'), // apna icon laga lena
      isFav: false,
    },
    {
      id: 3,
      title: 'Early pregnancy scan (booking or dating scan)',
      provider: 'GSK Group',
      location: 'San Francisco, CA',
      vitalityPrice: '$335.00',
      otherPrice: '$590.00',
      savingText: 'Saving 40%',
      image: require('../Assets/Images/other.png'), // apna icon laga lena
      isFav: false,
    },
  ];
  const packagesData = [
    {
      id: 1,
      title: 'Cardio Check',
      provider: 'Ryanair Group',
      providerLink: 'Ryanair Group',
      location: 'Lake Lucerne, Switzerland',
      duration: '6 days and 5 Nights',
      price: '$1,950',
      image: require('../Assets/Images/cardio.png'),
      isFav: false,
    },
    {
      id: 2,
      title: 'Cardio Wellness Retreat',
      provider: 'Swiss Medical Group',
      providerLink: 'Swiss Medical Group',
      location: 'Zurich, Switzerland',
      duration: '6 days and 5 Nights',
      price: '$1,200',
      image: require('../Assets/Images/cardio1.png'),

      isFav: true,
    },
    {
      id: 3,
      title: 'Heart Health Package',
      provider: 'Alpine Health Care',
      providerLink: 'Alpine Health Care',
      location: 'Geneva, Switzerland',
      duration: '5 days and 4 Nights',
      price: '$1,750',
      image: require('../Assets/Images/cardio.png'),

      isFav: false,
    },
  ];

  const othersData = [
    {
      id: 1,
      title: 'Early pregnancy scan (booking or dating scan)',
      provider: 'GSK Group',
      location: 'San Francisco, CA',
      time: 'Opens at 10:00 AM',
      price: '$335.00',
      oldPrice: '$590.00',
      image: require('../Assets/Images/other.png'),
      isFav: false,
    },
    {
      id: 2,
      title: 'Cardio Check Up',
      provider: 'Delta Medical',
      location: '$45 per session',
      time: '2 days remaining',
      price: '$120.00',
      oldPrice: '$180.00',
      image: require('../Assets/Images/treat1.png'),

      isFav: true,
    },
    {
      id: 3,
      title: 'Advanced Heart Screening',
      provider: 'Wellness Group',
      location: 'Los Angeles, CA',
      time: 'Opens at 9:00 AM',
      price: '$420.00',
      oldPrice: '$650.00',
      image: require('../Assets/Images/other.png'),

      isFav: false,
    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header title={"Products"} 
      showBack={true}
      showGreeting={false} showCart={true} />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            // backgroundColor :'red',
            paddingBottom: moderateScale(50, 0.6),
          }}>
          <View
            style={{
              // backgroundColor :'green',
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
                backgroundColor: Color.themeDarkBlueGray,
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
          <View style={styles.title_row}>
            <CustomText isBold style={styles.title}>
              treatments
            </CustomText>
            <TouchableOpacity
              onPress={() => {
                navigationService.navigate('SeeAllScreen');
              }}
              style={styles.inner_row}>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                }}>
                see all
              </CustomText>
              <Icon
                style={{
                  marginTop: moderateScale(2, 0.6),
                  marginLeft: moderateScale(2, 6),
                }}
                as={Ionicons}
                name="arrow-forward"
                size={moderateScale(14, 0.6)}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: windowHeight * 0.28,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={treatmentsData}
              renderItem={({item}) => {
                return <ProductCard item={item} from={'treatments'} />;
              }}
            />
          </View>
          <View style={styles.title_row}>
            <CustomText isBold style={styles.title}>
              packages
            </CustomText>
            <View style={styles.inner_row}>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                }}>
                see all
              </CustomText>
              <Icon
                style={{
                  marginTop: moderateScale(2, 0.6),
                  marginLeft: moderateScale(2, 6),
                }}
                as={Ionicons}
                name="arrow-forward"
                size={moderateScale(14, 0.6)}
                color={Color.white}
              />
            </View>
          </View>
          <View
            style={{
              height: windowHeight * 0.24,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={packagesData}
              renderItem={({item}) => {
                return <ProductCard item={item} from={'packages'} />;
              }}
            />
          </View>
          <View style={styles.title_row}>
            <CustomText isBold style={styles.title}>
              other
            </CustomText>
            <TouchableOpacity style={styles.inner_row}>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                }}>
                see all
              </CustomText>
              <Icon
                style={{
                  marginTop: moderateScale(2, 0.6),
                  marginLeft: moderateScale(2, 6),
                }}
                as={Ionicons}
                name="arrow-forward"
                size={moderateScale(14, 0.6)}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            contentContainerStyle={{
              paddingBottom: moderateScale(60, 0.6),
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={othersData}
            renderItem={({item}) => {
              return <ProductCard item={item} from={'other'} />;
            }}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    paddingHorizontal: moderateScale(10, 0.6),
  },
  title_row: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    width: windowWidth * 0.78,
  },
  inner_row: {
    flexDirection: 'row',
  },
});
