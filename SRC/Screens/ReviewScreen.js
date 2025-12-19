import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';

import {FlatList, Icon, ScrollView} from 'native-base';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import Review from '../Components/Review';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {mode} from 'native-base/lib/typescript/theme/tools';
import {Rating} from 'react-native-ratings';

const ReviewScreen = props => {
  const ratingStats = [
    {label: 'Accuracy', value: 5.0},
    {label: 'Speed', value: 4.8},
    {label: 'Reliability', value: 4.6},
    {label: 'Usability', value: 4.9},
    {label: 'Support', value: 4.7},
  ];

  const reviewsData = [
    {
      id: '1',
      name: 'Juliana Stephen',
      location: 'Kansas Arizona',
      rating: 5,
      time: '1 week ago',
      review:
        'I had a truly exceptional experience during my recent fetal scan at this clinic. From the moment I walked in, the staff exuded warmth and professionalism, making me feel instantly at ease. The sonographers were incredibly skilled and patient, taking the time to explain each step of the process and answer all of my questions with genuine care and compassion.\n\nWhat truly stood out was the remarkable clarity of the images produced during the scan. I was able to see my baby in stunning detail, which created an emotional and unforgettable moment for me and my partner. The advanced technology used at this clinic is evident in the exceptional quality of the images, providing invaluable insights into my babys development. I highly recommend this clinic to any expecting parents seeking a comprehensive and compassionate fetal scan experience',
    },
    {
      id: '2',
      name: 'Juliana Stephen',
      location: 'Kansas Arizona',
      rating: 5,
      time: '1 week ago',
      review:
        'I had a wonderful experience during my fetal scan. The staff was caring, and the images were incredibly clear. Highly recommend.',
    },
    {
      id: '3',
      name: 'Maria Gonzalez',
      location: 'California Texas',
      rating: 5,
      time: '2 days ago',
      review:
        'I recently visited this clinic for my fetal scan, and I cant express how impressed I was with the entire process. From the friendly receptionist to the knowledgeable sonographers, everyone made me feel supported and informed. The scan itself was fascinating; the images were so clear that I felt like I was getting a sneak peek into my babys world. The sonographer took the time to walk me through everything, pointing out features and making sure I understood what I was seeing. It was a highly emotional experience, and I left feeling reassured about my pregnancy. I wholeheartedly recommend this clinic to anyone looking for a professional and heartfelt fetal scan experience.',
    },
  ];

  const renderProgress = item => {
    return (
      <View style={styles.progressRow}>
        <CustomText style={styles.progressLabel}>{item.label}</CustomText>

        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, {width: `${(item.value / 5) * 100}%`}]}
          />
        </View>

        <CustomText style={styles.progressValue}>
          {item.value.toFixed(1)}
        </CustomText>
      </View>
    );
  };

  const renderReview = ({item}) => {
    return (
      <View style={styles.reviewCard}>
        <View style={styles.reviewHeader}>
          <View
            style={{
              height: windowHeight * 0.04,
              width: windowHeight * 0.04,
              borderRadius: (windowHeight * 0.04) / 2,
              //   backgroundColor: 'red',
              overflow: 'hidden',
            }}>
            <CustomImage
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../Assets/Images/review1.jpg')}
            />
          </View>
          <View
            style={{
              width: item?.id == 1 ? windowWidth * 0.55 : windowWidth * 0.85,
              justifyContent: 'flex-start',
              paddingHorizontal: moderateScale(10, 0.6),
            }}>
            <CustomText style={styles.userName}>{item?.name}</CustomText>
            <CustomText style={styles.location}>{item.location}</CustomText>
          </View>

          {item?.id == 1 && (
            <TouchableOpacity style={styles.filterBtn}>
              <CustomText style={styles.filterCustomText}>
                Most relevant
              </CustomText>
              <Icon
                style={{
                  marginLeft: moderateScale(5, 0.6),
                  marginTop : moderateScale(3,.6) 
                }}
                size={moderateScale(10, 0.6)}
                color={Color.white}
                as={AntDesign}
                name="down"
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Rating
            style={{
              marginTop: moderateScale(3, 0.6),
            }}
            type="star"
            ratingCount={5}
            imageSize={10}
            startingValue={4}
            onFinishRating={rating => console.log(rating)}
            readonly
            tintColor="#1c2b36"
          />
          {/* <CustomText style={styles.stars}>★★★★★</CustomText> */}
          <CustomText style={styles.time}>{item.time}</CustomText>
        </View>

        <CustomText style={styles.reviewText}>{item.review}</CustomText>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#1B2730'}}>
      <ScreenBoiler
        statusBarBackgroundColor={Color.themeBluishBlack}
        statusBarContentStyle={'light-content'}>
        <Header title={' '} showBack={true}  showCart={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[
            styles.mainScreen,
            {
              paddingBottom: moderateScale(190, 0.6),
            },
          ]}>
          <View style={styles.container}>
            {/* Rating Header */}
            <CustomText isBold style={styles.ratingCustomText}>
              4.93 · 254 reviews
            </CustomText>

            {/* Progress Section */}
            {ratingStats?.map((item, index) => (
              <View key={index}>{renderProgress(item)}</View>
            ))}

            {/* Reviews List */}
            <FlatList

              data={reviewsData}
              keyExtractor={item => item.id}
              renderItem={renderReview}
              contentContainerStyle={{paddingBottom: moderateScale(50,.6)}}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </ScreenBoiler>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight * 0.925,
    backgroundColor: '#1B2730',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(20, 0.6),
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#0E1A24",
  //     padding: moderateScale(16,.6),
  //   },

  ratingText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(12, 0.6),
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8, 0.6),
  },

  progressLabel: {
    width: scale(80),
    // backgroundColor :'red',
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
  },

  progressBar: {
    flex: 1,
    height: windowHeight * 0.005,
    backgroundColor: '#263238',
    borderRadius: moderateScale(4, 0.6),
    marginHorizontal: scale(8, 0.6),
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#4FC3F7',
    borderRadius: moderateScale(4, 0.6),
  },

  progressValue: {
    color: '#fff',
    fontSize: moderateScale(12, 0.6),
    width: scale(30),
    textAlign: 'right',
  },

  reviewCard: {
    marginTop: moderateScale(16, 0.6),
    borderBottomWidth: 0.4,
    borderBottomColor: Color.white,
    paddingBottom: moderateScale(12, 0.6),
  },

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userName: {
    color: '#fff',
    fontSize: moderateScale(14, 0.6),
    fontWeight: '600',
  },

  location: {
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
    marginTop: moderateScale(2, 0.6),
  },

  filterBtn: {
    backgroundColor: '#1C2B36',
    paddingHorizontal: scale(10),
    borderWidth: 0.4,
    flexDirection: 'row',
    borderColor: Color.white,
    paddingVertical: moderateScale(4, 0.6),
    borderRadius: moderateScale(8, 0.6),
    // alignContent :'center',

    // justifyContent :'space-between',
  },

  filterText: {
    color: '#fff',
    fontSize: moderateScale(11, 0.6),
  },

  stars: {
    color: '#FFD700',
    fontSize: moderateScale(14, 0.6),
    marginTop: moderateScale(6, 0.6),
  },

  time: {
    color: Color.white,
    fontSize: moderateScale(10, 0.6),
    marginTop: moderateScale(2, 0.6),
    marginHorizontal: moderateScale(10, 0.6),
  },

  reviewText: {
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
    marginTop: moderateScale(6, 0.6),
    // lineHeight: moderateScale(18, 0.6),
  },
  ratingCustomText: {
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
    paddingBottom: moderateScale(10, 0.6),
  },
  filterCustomText: {
    fontSize: moderateScale(10, 0.6),
    color: Color.white,
  },
});
