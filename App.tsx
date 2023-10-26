
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
import Theme from './Components/Theme';
import { ThemeProvider } from './ThemeContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  ActivityIndicator, View,Text,Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { AuthProvider } from './AuthContext';
import Otp2 from './Components/Otp2';
import Modal from 'react-native-modal';
import jwtDecode from 'jwt-decode';
import { moderateScale, scale, verticalScale } from './Components/scaling';
// import { AuthProvider } from './AuthContext';


const Stack = createStackNavigator();

const App = () => {
   
const systemTheme = useColorScheme();

 
const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const[timer,setTimer]=useState(0)
  const [clickedValue, setClickedValue] = useState(0);
  console.log('click',clickedValue)
      // Callback function to receive the clicked value from Otp component
      const handleLoginClick = (value,zero) => {
        setClickedValue(value);
        setTimer(zero)
      };
  
 console.log("islogged",isLoggedIn)
 console.log('timer',timer)

 
 const openLogoutPopup = () => {
  setShowLogoutPopup(true);
};

const closeLogoutPopup = () => {
  setShowLogoutPopup(false);
};


//  useffect1
  useEffect(() => {
        // Check the login state in AsyncStorage during app startup.
        AsyncStorage.getItem('isloggedIn')
          .then((value) => {
            if (value === 'true') {
              setIsLoggedIn(true);


            } else {
              setIsLoggedIn(false);
            }
            setIsLoading(false); // Set loading to false once you have the value.
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false); // Handle errors and set loading to false.
          });
      }, [isLoggedIn,clickedValue]);


     //useffect
      useEffect(() => {
        if (isLoggedIn) {
          // Retrieve the token and update the timer upon app start
          const updateTimerOnStart = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
              const tokenData = jwtDecode(token);
              const currentTimestamp = Math.floor(Date.now() / 1000);
              const tokenExpiry = tokenData.exp;
              const timeRemainingInSeconds = tokenExpiry - currentTimestamp;
              setTimer(timeRemainingInSeconds);
              console.log('Token Expiry Time Remaining (seconds):', timeRemainingInSeconds);
            }
          };
          
          updateTimerOnStart();
        }
      }, [isLoggedIn,clickedValue]);


 
      let unique: any; 
// usefect3
useEffect(() => {
  if (isLoggedIn) {
    
     
    unique = setInterval(async () => {
      setTimer((prevTimer) => {
       
        const newTimer = prevTimer - 1;
        
        // Check if the timer has reached 86300 seconds (23 hours and 58 minutes)
        if (newTimer <= 46300) {
          openLogoutPopup(); // Open the modal
        
        } if (newTimer <= 46200) {
          clearInterval(unique); // Stop the interval
          setIsLoading(true); // Show loading indicator
          
          // Perform the logout actions
          (async () => {
            await AsyncStorage.setItem('isloggedIn', 'false');
            await AsyncStorage.removeItem('token');
           
            setIsLoggedIn(false);
            setIsLoading(false); // Hide loading indicator
            closeLogoutPopup()
          })();
          
        }

        return newTimer;
      });
    }, 1000);
  }
}, [isLoggedIn,clickedValue]);


  //function that generate token every time and set to assync storage when click wait. 
  
 
  const handleWait = async () => {

    const number = await AsyncStorage.getItem('phoneNo');
    const deviceId = await AsyncStorage.getItem('deviceId');
    const serverUrl = 'https://vast-newt-crown.cyclic.app/registerPhoneNumber/checkPhoneNumberAndDevice';

    try {
      const response = await fetch(`${serverUrl}?phoneNumber=${number}&deviceId=${deviceId}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      if (data.success) {
        if (data.status === 'allowed') {
          if (data.data.adminaccept === true) {
            await AsyncStorage.setItem('token', data.token);
            // Call a function to update the timer immediately upon "Wait" button click

            clearInterval(unique)
            updateTimerBasedOnToken(data.token);
            closeLogoutPopup();
          }
        }
      }
    } catch (error) {
      console.error(error);
    
     
    }
  };
  
  const updateTimerBasedOnToken = (newToken) => {
    const tokenData = jwtDecode(newToken);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const tokenExpiry = tokenData.exp;
    const timeRemainingInSeconds = tokenExpiry - currentTimestamp;
    setTimer(timeRemainingInSeconds);
    console.log('Token Expiry Time Remaining (seconds):', timeRemainingInSeconds);
  };

  const handleLogout = async () => {
  
    // Show loading indicator
    setIsLoading(true);
  
    // Perform the logout actions
    (async () => {
      await AsyncStorage.setItem('isloggedIn', 'false');
      await AsyncStorage.removeItem('token');
      
      setIsLoggedIn(false);
      if(!isLoggedIn){
        closeLogoutPopup();
      }
      // Hide loading indicator (optional since you're navigating away from the component)
      setIsLoading(false);
      setTimer(0)
    })();
  };
  

  function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
  
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }


if (isLoading) {
  // Display an activity loader while loading the AsyncStorage value.
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

  return (
    <ThemeProvider> 
       {/* <AuthProvider> */}
    <NavigationContainer>
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Inventory' : 'Getstarted'}>
    {/* <Stack.Navigator initialRouteName={'Otp2'}> */}

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
          name="Otp2"
          component={Otp2}
          options={{ headerShown: false }}
          initialParams={{ onLoginClick: handleLoginClick }}
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
  initialParams={{ onLoginClick: handleLoginClick }}
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
    {/* </AuthProvider> */}
    <Modal isVisible={showLogoutPopup}>
        <View style={{ backgroundColor: 'black', padding: scale(10), borderRadius: scale(10),borderWidth:moderateScale(1),borderColor:'white',height:verticalScale(150),justifyContent:'center' }}>
          <View style={{marginBottom:verticalScale(30)}}>
          <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#f9f9f9' }}>
            Session will timeout in :{' '}
            <Text style={{ fontSize: moderateScale(20), fontWeight: 'bold', color: 'crimson' }}>
              {formatTime(timer)}
            </Text>
          </Text>

        </View>
        <View style={{gap:scale(10),flex:1,flexDirection:'row',height:verticalScale(50),justifyContent:'space-between',marginHorizontal:moderateScale(10)}}>
          <TouchableOpacity style={{height:verticalScale(40),width:moderateScale(120),backgroundColor:'white',justifyContent:'center',borderRadius:scale(5)}} onPress={handleWait}>
            <Text style={{color:'red',textAlign:'center',textAlignVertical:'center',fontSize:moderateScale(14),fontWeight:'600',letterSpacing:moderateScale(0.5)}}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{height:verticalScale(40),width:moderateScale(120),backgroundColor:'crimson',justifyContent:'center',borderRadius:scale(5)}} onPress={handleLogout}>
            <Text style={{color:'white',textAlign:'center',textAlignVertical:'center',fontSize:moderateScale(14),fontWeight:'600',letterSpacing:moderateScale(0.5)}}>Logout</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ThemeProvider>
  );
}

export default App;



