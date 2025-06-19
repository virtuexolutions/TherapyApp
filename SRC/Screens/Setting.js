import React from 'react';
import { FlatList, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
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

const Setting = () => {

    return (
        <ImageBackground source={require('../Assets/Images/background_image.jpg')} imageStyle={{ width: '100%', height: '100%' }} style={styles.main_con}>
            <CustomStatusBar
                backgroundColor={Color.white}
                barStyle={'dark-content'}
            />
            <View style={{ marginTop: moderateScale(20, 0.6) }} />
            <Header
                textstyle={{
                    right: 25,
                }}
                title={'Referral Setting'}
                headerColor={Color.bgColor}
            />
            <View style={styles.box_view}>
                <CustomText isBold style={styles.h1}>Sarah R. James</CustomText>
                <View style={{
                    width: windowWidth * 0.9,
                    height: 1,
                    backgroundColor: Color.lightGrey,
                    marginVertical: moderateScale(10, 0.6)
                }
                } />
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Manage Profile Info</CustomText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Set Notification Perfereces</CustomText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Update Payment Methods</CustomText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Support & Faqs</CustomText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Refer A Friend</CustomText>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText style={[styles.txt]}>Logout</CustomText>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Setting;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: Color.bgColor,
        alignItems: 'center',
    },

    h1: {
        fontSize: moderateScale(18, 0.6),
        color: Color.btntextColor,
        width: windowWidth * 0.9,
    },
    txt: {
        fontSize: moderateScale(14, 0.6),
        color: '#2A3821',
        width: windowWidth * 0.9,
        marginTop: moderateScale(18, 0.6)
    },
    box_view: {
        borderRadius: moderateScale(15, 0.6),
        paddingHorizontal: moderateScale(15, 0.6),
        paddingVertical: moderateScale(15, 0.6)
    }
});
