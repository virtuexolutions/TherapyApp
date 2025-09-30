import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, mvs } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomHeader from '../Components/CustomHeader';
import CustomStatusBar from '../Components/CustomStatusBar';
import { windowHeight, windowWidth } from '../Utillity/utils';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SearchbarComponent from '../Components/SearchbarComponent';
import CardItem from '../Components/CardItem';
import { Icon } from 'native-base';
import CustomText from '../Components/CustomText';
// import {moderateScale} from 'react-native-size-matters';

const CompairProvider = () => {
    const [selected, setSelected] = useState('monthly');
    const providers = [
        {
            id: 1,
            name: "Dr.Emily Clarke",
            specialty: "Chiropractor",
            distance: "10 years of Experience",
            image: require("../Assets/Images/doctor1.png"),
            buttonText: "Contact"
        },
        {
            id: 2,
            name: "Michael Brown",
            specialty: "Nutritionist",
            distance: "10 years of Experience",
            image: require("../Assets/Images/doctor1.png"),
            buttonText: "Contact"
        },
        {
            id: 3,
            name: "Dr.Emily Clarke",
            specialty: "Chiropractor",
            distance: "10 years of Experience",
            image: require("../Assets/Images/doctor1.png"),
            buttonText: "Contact"
        },
    ];
    const ListEmptyComponent = () => {
        return (
            <View style={{
                alignItems: 'center',
                width: windowWidth * 0.7,
                alignSelf: 'center'
            }}>
                <Icon name='heart' as={EvilIcons} size={moderateScale(60, 0.6)} color={Color.black} />
                <CustomText isBold style={styles.emphty_text_heading}>No Saved Clinics Yet</CustomText>
                <CustomText style={styles.emphty_text}>Save Your Favorite Clinics To Access Them Quickly.</CustomText>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.main_con}>
            <CustomStatusBar barStyle={'dark-content'} backgroundColor={Color.white} />
            <CustomHeader
                title={'Compare Providers'}
                backgroundColor={Color.bgColor}
                isSearch
            />
            <View style={styles.main_view}>
                <SearchbarComponent SearchStyle={{ backgroundColor: Color.themeColor }} isLeftIcon name={'search'} as={EvilIcons} size={moderateScale(24, 0.6)} color={Color.white} textColor={Color.white} placeHolderColor={Color.lightGrey} placeholderName={'Search Providers...'} />
                <FlatList
                    data={providers}
                    ListEmptyComponent={ListEmptyComponent()}
                    keyExtractor={(item) => item.id}
                    style={{ marginTop: moderateScale(15, 0.6) }}
                    renderItem={({ item }) => {
                        return (
                            <CardItem item={item} />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default CompairProvider;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: Color.bgColor
    },
    main_view: {
        paddingHorizontal: moderateScale(15, 0.6),
        paddingVertical: moderateScale(10, 0.6)
    },
    emphty_text_heading: {
        fontSize: moderateScale(15, 0.6),
        marginTop: moderateScale(2, 0.6)
    },
    emphty_text: {
        textAlign: "center",
        fontSize: moderateScale(12, 0.6),
        marginTop: moderateScale(2, 0.6)
    }
});
