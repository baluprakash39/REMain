import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home'
import Care from './Components/Care';
import Accessories from './Components/Accessories';
import Inventory from './Components/Inventory';
import Share from './Components/Share';
import AddVehicle from './Components/Addvehicle';
import CompanyDetails from './Components/CompanyDetails';
import Update from './Components/Update';
import MyDropdown from './Components/Dropdown';
import Dropdown from './Components/Dropdown';
import SharePdf from './Components/SharePdf';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inventory'>
       
     
        <Stack.Screen
          name="Care"
          component={Care}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        
         <Stack.Screen
          name="Share"
          component={Share}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SharePdf"
          component={SharePdf}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Update"
          component={Update}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Addvehicle"
          component={AddVehicle}
          options={{ headerShown: false }}
        />  
         <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompanyDetails"
          component={CompanyDetails}
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
