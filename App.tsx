
import React, { useState,useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import Home from './Components/Home';
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
import Otp from './Components/Otp';
import Getstarted from './Components/Getstarted';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Theme from './Components/Theme';
import { ThemeProvider } from './ThemeContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
    const systemTheme = useColorScheme();
  


    
     // Set an initial value of false
  
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      // Check if a valid JWT token is present in AsyncStorage
      async function checkAuthStatus() {
        const token = await AsyncStorage.getItem('token');
       
        console.log('Token:', token);
       
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
  
      // Call the checkAuthStatus function
      checkAuthStatus();
   

    console.log("isauth", isAuthenticated);







console.log("isauth",isAuthenticated)
  return (
    <ThemeProvider> 
    <NavigationContainer>
    <Stack.Navigator initialRouteName={'Getstarted'}>
    <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Getstarted"
          component={Getstarted}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
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
          name="Accessories"
          component={Accessories}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CompanyDetails"
          component={CompanyDetails}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;


