import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info'; // Import the DeviceInfo module

const Registration = () => {
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

//   const handleAddDetails = () => {
    
//     // Reset error messages
//     setNameError('');
//     setCompanyNameError('');
//     setContactNumberError('');
//     setEmailError('');

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
//       navigation.navigate('Otp')
//       // Prepare the data to send to the backend, including deviceUniqueId
//       const data = {
//         name: name,
//         companyname: companyName,
//         phoneNumber: contactNumber,
//         email: email,
//         deviceId: deviceUniqueid, // Use the deviceUniqueId
//       };
//    console.log("data",data)
//       fetch('https://dull-plum-woodpecker-veil.cyclic.cloud/registerPhoneNumber/registerPhoneNumber', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('data', data);

//           // Example: Show an alert upon successful registration
//           Alert.alert('Success', 'Details saved successfully');

//           // You can navigate to another screen or perform additional actions here
//         })
//         .catch(error => {
//           console.error(error);

//           // Example: Show an alert for registration failure
//           Alert.alert('Error', 'Failed to save details. Please try again.');
//         });
//     }
//   };
const handleAddDetails = () => {
    // Reset error messages
    setNameError('');
    setCompanyNameError('');
    setContactNumberError('');
    setEmailError('');
    setRegistrationError(''); // Add a new state variable for registration error
  
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
      // If all fields are valid, you can proceed with saving the details
      // Prepare the data to send to the backend, including deviceUniqueId
      const data = {
        name: name,
        companyname: companyName,
        phoneNumber: contactNumber,
        email: email,
        deviceId: deviceUniqueid, // Use the deviceUniqueId
      };
  
      fetch('https://dull-plum-woodpecker-veil.cyclic.cloud/registerPhoneNumber/registerPhoneNumber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
       
        .then(data => {
           if(data.status===400) {
            setRegistrationError('Details already exist. Please try again.');
           }else{
          console.log('data', data);
          // Example: Show an alert upon successful registration
          Alert.alert('Success', 'Details saved successfully');
          // You can navigate to another screen or perform additional actions here
          setCompanyName('');
          setName('');
          setEmail('');
          setContactNumber('');
          navigation.navigate("Otp")
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
        <View style={styles.header}>
          <View style={{ height: '100%', alignContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={20} color="#F9F9F9" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Register Details</Text>
        <View style={styles.line}></View>

        {/* Name */}
        <Text style={{ fontSize:moderateScale(18), color:'#f9f9f9', marginTop:scale(30)}}>Personal Information</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 40 }}>
        
          <Text style={styles.subtitle}>Name</Text>
          <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>: </Text>
          <TextInput
            style={{ ...styles.inputField, color: 'black' }} 
            placeholder="Enter Name"
            selectionColor="red"
            placeholderTextColor="#111111"
            backgroundColor="#CBCBCA"
            value={name}
            onChangeText={setName}
          />
        </View>
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                {/* Contact Number */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.subtitle}>Contact Number</Text>
          <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>: </Text>
          <TextInput
             style={{ ...styles.inputField, color: 'black' }} 
            placeholder="Enter Contact Number"
            selectionColor="red"
            placeholderTextColor="#111111"
            backgroundColor="#CBCBCA"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
        </View>
        {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}

        {/* Email Id */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.subtitle}>Email Id</Text>
          <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>: </Text>
          <TextInput
            style={{ ...styles.inputField, color: 'black' }} 
            placeholder="Enter Email Id"
            selectionColor="red"
            placeholderTextColor="#111111"
            backgroundColor="#CBCBCA"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* Company Name */}
        <Text style={{ fontSize:moderateScale(18), color:'#f9f9f9', marginTop:scale(30)}}>Company Information</Text>
        <View style={{  flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 40  }}>
          <Text style={styles.subtitle}>Company Name</Text>
          <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>: </Text>
          <TextInput
             style={{ ...styles.inputField, color: 'black' }} 
            placeholder="Enter Company Name"
            selectionColor="red"
            placeholderTextColor="#111111"
            backgroundColor="#CBCBCA"
            value={companyName}
            onChangeText={setCompanyName}
          />
        </View>
        {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}



        <View style={styles.bottombuttons}>
          <TouchableOpacity style={styles.button} onPress={handleAddDetails}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
              <FontAwesome6 name="address-card" size={20} color="#f9f9f9" />
              <Text style={styles.buttonText}>Add Details</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.errorText}>{registrationErr}</Text>
        </View>
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
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor:'#11111190'
  },
  header: {
    gap: 110,
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    width: scale(70),
    marginRight: moderateScale(10),
    color: '#F9F9F9',
    fontSize: moderateScale(12),
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  inputField: {
    flex: 1,
    height: scale(25),
    backgroundColor: '#979797',
    borderRadius: 5,
    paddingLeft: 10,
    // color: '#868687',
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  bottombuttons: {
    alignItems: 'center',
    width:scale(300),
    height: scale(40),
    marginHorizontal: verticalScale(30),
    marginTop:verticalScale(80),
    marginBottom:verticalScale(30),
    paddingHorizontal:scale(5),
  },
  button: {
    borderColor: '#f9f9f9',
    backgroundColor: '#453F3F',
    borderWidth: 1,
    borderRadius: 6,
    width: '80%',
    height: scale(30),
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 150, // Adjust the left margin for error text
  },
});

export default Registration;