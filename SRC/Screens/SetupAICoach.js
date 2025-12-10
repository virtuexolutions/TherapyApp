import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import FormWrapper from '../Components/FormWrapper';
import ScreenBoiler from '../Components/ScreenBoiler';
import OnBoardingHeader from '../Components/OnBoardingHeader';
import CustomTile from '../Components/CustomTile';
import CustomImage from '../Components/CustomImage';
import { Path, Svg } from 'react-native-svg';
import { prepareAutoBatched } from '@reduxjs/toolkit';
const SetupAICoach = ({onContinue}) => {
  const [coachName, setCoachName] = useState('');
  const [selectedCoachBehaviours, setSelectedCoachBehaviours] = useState([]);
  const behaviours= selectedCoachBehaviours.map(item => item + ",")
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <OnBoardingHeader
        title={'Set up your AI Coach'}
        subtitle={`Next: Connect your health data`}
      />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <ScrollView
          style={styles.mainScreen}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{width: windowWidth, height: windowHeight * 0.29, 
              overflow:"hidden",
              
              zIndex:0, position:"absolute", top:-5}}>
              <CustomImage
              source={require("../Assets/Images/wave2.png")}
              style={[styles.image, {
                resizeMode:"stretch",}]}
              />
            </View>
          <View style={styles.form}>
      

            <CustomText children={coachName.length > 0 ? coachName : 'Your Coach'} style={styles.text1} />
            <CustomText children={selectedCoachBehaviours?.length > 0 ? behaviours : "I'll be.."} style={styles.text2} />
            <NameYourAiCoach 
            name={coachName}
            setName={setCoachName}
            />
            <CustomText
              children={'How should your coach sound?'}
              style={[styles.text1, {marginTop: verticalScale(30)}]}
            />
            <View style={styles.options}>
              {['Calm', 'Clinical', 'Motivational', 'Friendly'].map(
                (item, index) => (
                  <CustomTile
                    key={index}
                    
                    showLeadingImage={false}
                    title={item}
                    onPress={() => {
                      if(selectedCoachBehaviours.includes(item)){
                         setSelectedCoachBehaviours((prev) => prev.filter(prevItem => prevItem !== item))
                      }else{
                        setSelectedCoachBehaviours((prev) => [...prev, item])
                      }
                    }}
                    style={styles.tile}
                    selected={selectedCoachBehaviours.includes(item)}
                  />
                ),
              )}
            </View>
          </View>
          {/* </FormWrapper> */}
          {/* </FormWrapper> */}
          <Divider color={Color.themeGrayColor} />
          <CustomButton
            isBold
            text={'Save my Coach'}
            fontSize={moderateScale(15, 0.3)}
            textColor={Color.white}
            borderWidth={1.5}
            borderColor={Color.btntextColor}
            borderRadius={moderateScale(15, 0.3)}
            width={windowWidth * 0.85}
            height={windowHeight * 0.06}
            bgColor={Color.themeBrand600}
            textTransform={'capitalize'}
            marginTop={scale(20)}
            elevation={true}
            // onPress={() => {
            //   navigationService.navigate('TabNavigation')
            // }}
            onPress={onContinue}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenBoiler>
  );
};

const NameYourAiCoach = ({name, setName}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <CustomImage
          style={styles.image}
          source={require('../Assets/Images/Avatar.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInputWithTitle
          title={'Name your AI coach'}
          titleColor={Color.gray50}
          placeholder={''}
          setText={setName}
          value={name}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.8}
          border={2}
          // color={Color.white}
          inputColor={Color.white}
          borderRadius={15}
          borderColor={Color.themeLightBlueGray}
          marginTop={moderateScale(10, 0.3)}
          placeholderColor={Color.gray50}
          titleStlye={styles.inputLabel}
          backgroundColor={Color.themeDarkBlueGray}
        />
      </View>
    </View>
  );
};

export default SetupAICoach;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    // paddingHorizontal: scale(10),
  },
  roundedShape: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: Color.red,
    // borderBottomEndRadius:windowHeight/5
  },
  text1: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(16, 0.2),
    color: Color.white,
    fontWeight: 'bold',
    textTransform: 'none',

    // left:scale(10)
    textAlign: 'center',
    // marginTop: verticalScale(10),
  },
  text2: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    textAlign: 'center',
    textTransform: 'none',
    marginTop: verticalScale(2),
  },
  form: {
    paddingTop: verticalScale(10),
    // justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: verticalScale(100),
    height: windowHeight * 0.78,
    // alignSelf:"center",
    width: windowWidth,
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  inputContainer: {
    width: windowWidth * 0.9,
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(10),
    backgroundColor: Color.themeDarkBlueGray,
    borderColor: Color.themeLightBlueGray,
    borderWidth: 1,
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  imageContainer: {
    width: windowWidth * 0.34,
    height: windowWidth * 0.34,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inputLabel: {
    width: windowWidth * 0.8,
    marginTop: 0,
    fontWeight: '400',
    textAlign: 'center',
  },
  tile: {
    width: windowWidth * 0.4,
    paddingVertical: verticalScale(18),
    marginTop: verticalScale(0),
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    gap: scale(5),
  },
});
