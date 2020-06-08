import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import Router from './router';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
