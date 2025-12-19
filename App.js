/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalErrorModal from './SRC/Components/ErrorModal';
import { ModalProvider } from './SRC/Config/ModalContext';
import SeeAllScreen from './SRC/Screens/SeeAllScreen';
import SplashScreen from './SRC/Screens/SplashScreen';
import { persistor, store } from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission
} from './SRC/Utillity/utils';

import VideoCallScreen from './SRC/Screens/VideoCallScreen';
import AppNavigator from './SRC/appNavigation';
import Support from './SRC/Screens/Support';




const App = () => {
  const [publishableKey, setPublishableKey] = useState('');

  return (
    // <StripeProvider
    //   publishableKey={
    //     'pk_test_51NjQZRBqyObuQCkVVZujGGQ9w7PjZegPiZvL9MEH12KsxQmTsLpBxsXdeyN8Tu3mYkN8YZt8WutsTCEexDwIOxaB00a6zjjE12'
    //   }
    // >
    <ModalProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            
            <MainContainer />
            <GlobalErrorModal />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </ModalProvider>
    // </StripeProvider>
  );
};

const MainContainer = () => {

  useEffect(() => {
    async function GetPermission() {
      await requestLocationPermission();
      await requestCameraPermission();
      await requestWritePermission();
    }
    GetPermission();
  }, []);

  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  return <AppNavigator />;
};

const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(5000);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};
export default App;
