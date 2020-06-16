import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';
import Dashboard from '~/Pages/Dashboard';
import Profile from '~/Pages/Profile';

export default function () {
  const signedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signedIn === true ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const DashboardStack = createStackNavigator();
const DashboardStackScreen = () => (
  <DashboardStack.Navigator headerMode="none">
    <DashboardStack.Screen name="Agendamentos" component={Dashboard} />
    <DashboardStack.Screen name="Profile" component={Profile} />
  </DashboardStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      style: {
        backgroundColor: '#8d41a8',
      },
    }}
  >
    <AppTabs.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
          <Icon name="event" color={color} size={20} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Meu perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={20} />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);
