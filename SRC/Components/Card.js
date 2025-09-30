import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import Color from '../Assets/Utilities/Color'

const Card = ({ item, isImage = true }) => {
    return (
        <View style={styles.card_view}>
            {isImage === true ? (
                <View style={styles.image_card}>
                    <View style={styles.image_view}>
                        <CustomImage source={item?.image} style={styles.image} />
                    </View>
                </View>
            ) : (
                <View style={styles.image_card}>
                    <CustomImage source={item?.image} style={styles.image} />
                </View>
            )}
            <View style={{ marginLeft: moderateScale(10, 0.6) }}>
                <CustomText isBold style={styles.heading_text}>{item?.title}</CustomText>
                <CustomText style={styles.sub_heading_text}>{item?.text}</CustomText>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
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
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: windowWidth * 0.5,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_view: {
        width: windowWidth * 0.10,
        height: windowWidth * 0.08,
        borderRadius: windowWidth * 0.5,
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
})