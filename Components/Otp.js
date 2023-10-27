// import React, { useRef, useState } from "react";
// import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
// // import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// import { firebaseConfig } from "../config";
// import firebase from "firebase/compat/app";
// import { useNavigation } from '@react-navigation/native';
// import { scale, moderateScale, verticalScale} from './scaling';
// import PhoneInput from 'react-native-phone-number-input';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const Otp = ({ route }) => {
//   const { deviceId } = route.params;
//   console.log("h", deviceId);
//   const navigation = useNavigation();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [code, setCode] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const [error, setError] = useState('');
//   const recaptchaVerifier = useRef(null);
//   const phoneInput = useRef(null);
//   const codeInput = useRef(null); // Create a ref for the "Confirm code" input field
//   const [codeError, setCodeError] = useState('');
//   const [phoneNumberError, setPhoneNumberError] = useState('');

//   const getPhoneNumber = () => {
//     // Alert.alert(phoneNumber)
//   }

//   // const sendVerification = () => {
//   //   if (!phoneNumber) {
//   //     setPhoneNumberError('Please enter a phone number.');
//   //     return;
//   //   }

//   //   setPhoneNumberError('');

//   //   const number = phoneNumber.replace('+91', '');
//   //   const serverUrl = 'https://vast-newt-crown.cyclic.app/registerPhoneNumber/checkPhoneNumberAndDevice';

//   //   fetch(`${serverUrl}?phoneNumber=${number}&deviceId=${deviceId}`, {
//   //     method: 'GET',
//   //     headers: {
//   //       "Access-Control-Allow-Origin": "*",


//   //     },
//   //   })
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw  Error('Network response was not ok');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       console.log(data)
//   //       if (data.success) {
//   //         if (data.status === 'allowed') {
//   //           if (data.data.adminaccept === true) {
//   //             const phoneProvider = new firebase.auth.PhoneAuthProvider();
//   //             phoneProvider
//   //               .verifyPhoneNumber(("+91" + number), recaptchaVerifier.current)
//   //               .then(setVerificationId)
//   //               .catch((error) => {
//   //                 setError(error.message);
//   //               });
//   //               AsyncStorage.setItem('token', data.token)
//   //               AsyncStorage.setItem('refreshToken', data.refreshToken)
//   //               AsyncStorage.setItem('bool', 'true')
//   //               AsyncStorage.setItem("deviceId",deviceId)
//   //             setPhoneNumber('');
//   //             setError('');
              
//   //             codeInput.current.focus(); // Move the focus to the "Confirm code" input field
//   //           } else if (data.data.adminaccept === false) {
//   //             Alert.alert('Admin not Accepted');
//   //           }
//   //         } else if (data.status === 'not allowed') {
//   //           Alert.alert('Admin not Accepted');
//   //         }
//   //       } else {
//   //         console.error('Check failed:', data.message);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error:', error);
//   //     });
//   // };

  
//   const sendVerification = async () => {
//   if (!phoneNumber) {
//     setPhoneNumberError('Please enter a phone number.');
//     return;
//   }

//   setPhoneNumberError('');

//   const number = phoneNumber.replace('+91', '');
//   const serverUrl = 'https://vast-newt-crown.cyclic.app/registerPhoneNumber/checkPhoneNumberAndDevice';

//   try {
//     const response = await fetch(`${serverUrl}?phoneNumber=${number}&deviceId=${deviceId}`, {
//       method: 'GET',
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();

//     console.log(data);

//     if (data.success) {
//       if (data.status === 'allowed') {
//         if (data.data.adminaccept === true) {
//           const phoneProvider = new firebase.auth.PhoneAuthProvider();
// phoneProvider
//   .verifyPhoneNumber("+91" + number)
//   .then(setVerificationId)
//   .catch((error) => {
//     setError(error.message);
//   });

//           // Set AsyncStorage values
//           await AsyncStorage.setItem('token', data.token);
//           await AsyncStorage.setItem('refreshToken', data.refreshToken);
//         await AsyncStorage.setItem('isloggedIn','true');
//           await AsyncStorage.setItem("deviceId", deviceId);

//           setPhoneNumber('');
//           setError('');
//           codeInput.current.focus(); // Move the focus to the "Confirm code" input field
//         } else if (data.data.adminaccept === false) {
//           Alert.alert('Admin not Accepted');
//         }
//       } else if (data.status === 'not allowed') {
//         Alert.alert('Admin not Accepted');
//       }
//     } else {
//       console.error('Check failed:', data.message);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

//   const showAlert = () => {
//     Alert.alert(
//       'Login to',
//       'Login to Inventory',
//       [{
//         onPress: () => {
//           navigation.navigate('Inventory',{deviceId})
//           AsyncStorage
//         }
//       }]
//     );
//   }

//   const confirmCode = () => {
//     if (code.length !== 6) {
//       setCodeError('Code must be exactly 6 digits.');
//       return;
//     }

//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       verificationId,
//       code
//     );
//     firebase.auth().signInWithCredential(credential)
//       .then(() => {
//         setCodeError('');
//         showAlert();
//       })
//       .catch((error) => {
//         setCodeError(error.message);
//       });
//   }

//   return (
//     <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headertext}>Login</Text>
//           <Text style={styles.headersubtext}>Enter mobile number for OTP</Text>
//         </View>
//         {/* <FirebaseRecaptchaVerifierModal
//           ref={recaptchaVerifier} */}
//           firebaseConfig={firebaseConfig}
        
//         <View style={styles.contain}>
//           <PhoneInput
//             ref={phoneInput}
//             defaultValue={phoneNumber}
//             containerStyle={styles.phoneContainer}
//             textContainerStyle={{ ...styles.texInput, backgroundColor: 'transparent' }}
//             onChangeFormattedText={text => {
//               setPhoneNumber(text);
//               setError('');
//             }}
//             defaultCode="IN"
//             layout='first'
//             withShadow
//             autoFocus
//           />
//           {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
//         </View>
//         <TouchableOpacity style={{ ...styles.sendVerification, backgroundColor: 'crimson' }} onPress={() => { sendVerification(); getPhoneNumber() }}>
//           <Text style={styles.buttonText}>Send OTP</Text>
//         </TouchableOpacity>
//         <TextInput
//           ref={codeInput} // Attach the ref to the "Confirm code" input field
//           placeholder="Confirm code"
//           onChangeText={setCode}
//           keyboardType='number-pad'
//           style={{ ...styles.textInput, backgroundColor: '#111111', borderRadius: 5 }}
//           placeholderTextColor="gray"
//         />
//         {codeError ? <Text style={styles.errorText}>{codeError}</Text> : error ? (
//           <Text style={styles.errorText}>{codeError}</Text>
//         ) : null}
//         <TouchableOpacity style={{ ...styles.sendCode, backgroundColor: 'crimson' }} onPress={confirmCode}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <View style={styles.container2}>
//           <Text style={{ fontSize: 25, color: 'white', fontFamily: 'SF Pro Display', fontWeight: '600' }}>
//             Do not have an account?
//           </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Registration',{deviceId})}>
//             <Text style={{ color: 'orangered', fontSize: 25, marginLeft: 20 }}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }

// export default Otp;


// const styles = StyleSheet.create({
//   container2: {
//     marginTop:40,
//     flexDirection: 'row', // This ensures they appear in a straight line
//     alignItems: 'center', // Align items vertically
//   },
//     errorText: {
//         color: 'red',
//         marginTop: 5,
//         textAlign: 'center'
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         rowGap: scale(15),        
//         backgroundColor:'#11111190'
//     },
//   header:{
//     width:'100%',
//     paddingLeft:'10%',
//     gap:scale(10),
//     marginBottom: verticalScale(30),
//     width: scale(335),
//     height: verticalScale(30),
//   },
//   headertext:{
//     color:'#f9f9f9',
//     fontSize:moderateScale(18),
//     fontWeight:'600',
//     letterSpacing:moderateScale(0.5),
//   },
//   headersubtext:{
//     color:'#f9f9f9',
//     fontSize:moderateScale(12),
//     fontWeight:'400',
//     letterSpacing:moderateScale(0.5),
//   },
//     contain: {
//     padding:10,
//       gap: scale(15),
//       backgroundColor:'#f9f9f9',
//       width:scale(250),
//       color:'#f9f9f9',
//       backgroundColor:'white'
//     },
//     textInput: {
//       //    paddingTop: 40,
//       //     paddingBottom: 20,
//       paddingHorizontal: 30,
//       fontSize: 20,
//       //    borderBottomColor: "#fff",
//       //     borderBottomWidth: 2,
//       marginBottom: 5,
//       textAlign: 'center',
//       textAlignVertical:'center',
//       color: '#ffffff',
//       height: 50,
//       gap:15,
//       margin: 12,
//       borderWidth: 2,
//       padding: 10,
//       borderColor: '#fff',
//       backgroundColor:'#111111',
//       fontSize:moderateScale(12)
    
//     },
//     phoneContainer: {
//          width: scale(230),
//       height: 50,
//       backgroundColor:'white',
//       borderBottomColor:'#f9f9f9',
//       color:'#f9f9f9',
      
//       },
//     sendVerification: {
//       padding: 10,
//       backgroundColor: '#3498db',
//       borderRadius: 10,
//       width:200,
       
//     },
//     sendCode: {
//       padding: 10,
//       backgroundColor: '#9b59b6',
//       borderRadius: 10,
//       width:200,
        
//     },
//     buttonText: {
//         textAlign: "center",
//         color: '#fff',
//         fontWeight: "600",
//         fontSize:20
        
//     },
//     otpText: {
//         fontSize: 24,
//         fontWeight: "bold",
//       color: '#fff',
//       margin: 20
       
//     },
//     text: {
//         color: 'white',
//         fontWeight: '600'
//     },
//     texInput: {
//         paddingVertical: 0,
//       backgroundColor:'transparent',
//       color:'#f9f9f9'
//     }
// });

import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import PhoneInput from 'react-native-phone-number-input';
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




const Otp = ({ route }) => {
  const {t} = useTranslation();
  const { deviceId } = route.params;
  console.log("h", deviceId);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  // const [isOtpSent, setIsOtpSent] = useState(false);

  const getPhoneNumber = () => {
    // Alert.alert(phoneNumber)
  }
  const sendVerification = async () => {
    if (!phoneNumber) {
      setPhoneNumberError('Please enter a phone number.');
      return;
    }
  
    setPhoneNumberError('');
  
    const number = phoneNumber.replace('+91', '');
    const serverUrl = 'https://vast-newt-crown.cyclic.app/registerPhoneNumber/checkPhoneNumberAndDevice';
  
    try {
      const response = await fetch(`${serverUrl}?phoneNumber=${number}&deviceId=${deviceId}`, {
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*",
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
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
  
            // Verify the phone number using reCAPTCHA
            try {
              const verificationId = await phoneProvider.verifyPhoneNumber(
                
                "+91" + number,
                recaptchaVerifier.current
              );
              console.log("v",verificationId)
              // Set AsyncStorage values
              await AsyncStorage.setItem('token', data.token);
              await AsyncStorage.setItem('refreshToken', data.refreshToken);
              await AsyncStorage.setItem('isloggedIn', 'true');
              await AsyncStorage.setItem("deviceId", deviceId);
              await AsyncStorage.setItem("verificationId", verificationId);
              await AsyncStorage.setItem('phoneNo',number)
              setPhoneNumber('')
    
  
              // Navigate to the OTP verification screen
              navigation.navigate('Otp2', {deviceId,verificationId});
              // setIsOtpSent(true);
              setPhoneNumber('');
              setError('');
            } catch (error) {
              console.error('Error during phone number verification:', error);
            }
          } else if (data.data.adminaccept === false) {
            Alert.alert('Admin not Accepted');
          } else if (data.status === 'not allowed') {
            Alert.alert('Admin not Accepted');
          }
        }  
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // const confirmCode = () => {
  //   if (code.length !== 6) {
  //     setCodeError('Code must be exactly 6 digits.');
  //     return;
  //   }

  //   const credential = firebase.auth.PhoneAuthProvider.credential(
  //     verificationId,
  //     code
  //   );
  //   firebase.auth().signInWithCredential(credential)
  //     .then(() => {
  //       setCodeError('');
  //       showAlert();
  //     })
  //     .catch((error) => {
  //       setCodeError(error.message);
  //     });
  // }

  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{t('otpheader')}</Text>
          <Text style={styles.headersubtext}>{t('otphdsubtext')}</Text>
        </View>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          // attemptInvisibleVerification={true}
        />
        <View style={styles.contain}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            placeholder="Enter Phone Number"
            placeholderTextColor='#979797'
            containerStyle={styles.phoneContainer}
            textContainerStyle={{ ...styles.texInput, backgroundColor: 'transparent' }}
            onChangeFormattedText={text => {
              setPhoneNumber(text);
              setError('');
            }}
            defaultCode="IN"
            layout='first'
            withShadow
            autoFocus
          />
          {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
        </View>

                <View style={styles.sendbutton}>
                    <TouchableOpacity style={{ ...styles.sendVerification}} onPress={() => { sendVerification(); getPhoneNumber() }}>

                 
                  
          <Text style={styles.buttonText}>{t('otpbtntext')}</Text>
        </TouchableOpacity>
          </View>
        {/* <TextInput
          ref={codeInput} // Attach the ref to the "Confirm code" input field
          placeholder="Confirm code"
          onChangeText={setCode}
          keyboardType='number-pad'
          style={{ ...styles.textInput, backgroundColor: '#111111', borderRadius: 5 }}
          placeholderTextColor="gray"
        />
        {codeError ? <Text style={styles.errorText}>{codeError}</Text> : error ? (
          <Text style={styles.errorText}>{codeError}</Text>
        ) : null}
        <TouchableOpacity style={{ ...styles.sendCode, backgroundColor: 'crimson' }} onPress={confirmCode}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> */}
                <View style={styles.container2}>
                  <Text style={{ fontSize: moderateScale(14), color: '#f9f9f9', fontFamily: 'SF Pro Display', fontWeight: '600' }}>
                    {t('otpbottomtxt1')}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Registration',{deviceId})}>
                    <Text style={{ color: 'orangered', fontSize: moderateScale(14), marginLeft: moderateScale(5), fontWeight: '600'  }}>{t('otpbottomtxt2')}</Text>
                  </TouchableOpacity>
                </View>

      </View>
    </ImageBackground>
  );
}

export default Otp;


const styles = StyleSheet.create({
container2: {
    width:'100%',
    marginTop:verticalScale(25),
    flexDirection: 'row', // This ensures they appear in a straight line
    // alignItems: 'center', // Align items vertically
    // alignContent:'center',
    justifyContent:'center',
    // marginTop:verticalScale(180),
},
errorText: {
    color: 'red',
    marginTop: verticalScale(5),
    textAlign: 'center'
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor:'#11111190',
    // justifyContent: 'center',
    // rowGap: scale(15),
},
header:{
    paddingLeft:moderateScale(30),
    gap:scale(10),
    marginTop:verticalScale(100),
    marginBottom: verticalScale(30),
    width: '100%',
    // width: scale(335),
    height: verticalScale(30),
},
headertext:{
    color:'#f9f9f9',
    fontSize:moderateScale(18),
    fontWeight:'600',
    letterSpacing:moderateScale(0.5),
},
headersubtext:{
    color:'#f9f9f9',
    fontSize:moderateScale(12),
    fontWeight:'400',
    letterSpacing:moderateScale(0.5),
},
contain: {
    // padding:scale(10),
    // gap: scale(15),
    // width: scale(335),
    width: '100%',
    color:'#111111',
},
phoneContainer: {
    marginHorizontal:moderateScale(30),
    // paddingLeft:moderateScale(10),
    marginTop:verticalScale(30),
    // width: moderateScale(330),
    height: verticalScale(50),
    backgroundColor:'white',
    color:'#111111',
    borderRadius:moderateScale(6),
},
sendbutton:{
    // width: scale(335),
    width: '100%',
    alignItems:'center',
    marginTop:verticalScale(70),
    // borderWidth:1,
    // borderColor:'red'
},
sendVerification: {
    // width:'100%',
    paddingHorizontal: moderateScale(100),
    height:verticalScale(35),
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
    textAlign: 'center',
    textAlignVertical:'center',
    color: '#111111',
    fontWeight: "600",
    fontSize:moderateScale(14)
},
texInput: {
    paddingVertical: 0,
    backgroundColor:'transparent',
    color:'#f9f9f9'
},
});















