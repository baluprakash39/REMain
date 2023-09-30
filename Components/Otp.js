import React, { useRef, useState } from "react"
import { StyleSheet, View, Text, Button, Linking, TextInput, Alert, TouchableOpacity, } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from '@react-navigation/native';

import PhoneInput from 'react-native-phone-number-input';


const Otp = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState('null');
    const recaptchaVerifier = useRef(null);

    const phoneInput = React.useRef(null);

    const getPhoneNumber = () => {
        Alert.alert(phoneNumber)
    }

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
        setPhoneNumber('');

    };


    const showAlert = () => {
        Alert.alert(
            'Login Suceessfull',
            'Go to some screen',
            [{
                text: 'Okay',
                onPress: () => {
                    navigation.navigate('Inventory')
                }
            }]
        )
    }

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
                // Alert.alert('Login Successfully.')
                showAlert()
            })
            .catch((error) => {
                //show an alert in case ot err
                Alert(error);
            })

    }

    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />

            <View style={styles.contain}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.texInput}

                    onChangeFormattedText={text => {
                        setPhoneNumber(text);
                    }}
                    defaultCode="IN"
                    layout='first'
                    withShadow
                    autoFocus
                />
            </View>
            <TouchableOpacity style={styles.sendVerification} onPress={() => { sendVerification(); getPhoneNumber() }}>
                <Text style={styles.buttonText}>

                    Send Verification

                </Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Confirm code"
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
                <Text style={styles.buttonText}>

                    Confirm Verification

                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f58e26',
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 15
  },
  contain: {
      rowGap: 15
  },


  textInput: {
      //    paddingTop: 40,
      //     paddingBottom: 20,
      paddingHorizontal: 30,
      fontSize: 20,
      //    borderBottomColor: "#fff",
      //     borderBottomWidth: 2,
      marginBottom: 5,
      textAlign: 'center',
      //     color: '#fff',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#fff'

  },
  phoneContainer: {
      width: '90%',
      height: 50,
  },
  sendVerification: {
      padding: 20,
      backgroundColor: '#3498db',
      borderRadius: 10,

  },
  sendCode: {
      padding: 20,
      backgroundColor: '#9b59b6',
      borderRadius: 10,
  },
  buttonText: {
      textAlign: "center",
      color: '#fff',
      fontWeight: "600"
  },
  otpText: {
      fontSize: 24,
      fontWeight: "bold",
      color: '#fff',
      margin: 20
  },
  text: {
      color: 'white',
      fontWeight: '600'
  },
  texInput: {
      paddingVertical: 0,
  }

});
// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import PhoneInput from 'react-native-phone-number-input';
// import OtpAutoFillViewManager from 'react-native-otp-auto-fill'; // Import OTP Auto-Fill

// import firebase from 'firebase/compat/app'; // Import Firebase
// import 'firebase/compat/auth'; // Import Firebase Auth
// import { firebaseConfig } from '../config'; // Import your Firebase configuration

// // Initialize Firebase with your configuration
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const Otp = () => {
//   const navigation = useNavigation();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [code, setCode] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const phoneInput = useRef(null);

//   // Automatically fill OTP from SMS
//   const handleAutoFill = ({ nativeEvent: { code } }) => {
//     setCode(code);
//   };

//   useEffect(() => {
//     // Add the event listener for auto-filling OTP
//     OtpAutoFillViewManager.addListener('onComplete', handleAutoFill);
//     return () => {
//       // Remove the event listener when the component unmounts
//       OtpAutoFillViewManager.removeListener('onComplete', handleAutoFill);
//     };
//   }, []);

//   const sendVerification = async () => {
//     try {
//       const phoneProvider = new firebase.auth.PhoneAuthProvider();
//       const vid = await phoneProvider.verifyPhoneNumber(phoneNumber);
//       setVerificationId(vid);
//     } catch (error) {
//       console.error('Verification request failed:', error);
//     }
//   };

//   const confirmCode = async () => {
//     try {
//       if (!verificationId || !code) {
//         console.error('Verification ID or code is missing');
//         return;
//       }

//       const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
//       await firebase.auth().signInWithCredential(credential);
//       setCode('');
//       navigation.navigate('Inventory');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.contain}>
//         <PhoneInput
//           ref={phoneInput}
//           defaultValue={phoneNumber}
//           containerStyle={styles.phoneContainer}
//           textContainerStyle={styles.texInput}
//           onChangeFormattedText={(text) => setPhoneNumber(text)}
//           defaultCode="IN"
//           layout="first"
//           withShadow
//           autoFocus
//         />
//       </View>
//       <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
//         <Text style={styles.buttonText}>Send OTP</Text>
//       </TouchableOpacity>
//       <TextInput
//         placeholder="Enter OTP"
//         value={code}
//         onChangeText={setCode}
//         keyboardType="number-pad"
//         style={styles.textInput}
//       />
//       <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f58e26',
//     alignItems: 'center',
//     justifyContent: 'center',
//     rowGap: 15,
//   },
//   contain: {
//     rowGap: 15,
//   },
//   textInput: {
//     paddingHorizontal: 30,
//     fontSize: 20,
//     marginBottom: 5,
//     textAlign: 'center',
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: '#fff',
//   },
//   phoneContainer: {
//     width: '90%',
//     height: 50,
//   },
//   sendVerification: {
//     padding: 20,
//     backgroundColor: '#3498db',
//     borderRadius: 10,
//   },
//   sendCode: {
//     padding: 20,
//     backgroundColor: '#9b59b6',
//     borderRadius: 10,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: '600',
//   },
//   texInput: {
//     paddingVertical: 0,
//   },
// });

// export default Otp;


