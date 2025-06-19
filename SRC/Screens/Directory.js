import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import SearchContainer from '../Components/SearchContainer';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import Therapycard from '../Components/Therapycard';

const Directory = () => {
  const therapyServices = [
    {
      id: '1',
      title: 'IV Therapy',
      location: '2140 Hemlock Lane Mcallen, TX 78501',
      rating: 5,
      isFavorite: true, // For the heart icon (liked or not)
      servicesOffered: {
        service1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service3: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service4: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      favoriteServices: {
        favorite1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        favorite2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      action: {
        text: 'Book Now',
        type: 'primary',
      },
    },
    {
      id: '2',
      title: 'Regenerative Therapies',
      location: '2140 Hemlock Lane Mcallen, TX 78501',
      rating: 5,
      isFavorite: true, // For the heart icon (liked or not)
      servicesOffered: {
        service1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service3: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service4: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      favoriteServices: {
        favorite1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        favorite2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      action: {
        text: 'Book Now',
        type: 'primary',
      },
    },
    {
      id: '3',
      title: 'Light & Oxygen Therapies',
      location: '2140 Hemlock Lane Mcallen, TX 78501',
      rating: 5,
      isFavorite: true, // For the heart icon (liked or not)
      servicesOffered: {
        service1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service3: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        service4: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      favoriteServices: {
        favorite1: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
        favorite2: 'Lorem Ipsum Dolor Sit Amet, Consectetu',
      },
      action: {
        text: 'Book Now',
        type: 'primary',
      },
    },
  ];
  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        textstyle={{
          color: Color.btntextColor,
          fontWeight: '800',
          letterSpacing: 0.5,
        }}
        title={'Directory'}
        headerColor={Color.bgColor}
      />
      <View style={styles.row}>
        <SearchContainer
          input
          width={windowWidth * 0.8}
          height={windowHeight * 0.05}
          style={{
            borderRadius: moderateScale(30, 0.6),
            borderColor: Color.btntextColor,
          }}
          inputStyle={{
            paddingTop: moderateScale(10, 0.6),
          }}
        />
        <TouchableOpacity style={styles.filter}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={require('../Assets/Images/sort.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={therapyServices}
        renderItem={({item}) => {
          return <Therapycard item={item} />;
        }}
        ListFooterComponent={() =>(
          <View style={{height: windowHeight * 0.1}}/>
        )}
      />
    </SafeAreaView>
  );
};

export default Directory;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    color: Color.btntextColor,
  },
  row: {
    flexDirection: 'row',
  },
  filter: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: (windowWidth * 0.12) / 2,
    borderWidth: 1,
    borderColor: Color.btntextColor,
  },
});
