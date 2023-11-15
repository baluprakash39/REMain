import React, { useState,useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import Home from './Components/Home';
import Care from './Components/Care';
import Accessories from './Components/Accessories';
import Inventory from './Components/Inventory';
import Share from './Components/Share';
import AddVehicle from './Components/Addvehicle';
import CompanyDetails from './Components/CompanyDetails';
import Update from './Components/Update';
import SharePdf from './Components/SharePdf';
import Otp from './Components/Otp';
import Getstarted from './Components/Getstarted';
import Registration from './Components/Registration';
import Theme from './Components/Theme';
import { ThemeProvider } from './ThemeContext'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  ActivityIndicator, View,Text,Button, TouchableOpacity, StyleSheet } from 'react-native';
import Otp2 from './Components/Otp2';
import Modal from 'react-native-modal';
import jwtDecode from 'jwt-decode';
import { moderateScale, scale, verticalScale } from './Components/scaling';
import cyclicUrl from './cylic/Cyclic';
import Splash from './Components/Splash';
import Superadminpage from './Components/Superadminpage';
import UpdateAdmins from './Components/UpdateAdmins';
import AdminUsers from './Components/AdminUsers';
import AdminUserUpdate from './Components/AdminUserUpdate';
const Stack = createStackNavigator();

const App = () => {
   
const systemTheme = useColorScheme();

 
const [isLoggedIn, setIsLoggedIn] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const[timer,setTimer]=useState(0)
  const [clickedValue, setClickedValue] = useState(0);
  const [role,setRole]=useState()
  console.log('role',role)
  console.log('click',clickedValue)
      // Callback function to receive the clicked value from Otp component
      const handleLoginClick = (value,role) => {
        setClickedValue(value);
        setTimer(0)
      
      };
  
 console.log("islogged",isLoggedIn)
 console.log('timer',timer)

 
 const openLogoutPopup = () => {
  setShowLogoutPopup(true);
};

const closeLogoutPopup = () => {
  setShowLogoutPopup(false);
};



useEffect(() => {
  const checkLoginState = async () => {
    try {
      const roleValue = await AsyncStorage.getItem('userRole');
      const isLoggedInValue = await AsyncStorage.getItem('isloggedIn');

      if (isLoggedInValue === 'true') {
        setIsLoggedIn(true);
        setRole(roleValue);
      } else if (isLoggedInValue === 'false') {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn('');
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  checkLoginState();
}, [clickedValue]);


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


 
      let unique;
// usefect3
useEffect(() => {
  if (isLoggedIn) {
    
     
    unique = setInterval(async () => {
      setTimer((prevTimer) => {
       
        const newTimer = prevTimer - 1;
        
        // Check if the timer has reached 86300 seconds (23 hours and 58 minutes)
        if (newTimer <= 120) {
          openLogoutPopup(); // Open the modal
        //86200
        } if (newTimer <= 0) {
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
    const serverUrl = `${cyclicUrl}/registerPhoneNumber/checkPhoneNumberAndDevice`;

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
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
  
    if (minutes > 0) {
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} min`;
    } else {
        return `${seconds} sec`;
    }
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
    <NavigationContainer>
    <Stack.Navigator initialRouteName={
        isLoggedIn
          ? role === 'superadmin'
            ? 'Superadminpage'
            : 'Home'
          : isLoggedIn === false
            ? 'Otp'
            : 'Getstarted'
      }>
        <Stack.Screen
          name="Inventory"
          component={Inventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminUserUpdate"
          component={AdminUserUpdate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminUsers"
          component={AdminUsers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Superadminpage"
          component={Superadminpage}
          initialParams={{ onLoginClick: handleLoginClick }}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="UpdateAdmins"
          component={UpdateAdmins}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Splash"
          component={Splash}
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
    <Modal isVisible={showLogoutPopup}>
        <View style={{ flexDirection:'column',backgroundColor: 'black', paddingLeft: scale(10), borderRadius: scale(10),borderWidth:moderateScale(1),borderColor:'#f9f9f9',paddingVertical:verticalScale(50),justifyContent:'space-between' }}>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize: moderateScale(18), fontWeight: '600', color: '#f9f9f9'}}>Account security alert</Text>
          <View style={{marginBottom:verticalScale(30)}}>
            <Text style={{ fontSize: moderateScale(16), fontWeight: '500', color: '#868687' }}>
              Session will timeout in :{' '}
              <Text style={{ fontSize: moderateScale(20), fontWeight: 'bold', color: 'crimson' }}>
                {formatTime(timer)}
              </Text>
            </Text>
          </View>
          </View>
        <View style={{gap:scale(10),flex:1,flexDirection:'row',height:verticalScale(50),justifyContent:'space-between',marginHorizontal:moderateScale(10),marginBottom:verticalScale(10)}}>
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