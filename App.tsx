// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Components/Home'
// import Care from './Components/Care';
// import Accessories from './Components/Accessories';
// import Inventory from './Components/Inventory';
// import Share from './Components/Share';
// import AddVehicle from './Components/Addvehicle';
// import CompanyDetails from './Components/CompanyDetails';
// import Update from './Components/Update';
// import MyDropdown from './Components/Dropdown';
// import Dropdown from './Components/Dropdown';
// import SharePdf from './Components/SharePdf';
// import Otp from './Components/Otp';
// import Login from './Components/Login';
// import Theme from './Components/Theme';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Theme'>

//         <Stack.Screen
//           name="Otp"
//           component={Otp}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Theme"
//           component={Theme}
//           options={{ headerShown: false }}
//         />


//         <Stack.Screen
//           name="Care"
//           component={Care}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="Share"
//           component={Share}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SharePdf"
//           component={SharePdf}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Update"
//           component={Update}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Addvehicle"
//           component={AddVehicle}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Inventory"
//           component={Inventory}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Accessories"
//           component={Accessories}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="CompanyDetails"
//           component={CompanyDetails}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import React, { useState } from 'react';
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
import Login from './Components/Login';
import Theme from './Components/Theme';
import { ThemeProvider } from './ThemeContext'; 

const Stack = createStackNavigator();

const App = () => {
    const systemTheme = useColorScheme();
  // const systemTheme = useColorScheme();
  // const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  // const toggleTheme = () => {
  //   setIsDarkTheme((prevTheme) => !prevTheme);
  // };

  return (
    <ThemeProvider> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Otp"
          component={Otp}
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
          name="Inventory"
          component={Inventory}
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


