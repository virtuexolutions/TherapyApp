import React, { useState } from 'react';
import {
    Image,
    Dimensions,
    ImageBackground,
    Platform,
    ToastAndroid,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import CustomButton from '../Components/CustomButton';

import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../Axios/AxiosInterceptorFunction';
import { Formik } from 'formik';
import { forgotpassword } from '../Constant/schema';

const ResetPassword = props => {
    const dispatch = useDispatch();
    const { user_type } = useSelector(state => state.authReducer);
    const email = props?.route?.params?.email;
    console.log('🚀 ~ ResetPassword ~ email===================:', email);

    const navigationN = useNavigation();
    const [password, setPassword] = useState('');
    const [ConfirmPass, setConfirmPass] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onPressSubmit = async values => {
        console.log("🚀 ~ resetPassword ~ values:", values)
        const url = 'password/reset';
        const data = {
            email: email,
            password: values.password,
            confirm_password: values.confirmPassword,
        };
        console.log("🚀 ~ resetPassword ~ data:", data)
        setIsLoading(true);
        const response = await Post(url, data, apiHeader());
        setIsLoading(false);
        if (response != undefined) {
            console.log('response data =>', response?.data);
            Platform.OS == 'android'
                ? ToastAndroid.show(`Password Reset SuccessFully`, ToastAndroid.SHORT)
                : alert(`Password Reset SuccessFully`);
            navigationN.navigate('LoginScreen');
        }
    };

    return (
        <ImageBackground
            resizeMode="stretch"
            source={require('../Assets/Images/bg.jpg')}
            style={{
                height: windowHeight,
                width: windowWidth,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
            }}
            imageStyle={{
                width: '100%',
                height: '100%',
            }}>
            <CustomStatusBar
                backgroundColor={Color.white}
                barStyle={'dark-content'}
            />
            <View style={styles.main_container}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.container}>
                    <CustomText isBold style={styles.txt2}>
                        Reset Password
                    </CustomText>
                    <CustomText style={styles.txt3}>
                        Enter your new password below. Make sure it’s strong and secure
                    </CustomText>
                    <Formik
                        initialValues={{
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={forgotpassword}
                        onSubmit={onPressSubmit}>
                        {({ values, handleChange, handleSubmit, touched, errors }) => {
                            return (
                                <View style={styles.text_input}>
                                    <TextInputWithTitle
                                        titleText={'Password'}
                                        placeholder={'Password'}
                                        setText={handleChange('password')}
                                        value={values.password}
                                        viewHeight={0.06}
                                        viewWidth={0.85}
                                        inputWidth={0.8}
                                        border={1}
                                        fontSize={moderateScale(10, 0.6)}
                                        borderRadius={30}
                                        inputColor={'white'}
                                        backgroundColor={'transparent'}
                                        borderColor={Color.white}
                                        marginTop={moderateScale(10, 0.3)}
                                        placeholderColor={Color.btntextColor}
                                        titleStlye={{ right: 10, color: Color.white }}
                                        secureText
                                    />
                                    {touched.password && errors.password && (
                                        <CustomText style={styles.schemaText}>
                                            {errors.password}
                                        </CustomText>
                                    )}
                                    <TextInputWithTitle
                                        titleText={'Username'}
                                        placeholder={'Confirm Password'}
                                        setText={handleChange('confirmPassword')}
                                        value={values.confirmPassword}
                                        viewHeight={0.06}
                                        viewWidth={0.85}
                                        inputWidth={0.8}
                                        border={1}
                                        fontSize={moderateScale(10, 0.6)}
                                        borderRadius={30}
                                        inputColor={'white'}
                                        backgroundColor={'transparent'}
                                        borderColor={Color.white}
                                        marginTop={moderateScale(10, 0.3)}
                                        placeholderColor={Color.btntextColor}
                                        titleStlye={{ right: 10, color: Color.white }}
                                        secureText
                                    />
                                    {touched.password && errors.password && (
                                        <CustomText style={styles.schemaText}>
                                            {errors.password}
                                        </CustomText>
                                    )}
                                    <CustomButton
                                        isBold
                                        text={
                                            isLoading ? (
                                                <ActivityIndicator size={'small'} color={Color.white} />
                                            ) : (
                                                'Submit'
                                            )
                                        }
                                        fontSize={moderateScale(15, 0.3)}
                                        textColor={Color.btntextColor}
                                        borderWidth={1.5}
                                        borderColor={Color.btntextColor}
                                        borderRadius={moderateScale(30, 0.3)}
                                        width={windowWidth * 0.8}
                                        height={windowHeight * 0.07}
                                        bgColor={Color.btn_Color}
                                        textTransform={'capitalize'}
                                        marginTop={windowHeight * 0.03}
                                        elevation={true}
                                        onPress={handleSubmit}
                                    />
                                </View>
                            );
                        }}
                    </Formik>
                </KeyboardAwareScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = ScaledSheet.create({
    main_container: {
        height: windowHeight,
        width: windowWidth,
    },
    txt2: {
        color: Color.white,
        fontSize: moderateScale(24, 0.6),
    },
    txt3: {
        color: Color.white,
        fontSize: moderateScale(11, 0.6),
        textAlign: 'center',
        width: '80%',
        marginVertical: moderateScale(10, 0.3),
        lineHeight: moderateScale(17, 0.3),
    },
    back: {
        position: 'absolute',
        top: moderateScale(20, 0.3),
        left: moderateScale(20, 0.3),
        height: moderateScale(30, 0.3),
        width: moderateScale(30, 0.3),
        borderRadius: moderateScale(5, 0.3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.themeBlack,
        zIndex: 1,
    },
    text_input: {
        alignItems: 'center',
        borderWidth: 1,
        width: windowWidth * 0.9,
        borderColor: Color.white,
        paddingVertical: moderateScale(10, 0.6),
        borderRadius: 20,
        paddingTop: windowHeight * 0.03,
        paddingHorizontal: moderateScale(30, 0.6),
    },
    container: {
        paddingBottom: moderateScale(20, 0.3),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: windowHeight,
    },
    schemaText: {
        fontSize: moderateScale(10, 0.6),
        color: Color.red,
        alignSelf: 'flex-start',
    },
});

export default ResetPassword;
