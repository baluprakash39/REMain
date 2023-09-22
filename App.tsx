

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Addvehicle from './Components/Addvehicle';
import Care from './Components/Care';
import CompanyDetails from './Components/CompanyDetails';
import Accesories from './Components/Accessories';
import Share from './Components/Share';
import SharePdf from './Components/SharePdf';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for the "Home" screen
        />
        <Stack.Screen
    name="Share"
    component={Share} // Add the Share component here
    options={{ headerShown: false }}// You can customize the header title here
  />
         <Stack.Screen
          name="SharePdf"
          component={SharePdf}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
