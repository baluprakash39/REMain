
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import OtpInputs from 'rn-custom-otp';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/compat/app";



const Otp2 = ({ route }) => {
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
          <Text style={styles.headertext}>Enter OTP</Text>
          <Text style={styles.headersubtext}>6 digit OTP sent to your number</Text>
        </View>
        <View style={styles.contain}>
          <OtpInputs
            numberOfInputs={6}
            inputStyles={styles.otpInputField}
            handleChange={(code) => {
              setCode(code);
            }}
            keyboardType="number-pad"
            inputContainerStyles={{ backgroundColor: 'transparent', height: verticalScale(40), width: moderateScale(40), marginHorizontal: moderateScale(10), borderColor: 'transparent', borderWidth: 0, marginTop: verticalScale(80) }}
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
    // rowGap: scale(15),        
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
    height:verticalScale(250),
    width:moderateScale(370),
    alignItems:'center',
    marginTop:verticalScale(20),
    marginBottom:verticalScale(40),
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
    // otp: {
    //   marginBottom: verticalScale(14),
    //   padding: scale(10),
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
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
    borderBottomWidth: verticalScale(2),
    borderBottomColor: 'white',
    fontSize: moderateScale(20),
    letterSpacing: moderateScale(0.5),
    textAlign: 'center',
    color: 'white',
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
  });

// import React, { useState , useRef} from 'react';
// import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
// import OtpInputs from 'rn-custom-otp';
// import { useNavigation } from '@react-navigation/native';
// import { scale, moderateScale, verticalScale} from './scaling';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import firebase from "firebase/compat/app";
// import OtpAutoComplete from 'react-native-otp-autocomplete';

// // Your other imports

// const Otp2 = ({ route }) => {
//   const { deviceId } = route.params;
//   const { verificationId } = route.params;
//   const [code, setCode] = useState('');
//   const [codeError, setCodeError] = useState('');
//   const navigation = useNavigation();

//   const confirmCode = async () => {
//     if (!code) {
//       setCodeError('Please enter a 6-digit OTP.');
//       return;
//     }
    
//     if (code.length !== 6) {
//       setCodeError('Code must be exactly 6 digits.');
//       return;
//     }

//     // Retrieve the verificationId from AsyncStorage
//     const verificationId = await AsyncStorage.getItem('verificationId');

//     // Perform OTP verification with the verificationId
//     const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

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

//   const showAlert = () => {
//     // Define the value you want to pass
//     const randomValue = Math.random();
//     console.log("r", randomValue);
//     route.params.onLoginClick(randomValue);

//     Alert.alert(
//       'Success',
//       'You are logged in as Admin',
//       [
//         {
//           text: 'OK',
//           onPress: () => {
//             navigation.navigate('Inventory', { deviceId, verificationId });
//           }
//         }
//       ]
//     );
//   }

//   return (
//     <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headertext}>Enter OTP</Text>
//           <Text style={styles.headersubtext}>6 digit OTP sent to your number</Text>
//         </View>
//         <View style={styles.contain}>
//         <OtpAutoComplete
//   code={code} // Use `code` instead of `value`
//   onCodeChanged={(text) => setCode(text)} // Use `onCodeChanged` instead of `onChangeText`
//   style={styles.otpInputField}
// />
//           {codeError && <Text style={styles.errorText}>{codeError}</Text>}
//         </View>
//         <TouchableOpacity
//           style={{ ...styles.sendCode, backgroundColor: 'crimson' }}
//           onPress={confirmCode}
//         >
//           <Text style={styles.buttonText}>Verify OTP</Text>
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








