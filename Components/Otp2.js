
// import { View, StyleSheet, Alert,ImageBackground, TouchableOpacity,Text } from 'react-native';
// import { scale, moderateScale, verticalScale} from './scaling';
// import  OtpInputs from 'rn-custom-otp';
// import React, { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Otp2 = ({ route , navigation }) => {
//   const [code, setCode] = useState('');
//   const [codeError, setCodeError] = useState('');

//   const showAlert = () => {
//     Alert.alert('Login to', 'Login to Inventory', [
//       {
//         onPress: () => {
//           // Navigate to your desired screen after OTP verification
//           // You can also clear the verificationId from AsyncStorage
//           navigation.navigate('Inventory', { deviceId });
//         },
//       },
//     ]);
//   };

//   const confirmCode = async () => {
   
//     if (code.length !== 6) {
//       setCodeError('Code must be exactly 6 digits.');
//       return;
//     }
    
//     // Retrieve the verificationId from AsyncStorage
//     const verificationId = await AsyncStorage.getItem('verificationId');
    
//     // Perform OTP verification with the verificationId
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//       verificationId,
//       code
//     );

//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then(() => {
//         setCodeError('');
//         showAlert();
//       })
//       .catch((error) => {
//         setCodeError(error.message);
//       });
//   };

//   return (
//     <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <View style={styles.contain}>
//           <OtpInputs
//             numberOfInputs={6}
//             focusedBorderColor={'blue'}
//             unFocusedBorderColor={'black'}
//             clearTextOnFocus={true}
//             errorMessage={"Invalid OTP"}
//             inputTextErrorColor={'black'}
//             errorMessageTextStyles={{ color: 'red' }}
//             handleChange={(code) => {
//               setCode(code);
//             }}
//             keyboardType={'number-pad'}
//             secureTextEntry={false}
//             inputStyles={{}} // Customize your styles
//             inputContainerStyles={{}} // Customize your styles
//           />
//           {codeError && <Text style={{ color: 'red' }}>{codeError}</Text>}
//         </View>
//         <TouchableOpacity style={{ ...styles.sendCode, backgroundColor: 'crimson' }} onPress={confirmCode}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity> 
//       </View>
//     </ImageBackground>
//   );
// };

// export default Otp2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     // justifyContent: 'space-between',
//     rowGap: scale(15),        
//     backgroundColor:'#11111190',
//   },
//   container2: {
//     marginTop:scale(10),
//     flexDirection: 'row', // This ensures they appear in a straight line
//     alignItems: 'center', // Align items vertically
//   },
//   errorText: {
//     // color: 'red',
//     // marginTop: 5,
//     textAlign: 'center',
//     color: '#f9f9f9',
//     justifyContent:'space-between',
//     marginVertical: verticalScale(5),
//     fontSize: moderateScale(12),
//     textAlign: 'left',
//     paddingLeft:scale(5),
//     backgroundColor:'#B70404',
//     // marginLeft: scale(60), // Adjust the left margin for error text
//     borderWidth:1,
//     borderColor:'white'
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
  
//   header:{
//     paddingLeft: scale(20),
//     gap:scale(10),
//     marginTop:verticalScale(50),
//     marginBottom: verticalScale(20),
//     width: moderateScale(335),
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
//   textInput: {
//     textAlign: 'center',
//     textAlignVertical:'center',
//     color: '#ffffff',
//     height: verticalScale(30),
//     width: moderateScale(150),
//     margin: scale(12),
//     borderWidth: moderateScale(1),
//     borderColor: 'red',
//     backgroundColor:'#111111',
//     fontSize:moderateScale(12)
//   },
//   contain: {
//     height:verticalScale(250),
//     alignItems:'center',
//     marginBottom:verticalScale(60),
//     // padding:10,
//     gap: scale(15),
//     // backgroundColor:'#f9f9f9',
//     // width:scale(250),
//     // color:'#f9f9f9',
//     // backgroundColor:'white',
//     },
//   phoneContainer: {
//     width: moderateScale(260),
//     height: verticalScale(40),
//     // borderBottomColor:'#f9f9f9',
//     // color:'#f9f9f9',
//     borderRadius:moderateScale(6),
//     },
//   sendVerification: {
//     backgroundColor: '#3498db',
//     borderRadius: moderateScale(6),
//     width:moderateScale(150),
//     height:verticalScale(30),
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   sendCode: {
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor: '#9b59b6',
//     borderRadius: scale(4),
//     height:verticalScale(30),
//     width:moderateScale(250),
//     marginTop:verticalScale(5),
//   },
//   buttonText: {
//     textAlign: "center",
//     color: '#fff',
//     fontWeight: '600',
//     fontSize:moderateScale(14),
//     letterSpacing: moderateScale(0.5),
//     textTransform:'uppercase'
//   },
//   otpText: {
//     fontSize: moderateScale(18),
//     fontWeight: "bold",
//     color: '#fff',
//     letterSpacing:moderateScale(0.4)
//   },
//   text: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   texInput: {
//     paddingVertical: 0,
//     backgroundColor:'transparent',
//     color:'#f9f9f9'
//   },
//   otpInputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: verticalScale(10),
//   },
//   otpInputField: {
//     flex: 1,
//     height: moderateScale(40),
//     borderBottomWidth: 1,
//     borderBottomColor: 'green',
//     fontSize: moderateScale(20),
//     letterSpacing: moderateScale(20),
//     textAlign: 'center',
//     color: 'green',
//   },
//   otpInputHighlight: {
//     borderBottomColor: 'green',
//   },
//   });
import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import OtpInputs from 'rn-custom-otp';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
// import OtpAutocomplete from 'react-native-otp-autocomplete'; // Import the OTP Autocomplete library

const Otp2 = ({ route }) => {
  const { deviceId } = route.params;
  const { verificationId } = route.params;
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const navigation = useNavigation();

  // useEffect(() => {
  //   // OtpAutocomplete.getHash()
  //   //   .then((hash) => {
  //   //     // Use this hash in the message (if needed).
  //   //   })
  //   //   .catch(console.log);

  //   OtpAutocomplete.getOtp()
  //     .then(() => {
  //       OtpAutocomplete.addListener(otpHandler);
  //     })
  //     .catch(console.log);

  //   return () => {
  //     OtpAutocomplete.removeListener(); // Clean up when the component unmounts
  //   };
  // }, []);

  // const otpHandler = (message) => {
  //   const otp = /(\d{6})/g.exec(message);
  //   if (otp && otp.length > 1) {
  //     const extractedOtp = otp[1];
  //     setCode(extractedOtp);
  
  //     // Use the hash here, for example:
  //     getHash()
  //       .then((hash) => {
  //         // You can use the 'hash' in your logic
  //         console.log('Hash:', hash);
  //         // Continue with your logic here
  //       })
  //       .catch(console.log);
  
  //     OtpAutocomplete.removeListener();
  //   }
  // };


  const showAlert = () => {
    const clickedValue = "Login Button Clicked"; // Define the value you want to pass
    //we need to pass this random number to App.tsx 
    const randomValue = Math.random();
    console.log("Clicked Value:", clickedValue);
    console.log("r",randomValue)
    route.params.onLoginClick(randomValue);
    
    Alert.alert(
      'Login to',
      'Login to Inventory',
      [{
        onPress: () => {
          navigation.navigate('Inventory', { deviceId, verificationId});
          
        }
      }]
    );
  }

  const confirmCode = async () => {
   
    if (code.length !== 6) {
      setCodeError('Code must be exactly 6 digits.');
      return;
    }
    
    // Retrieve the verificationId from AsyncStorage
    const verificationId = await AsyncStorage.getItem('verificationId');
    
    // Perform OTP verification with the verificationId
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCodeError('');
        showAlert();
      })
      .catch((error) => {
        setCodeError(error.message);
      });
  };

  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Enter OTP</Text>
        <Text style={styles.headersubtext}>6 digit OTP sent to your number</Text>
      </View>
      <View style={styles.contain}>
        <OtpInputs
          numberOfInputs={6}
          errorMessage="Invalid OTP"
          inputStyles={styles.otpInputField}
          handleChange={(code) => {
            setCode(code);
          }}
          keyboardType="number-pad"
        />
        {codeError && <Text style={styles.errorText}>{codeError}</Text>}
      </View>
      <TouchableOpacity
        style={{ ...styles.sendCode, backgroundColor: 'crimson' }}
        onPress={confirmCode}
      >
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default Otp2;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: scale(15),        
    backgroundColor:'#11111190'
},
header:{
width:'100%',
paddingLeft:'10%',
gap:scale(10),
marginBottom: verticalScale(30),
width: scale(335),
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
  container2: {
    marginTop:scale(10),
    flexDirection: 'row', // This ensures they appear in a straight line
    alignItems: 'center', // Align items vertically
  },
  errorText: {
    // color: 'red',
    // marginTop: 5,
    textAlign: 'center',
    color: '#f9f9f9',
    justifyContent:'space-between',
    marginVertical: verticalScale(5),
    fontSize: moderateScale(12),
    textAlign: 'left',
    paddingLeft:scale(5),
    backgroundColor:'#B70404',
    // marginLeft: scale(60), // Adjust the left margin for error text
    borderWidth:1,
    borderColor:'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contain: {
    height:verticalScale(250),
    width:moderateScale(370),
    alignItems:'center',
    marginTop:verticalScale(20),
    marginBottom:verticalScale(40),
    justifyContent:'space-between',
    // padding:10,
    // gap: scale(15),
    // backgroundColor:'#f9f9f9',
    // width:scale(250),
    // color:'#f9f9f9',
    // backgroundColor:'white',
    },
  sendCode: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#9b59b6',
    borderRadius: scale(4),
    height:verticalScale(35),
    width:moderateScale(250),
    marginTop:verticalScale(5),
    marginBottom:verticalScale(40)
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontWeight: '600',
    fontSize:moderateScale(14),
    letterSpacing: moderateScale(0.5),
    textTransform:'uppercase'
  },
  texInput: {
    paddingVertical: 0,
    backgroundColor:'transparent',
    color:'#f9f9f9'
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  otpInputField: {
    flex: 1,
    height: moderateScale(40),
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    fontSize: moderateScale(20),
    letterSpacing: moderateScale(20),
    textAlign: 'center',
    color: 'green',
  },
  otpInputHighlight: {
    borderBottomColor: 'green',
  },
  });
// import React, { useState } from 'react';
// import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import OTPInputView from '@twotalltotems/react-native-otp-input'; // Import the OTPInputView component
// import { useNavigation } from '@react-navigation/native';
// import { verifyOtp } from 'react-native-otp-verify';
// import { scale, moderateScale, verticalScale } from './scaling';

// const Otp2 = ({ route }) => {
//   const { deviceId } = route.params;
//   const { verificationId } = route.params;
//   const [code, setCode] = useState('');
//   const [codeError, setCodeError] = useState('');
//   const navigation = useNavigation();

//   const onCodeFilled = (code) => {
//     console.log('c',code)
//     // This function is called when the OTP code is filled
//     setCode(code);
//   };

//   const showAlert = () => {
//     Alert.alert('Login to', 'Login to Inventory', [
//       {
//         onPress: () => {
//           navigation.navigate('Inventory', { deviceId });
//         },
//       },
//     ]);
//   };

//   const confirmCode = () => {
//     console.log(code)
//     if (code.length !== 6) {
//       setCodeError('Code must be exactly 6 digits.');
//       return;
//     }

//     verifyOtp(code)
//       .then(() => {
//         setCodeError('');
//         showAlert();
//       })
//       .catch((error) => {
//         setCodeError(error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headertext}>Enter OTP</Text>
//         <Text style={styles.headersubtext}>6 digit OTP sent to your number</Text>
//       </View>
//       <View style={styles.contain}>
//         <OTPInputView
//           pinCount={6}
//           code={code}
//           onCodeFilled={(code) => onCodeFilled(code)}
//           autoFocusOnLoad={true} // Autofocus on the OTP input fields
//           style={{ width: '80%', height: 100 }} // Customize the style of the OTP input
//         />
//         {codeError && <Text style={styles.errorText}>{codeError}</Text>}
//       </View>
//       <TouchableOpacity
//         style={{ ...styles.sendCode, backgroundColor: 'crimson' }}
//         onPress={confirmCode}
//       >
//         <Text style={styles.buttonText}>Verify OTP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Otp2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     rowGap: scale(15),        
//     backgroundColor:'#11111190'
// },
// header:{
// width:'100%',
// paddingLeft:'10%',
// gap:scale(10),
// marginBottom: verticalScale(30),
// width: scale(335),
// height: verticalScale(30),
// },
// headertext:{
// color:'#f9f9f9',
// fontSize:moderateScale(18),
// fontWeight:'600',
// letterSpacing:moderateScale(0.5),
// },
// headersubtext:{
// color:'#f9f9f9',
// fontSize:moderateScale(12),
// fontWeight:'400',
// letterSpacing:moderateScale(0.5),
// },
//   container2: {
//     marginTop:scale(10),
//     flexDirection: 'row', // This ensures they appear in a straight line
//     alignItems: 'center', // Align items vertically
//   },
//   errorText: {
//     // color: 'red',
//     // marginTop: 5,
//     textAlign: 'center',
//     color: '#f9f9f9',
//     justifyContent:'space-between',
//     marginVertical: verticalScale(5),
//     fontSize: moderateScale(12),
//     textAlign: 'left',
//     paddingLeft:scale(5),
//     backgroundColor:'#B70404',
//     // marginLeft: scale(60), // Adjust the left margin for error text
//     borderWidth:1,
//     borderColor:'white'
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   contain: {
//     height:verticalScale(250),
//     width:moderateScale(370),
//     alignItems:'center',
//     marginTop:verticalScale(20),
//     marginBottom:verticalScale(40),
//     justifyContent:'space-between',
//     // padding:10,
//     // gap: scale(15),
//     // backgroundColor:'#f9f9f9',
//     // width:scale(250),
//     // color:'#f9f9f9',
//     // backgroundColor:'white',
//     },
//   sendCode: {
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor: '#9b59b6',
//     borderRadius: scale(4),
//     height:verticalScale(35),
//     width:moderateScale(250),
//     marginTop:verticalScale(5),
//     marginBottom:verticalScale(40)
//   },
//   buttonText: {
//     textAlign: "center",
//     color: '#fff',
//     fontWeight: '600',
//     fontSize:moderateScale(14),
//     letterSpacing: moderateScale(0.5),
//     textTransform:'uppercase'
//   },
//   texInput: {
//     paddingVertical: 0,
//     backgroundColor:'transparent',
//     color:'#f9f9f9'
//   },
//   otpInputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: verticalScale(10),
//   },
//   otpInputField: {
//     flex: 1,
//     height: moderateScale(40),
//     borderBottomWidth: 1,
//     borderBottomColor: 'green',
//     fontSize: moderateScale(20),
//     letterSpacing: moderateScale(20),
//     textAlign: 'center',
//     color: 'green',
//   },
//   otpInputHighlight: {
//     borderBottomColor: 'green',
//   },
//   });


