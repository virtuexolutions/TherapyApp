import React, {use, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {moderateScale} from 'react-native-size-matters';
import SearchContainer from './SearchContainer';
import TextInputWithTitle from './TextInputWithTitle';

const FilterModal = ({setRef, ref}) => {
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setinPrice] = useState('');

  const treaments = [
    'Dentistry',
    'Hair Transplant',
    'Plastic Surgery',
    'Cardiovascular',
    'Bariatric Surgery',
    'Rhinoplasty',
  ];
  return (
    <RBSheet
      closeOnDragDown={true}
      ref={ref}
      height={450}
      dragFromTopOnly={true}
      openDuration={250}
      // closeOnPressMask={true}
      customStyles={{
        container: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: windowHeight * 0.62,
        },
      }}>
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          backgroundColor: '#293640',
        }}>
        <View style={styles.header}>
          <CustomText style={styles.title}>filter </CustomText>
          <TouchableOpacity style={styles.cross_btn}>
            <Icon
              as={Entypo}
              color={Color.white}
              name="cross"
              size={moderateScale(18, 0.6)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor :'green',
            height: windowHeight * 0.1,
          }}>
          <CustomText style={styles.loc}>location </CustomText>

          <SearchContainer
            placeHolder={'Search near places'}
            input
            IconSize={moderateScale(18, 0.6)}
            IconColor={Color.white}
            width={windowWidth * 0.93}
            height={windowHeight * 0.053}
            style={{
              backgroundColor: 'transparent',
              borderRadius: moderateScale(10, 0.6),
              borderColor: Color.white,
              borderWidth: 0.1,
              marginTop: moderateScale(5, 0.6),
            }}
            inputStyle={{
              paddingHorizontal: moderateScale(15, 0.5),
              paddingTop: moderateScale(10, 0.6),
              color: Color.white,
              fontSize: moderateScale(14, 0.6),
            }}
          />
        </View>
        <CustomText style={styles.h2}>treaments </CustomText>
        <View style={styles.map_con}>
          {treaments?.map(item => {
            return (
              <TouchableOpacity style={styles.btn}>
                <CustomText style={styles.btn_text}>{item}</CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
        <CustomText style={styles.h2}>price range </CustomText>
        <View style={styles.row}>
          <View>
            <CustomText
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              minimum{' '}
            </CustomText>
            <TextInputWithTitle
              leftIcon
              color={Color.white}
              iconName={'dollar-sign'}
              iconType={Feather}
              //   title={'minimum'}
              placeholder={''}
              setText={setMaxPrice}
              value={maxPrice}
              viewHeight={0.05}
              viewWidth={0.43}
              inputWidth={0.4}
              border={1}
              fontSize={moderateScale(9, 0.6)}
              borderRadius={10}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(5, 0.3)}
              placeholderColor={Color.white}
              inputColor={Color.white}
              titleStlye={{color: Color.white}}
            />
          </View>
          <View>
            <CustomText
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              maximum{' '}
            </CustomText>

            <TextInputWithTitle
              leftIcon
              color={Color.white}
              iconName={'dollar-sign'}
              iconType={Feather}
              //   title={'minimum'}
              //   marginRight={moderateScale(5,.6)}
              placeholder={''}
              setText={setMaxPrice}
              value={maxPrice}
              viewHeight={0.05}
              viewWidth={0.43}
              inputWidth={0.4}
              border={1}
              fontSize={moderateScale(9, 0.6)}
              borderRadius={10}
              backgroundColor={'transparent'}
              borderColor={Color.white}
              marginTop={moderateScale(5, 0.3)}
              placeholderColor={Color.white}
              inputColor={Color.white}
              titleStlye={{color: Color.white}}
            />
          </View>
        </View>
        <View style={styles.sec_row}>
          <CustomText
            style={{
              fontSize: moderateScale(13, 0.6),
              color: Color.white,
              textDecorationLine: 'underline',
              marginTop : moderateScale(10,.6)
            }}>
            clear all
          </CustomText>
          <TouchableOpacity style={styles.save_btn}>
            <CustomText
              style={{
                fontSize: moderateScale(13, 0.6),
                color: Color.white,
                //   textDecorationLine: 'underline',
              }}>
              save
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </RBSheet>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
    borderBottomWidth: 0.2,
    borderBottomColor: Color.white,
  },
  title: {
    letterSpacing: 0.8,
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
    marginTop : moderateScale(5,.6)
  },
  loc: {
    paddingTop: moderateScale(15, 0.6),
    color: Color.white,
    fontSize: moderateScale(14, 0.6),
  },
  h2: {
    paddingTop: moderateScale(15, 0.6),
    color: Color.white,
    fontSize: moderateScale(14, 0.6),
    alignSelf: 'flex-start',
    paddingHorizontal: moderateScale(15, 0.6),
  },
  cross_btn: {
    height: windowHeight * 0.035,
    width: windowWidth * 0.1,
    borderWidth: 0.5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.white,
    backgroundColor: '#354654',
  },
  map_con: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    width: windowWidth * 0.42,
    height: windowHeight * 0.05,
    borderWidth: 0.5,
    borderColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: moderateScale(10, 0.6),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: moderateScale(15, 0.6),
    marginVertical: moderateScale(5, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15, 0.6),
    paddingTop: moderateScale(5, 0.6),
  },
  sec_row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15, 0.6),
    paddingTop: moderateScale(20, 0.6),
  },
  save_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: windowHeight * 0.04,
    width: windowWidth * 0.3,
    backgroundColor: '#069571',
    // borderWidth:
  },
});
