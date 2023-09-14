

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Addvehicle from './Components/Addvehicle';
import Care from './Components/Care';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Care"
          component={Care}
          options={{ headerShown: false }} // Hide the header for the "Home" screen
        />
        {/* <Stack.Screen
          name="Addvehicle"
          component={Addvehicle}
          options={{ headerShown: false }} // Hide the header for the "Home" screen
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
