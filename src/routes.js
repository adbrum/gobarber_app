import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';
import Dashboard from '~/Pages/Dashboard';

export default function Routes() {
  const signedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signedIn === true ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const DashboardStack = createStackNavigator();
const DashboardStackScreen = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="DashboardList" component={Dashboard} />
  </DashboardStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator initialRouteName="Actions">
    <AppTabs.Screen name="Dashboard" component={DashboardStackScreen} />
  </AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

/*

*/

/* import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/Pages/SignIn/index';
import SignUp from './Pages/SignUp/index';
import Dashboard from './Pages/Dashboard/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function createRouter() {
  const signedIn = false; // useSelector((state) => state.auth.signed);

  console.tron.log('XXXXXXXXXXXXXEEEEEEEEEEEEEEEEEE: ', signedIn);

  function Tabs() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName={Dashboard}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  function Stacks() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SignIn} headerMode="none">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return <>{signedIn ? Stacks : Tabs}</>;
}
 */
