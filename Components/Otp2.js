import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import OtpInputs from 'rn-custom-otp';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/compat/app";
import {initReactI18next, useTranslation} from 'react-i18next';
import { CommonActions } from '@react-navigation/native';
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


const Otp2 = ({ route }) => {
  const {t} = useTranslation();
  const { deviceId } = route.params;
  const { verificationId } = route.params;
  const{role}=route.params;
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const navigation = useNavigation();

  const confirmCode = async () => {
    if (code.length !== 6) {
      setCodeError('Code must be exactly 6 digits.');
      return;
    }

    // Retrieve the verificationId from AsyncStorage
    const verificationId = await AsyncStorage.getItem('verificationId');
    setVerifying(true);
    // Perform OTP verification with the verificationId
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCodeError('');
        random();
        setVerifying(false);
       
        
        //condition for naviagtion based on role should give below
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: role === 'superadmin' ? 'Superadminpage' : 'Home',
                params: { deviceId, verificationId, role },
              },
            ],
          })
        );
       
        
      })
      .catch((error) => {
        setCodeError('Invalid OTP. Please try again.');
        setVerifying(false);
      });
  };
  
  const random =()=>{
    const randomValue = Math.random();
    console.log("r", randomValue);
    route.params.onLoginClick(randomValue,role);
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
         <Text style={styles.buttonText}>{verifying ? 'Verifying...' : t('otp2btntext')}</Text>
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
    backgroundColor:'#11111190'
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
errorText: {
    textAlign: 'center',
    color: '#f9f9f9',
    justifyContent:'space-between',
    marginVertical: verticalScale(5),
    fontSize: moderateScale(12),
    textAlign: 'left',
    paddingLeft:scale(5),
    backgroundColor:'#B70404',
    borderWidth:1,
    borderColor:'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contain: {
    height:verticalScale(70),
    width:'100%',
    alignItems:'center',
    marginTop:verticalScale(50),
    marginBottom:verticalScale(90),
    justifyContent:'center',
    },
OTPcontainer:{
    height:verticalScale(70),
    backgroundColor:'#FBF6FA',
    borderRadius:scale(10),
    alignItems:'center',
    justifyContent:'center'
},
  otpInputField: {
    paddingBottom:0,
    backgroundColor:'transparent',
    height: verticalScale(40),
    width:moderateScale(40),
    fontSize: moderateScale(20),
    fontWeight:'600',
    letterSpacing: moderateScale(0.5),
    textAlign: 'center',
    color: '#111111',
  },
  textInputContainer: {
    marginBottom: verticalScale(8),
  },
  roundedTextInput: {
  },
  sendbutton:{
    width: '100%',
    alignItems:'center',
    marginTop:verticalScale(20),
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
  });