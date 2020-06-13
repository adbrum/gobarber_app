import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '~/Pages/Signin/index';
import SignUp from './Pages/SignUp/index';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Signin}>
        <Tab.Screen name="Signin" component={Signin} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// ... other code from the previous section
