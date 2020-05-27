import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  UploadPhoto,
  Doctor,
  Messages,
  Hospitals,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
