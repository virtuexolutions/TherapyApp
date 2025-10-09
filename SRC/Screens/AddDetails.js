import React from 'react';
import {
    FlatList,
    ImageBackground,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogoutAuth } from '../Store/slices/auth';
import navigationService from '../navigationService';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { Formik } from 'formik';
import { profileSetupSchema } from '../Constant/schema';

const AddDetails = () => {
    const dispatch = useDispatch();
    const role = useSelector(state => state.authReducer.role);
    return (
        <ImageBackground
            source={require('../Assets/Images/loginbg.jpg')}
            imageStyle={{ width: '100%', height: '100%' }}
            style={styles.main_con}>
            <CustomStatusBar
                backgroundColor={Color.white}
                barStyle={'dark-content'}
            />
            <Header
                showBack
                title={'Add Details'}
                headerColor={'transparent'}
                isFilter={false}
                textstyle={{
                    width: windowWidth * 0.82
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main_view}>
                    <Formik
                        initialValues={{
                            clinic_name: '',
                            description: '',
                            location: '',
                            services_offered: [],
                            languages_spoken: [],
                            logo: null,
                            before_after_images: [],
                            google_reviews_link: '',
                            trustpilot_link: '',
                            testimonials: [
                                { name: '', review: '', image: null },
                            ],
                            availability_calendar: '',
                            inquiry_email: '',
                        }}
                        validationSchema={profileSetupSchema}
                    // onSubmit={login}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <>
                                <TextInputWithTitle
                                    title={'Clinic Name :'}
                                    placeholder={'Enter clinic name'}
                                    setText={handleChange('clinic_name')}
                                    value={values.clinic_name}
                                    viewHeight={0.06}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={30}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}

                                />
                                <TextInputWithTitle
                                    title={'Description:'}
                                    placeholder={'Enter full description about your clinic'}
                                    setText={handleChange('description')}
                                    value={values.description}
                                    multiline
                                    viewHeight={0.12}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={15}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}
                                />

                                <TextInputWithTitle
                                    title={'Languages spoken:'}
                                    placeholder={'Enter languages (comma separated)'}
                                    setText={handleChange('languages_spoken')}
                                    value={values.languages_spoken}
                                    viewHeight={0.06}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={30}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}
                                />

                                <TextInputWithTitle
                                    title={'Google reviews link:'}
                                    placeholder={'Enter Google review link'}
                                    setText={handleChange('google_reviews_link')}
                                    value={values.google_reviews_link}
                                    viewHeight={0.06}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={30}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}
                                />

                                <TextInputWithTitle
                                    title={'Trustpilot link:'}
                                    placeholder={'Enter Trustpilot link'}
                                    setText={handleChange('trustpilot_link')}
                                    value={values.trustpilot_link}
                                    viewHeight={0.06}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={30}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}
                                />

                                <TextInputWithTitle
                                    title={'Inquiry email:'}
                                    placeholder={'Enter inquiry email'}
                                    setText={handleChange('inquiry_email')}
                                    value={values.inquiry_email}
                                    viewHeight={0.06}
                                    viewWidth={0.95}
                                    inputWidth={0.9}
                                    border={1}
                                    fontSize={moderateScale(9, 0.6)}
                                    borderRadius={30}
                                    backgroundColor={Color.themtxtColor}
                                    borderColor={Color.white}
                                    marginTop={moderateScale(10, 0.3)}
                                    placeholderColor={Color.btntextColor}
                                    inputColor={Color.white}
                                    titleStlye={{ color: Color.white }}
                                />
                                
                            </>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </ImageBackground >
    );
};

export default AddDetails;

const styles = StyleSheet.create({
    main_con: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: Color.bgColor,
        alignItems: 'center',
        paddingTop: moderateScale(20, 0.6),
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
        marginTop: moderateScale(18, 0.6),
    },
    main_view: {
        paddingHorizontal: moderateScale(10, 0.6),
    }
});
