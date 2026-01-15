import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StepComponent from './StepComponent';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {scale, verticalScale} from 'react-native-size-matters';

const CustomSteps = () => {
  const setps = [
    {
      id: '1',
      title: 'Tell us about you',
      description:
        "You'll tell us about your wellness goals, daily routine, and care interests.",
    },
    {
      id: '2',
      title: 'Set up your AI Coach',
      description:
        "You'll choose and name your personal AI guide for your health journey.",
    },
    {
      id: '3',
      title: 'Connect your data',
      description:
        "(Optional) You'll sync your wearables (like your watch) for deeper insights.",
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <LinearGradient colors={['#5DAB97', '#1D6A58']} style={styles.gradient} />
      <View style={styles.stepsContainer}>
        {setps?.map((step, index) => (
          <StepComponent
            key={index}
            number={step.id}
            heading={step.title}
            description={step.description}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomSteps;

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.42,
    // backgroundColor:"red",
    marginTop: verticalScale(80),
  },
  gradient: {
    width: scale(5),
    height: windowHeight * 0.2,
    top: windowHeight * 0.05,
    zIndex: 0,
  },
  stepsContainer: {
    zIndex: 1,
    position: 'absolute',
    left: scale(-18),
    gap: verticalScale(30),
  },
});
