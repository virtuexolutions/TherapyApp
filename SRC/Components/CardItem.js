import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import CustomButton from './CustomButton'
import Color from '../Assets/Utilities/Color'

const CardItem = ({ item, isDetails = true }) => {
    return (
        <View style={styles.card_main_view}>
            <View style={styles.image_view}>
                <CustomImage source={item.image} style={styles.image} />
            </View>
            <View style={{ marginLeft: moderateScale(12, 0.6) }}>
                <CustomText isBold style={styles.heading_text}>{item?.name}</CustomText>
                {isDetails &&
                    <>
                        <CustomText style={styles.sub_heading_text}>{item?.specialty}</CustomText>
                    </>
                }
                <View style={styles.row_view}>
                    <CustomText style={styles.distance_text}>{item?.distance}</CustomText>
                    <CustomButton
                        text={item?.buttonText}
                        textColor={item?.buttonText === 'Remove' ? Color.themeColor : Color.white}
                        width={windowWidth * 0.26}
                        height={windowHeight * 0.045}
                        borderRadius={moderateScale(10, 0.6)}
                        onPress={() => { }}
                        borderWidth={2}
                        bgColor={item?.buttonText === 'Remove' ? 'transparent' : Color.themeColor}
                        borderColor={'#8B9781'}
                        textstyle={{ fontSize: moderateScale(13, 0.6) }}
                        textTransform={'capitilize'}
                    />
                </View>
            </View>
        </View>
    )
}

export default CardItem

const styles = StyleSheet.create({
    card_main_view: {
        width: windowWidth * 0.9,
        height: windowWidth * 0.3,
        marginBottom: moderateScale(5, 0.6),
        paddingHorizontal: moderateScale(10, 0.6),
        paddingVertical: moderateScale(10, 0.6),
        flexDirection: 'row',
        alignItems: 'center',
    },
    image_view: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        borderRadius: windowWidth
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: windowWidth
    },
    heading_text: {
        fontSize: moderateScale(15, 0.6)
    },
    sub_heading_text: {
        fontSize: moderateScale(12, 0.6),

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