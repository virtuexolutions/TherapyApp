import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider} from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import FormWrapper from '../Components/FormWrapper';
const HealthBasicsScreen = ({onContinue}) => {
  return (
    
    <LinearGradient
    style={styles.mainScreen}
    colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
      <ScrollView style={styles.mainScreen} contentContainerStyle={{    alignItems:"center",
    justifyContent: 'center',}}>
      <CustomText
        children={'A few health basics'}
        style={styles.text1}
        //  isBold
        />
      <CustomText
        children={'Your personal health information is encrypted, secure, and will always be kept private'}
        style={styles.text2}
      />
        {/* <FormWrapper> */}
      <View style={styles.form}>
    
    {/* <FormWrapper> */}


      <TextInputWithTitle
        title={'Age'}
        titleColor={Color .gray50}
        placeholder={'Enter your Age'}
        setText={()=>{}}
        value={""}
        iconIsImage={true}
        leftIcon={true}
        iamgeSrc={require("../Assets/Images/calendar.png")}
        viewHeight={0.06}
        viewWidth={0.9}
        inputWidth={0.8}
        border={2}
        color={Color.white}
        borderRadius={15}
        borderColor={Color.themeLightBlueGray}
        marginTop={moderateScale(10, 0.3)}
        placeholderColor={Color.gray50}
        titleStlye={{right: 10}}
        backgroundColor={Color.themeDarkBlueGray}
        />

<DropDownSingleSelect
        title={'Gender'}
        titleColor={Color .gray50}
        array={["Male", "Female"]}
        item={""}
        setItem={() =>{}}
        width={windowWidth * 0.9}
        // placeHolderColor={Color.darkGray}
        // placeholder={'Ápproval for Admittance'}
        placeholder={'Select Your Gender'}
        dropdownStyle={{
          borderBottomWidth: 0,
          width: windowWidth * 0.9,
          marginTop: 10,
        }}
        leftIcon={true}
        iconIsImage={true}
        imageSrc={require("../Assets/Images/user7.png")}
        placeHolderColor={Color.gray50}
        btnStyle={{
                  // alignSelf:"center",
                  borderColor:Color.themeLightBlueGray,
                  borderRadius:moderateScale(15,0.2),
                  backgroundColor: Color.themeDarkBlueGray,
                  height: windowHeight * 0.06,
                }}
                />
                <TextInputWithTitle
                  title={'Known allergies'}
                  titleColor={Color .gray50}
                  placeholder={'Describe any known allergies you may have'}
                  setText={()=>{}}
                  value={""}
                  multiline={true}
                  numberOfLines={6}
                  viewHeight={0.16}
                  viewWidth={0.9}
                  inputWidth={0.9}
                  border={2}
                  color={Color.white}
                  borderRadius={15}
                  borderColor={Color.themeLightBlueGray}
                  marginTop={moderateScale(10, 0.3)}
                  placeholderColor={Color.gray50}
                  titleStlye={{right: 10}}
                  backgroundColor={Color.themeDarkBlueGray}
                  />
                <TextInputWithTitle
                  title={'Pre-existing conditions'}
                  titleColor={Color .gray50}
                  placeholder={'Describe any pre-existing conditions you may have'}
                  setText={()=>{}}
                  value={""}
                  multiline={true}
                  numberOfLines={6}
                  viewWidth={0.9}
                  viewHeight={0.16}
                  inputWidth={0.8}
                  border={2}
                  color={Color.white}
                  borderRadius={15}
                  borderColor={Color.themeLightBlueGray}
                  marginTop={moderateScale(10, 0.3)}
                  placeholderColor={Color.gray50}
                  titleStlye={{right: 10}}
                  backgroundColor={Color.themeDarkBlueGray}
                  />

      </View>
      {/* </FormWrapper> */}
      {/* </FormWrapper> */}
      <Divider color={Color.themeGrayColor} />
      <CustomButton
        isBold
        text={'Continue'}
        fontSize={moderateScale(15, 0.3)}
        textColor={Color.white}
        borderWidth={1.5}
        borderColor={Color.btntextColor}
        borderRadius={moderateScale(15, 0.3)}
        width={windowWidth * 0.85}
        height={windowHeight * 0.06}
        bgColor={Color.themeBrand600}
        textTransform={'capitalize'}
        marginTop={scale(20)}
        elevation={true}
        // onPress={() => {
          //   navigationService.navigate('TabNavigation')
          // }}
          onPress={onContinue}
          />
          </ScrollView>
    </LinearGradient>
  );
};

export default HealthBasicsScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    // paddingHorizontal: scale(10),

  },
  text1: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(16, 0.2),
    color: Color.white,
    fontWeight: 'bold',
    textTransform: 'none',
    // left:scale(10)
    // textAlign: 'center',
    // marginTop: verticalScale(10),
},
text2: {
    width: windowWidth * 0.9,
    fontSize: moderateScale(14, 0.2),
    color: Color.white,
    textAlign: 'left',
    textTransform: 'none',
    marginTop: verticalScale(2),
    // left:scale(10)
  },
  form:{
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:verticalScale(30)
    // alignSelf:"center",
    // width: windowWidth
  }
});
