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
import OrderCard from '../Components/OrderCard';

const OrderScreen = () => {
  const ordersData = [
    {
      id: 1,
      title: 'Ultrasound for fetal anatomy assessment',
      provider: 'HealthFirst Medical',
      providerColor: '#4CC9F0',
      providerLogo: require('../Assets/Images/other.png'),

      price: '$350.00',
      date: '08/01/25',
      buttons: {
        call: 'Request a call',
        message: 'Send message',
        buyAgain: 'Buy again',
      },
    },
    {
      id: 2,
      title: 'MRI for brain imaging',
      provider: 'NeuroTech',
      providerColor: '#6BE58E',
      providerLogo: require('../Assets/Images/cardio1.png'),

      price: '$500.00',
      date: '04/12/25',
      buttons: {
        call: 'Request a call',
        message: 'Send message',
        buyAgain: 'Buy again',
      },
    },
    {
      id: 3,
      title: 'X-Ray for orthopedic evaluation',
      provider: 'BoneCare',
      providerColor: '#A37ADB',
      providerLogo: require('../Assets/Images/xray.png'),
      price: '$150.00',
      date: '04/15/25',
      buttons: {
        call: 'Request a call',
        message: 'Send message',
        buyAgain: 'Buy again',
      },
    },
    {
      id: 4,
      title: 'CT Scan for abdominal assessment',
      provider: 'ScanWell',
      providerColor: '#51A7F9',
      providerLogo: require('../Assets/Images/other.png'),

      price: '$200.00',
      date: '06/22/25',
      buttons: {
        call: 'Request a call',
        message: 'Send message',
        buyAgain: 'Buy again',
      },
    },
  ];
  const data = ['treatment', 'procedures', 'packages'];
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showBack={true} title={'Orders and payments'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScreen}>
        <View style={styles.title_row}>
          {data?.map(item => {
            return (
              <TouchableOpacity style={styles.btn}>
                <CustomText style={styles.title}>{item}</CustomText>
              </TouchableOpacity>
            );
          })}
        </View>

        <FlatList
         showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom : moderateScale(30,.6)
          }}
          data={ordersData}
          renderItem={({item}) => {
            return <OrderCard item={item} from={'treatments'} />;
          }}
        />
      </ScrollView>
    </ScreenBoiler>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.themeDarkBlueGray,
  },
  title_row: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.6),
    // width: '100%',
  },
  btn: {
    marginRight: moderateScale(5, 0.6),
    paddingHorizontal: moderateScale(12, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    borderRadius: moderateScale(20, 0.6),
    // padding: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: '#778B9C',
    backgroundColor: '#354654',
  },
  title: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
    letterSpacing: 0.5,
    // width: windowWidth * 0.78,
  },
  inner_row: {
    flexDirection: 'row',
  },
});
