
import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import PhoneInput from 'react-native-phone-number-input';

const Otp = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [error, setError] = useState('');
    const recaptchaVerifier = useRef(null);
    const phoneInput = useRef(null);
    const [codeError, setCodeError] = useState('');

    const allowedPhoneNumbers = ['+919515258896', '+919696966685', '+917200615948', '+919705143767', '+917992591090', '+919182624157'];

    const getPhoneNumber = () => {
        // Alert.alert(phoneNumber)
    }

    // const sendVerification = () => {
    //     if (!phoneNumber) {
    //         setError('Please enter a phone number.');
    //         return;
    //     }

    //     if (phoneNumber.replace(/[^0-9]/g, '').length !== 12) {
    //         setError('Phone number must have exactly 10 digits.');
    //         return;
    //     }

    //     if (phoneNumber !== defaultPhoneNumber) {
    //         console.log(phoneNumber)
    //         setError('You don\'t have access.');
    //         return;
    //     }

    //     const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //     phoneProvider
    //         .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    //         .then(setVerificationId)
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    //     setPhoneNumber('');
    //     setError('');
    // };
    const sendVerification = () => {
        if (!phoneNumber) {
          setError('Please enter a phone number.');
          return;
        }
      
        if (phoneNumber.replace(/[^0-9]/g, '').length !== 12) {
          setError('Phone number must have exactly 10 digits.');
          return;
        }
      
        if (!allowedPhoneNumbers.includes(phoneNumber)) {
          setError('You don\'t have access.');
          return;
        }
      
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
          .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
          .then(setVerificationId)
          .catch((error) => {
            setError(error.message);
          });
        setPhoneNumber('');
        setError('');
      };
    const showAlert = () => {
        Alert.alert(
            'Login to',
            'Login to Inventory',
            [{
                onPress: () => {
                    navigation.navigate('Inventory')
                }
            }]
        )
    }
    const confirmCode = () => {
        if (code.length !== 6) {
            setCodeError('Code must be exactly 6 digits.');
            return;
        }

        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCodeError('');
                showAlert();
            })
            .catch((error) => {
                setCodeError(error.message);
            });
    }

    return (
        <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Login</Text>
                <Text style={styles.headersubtext}>Enter mobile number for OTP</Text>
            </View>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                />

                <View style={styles.contain}>
                <PhoneInput
    ref={phoneInput}
    defaultValue={phoneNumber}
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

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>

                <TouchableOpacity style={{ ...styles.sendVerification, backgroundColor: 'crimson' }} onPress={() => { sendVerification(); getPhoneNumber() }}>
                    <Text style={styles.buttonText}>
                        Send OTP
                    </Text>
                </TouchableOpacity>

                <TextInput
                    placeholder="Confirm code"
                    onChangeText={setCode}
                    keyboardType='number-pad'
                    style={{ ...styles.textInput, backgroundColor: 'transparent' }}
                    placeholderTextColor="gray"
                />
                {codeError ? <Text style={styles.errorText}>{codeError}</Text> : error ? (
                    <Text style={styles.errorText}>{codeError}</Text>
                ) : null}

                <TouchableOpacity style={{ ...styles.sendCode, backgroundColor: 'crimson' }} onPress={confirmCode}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Otp;

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: scale(15)
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
    contain: {
    padding:10,
      gap: scale(15),
      backgroundColor:'#f9f9f9',
      width:scale(250),
      color:'#f9f9f9',
      backgroundColor:'white'
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
      textAlignVertical:'center',
      color: '#ffffff',
      height: 50,
      gap:15,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderColor: '#fff',
      backgroundColor:'#111111',
      fontSize:moderateScale(12)
    
    },
    phoneContainer: {
         width: scale(230),
      height: 50,
      backgroundColor:'white',
      borderBottomColor:'#f9f9f9',
      color:'#f9f9f9',
      
      },
    sendVerification: {
      padding: 10,
      backgroundColor: '#3498db',
      borderRadius: 10,
      width:200,
       
    },
    sendCode: {
      padding: 10,
      backgroundColor: '#9b59b6',
      borderRadius: 10,
      width:200,
        
    },
    buttonText: {
        textAlign: "center",
        color: '#fff',
        fontWeight: "600",
        
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
      backgroundColor:'transparent',
      color:'#f9f9f9'
    }
});
