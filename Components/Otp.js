import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import PhoneInput from 'react-native-phone-number-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initReactI18next, useTranslation} from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import cyclicUrl from "../cylic/Cyclic";
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

const Otp = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [deviceId, setDeviceId] = useState();

  const getPhoneNumber = () => {
    // Alert.alert(phoneNumber)
  }
  useEffect(() => {
    getDeviceId()

  }, []);

  const getDeviceId = async () => {
    let uniqueId = await DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
    console.log("i", uniqueId);
  }
  console.log('deviceId', deviceId);

  const sendVerification = async () => {
   
  
    setPhoneNumberError('');
  
    const number = phoneNumber.replace('+91', '');
    const serverUrl = `${cyclicUrl}/registerPhoneNumber/checkPhoneNumberAndDevice`;

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

      if (data.success === false && data.status === 'not allowed') {
        Alert.alert('Admin not Accepted');
        return;
      }

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
              console.log("v", verificationId);

              // Clear the phone number input field
             // Use 'await' to ensure the state is updated
  
              // Set AsyncStorage values
              await AsyncStorage.setItem('token', data.token);
              await AsyncStorage.setItem('refreshToken', data.refreshToken);
              await AsyncStorage.setItem('isloggedIn', 'true');
              await AsyncStorage.setItem("deviceId", deviceId);
              await AsyncStorage.setItem("verificationId", verificationId);
              await AsyncStorage.setItem('phoneNo', number);
  
              // Navigate to the OTP verification screen
              navigation.navigate('Otp2', { deviceId, verificationId });
              // setIsOtpSent(true);
              setPhoneNumber(''); 
              setError('');
            } catch (error) {
              console.error('Error during phone number verification:', error);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendVerification = () => {
    if (!phoneNumber) {
      setPhoneNumberError('Please enter a phone number.');
    } else {
      sendVerification();
    }
  };
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
        />
        <View style={styles.contain}>
          <PhoneInput
            ref={phoneInput}
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
                    <TouchableOpacity style={{ ...styles.sendVerification}} onPress={() => { handleSendVerification(); getPhoneNumber() }}>
          <Text style={styles.buttonText}>{t('otpbtntext')}</Text>
        </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    justifyContent:'center',
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
    backgroundColor:'#11111190',
},
header:{
    paddingLeft:moderateScale(30),
    gap:scale(10),
    marginTop:verticalScale(100),
    marginBottom: verticalScale(30),
    width: '100%',
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
    width: '100%',
    color:'#111111',
},
phoneContainer: {
    marginHorizontal:moderateScale(30),
    marginTop:verticalScale(30),
    height: verticalScale(50),
    backgroundColor:'white',
    color:'#111111',
    borderRadius:moderateScale(6),
},
sendbutton:{
    width: '100%',
    alignItems:'center',
    marginTop:verticalScale(70),
},
sendVerification: {
    paddingHorizontal: moderateScale(100),
    height:verticalScale(35),
    backgroundColor: '#f9f9f9',
    borderRadius: scale(4),
    alignItems:'center',
    justifyContent:'center',
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