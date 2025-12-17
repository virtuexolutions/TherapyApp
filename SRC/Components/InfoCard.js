import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {FlatList, Icon, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {SafeAreaView} from 'react-native-safe-area-context';

const InfoCard = () => {
  return (
    <View style={styles.card_con}>
      <View style={styles.row}>
        <View style={styles.image_con}>
          <CustomImage
            style={styles.image}
            source={require('../Assets/Images/other.png')}
          />
        </View>

        <CustomText style={styles.text_pro}>
          Provided by
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#17B28A',
              borderBottomWidth: 1,

              textDecorationLine: 'underline',
            }}>
            HealthFirst Medical
          </CustomText>
        </CustomText>

        {!fromOrder && (
          <TouchableOpacity style={styles.like_btn}>
            <Icon
              name={'heart'}
              as={Feather}
              size={moderateScale(15, 0.6)}
              color={Color.white}
            />
          </TouchableOpacity>
        )}
      </View>

      <CustomText numberOfLines={2} style={styles.h1}>
        Ultrasound for fetal anatomy assessment
      </CustomText>
      <View style={styles.text_con}>
        <View style={styles.text_Row}>
          <Icon
            style={{
              marginTop: moderateScale(3, 0.6),
            }}
            as={Feather}
            name="map-pin"
            size={moderateScale(13, 0.6)}
            color={Color.white}
          />
          <CustomText
            style={[
              styles.text,
              {
                textDecorationLine: 'underline',
              },
            ]}>
            Saint Barnabas Hospital, Los Angeles, CA
          </CustomText>
        </View>
        {!fromOrder ? (
          <View
            style={[
              styles.text_Row,
              {
                marginTop: moderateScale(5, 0.6),
              },
            ]}>
            <Icon
              style={{
                marginTop: moderateScale(3, 0.6),
              }}
              as={Feather}
              name={'clock'}
              size={moderateScale(13, 0.6)}
              color={Color.white}
            />

            <CustomText style={styles.text}>Opens at 9:00 AM </CustomText>
          </View>
        ) : (
          <View
            style={[
              styles.text_Row,
              {
                justifyContent: 'space-between',
                // backgroundColor :'red',
                // marginTop: moderateScale(5, 0.6),
              },
            ]}>
            <View
              style={[
                styles.text_Row,
                {
                  marginTop: moderateScale(5, 0.6),
                },
              ]}>
              <Icon
                style={{
                  marginTop: moderateScale(3, 0.6),
                }}
                as={FontAwesome}
                name={'calendar'}
                size={moderateScale(13, 0.6)}
                color={Color.white}
              />

              <CustomText style={styles.text}>
                Purchased on: 12/24/25
              </CustomText>
            </View>
            <View
              style={[
                styles.text_Row,
                {
                  marginTop: moderateScale(5, 0.6),
                },
              ]}>
              <Icon
                style={{
                  marginTop: moderateScale(3, 0.6),
                }}
                as={Feather}
                name={'dollar-sign'}
                size={moderateScale(13, 0.6)}
                color={Color.white}
              />

              <CustomText style={styles.text}>Price: $350.00</CustomText>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card_con: {
    paddingHorizontal: moderateScale(10, 0.6),
    backgroundColor: '#354654',
    width: windowWidth,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    marginVertical: moderateScale(10, 0.6),
    marginRight: moderateScale(10, 0.6),
    borderEndEndRadius: 20,
    borderStartEndRadius: 20,
  },
  text_pro: {
    fontSize: moderateScale(11, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(5, 0.6),
    marginTop: moderateScale(15, 0.6),
    width: '80%',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_con: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.1,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: moderateScale(7, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  like_btn: {
    height: windowHeight * 0.032,
    width: windowHeight * 0.032,
    borderRadius: (windowHeight * 0.032) / 2,
    borderWidth: 1,
    backgroundColor: '#354654',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    marginTop: moderateScale(10, 0.6),
  },
  h1: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
    width: windowWidth * 0.67,
    marginTop: moderateScale(7, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
  },

  text_con: {
    paddingTop: moderateScale(15, 0.6),
  },
  text_Row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(13, 0.6),
    paddingHorizontal: moderateScale(5, 0.6),
    color: Color.white,
  },
  btn: {
    width: windowWidth * 0.68,
    borderWidth: 1,
    backgroundColor: '#354654',
    padding: moderateScale(4, 0.6),
    borderColor: Color.white,
    borderRadius: moderateScale(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(8, 6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
  },
  saving_con: {
    width: windowWidth * 0.21,
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
    borderRadius: 5,
    paddingVertical: moderateScale(2, 0.6),
    backgroundColor: '#36D1A333',
  },
  saving_text: {
    fontSize: moderateScale(11, 0.6),
    color: '#17B28A',
  },
  package_row: {
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.6),
    justifyContent: 'space-between',
  },

  h2: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    paddingHorizontal: moderateScale(10, 0.6),
  },
});
