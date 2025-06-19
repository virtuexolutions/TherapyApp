import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {setWalkThrough} from '../Store/slices/auth-slice';
import {windowHeight, windowWidth} from '../Utillity/utils';

const WalkThroughScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const slidesref = useRef(null);
  console.log('🚀 ~ slidesref:', slidesref?.current);
  const slides = [
    {
      key: '1',
      image: require('../Assets/Images/walk1.png'),
      title: 'mission',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur consectetur ligula eget ultrices. Cras ac risus sodales, posuere nibh et, molestie',
    },
    {
      key: '2',
      image: require('../Assets/Images/walk2.png'),
      title: 'benefit',
      text: `Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Eu Pulvinar Metus, Fringilla Semper Enim. Etiam Viverra Porttitor Nunc Laoreet Faucibus. Fusce Accumsan Mauris At Sem Finibus Gravida. Donec Cursus Tincidunt Eros In Efficitur. Maecenas Cursus Pretium Dui, In Tristique Turpis Finibus Nec. Class Aptent.`,
    },
    {
      key: '3',
      image: require('../Assets/Images/walk3.png'),
      title: 'service',
      text: `Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Eu Pulvinar Metus, Fringilla Semper Enim. Etiam Viverra Porttitor Nunc Laoreet Faucibus. Fusce Accumsan Mauris At Sem Finibus Gravida. Donec Cursus Tincidunt Eros In Efficitur. Maecenas Cursus Pretium Dui, In Tristique Turpis Finibus Nec. Class Aptent.`,
    },
  ];
  console.log(slidesref.current, 'indexxxxxxx');

  const RenderSlider = ({item}) => {
    return (
      <ImageBackground
        imageStyle={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="cover"
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        source={item.image}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.2,
            position: 'absolute',
            top: item?.key == 2 && 100,
            bottom: 100,
            marginHorizontal: moderateScale(25, 0.3),
          }}>
          <CustomText
            style={{
              fontSize: moderateScale(22, 0.6),
              color: Color.white,
            }}>
            {item?.title}
          </CustomText>
          <CustomText
            style={{
              width: windowWidth * 0.89,
              lineHeight: moderateScale(16, 0.6),
              fontSize: moderateScale(11, 0.6),
              color: Color.white,
            }}>
            {item?.text}
          </CustomText>
        </View>
      </ImageBackground>
    );
  };

  const RenderNextBtn = ({onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: windowHeight * 0.05,
          width: windowHeight * 0.05,
          borderRadius: (windowHeight * 0.09) / 2,
          backgroundColor: 'transparent',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: Color.white,
          bottom: 10,
          alignSelf: 'flex-start',
          right: -30,
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(11, 0.6),
            color: Color.white,
          }}>
          NEXT
        </CustomText>
      </TouchableOpacity>
    );
  };
  const RenderDoneBtn = () => {
    return (
      <CustomText
        onPress={() => {
          dispatch(setWalkThrough(true));
        }}
        style={[styles.generalBtn, styles.btnRight]}>
        Done
      </CustomText>
    );
  };
  const RenderSkipBtn = () => {
    return (
      <TouchableOpacity
        style={{
          height: windowHeight * 0.05,
          width: windowHeight * 0.05,
          borderRadius: (windowHeight * 0.09) / 2,
          backgroundColor: 'white',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: Color.black,
          bottom: 10,
          alignSelf: 'center',
        }}>
        <CustomText
          onPress={() => {
            dispatch(setWalkThrough(true));
          }}
          style={[styles.generalBtn, styles.btnLeft]}>
          Skip
        </CustomText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container1}>
      <AppIntroSlider
        renderItem={RenderSlider}
        data={slides}
        ref={slidesref}
        renderPagination={activeindex => {
          console.log('activeeeeeee ,index ', activeindex);

          return (
            <View
              style={{
                width: windowWidth,
                position: 'absolute',
                top: activeindex == 1 && '30%',
                bottom: activeindex == 0 ? '13%' : '8%',
                alignSelf: 'flex-start',
              }}>
              {/* <RenderSkipBtn /> */}
              <RenderNextBtn
                onPress={() => {
                  if (slidesref.current) {
                    if (activeindex < slides.length - 1) {
                      slidesref.current.goToSlide(activeindex + 1, true);
                    } else {
                      dispatch(setWalkThrough(true));
                    }
                  }
                }}
              />
            </View>
          );
        }}
        showNextButton={true}
        activeDotStyle={{backgroundColor: Color.themeBlack}}
        dotStyle={{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: Color.themeBlack,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'white',
  },

  generalBtn: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: moderateScale(15, 0.3),
  },
  btnLeft: {
    color: Color.themeBlack,
  },
  btnRight: {
    color: Color.white,
  },
});

export default WalkThroughScreen;
const BoldText = ({children}) => {
  return <Text style={{fontWeight: 'bold'}}>{children}</Text>;
};
