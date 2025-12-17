import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 💡
import {useSelector} from 'react-redux';
import CustomText from './Components/CustomText';
import Drawer from './Drawer/Drawer';
import navigationService from './navigationService';
import AddDetails from './Screens/AddDetails';
import AiScreen from './Screens/AiScreen';
import AppointmentManagement from './Screens/AppointmentManagement';
import BankDetails from './Screens/BankDetails';
import BookingScreen from './Screens/BookingScreen';
import Chat from './Screens/Chat';
import CompairProvider from './Screens/CompairProvider';
import Dashboard from './Screens/Dashboard';
import DetailScreen from './Screens/DetailScreen';
import Directory from './Screens/Directory';
import Discount from './Screens/Discount';
import Home from './Screens/Home';
import journeyGuide from './Screens/journeyGuide';
import Language from './Screens/Language';
import LoginScreen from './Screens/LoginScreen';
import MarketPlaceScreen from './Screens/MarketPlaceScreen';
import MemberPerks from './Screens/MemberPerks';
import MyBookings from './Screens/MyBookings';
import PackagesBundles from './Screens/PackagesBundles';
import PaitentReview from './Screens/PaitentReview';
import PerformanceAndAnalytics from './Screens/PerformanceAndAnalytics';
import PricingComparison from './Screens/PricingComparison';
import ProductScreen from './Screens/ProductsScreen';
import ResetPassword from './Screens/ResetPassword';
import SavedClinic from './Screens/SavedClinics';
import SearchScreen from './Screens/SearchScreen';
import SeeAllScreen from './Screens/SeeAllScreen';
import SelectRole from './Screens/SelectRole';
import ServicesManagement from './Screens/ServicesManagement';
import Setting from './Screens/Setting';
import Signup from './Screens/Signup';
import Subscription from './Screens/Subscription';
import TrustBadge from './Screens/TrustBadge';
import UploadImages from './Screens/UploadImages';
import VerifyEmail from './Screens/VerifyEmail';
import VerifyNumber from './Screens/VerifyNumber';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import {windowHeight, windowWidth} from './Utillity/utils';
import DetailedScreen from './Screens/DetailedScreen';
import PurchaseTreatment from './Screens/PurchaseTreatment';
import PaymentConfirmation from './Screens/PaymentConfirmation';
import OrderScreen from './Screens/OrderScreen';
import ProviderScreen from './Screens/ProviderScreen';
import SpecialistScreen from './Screens/SpecialistScreen';
import ReviewScreen from './Screens/ReviewScreen';
import ChatScreen from './Screens/ChatScreen';
import CallBooking from './Screens/CallBooking';
import AudioCAllScreen from './Screens/AudioCAllScreen';
import VideoCallScreen from './Screens/VideoCallScreen';

enableScreens();
const AppNavigator = () => {
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const role = useSelector(state => state.authReducer.role);
  const token = useSelector(state => state.authReducer.token);

  const RootNav = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
        ? 'SelectRole'
        : 'TabNavigation';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen
            name="WalkThroughScreen"
            component={WalkThroughScreen}
          />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootNav.Screen name="UploadImages" component={UploadImages} />
          <RootNav.Screen name="BankDetails" component={BankDetails} />
          <RootNav.Screen name="Home" component={Home} />
          <RootNav.Screen name="Discount" component={Discount} />
          <RootNav.Screen name="Setting" component={Setting} />
          <RootNav.Screen name="TabNavigation" component={TabNavigation} />
          <RootNav.Screen name="MemberPerks" component={MemberPerks} />
          <RootNav.Screen name="Subscription" component={Subscription} />
          <RootNav.Screen name="Directory" component={Directory} />
          <RootNav.Screen name="BookingScreen" component={BookingScreen} />
          <RootNav.Screen name="MyBookings" component={MyBookings} />
          <RootNav.Screen name="Dashboard" component={Dashboard} />
          <RootNav.Screen name="VerifyEmail" component={VerifyEmail} />
          <RootNav.Screen name="AiScreen" component={AiScreen} />
          <RootNav.Screen name="DetailScreen" component={DetailScreen} />
          <RootNav.Screen
            name="PricingComparison"
            component={PricingComparison}
          />
          <RootNav.Screen name="SavedClinic" component={SavedClinic} />
          <RootNav.Screen name="PackagesBundles" component={PackagesBundles} />
          <RootNav.Screen name="PaitentReview" component={PaitentReview} />
          <RootNav.Screen name="journeyGuide" component={journeyGuide} />
          <RootNav.Screen name="Language" component={Language} />
          <RootNav.Screen name="Chat" component={Chat} />
          <RootNav.Screen name="AddDetails" component={AddDetails} />
          <RootNav.Screen
            name="MarketPlaceScreen"
            component={MarketPlaceScreen}
          />
          <RootNav.Screen name="ProductScreen" component={ProductScreen} />
          <RootNav.Screen name="SeeAllScreen" component={SeeAllScreen} />
          <RootNav.Screen name="DetailedScreen" component={DetailedScreen} />
          <RootNav.Screen
            name="PurchaseTreatment"
            component={PurchaseTreatment}
          />
          <RootNav.Screen
            name="PaymentConfirmation"
            component={PaymentConfirmation}
          />
          <RootNav.Screen name="OrderScreen" component={OrderScreen} />
          <RootNav.Screen
            name="SpecialistScreen "
            component={SpecialistScreen}
          />

          <RootNav.Screen name="SpecialistScreen " component={ReviewScreen} />
          <RootNav.Screen name="CallBooking" component={CallBooking} />

          <RootNav.Screen name="ChatScreen " component={ChatScreen} />

          <RootNav.Screen name="AudioCAllScreen" component={AudioCAllScreen} />
          <RootNav.Screen name="VideoCallScreen" component={VideoCallScreen} />

          <RootNav.Screen
            name="ServicesManagement"
            component={ServicesManagement}
          />
          <RootNav.Screen
            name="AppointmentManagement"
            component={AppointmentManagement}
          />
          <RootNav.Screen
            name="PerformanceAndAnalytics"
            component={PerformanceAndAnalytics}
          />
          <RootNav.Screen name="SelectRole" component={SelectRole} />
          <RootNav.Screen name="SearchScreen" component={SearchScreen} />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="CompairProvider" component={CompairProvider} />
          <RootNav.Screen name="TrustBadge" component={TrustBadge} />
          {/* <RootNav.Screen name="AccountSettings" component={AccountSettings} /> */}
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();
  const role = useSelector(state => state.authReducer.role);
  console.log(role, 'rollllllllllllllllleeeeee');
  // const role = 'user';

  return (
    <Tabs.Navigator
      // tabBar={(props) => {
      //   return (
      //     <LinearGradient
      //       colors={['red', 'blue']}

      //       start={[1, 0]}
      //       end={[0, 0]}
      //     >
      //       <BottomTabBar
      //         {...props}
      //         style={{ backgroundColor: 'transparent' }}
      //       />
      //     </LinearGradient>
      //   );
      // }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Color.white,
          // backgroundColor: Color.red,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // paddingVertical:5
          height: windowHeight * 0.08,
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          letcolor = focused ? '#8B9781' : Color.veryLightGray;
          let size = moderateScale(20, 0.3);
          let type = Ionicons;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
            type = Ionicons;
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
          } else if (route.name === 'Inbox') {
            iconName = focused ? 'message-circle' : 'message-circle';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            type = Feather;
          } else if (route?.name == 'Profile') {
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            iconName = focused ? 'settings-outline' : 'settings';
            color = focused ? '#8B9781' : Color.veryLightGray;
            type = Ionicons;
          } else {
            iconName = focused ? 'settings-outline' : 'settings';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            type = Ionicons;
          }
          return route.name == 'MemberPerks' ? (
            <View
              style={{
                top: role == 'user' ? 0 : 15,
                height:
                  role == 'user'
                    ? moderateScale(60, 0.3)
                    : moderateScale(50, 0.6),
                width: moderateScale(80, 0.3),
                borderRadius: moderateScale(30, 0.3),
                backgroundColor: '#8B9781',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name={'plus'}
                as={Feather}
                color={Color.white}
                size={moderateScale(35, 0.6)}
              />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'green',
                width: moderateScale(55, 0.6),
                height: moderateScale(40, 0.6),
                marginTop: moderateScale(20, 0.6),
              }}>
              <Icon name={iconName} as={type} color={color} size={size} />
              <CustomText
                style={{
                  // backgroundColor: 'red',
                  fontSize: moderateScale(10, 0.6),
                  width: windowWidth * 0.18,
                  textAlign: 'center',
                  color: Color.btn_Color,
                }}>
                {route?.name}
              </CustomText>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View style={{flex: 1}}>
            <View
              style={{
                height: windowHeight * 0.4,
                backgroundColor: Color.white,
                borderRadius: moderateScale(15, 0.6),
              }}
            />
          </View>
        ),
      })}>
      <Tabs.Screen
        name={'Home'}
        component={role === 'user' ? AiScreen : Dashboard}
      />
      <Tabs.Screen
        name={'Search'}
        component={role === 'user' ? Directory : SearchScreen}
      />
      <Tabs.Screen
        name={'MemberPerks'}
        component={role === 'user' ? MemberPerks : PerformanceAndAnalytics}
      />
      <Tabs.Screen name={'Inbox'} component={Chat} />
      <Tabs.Screen name={'setting'} component={Setting} />
    </Tabs.Navigator>
  );
};

export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  const firstScreen = 'PlaceholderScreen';
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '80%',
          borderTopRightRadius: moderateScale(120, 0.6),
          borderBottomRightRadius: moderateScale(120, 0.6),
        },
      }}>
      {/* <DrawerNavigation.Screen name="Home" component={Home} /> */}
    </DrawerNavigation.Navigator>
  );
};

export default AppNavigator;
