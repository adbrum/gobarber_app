import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';
import Dashboard from '~/Pages/Dashboard';
import Profile from '~/Pages/Profile';

import SelectProvider from '~/Pages/New/SelectProvider';
import SelectDateTime from '~/Pages/New/SelectDateTime';
import Confirm from '~/Pages/New/Confirm';

export default function () {
  const signedIn = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signedIn ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const AuthStack = createStackNavigator();
const NewStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const NewStackScreen = ({ navigation }) => (
  <NewStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <NewStack.Screen
      name="SelectProvider"
      component={SelectProvider}
      options={{
        title: 'Selecione o prestador',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
    <NewStack.Screen
      name="SelectDateTime"
      component={SelectDateTime}
      options={{
        title: 'Selecione o horário',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectProvider');
            }}
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
    <NewStack.Screen
      name="Confirm"
      component={Confirm}
      options={{
        title: 'Confirmar',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
  </NewStack.Navigator>
);

const DashboarStackScreen = () => (
  <DashboardStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <DashboardStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: 'Agendamento',
        headerTitleAlign: 'center',
      }}
    />
  </DashboardStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',

      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Meu perfil',
        headerTitleAlign: 'center',
      }}
    />
  </ProfileStack.Navigator>
);

const AppTabsScreen = () => (
  <AppTabs.Navigator
    shifting
    sceneAnimationEnabled={false}
    backBehavior="initialRoute"
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
        headerTitleAlign: 'center',
        tabBarIcon: ({ color }) => (
          <Icon name="event" color={color} size={20} />
        ),
      }}
    />

    <AppTabs.Screen
      name="New"
      component={NewStackScreen}
      options={{
        tabBarLabel: 'Agendar',
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle-outline" color={color} size={20} />
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
