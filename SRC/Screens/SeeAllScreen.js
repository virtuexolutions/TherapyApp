import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import SearchContainer from '../Components/SearchContainer';
import { windowHeight, windowWidth } from '../Utillity/utils';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';

import { FlatList, Icon, ScrollView } from 'native-base';
import SeeAllCard from '../Components/SeeAllCard';
import FilterModal from '../Components/FilterModal';

const SeeAllScreen = () => {
  //  const [rbRef, setRbRef] = useState(null);
  const refRBSheet = useRef();
    console.log(
      'first= ========================= >>>> item from detailed',
     refRBSheet
    );
  const treatmentsData = [
    {
      id: 1,
      title: 'Early pregnancy scan (booking or dating scan)',
      provider: 'GSK Group',
      location: 'HUX Hospital, San Francisco, CA',
      image: require('../Assets/Images/gsk.png'),
      vitality_access_price: '$350.00',
      others_price: '$590.00',
      saving: '40%',
    },
    {
      id: 2,
      title: 'Ultrasound for fetal anatomy assessment',
      provider: 'HealthFirst Medical',
      location: 'Saint Barnabas Hospital, Los Angeles, CA',
      image: require('../Assets/Images/other.png'),
      vitality_access_price: '$190.00',
      others_price: '$350.00',
      saving: '32%',
    },
    {
      id: 3,
      title: 'Routine prenatal check-up',
      provider: 'Family Care Clinic',
      location: 'Lenox Hill Hospital, New York, NY',
      image: require('../Assets/Images/other.png'),

      vitality_access_price: '$350.00',
      others_price: '$590.00',
      saving: '40%',
    },
    {
      id: 4,
      title: 'Postpartum follow-up appointment',
      provider: 'Maternal Health Services',
      location: 'Ben Taub General Hospital, Houston, TX',
      image: require('../Assets/Images/other.png'),

      vitality_access_price: '$350.00',
      others_price: '$590.00',
      saving: '40%',
    },
    {
      id: 5,
      title: 'Gestational diabetes screening',
      provider: 'Wellness Center',
      location: 'Northwestern Memorial Hospital, Chicago, IL',
      image: require('../Assets/Images/other.png'),

      vitality_access_price: '$350.00',
      others_price: '$590.00',
      saving: '40%',
    },
    {
      id: 6,
      title: 'Postpartum follow-up appointment',
      provider: 'Maternal Health Services',
      location: 'Texas Medical Center, Houston, TX',
      image: require('../Assets/Images/gsk.png'),

      vitality_access_price: '$350.00',
      others_price: '$590.00',
      saving: '40%',
    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.themeBluishBlack}
      statusBarContentStyle={'light-content'}>
      <Header showGreeting={true} showCart />
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
              flexDirection: 'row',
            }}>
            <SearchContainer
              placeHolder={'Search treaments'}
              input
              IconSize={moderateScale(22, 0.6)}
              IconColor={Color.white}
              width={windowWidth * 0.77}
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
            <TouchableOpacity  onPress={() =>{
              refRBSheet?.current?.open()
            }}style={styles.filter}>
              <Icon
                as={Ionicons}
                name="filter-outline"
                color={Color.white}
                size={moderateScale(25, 0.6)}
              />
            </TouchableOpacity>
          </View>
          {/* <CustomText>dfkasdjfkkdjfklsjdklfjskldjfkl</CustomText> */}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={treatmentsData}
            renderItem={({item}) => {
              return <SeeAllCard item={item} />;
            }}
          />
           <FilterModal
                // setRef={setRbRef}
                ref={refRBSheet}
                />
        </ScrollView>
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default SeeAllScreen;

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
  filter: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.13,
    borderWidth: 0.3,
    borderRadius: 8,
    borderColor: Color.white,
    backgroundColor: '#354654',
    marginTop: moderateScale(16, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
