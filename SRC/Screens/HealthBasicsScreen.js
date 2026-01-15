import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WellNessGoals from '../Components/WellNessGoals';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Divider, Icon} from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import FormWrapper from '../Components/FormWrapper';
import OnBoardingHeader from '../Components/OnBoardingHeader';
import ScreenBoiler from '../Components/ScreenBoiler';
import navigationService from '../navigationService';
import {Calendar} from 'react-native-calendars';
import {Modal} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const HealthBasicsScreen = ({onContinue}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [allergies, setAllergies] = useState('');
  const [conditions, setConditions] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <ScreenBoiler statusBarBackgroundColor={Color.themeDarkBlueGray}>
      <OnBoardingHeader
        // subtitle={`Next: ${pageSubtiotle}`}
        subtitle={`Next: Your Preferences For care`}
        progress={1}
        total={3}
      />
      <LinearGradient
        style={styles.mainScreen}
        colors={[Color.themeBluishBlack, Color.themeDarkGreen]}>
        <ScrollView
          style={styles.mainScreen}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomText
            children={'A few health basics'}
            style={styles.text1}
            //  isBold
          />
          <CustomText
            children={
              'Your personal health information is encrypted, secure, and will always be kept private'
            }
            style={styles.text2}
          />
          <FormWrapper>
            <View style={styles.form}>
              {/* <FormWrapper> */}
              {/* Button */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => setOpen(true)}>
                  <Icon name='calendar-days' as={FontAwesome6} size={moderateScale(15,.6)} color={Color.gray50}/>
                <Text style={styles.buttonText}>
                  {selectedDate ? selectedDate : 'Enter your Age'}
                </Text>
              </TouchableOpacity>

              {/* Calendar Modal */}
              <Modal visible={open} transparent animationType="slide">
                <View style={styles.modalContainer}>
                  <View style={styles.calendarBox}>
                    <Calendar
                      maxDate={new Date().toISOString().split('T')[0]} // future DOB disable
                      onDayPress={day => {
                        setSelectedDate(day.dateString);
                        setOpen(false);
                      }}
                      markedDates={{
                        [selectedDate]: {selected: true},
                      }}
                    />
                  </View>
                </View>
              </Modal>
              {/* <TextInputWithTitle
                title={'Age'}
                titleColor={Color.gray50}
                placeholder={'Enter your Age'}
                setText={setAge}
                value={age}
                iconIsImage={true}
                leftIcon={true}
                iamgeSrc={require('../Assets/Images/calendar.png')}
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
              /> */}

              <DropDownSingleSelect
                title={'Gender'}
                titleColor={Color.gray50}
                array={['Male', 'Female']}
                item={gender}
                setItem={setGender}
                width={windowWidth * 0.9}
                // placeHolderColor={Color.darkGray}
                // placeholder={'Ápproval for Admittance'}
                placeholder={'Select Your Gender'}
                dropdownStyle={{
                  borderBottomWidth: 0,
                  // width: windowWidth * 0.9,
                  // marginTop: 10,
                }}
                leftIcon={true}
                iconIsImage={true}
                imageSrc={require('../Assets/Images/user7.png')}
                placeHolderColor={Color.gray50}
                btnStyle={{
                  // alignSelf:"center",
                  borderColor: Color.themeLightBlueGray,
                  borderRadius: moderateScale(15, 0.2),
                  backgroundColor: Color.themeDarkBlueGray,
                  height: windowHeight * 0.06,
                }}
              />
              <TextInputWithTitle
                title={'Known allergies'}
                titleColor={Color.gray50}
                placeholder={'Describe any known allergies you may have'}
                setText={setAllergies}
                value={allergies}
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
                titleColor={Color.gray50}
                placeholder={
                  'Describe any pre-existing conditions you may have'
                }
                setText={setConditions}
                value={conditions}
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
          </FormWrapper>
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
            onPress={() => {
              navigationService.navigate('PreferencesForCare');
            }}
            // onPress={onContinue}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenBoiler>
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
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    // alignSelf:"center",
    // width: windowWidth
    // backgroundColor :'red'
  },
  button: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.06,
    // padding: 15,
    flexDirection :'row',
    marginTop: moderateScale(10, 0.6),
    borderWidth: 2,
    paddingHorizontal: moderateScale(15, 0.6),
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.themeDarkBlueGray,
    borderColor: Color.themeLightBlueGray,
  },
  buttonText: {
    fontSize: moderateScale(14, 0.6),
    color: Color.white,
    paddingLeft: moderateScale(10, 0.6),
  },
  modalContainer: {
    alignSelf: 'center',
    width: windowWidth * 0.8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: windowHeight * 0.22,
  },
  calendarBox: {
    backgroundColor: Color.themeLightBlueGray,
    padding: 8,
    borderRadius: 16,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },
});
