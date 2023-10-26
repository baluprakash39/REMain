

// import React, { useState, useEffect } from 'react';
// import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
// import OtpInputs from 'rn-custom-otp';
// import { useNavigation } from '@react-navigation/native';
// import { scale, moderateScale, verticalScale} from './scaling';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { firebaseConfig } from "../config";
// import firebase from "firebase/compat/app";
// // import OtpAutocomplete from 'react-native-otp-autocomplete'; // Import the OTP Autocomplete library

// const Otp2 = ({ route }) => {
//   const { deviceId } = route.params;
//   const { verificationId } = route.params;
//   const [code, setCode] = useState('');
//   const [codeError, setCodeError] = useState('');
//   const navigation = useNavigation();


//   const showAlert = () => {
//     const clickedValue = "Login Button Clicked"; // Define the value you want to pass
//     //we need to pass this random number to App.tsx 
//     const randomValue = Math.random();
//     console.log("Clicked Value:", clickedValue);
//     console.log("r",randomValue)
//     route.params.onLoginClick(randomValue);
    
//     Alert.alert(
//       'Success',
//       'You are logged in as Admin',
//       [{
//         onPress: () => {
//           navigation.navigate('Inventory', { deviceId, verificationId});
          
//         }
//       }]
//     );
//   }

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
//         setCodeError('Invalid OTP. Please try again.');
//       });
//   };

//   return (
//     <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headertext}>Enter OTP</Text>
//         <Text style={styles.headersubtext}>6 digit OTP sent to your number</Text>
//       </View>
//       <View style={styles.contain}>
//         <OtpInputs
//           numberOfInputs={6}
//           // containerStyle={styles.textInputContainer}
//           // textInputStyle={styles.roundedTextInput}
//           // tintColor="blue"
//           // offTintColor="blue"
//           // errorMessage="Invalid OTP"
//           // focusedBorderColor={'red'}
//           // unFocusedBorderColor={'black'}
//           // style={{borderColor:'red'}}
//           // clearTextOnFocus={true}
//           // focusedBackgroundColor={'red'}
//           // unFocusedBackgroundColor={'black'}
//           selectionColor="red"
//           inputStyles={styles.otpInputField}
//           handleChange={(code) => {
//             setCode(code);
//           }}
//           keyboardType="number-pad"
//           inputContainerStyles={{backgroundColor:'transparent', height:verticalScale(40),width:moderateScale(40),marginHorizontal:moderateScale(10),borderColor:'transparent',borderWidth:0, marginTop:verticalScale(80)}} // Additional styles for the input container
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
//     </ImageBackground>
//   );
// };

// export default Otp2;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // rowGap: scale(15),        
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
//   // container2: {
//   //   marginTop:scale(10),
//   //   flexDirection: 'row', // This ensures they appear in a straight line
//   //   alignItems: 'center', // Align items vertically
//   // },
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
//     justifyContent:'center',
//     // borderWidth:1,
//     // borderColor:'white'
//     // padding:10,
//     // gap: scale(15),
//     // backgroundColor:'#f9f9f9',
//     // width:scale(250),
//     // color:'#f9f9f9',
//     // backgroundColor:'white',
//     },  
//     // otp: {
//     //   marginBottom: verticalScale(14),
//     //   padding: scale(10),
//     //   flexDirection: 'column',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     // },
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
//   // texInput: {
//   //   paddingVertical: 0,
//   //   backgroundColor:'transparent',
//   //   color:'#f9f9f9'
//   // },
//   // otpInputContainer: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   marginTop: verticalScale(10),
//   // },
//   otpInputField: {
//     // flex: 1,
//     // marginLeft:moderateScale(-11),
//     // marginRight:moderateScale(-11),
//     paddingBottom:0,
//     backgroundColor:'transparent',
//     height: verticalScale(40),
//     width:moderateScale(40),
//     borderBottomWidth: verticalScale(2),
//     borderBottomColor: 'white',
//     fontSize: moderateScale(20),
//     letterSpacing: moderateScale(0.5),
//     textAlign: 'center',
//     color: 'white',
//   },
//   // otpInputHighlight: {
//   //   borderBottomColor: 'green',
//   //   height:100,
//   //   width:100
//   // },
//   textInputContainer: {
//     marginBottom: verticalScale(8),
//     // borderColor: 'white', // Border color for the container
//     // borderWidth: 1, // Border width for the container
//     // borderRadius: scale(10), // Border radius for the container
//   },
//   roundedTextInput: {
//     // borderRadius: scale(50),
//     // borderWidth: scale(5),
//     // backgroundColor: 'white',
//     // width: moderateScale(50),
//   },
//   });


import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import OtpInputs from 'rn-custom-otp';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/compat/app";
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

// Your other imports

const Otp2 = ({ route }) => {
  const {t} = useTranslation();
  const { deviceId } = route.params;
  const { verificationId } = route.params;
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const navigation = useNavigation();

  const confirmCode = async () => {
    if (code.length !== 6) {
      setCodeError('Code must be exactly 6 digits.');
      return;
    }

    // Retrieve the verificationId from AsyncStorage
    const verificationId = await AsyncStorage.getItem('verificationId');

    // Perform OTP verification with the verificationId
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCodeError('');
        showAlert();
      })
      .catch((error) => {
        setCodeError('Invalid OTP. Please try again.');
      });
  };

  const showAlert = () => {
    // Define the value you want to pass
    const randomValue = Math.random();
    console.log("r", randomValue);
    route.params.onLoginClick(randomValue);

    Alert.alert(
      'Success',
      'You are logged in as Admin',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Inventory', { deviceId, verificationId });
          }
        }
      ]
    );
  }

  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{t('otp2header')}</Text>
          <Text style={styles.headersubtext}>{t('otp2hdsubtext')}</Text>
        </View>
        <View style={styles.contain}>
          <View style={styles.OTPcontainer}>
          <OtpInputs
            numberOfInputs={6}
            inputStyles={styles.otpInputField}
            handleChange={(code) => {
              setCode(code);
            }}
            keyboardType="number-pad"
            inputContainerStyles={{ backgroundColor: 'transparent', height: verticalScale(40), width: moderateScale(40), marginHorizontal: moderateScale(4), borderColor: 'transparent', borderWidth: 0 }}
          />
          {codeError && <Text style={styles.errorText}>{codeError}</Text>}
          </View>
        </View>
        <View style={styles.sendbutton}>
        <TouchableOpacity
          style={{ ...styles.sendVerification}}
          onPress={confirmCode}
        >
          <Text style={styles.buttonText}>{t('otp2btntext')}</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Otp2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // rowGap: scale(15),        
    backgroundColor:'#11111190'
},
header:{
// width:'100%',
// paddingLeft:'10%',
// gap:scale(10),
// marginBottom: verticalScale(30),
// width: scale(335),
// height: verticalScale(30),
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
  // container2: {
  //   marginTop:scale(10),
  //   flexDirection: 'row', // This ensures they appear in a straight line
  //   alignItems: 'center', // Align items vertically
  // },
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
    height:verticalScale(70),
    // width:moderateScale(370),
    width:'100%',
    alignItems:'center',
    marginTop:verticalScale(50),
    marginBottom:verticalScale(90),
    justifyContent:'center',
    // borderWidth:1,
    // borderColor:'white'
    // padding:10,
    // gap: scale(15),
    // backgroundColor:'#f9f9f9',
    // width:scale(250),
    // color:'#f9f9f9',
    // backgroundColor:'white',
    },
OTPcontainer:{
    height:verticalScale(70),
    backgroundColor:'#FBF6FA',
    borderRadius:scale(10),
    alignItems:'center',
    justifyContent:'center'
},
    // otp: {
    //   marginBottom: verticalScale(14),
    //   padding: scale(10),
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
  // sendCode: {
    // alignItems:'center',
    // justifyContent:'center',
    // backgroundColor: '#9b59b6',
    // // backgroundColor: 'crimson',
    // borderRadius: scale(4),
    // height:verticalScale(35),
    // // width:moderateScale(250),
    // width:'100%',
    // marginTop:verticalScale(5),
    // marginBottom:verticalScale(40)
  //   width: '100%',
  //   alignItems:'center',
  //   marginTop:verticalScale(20),
  // },
  // buttonText: {
  //   textAlign: "center",
  //   color: '#fff',
  //   fontWeight: '600',
  //   fontSize:moderateScale(14),
  //   letterSpacing: moderateScale(0.5),
  //   textTransform:'uppercase'
  // },
  // texInput: {
  //   paddingVertical: 0,
  //   backgroundColor:'transparent',
  //   color:'#f9f9f9'
  // },
  // otpInputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: verticalScale(10),
  // },
  otpInputField: {
    // flex: 1,
    // marginLeft:moderateScale(-11),
    // marginRight:moderateScale(-11),
    paddingBottom:0,
    backgroundColor:'transparent',
    height: verticalScale(40),
    width:moderateScale(40),
    // borderBottomWidth: verticalScale(2),
    // borderBottomColor: 'white',
    fontSize: moderateScale(20),
    fontWeight:'600',
    letterSpacing: moderateScale(0.5),
    textAlign: 'center',
    color: '#111111',
  },
  // otpInputHighlight: {
  //   borderBottomColor: 'green',
  //   height:100,
  //   width:100
  // },
  textInputContainer: {
    marginBottom: verticalScale(8),
    // borderColor: 'white', // Border color for the container
    // borderWidth: 1, // Border width for the container
    // borderRadius: scale(10), // Border radius for the container
  },
  roundedTextInput: {
    // borderRadius: scale(50),
    // borderWidth: scale(5),
    // backgroundColor: 'white',
    // width: moderateScale(50),
  },
  sendbutton:{
    // width: scale(335),
    width: '100%',
    alignItems:'center',
    marginTop:verticalScale(20),
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
  });




