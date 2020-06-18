import React from 'react';
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
      {signedIn ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const DashboarStackScreen = () => (
  <DashboardStack.Navigator headerMode="none">
    <DashboardStack.Screen name="Dashboard" component={Dashboard} />
  </DashboardStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode="none">
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

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
      component={DashboarStackScreen}
      options={{
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
          <Icon name="event" color={color} size={20} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Meu perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={20} />
        ),
      }}
    />
  </AppTabs.Navigator>
);
