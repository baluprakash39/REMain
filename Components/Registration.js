import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info'; // Import the DeviceInfo module
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
  },
  lng: 'en',
  fallbackLng: 'en',
});



const Registration = ({route}) => {
  const {t} = useTranslation();
  const {deviceId}=route.params
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  // Error messages for the fields
  const [nameError, setNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [deviceUniqueid, setDeviceId] = useState('');
console.log("id",deviceUniqueid)




const[registrationErr,setRegistrationError]=useState('')
  useEffect(() => {
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    try {
      const uniqueId = await DeviceInfo.getUniqueId();
      setDeviceId(uniqueId);
    } catch (error) {
      console.error('Error getting device info:', error);
    }
  };


// const handleAddDetails = () => {
//     // Reset error messages
//     setNameError('');
//     setCompanyNameError('');
//     setContactNumberError('');
//     setEmailError('');
//     setRegistrationError(''); // Add a new state variable for registration error
  
//     let isValid = true;
  
//     if (!name) {
//       setNameError('Name is required');
//       isValid = false;
//     }
  
//     if (!companyName) {
//       setCompanyNameError('Company Name is required');
//       isValid = false;
//     }
  
//     if (!contactNumber) {
//       setContactNumberError('Contact Number is required');
//       isValid = false;
//     }
  
//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     }
  
//     if (isValid) {
//       // If all fields are valid, you can proceed with saving the details
//       // Prepare the data to send to the backend, including deviceUniqueId
//       const data = {
//         name: name,
//         companyname: companyName,
//         phoneNumber: contactNumber,
//         email: email,
//         deviceId: deviceUniqueid, // Use the deviceUniqueId
//       };
  
//       fetch('https://vast-newt-crown.cyclic.app/registerPhoneNumber/registerPhoneNumber', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
       
//         .then(data => {
//            if(data.status===400) {
//             setRegistrationError('Details already exist. Please try again.');
//            }else{
//           console.log('data', data);
//           // Example: Show an alert upon successful registration
//           Alert.alert('Success', 'Details saved successfully');
//           // You can navigate to another screen or perform additional actions here
//           setCompanyName('');
//           setName('');
//           setEmail('');
//           setContactNumber('');
//           navigation.navigate("Getstarted")
//            }
//         })
    
//         .catch(error => {
//           console.error(error);
//           // Example: Show an alert for registration failure
//           Alert.alert('Error', 'Failed to save details. Please try again.');
//         });
//     }
//   };
const handleAddDetails = async () => {
  // Reset error messages
  setNameError('');
  setCompanyNameError('');
  setContactNumberError('');
  setEmailError('');
  setRegistrationError('');

  let isValid = true;

  if (!name) {
    setNameError('Name is required');
    isValid = false;
  }

  if (!companyName) {
    setCompanyNameError('Company Name is required');
    isValid = false;
  }

  if (!contactNumber) {
    setContactNumberError('Contact Number is required');
    isValid = false;
  }

  if (!email) {
    setEmailError('Email is required');
    isValid = false;
  }

  if (isValid) {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');

    // If all fields are valid, you can proceed with saving the details
    // Prepare the data to send to the backend, including deviceUniqueId
    const data = {
      name: name,
      companyname: companyName,
      phoneNumber: contactNumber,
      email: email,
      deviceId: deviceUniqueid, // Use the deviceUniqueId
    };

    fetch('https://vast-newt-crown.cyclic.app/registerPhoneNumber/registerPhoneNumber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the headers
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status === 400) {
            setRegistrationError('Your registration request already sent, please contact owner.');
        } else {
          console.log('data', response);
          // Example: Show an alert upon successful registration
          Alert.alert('Success', 'Request sent successfully');
          // You can navigate to another screen or perform additional actions here
          setCompanyName('');
          setName('');
          setEmail('');
          setContactNumber('');
          navigation.navigate('Otp',{deviceId});
        
        }
      })
      .catch(error => {
        console.error(error);
        // Example: Show an alert for registration failure
        Alert.alert('Error', 'Failed to save details. Please try again.');
      });
  }
};

  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>

     <View style={styles.container}>
       <View style={{backgroundColor:'#1f1f1f',borderBottomColor:'#f9f9f9', borderBottomWidth:verticalScale(1)}}>
         <View style={styles.header}>
            <View style={{alignContent: 'center' }}>
               <TouchableOpacity onPress={() => navigation.navigate('Otp', {deviceId})} style={styles.backButton}>
                 <MaterialIcons name="arrow-back" size={moderateScale(20)} color="#F9F9F9" />
               </TouchableOpacity>
           </View>
          <View style={{ justifyContent: 'center',  height:verticalScale(25)}}>
             <Text style={styles.title}>Registration</Text>
           </View>
          <View></View>
        </View>
        <View style={styles.line}></View>
        </View>
        <ScrollView>
        <View style={{marginBottom:verticalScale(100), paddingHorizontal:moderateScale(10)}}>
        {/* Name */}
        <Text style={{ fontSize:moderateScale(18), color:'#f9f9f9', marginTop:scale(15)}}>Personal Information</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
        
          {/* <Text style={styles.subtitle}>Name</Text> */}
          {/* <Text style={{ color: 'white', fontSize: moderateScale(14), width: scale(5), textAlign: 'center',}}>: </Text> */}
          <TextInput
            style={{ ...styles.inputField}} 
            placeholder="Enter your full name"
            selectionColor="red"
            placeholderTextColor="#979797"
            backgroundColor="#111111"
            value={name}
            onChangeText={setName}
          />
        </View>
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                {/* Contact Number */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
          {/* <Text style={styles.subtitle}>Contact Number</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(14), width: scale(5), textAlign: 'center',}}>: </Text> */}
          <TextInput
             style={{ ...styles.inputField}} 
            placeholder="Enter Contact Number"
            keyboardType='number-pad'
            selectionColor="red"
            placeholderTextColor="#979797"
            backgroundColor="#111111"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
        </View>
        {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}

        {/* Email Id */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
          {/* <Text style={styles.subtitle}>Email Id</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(14), width: scale(5), textAlign: 'center',}}>: </Text> */}
          <TextInput
            style={{ ...styles.inputField}} 
            placeholder="Enter Email Id"
            selectionColor="red"
            placeholderTextColor="#979797"
            backgroundColor="#111111"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* Company Name */}
        <Text style={{ fontSize:moderateScale(18), color:'#f9f9f9', marginTop:scale(30)}}>Company Information</Text>
        <View style={{  flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20)  }}>
          {/* <Text style={styles.subtitle}>Company Name</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(14), width: scale(5), textAlign: 'center',}}>: </Text> */}
          <TextInput
             style={{ ...styles.inputField}} 
            placeholder="Enter Company Name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={companyName}
            onChangeText={setCompanyName}
          />
        </View>
        {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}
        </View>

        <View style={{ marginTop:verticalScale(60), gap:scale(5)}}>
        {registrationErr ? <Text style={{...styles.errorText, width:scale(210), marginLeft:scale(65)}}>{registrationErr}</Text> : null}
        <View style={styles.bottombuttons}>
          <TouchableOpacity style={styles.button} onPress={handleAddDetails}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(20) }}>
              <FontAwesome6 name="address-card" size={scale(15)} color="#111111" />
              <Text style={styles.buttonText }>Register</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
      </ScrollView>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    // paddingTop:moderateScale(10),
    // paddingHorizontal: moderateScale(10),
    backgroundColor:'#11111199',
    justifyContent:'space-between'
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop:verticalScale(10),
    marginBottom: verticalScale(10),
    // borderBottomWidth:verticalScale(1),
    // borderBottomColor:'#f9f9f9',
    // width: moderateScale(335),
    height: verticalScale(35),
    justifyContent:'space-between',
  },
  backButton:{
    paddingLeft:moderateScale(10),
    alignItems: 'center',
    width:moderateScale(30),
    height:verticalScale(20),
    justifyContent:'center',
  },
  title: {
    color: '#F9F9F9',
    fontSize: moderateScale(16),
    fontWeight: 'semibold',
    textAlign: 'center',
    letterSpacing: moderateScale(0.5),
  },
  subtitle: {
    width: scale(90),
    marginRight: moderateScale(5),
    color: '#AAAAAA',
    fontSize: moderateScale(14),
    fontWeight: '400',
    letterSpacing: moderateScale(0.2),
  },
  inputField: {
    flex: 1,
    height: verticalScale(35),
    backgroundColor: '#111111',
    borderWidth:scale(1),
    borderColor:'#979797',
    fontSize:moderateScale(14),
    textAlignVertical:'center',
    color:'#f9f9f9',
    fontWeight:'500',
    letterSpacing:moderateScale(0.4),
    borderRadius: scale(3),
    paddingLeft: moderateScale(5),
  },
  // line: {
  //   height: verticalScale(1),
  //   backgroundColor: 'white',
  //   width: moderateScale(335),
  // },
  bottombuttons: {
    alignItems: 'center',
    alignContent:'center',
    // width:scale(300),
    width:'100%',
    height: verticalScale(40),
    // marginHorizontal: verticalScale(30),
    marginTop:verticalScale(1),
    marginBottom:verticalScale(40),
    // paddingHorizontal:scale(5),
    // borderWidth:1,
    // borderColor:'red'
  },
  button: {
    // width:'100%',
    paddingHorizontal: moderateScale(100),
    height:verticalScale(40),
    // backgroundColor: '#3498db',
    backgroundColor: '#f9f9f9',
    borderRadius: scale(4),
    // marginHorizontal:moderateScale(50),
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
    // borderColor:'red'
  },
  buttonText: {
    color: '#111111',
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  errorText: {
    color: '#f9f9f9',
    marginVertical: scale(1),
    fontSize: moderateScale(10),
    textAlign: 'left',
    paddingLeft:scale(5),
    backgroundColor:'#B70404',
    marginLeft: scale(110), // Adjust the left margin for error text
    width:scale(100),
  },
});

export default Registration;