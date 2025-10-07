import { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-new-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomHeader from '../Components/CustomHeader';
import CustomImage from '../Components/CustomImage';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import SearchContainer from '../Components/SearchContainer';
import { windowHeight, windowWidth } from '../Utillity/utils';

const AiScreen = () => {
  const carouselRef = useRef(null);
  const dummyArray = [
    'meditation tips',
    'healthy diets plans',
    'yoga routines',
    'better sleep habits ',
  ];
  const data = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  // const secondArray = ['knowledge', 'guided meditations', 'nutrition\nplans'];
  const secondArray = [
    {
      id: 1,
      name: 'knowledge',
      image: require('../Assets/Images/img6.png')
    },
    {
      id: 2,
      name: 'guided meditations',
      image: require('../Assets/Images/img7.png')
    }, {
      id: 3,
      name: 'nutrition\nplans',
      image: require('../Assets/Images/img8.png')
    },
  ]
  return (
    <SafeAreaView style={styles.main_con}>
      <CustomStatusBar
        barStyle={'dark-content'}
        backgroundColor={Color.bgColor}
      />
      <CustomHeader title={'ai search '} backgroundColor={Color.bgColor} />
      <View style={styles.inner_container}>
        <View style={styles.search_con}>
          <SearchContainer
            placeHolder={'Ask Anything About Your Wellness.....'}
            input
            IconSize={moderateScale(22, 0.6)}
            IconColor={Color.white}
            width={windowWidth * 0.9}
            height={windowHeight * 0.07}
            style={{
              backgroundColor: Color.secondaryColor,
              borderRadius: moderateScale(30, 0.6),
              borderColor: Color.btntextColor,
              borderWidth: 0,
            }}
            inputStyle={{
              paddingHorizontal: moderateScale(15, 0.5),
              paddingTop: moderateScale(10, 0.6),
              color: Color.white,
              fontSize: moderateScale(15, 0.6),
            }}
          />
        </View>
        <View style={styles.box_con}>
          {dummyArray?.map((item, index) => {
            return (
              <TouchableOpacity style={styles.btn}>
                <CustomText isBold style={styles.btn_text}>{item}</CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.cards}>
          <Carousel
            ref={carouselRef}
            data={data}
            renderItem={({ index }) => (
              <View
                style={[
                  styles.item,
                ]}>
                <View style={styles.row}>
                  <View style={styles.circle} />
                  <View style={styles.circle} />
                  <View style={styles.circle} />
                </View>

                <CustomText isBold style={styles.h1}>
                  daliy wellness tip
                </CustomText>
                <CustomText style={styles.sub_heading}>
                  take a 5 minutes mindful breathing break every 2 hour to reset
                  your focus{' '}
                </CustomText>
              </View>
            )}
            sliderWidth={windowWidth * 0.8}
            itemWidth={windowWidth}
            layout="default"
          />
        </View>
        <View style={styles.box_con}>
          {secondArray?.map((item, index) => {
            return (
              <TouchableOpacity style={styles.sec_btn}>
                <View style={styles.image_con}>
                  <CustomImage source={item?.image}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>
                <CustomText isBold
                  style={[
                    styles.btn_text,
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  {item?.name}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AiScreen;

const styles = StyleSheet.create({
  main_con: {
    height: windowHeight,
    width: windowWidth,
  },
  inner_container: {
    paddingHorizontal: moderateScale(20, 0.6),
    width: '100%',
    backgroundColor: Color.bgColor,
    height: '100%',
    paddingVertical: moderateScale(10, 0.6),
  },
  box_con: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  search_con: {
    height: '10%',
  },
  btn: {
    backgroundColor: '#D0D4C4',
    marginVertical: moderateScale(5, 0.6),
    marginHorizontal: moderateScale(5, 0.6),
    height: windowHeight * 0.06,
    justifyContent: 'center',
    width: windowWidth * 0.41,
    alignItems: 'center',
    borderRadius: moderateScale(30, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.black,
  },
  item: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  cards: {
    height: windowHeight * 0.2,
    backgroundColor: '#D0D4C4',
    width: windowWidth * 0.85,
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    marginVertical: moderateScale(25, 0.3),
  },
  h1: {
    marginHorizontal: moderateScale(90, 0.6),
    fontSize: moderateScale(18, 0.6),
    fontWeight: 'bold',
    paddingVertical: moderateScale(5, 0.6),
  },
  sub_heading: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    width: windowWidth * 0.62,
    marginHorizontal: moderateScale(40, 0.6),
  },
  sec_btn: {
    height: windowHeight * 0.125,
    width: windowWidth * 0.27,
    backgroundColor: '#D0D4C4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_con: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.11,
    // backgroundColor: '#D0D4C4',
    alignSelf: 'center',
    marginTop: moderateScale(5, 0.6),
  },
  circle: {
    height: windowHeight * 0.01,
    width: windowHeight * 0.01,
    borderRadius: (windowHeight * 0.01) / 2,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    backgroundColor: Color.primaryColor,
    marginHorizontal: moderateScale(2, 0.6),
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(135, 0.6),
  },
});
