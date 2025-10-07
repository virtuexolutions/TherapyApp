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

const JourneyGuide = () => {
    const cardItem = [
        {
            id: 1,
            title: 'Getting Started',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/img1.png'),
        },
        {
            id: 2,
            title: 'Strenght Training',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/img2.png'),
        },
        {
            id: 3,
            title: 'Nutraition Balance',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/img3.png'),
        },
        {
            id: 1,
            title: 'Getting Started',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/img4.png'),
        },
        {
            id: 2,
            title: 'Strenght Training',
            text: 'lorem ipsum is simply dummy text of the printing and typesetting industry.',
            image: require('../Assets/Images/img5.png'),
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
                <CustomText isBold style={styles.heading}>Your Wellness Journey Start Here</CustomText>
                <View style={styles.image_view}>
                    <CustomImage source={require('../Assets/Images/trainer_color.png')} style={styles.image} />
                </View>
                {cardItem?.map((item) => {
                    return (
                        <View style={styles.card_view}>
                            <View style={styles.image_card}>
                                <CustomImage source={item?.image} style={styles.image} resizeMode={'contain'}
                                />
                            </View>
                            <View style={{ marginLeft: moderateScale(10, 0.6) }}>
                                <CustomText isBold style={styles.heading_text}>{item?.title}</CustomText>
                                <CustomText style={styles.sub_heading_text}>{item?.text}</CustomText>
                            </View>
                        </View>
                    )
                })}
            </View>
        </SafeAreaView>
    );
};

export default JourneyGuide;

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
        width: windowWidth * 0.3,
        height: windowHeight * 0.12,
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
        width: '70%',
        textAlign: "center",
        marginTop: moderateScale(12, 0.6),
        letterSpacing: 0.6
    },
    card_view: {
        width: windowWidth * 0.9,
        height: windowWidth * 0.22,
        marginTop: moderateScale(10, 0.6),
        paddingVertical: moderateScale(10, 0.6),
        paddingHorizontal: moderateScale(10, 0.6),
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row'
    },
    image_card: {
        width: windowWidth * 0.17,
        height: windowWidth * 0.17,
        borderRadius: windowWidth * 0.5,
        backgroundColor: Color.themeColor,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: windowWidth * 0.5,
        resizeMode: 'contain',
    },
    heading_text: {
        fontSize: moderateScale(15, 0.6),
        color: Color.black,
    },
    sub_heading_text: {
        fontSize: moderateScale(11, 0.6),
        width: '55%',
        color: Color.black,
        letterSpacing: 0.3
    },
    row_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(5, 0.6),
        width: '90%',
    },
    distance_text: {
        fontSize: moderateScale(11, 0.6),
        width: '40%',
    }
});
