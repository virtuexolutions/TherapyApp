import React from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import { windowHeight, windowWidth } from '../Utillity/utils';
import MembershipCard from '../Components/MembershipCard';
import AppointmentCard from '../Components/AppointmentCard';
import CustomButton from '../Components/CustomButton';

const Discount = () => {

    return (
        <SafeAreaView style={styles.main_con}>
            <CustomStatusBar
                backgroundColor={Color.white}
                barStyle={'dark-content'}
            />
            <Header
                textstyle={{
                    right: 25,
                }}
                title={'Referral Discount'}
                headerColor={Color.bgColor}
            />
            <View style={styles.box_view}>
                <CustomText isBold style={styles.h1}>Discount</CustomText>
                <CustomText style={[styles.txt, { marginTop: moderateScale(5, 0.6), color: Color.white }]}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Eu Pulvinar Metus, Fringilla Semper Enim.</CustomText>
                <CustomText style={[styles.txt, { marginTop: moderateScale(7, 0.6), color: Color.white }]}>10% Discount – Up To 20 Referrals/Year </CustomText>
                <CustomText style={[styles.txt, { marginTop: moderateScale(7, 0.6), color: Color.white }]}>10% Discount – Up To 20 Referrals/Year </CustomText>
                <CustomText style={[styles.txt, { marginTop: moderateScale(7, 0.6), color: Color.white }]}>10% Discount – Up To 20 Referrals/Year </CustomText>
                <CustomButton
                    text={
                        'Verify'
                    }
                    isBold
                    textColor={Color.black}
                    width={windowWidth * 0.7}
                    height={windowHeight * 0.065}
                    borderRadius={30}
                    marginTop={moderateScale(30, 0.3)}
                    onPress={() => {
                      
                    }}
                    bgColor={Color.btn_Color} />
            </View>
        </SafeAreaView>
    );
};

export default Discount;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: Color.bgColor,
        alignItems: 'center',
    },

    h1: {
        fontSize: moderateScale(18, 0.6),
        color: Color.white,
        width: windowWidth * 0.9,
    },
    txt: {
        fontSize: moderateScale(11, 0.6),
        color: Color.grey,
        width: windowWidth * 0.9,
    },
    box_view: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.25,
        backgroundColor: Color.primary,
        borderRadius: moderateScale(15, 0.6),
        paddingHorizontal: moderateScale(15, 0.6),
        paddingVertical: moderateScale(15, 0.6)
    }
});
