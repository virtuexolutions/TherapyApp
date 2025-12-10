import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import Color from '../Assets/Utilities/Color';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight, windowWidth} from '../Utillity/utils';
import PagerView from 'react-native-pager-view';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import WellNessGoals from '../Components/WellNessGoals';
import Header from '../Components/Header';
import OnBoardingHeader from '../Components/OnBoardingHeader';
import WellnessGoalsScreen from './WellnessGoalsScreen';
import HealthBasicsScreen from './HealthBasicsScreen';

const OnboardingScreen = () => {
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);

  const [onboardingData, setOnBoardingData] = useState({
    wellnessGoal: '',
    preferences: {},
  });
  const onContinue = () => {
    if (page < 3) {
      pagerRef.current.setPage(page + 1);
    }
  };

 const pageSubtiotle= page == 0 ? 
 "A Few Health Bsics" : page ==1 ? "Your Preferences For care" :  page == 3 ? "LifeStyle" : page == 4 ? "Set up your AI Coach" : "";
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <OnBoardingHeader  
      subtitle={`Next: ${pageSubtiotle}`}
      />
      <PagerView
        // scrollEnabled={false}
        ref={pagerRef}
        onPageSelected={e => setPage(e.nativeEvent.position)}
        style={styles.mainScreen}>
        <WellnessGoalsScreen
          onboardingData={onboardingData}
          onContinue={onContinue}
          setOnBoardingData={setOnBoardingData}
          />
        <HealthBasicsScreen
          onContinue={onContinue}
        />
      </PagerView>
    </ScreenBoiler>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    mainScreen:{
        width:windowWidth,
        height: windowHeight
    }
  
});
