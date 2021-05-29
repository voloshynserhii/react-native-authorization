import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppStore from './store/AppStore';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <AppStore>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStore>
  );
};
export default App;
