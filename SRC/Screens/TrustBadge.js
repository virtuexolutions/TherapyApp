import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomStatusBar from '../Components/CustomStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../Components/CustomText';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import * as Progress from 'react-native-progress';
import CustomHeader from '../Components/CustomHeader';
import Card from '../Components/Card';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';

const TrustBadge = () => {
    const cardItem = [
        {
            id: 1,
            title: 'Trainer Verified',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/trainer.png'),
        },
        {
            id: 2,
            title: 'Safe Community',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/lock.png'),
        },
        {
            id: 3,
            title: 'badge of Trust',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/star.png'),
        },
    ]
    return (
        <SafeAreaView style={styles.mainScreen}>
            <CustomStatusBar
                backgroundColor={Color.white}
                barStyle={'dark-content'}
            />
            <CustomHeader
                title={'Trust & Safety Badge'}
                backgroundColor={Color.bgColor}
                isSearch
            />
            <View style={styles.main_view}>
                <View style={styles.image_view}>
                    <CustomImage source={require('../Assets/Images/verify.png')} style={styles.image} />
                </View>
                <CustomText isBold style={styles.heading}>verified & Trusted</CustomText>
                {cardItem?.map((item) => {
                    return (
                        <Card item={item} />
                    )
                })}
                <CustomButton
                    isBold
                    text={'Learn Safety Tips'}
                    fontSize={moderateScale(14, 0.6)}
                    textColor={Color.white}
                    borderColor={Color.themtxtColor}
                    borderRadius={moderateScale(30, 0.3)}
                    width={windowWidth * 0.9}
                    height={windowHeight * 0.065}
                    bgColor={Color.themeColor}
                    textTransform={'capitalize'}
                    marginTop={moderateScale(30, 0.6)}
                    onPress={() => {
                        navigationService.navigate("MyBookings")
                    }}
                />
                <CustomButton
                    isBold
                    text={'How do I get my badge'}
                    fontSize={moderateScale(13, 0.6)}
                    textColor={Color.themeTextColor}
                    borderColor={Color.themtxtColor}
                    borderRadius={moderateScale(30, 0.3)}
                    width={windowWidth * 0.9}
                    height={windowHeight * 0.065}
                    bgColor={'transparent'}
                    textTransform={'capitalize'}
                    marginTop={moderateScale(10, 0.6)}
                    onPress={() => {
                        navigationService.navigate("MyBookings")
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default TrustBadge;

const styles = StyleSheet.create({
    mainScreen: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Color.bgColor,
    },
    main_view: {
        paddingHorizontal: moderateScale(10, 0.6),
        paddingVertical: moderateScale(10, 0.6),
        alignItems: 'center'
    },
    image_view: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        marginTop: moderateScale(10, 0.6)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    txt: {
        color: '#686868',
    },
    heading: {
        fontSize: moderateScale(26, 0.6),
        color: Color.themeTextColor,
        width: '40%',
        textAlign: "center",
        marginTop: moderateScale(12, 0.6),
        letterSpacing: 0.6
    }
});
