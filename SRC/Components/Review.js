import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { Icon } from 'native-base';
import { Rating } from 'react-native-ratings';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';

const Review =( {item}) => {
    console.log('first==================== >>' ,item)
  return (
    <View style={styles.info_card}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.icon_con}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={item?.avatar}
          />
        </View>
        <View
          style={
            {
              //   paddingTop: moderateScale(3, 0.6),
            }
          }>
          <CustomText
            style={{
              fontSize: moderateScale(14, 0.6),
              color: Color.white,
            }}>
            {item?.name}
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: Color.white,
            }}>
            {item?.location}
          </CustomText>
        </View>
      </View>
      {/* <CustomText
                        style={{
                            fontSize: moderateScale(12, 0.6),
                            color: Color.white,
                        }}>
                        {item?.id}
                      </CustomText> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={10}
          startingValue={item?.rating}
          onFinishRating={rating => console.log(rating)}
          readonly
          tintColor="#1c2b36"
        />
      </View>
      <CustomText
        style={{
          fontSize: moderateScale(11, 0.6),
          color: Color.white,
          paddingHorizontal: moderateScale(5, 0.6),
          paddingVertical: moderateScale(10, 0.6),
        }}>
        {item?.review}
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(12, 0.6),
            color: Color.white,
            paddingHorizontal: moderateScale(5, 0.6),
            //   paddingVertical: moderateScale(10, 0.6),
          }}>
          see all
        </CustomText>
        <Icon
          style={{
            marginTop: moderateScale(2, 0.6),
          }}
          name="arrow-right"
          as={Feather}
          size={moderateScale(13, 0.6)}
          color={Color.white}
        />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  info_card: {
    height: windowHeight * 0.18,
    width: windowWidth * 0.65,
    backgroundColor: 'transparent',
    marginRight: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 0.5,
    borderColor: Color.white,
  },
  icon_con: {
    height: windowHeight * 0.04,
    width: windowHeight * 0.04,
    borderRadius: (windowHeight * 0.04) / 2,
    borderWidth: 0.3,
    borderColor: Color.white,
    overflow: 'hidden',
    marginRight: moderateScale(15, 0.6),
  },

  dec: {
    color: Color.white,
    fontSize: moderateScale(11, 0.6),
    width: windowWidth * 0.8,
  },
  h3: {
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
    letterSpacing: 0.6,
  },
  row_sec: {
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
});
