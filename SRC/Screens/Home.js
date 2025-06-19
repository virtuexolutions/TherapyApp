import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import MembershipCard from '../Components/MembershipCard';
import AppointmentCard from '../Components/AppointmentCard';

const Home = () => {
  const memberships = [
    {
      id: '1',
      title: 'Membership 01',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },
    {
      id: '2',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },

    {
      id: '3',
      title: 'Membership 02',
      description:
        'Lorem Ipsum Dolor Sit Amet, Consectetur Adip Iscing Elit. Pellentesque Eu Pulvinar Metu.',
    },
  ];

  const appointments = [
    {
      id: '1',
      title: 'IV Therapy',
      description: 'Boost immunity and hydrate fast...',
      image: 'https://example.com/image1.jpg',
    },
    {
      id: '2',
      title: 'Regenerative Therapies',
      description: 'Advanced cellular recovery treatments...',
      image: 'https://example.com/image2.jpg',
    },
    {
      id: '3',
      title: 'Light & Oxygen Therapies',
      description: 'Rejuvenate with red light and O2 sessions...',
      image: 'https://example.com/image3.jpg',
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
          right: 25,
        }}
        title={'Good Morning, Sarah!'}
        headerColor={Color.bgColor}
      />
      <ImageBackground
        style={styles.first_con}
        source={require('../Assets/Images/image1.png')}>
        <CustomText isBold style={styles.h1}>
          Welcome To Vitality
        </CustomText>
        <CustomText style={styles.txt}>
          At Vitality Access, We Believe Optimal Wellness Should Be Within
          Everyone's Reach. Our Curated Membership Unlocks Exclusive Pricing And
          Access To The Most Advanced Holistic And Regenerative Treatments
          Available Today.
        </CustomText>
      </ImageBackground>
      <View style={styles.memberships_con}>
        <CustomText style={styles.title}>Member Perks</CustomText>
        <CustomText style={styles.sub_txt}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque
          Eu Pulvinar Metus, Fringilla Semper Enim.s
        </CustomText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={memberships}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.horizontalList}
          renderItem={({item}) => <MembershipCard item={item} />}
        />
      </View>
      <CustomText isBold style={styles.sectionTitle}>
        Book Appointment
      </CustomText>
      <CustomText
        style={[
          styles.sub_txt,
          {
            paddingHorizontal: moderateScale(20, 0.6),
          },
        ]}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Eu
        Pulvinar Metus, Fringilla Semper Enim.
      </CustomText>
      {/* <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AppointmentCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />{' '} */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.bgColor,
    alignItems: 'center',
  },
  first_con: {
    height: windowHeight * 0.17,
    width: windowWidth * 0.92,
    borderRadius: moderateScale(10, 0.6),
    alignItems: 'flex-start',
    paddingHorizontal: moderateScale(15, 0.6),
    paddingTop: moderateScale(30, 0.6),
  },
  h1: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
  },
  txt: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
  },
  memberships_con: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.9,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15, 0.6),
    paddingVertical: moderateScale(9, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  title: {
    fontSize: moderateScale(14, 0.6),
    color: Color.btntextColor,
    letterSpacing: 0.6,
    fontWeight: '700',
  },
  sub_txt: {
    fontSize: moderateScale(11, 0.6),
    color: Color.btntextColor,
  },

  sectionTitle: {
    fontSize: moderateScale(15, 0.6),
    color: Color.btntextColor,
    alignSelf: 'flex-start',
    paddingHorizontal: moderateScale(20, 0.6),
    paddingTop: moderateScale(10, 0.6),
  },
});
