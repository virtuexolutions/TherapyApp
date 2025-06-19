import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Drawer from './Drawer/Drawer';
import navigationService from './navigationService';
import LoginScreen from './Screens/LoginScreen';
import Signup from './Screens/Signup';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import VerifyNumber from './Screens/VerifyNumber';
import UploadImages from './Screens/UploadImages';
import BankDetails from './Screens/BankDetails';
import Home from './Screens/Home';
import Discount from './Screens/Discount';
import Setting from './Screens/Setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowHeight, windowWidth } from './Utillity/utils';
import Color from './Assets/Utilities/Color';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 💡
import Feather from 'react-native-vector-icons/Feather'
import { Icon } from 'native-base';
import CustomText from './Components/CustomText';
import MemberPerks from './Screens/MemberPerks';
import Subscription from './Screens/Subscription';
import Directory from './Screens/Directory';
import BookingScreen from './Screens/BookingScreen';
import MyBookings from './Screens/MyBookings';
import Dashboard from './Screens/Dashboard';
import ServicesManagement from './Screens/ServicesManagement';
import AppointmentManagement from './Screens/AppointmentManagement';
import PerformanceAndAnalytics from './Screens/PerformanceAndAnalytics';
import SelectRole from './Screens/SelectRole';


enableScreens();
const AppNavigator = () => {
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const role = useSelector(state => state.authReducer.role);
  const token = useSelector(state => state.authReducer.token);
  console.log("🚀 ~ AppNavigator ~ token:", token)

  const RootNav = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
          ?   'SelectRole' 
            
          : 'TabNavigation';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{ headerShown: false }}>
          {/* <RootNav.Screen name="MyDrawer" component={MyDrawer} /> */}
          {/* <RootNav.Screen name="TabNavigation" component={TabNavigation} /> */}
          {/* initialRouteName={'MyBookings'}
          screenOptions={{headerShown: false}}> */}
          {/* <RootNav.Screen name="MyDrawer" component={MyDrawer} /> */}
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
          <RootNav.Screen name="ServicesManagement" component={ServicesManagement} />
          <RootNav.Screen name="AppointmentManagement" component={AppointmentManagement} />
          <RootNav.Screen name="PerformanceAndAnalytics" component={PerformanceAndAnalytics} />
          <RootNav.Screen name="SelectRole" component={SelectRole} />
          {/* <RootNav.Screen name="AccountSettings" component={AccountSettings} /> */}


        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();
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
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Color.white,
          // backgroundColor: Color.red,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // paddingVertical:5
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          letcolor = focused ? '#8B9781' : Color.veryLightGray;
          let size = moderateScale(20, 0.3);
          let type = Ionicons;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
          }
          else if (route.name === 'Directory') {
            iconName = focused ? 'search' : 'search';
            type = Ionicons;
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
          }
          else if (route.name === 'Discount') {
            iconName = focused ? 'message-circle' : 'message-circle';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            type = Feather;
          }
          else if (route?.name == 'UploadImages') {
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            iconName = focused ? 'person-outline' : 'person-outline';
            color = focused ? '#8B9781' : Color.veryLightGray;
            type = Ionicons;
          } else {
            iconName = focused ? 'person-outline' : 'person-outline';
            color = focused ? '#8B9781' : Color.veryLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(25, 0.3);
            type = Ionicons;
          }
          return route.name == 'BankDetails' ? (
            <View
              style={{
                height: moderateScale(60, 0.3),
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
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'green',
              width: moderateScale(55, 0.6),
              height: moderateScale(40, 0.6),
              marginTop: moderateScale(20, 0.6)
            }}>
              <Icon name={iconName} as={type} color={color} size={size} />
              <CustomText style={{
                // backgroundColor: 'red',
                fontSize: moderateScale(10, 0.6),
                width: windowWidth * 0.18,
                textAlign: 'center',
                color: Color.btn_Color
              }}>{route?.name}</CustomText>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <View style={{
              height: windowHeight * 0.3,
              backgroundColor: Color.white,
              borderRadius: moderateScale(15, 0.6)
            }} />
          </View>
        ),
      })}>
      <Tabs.Screen name={'Home'} component={Home} />
      <Tabs.Screen name={'Directory'} component={Directory} />
      <Tabs.Screen name={'BankDetails'} component={BankDetails} />
      <Tabs.Screen name={'Discount'} component={Discount} />
      <Tabs.Screen name={'UploadImages'} component={UploadImages} />
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
