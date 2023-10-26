import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'; // Import Image component
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info';
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
function Getstarted() {
 
const navigation = useNavigation()
const {t} = useTranslation();

const handlegetstart = async() => {

  let uniqueId=await DeviceInfo.getUniqueId();
  console.log("i",uniqueId)
  navigation.navigate('Otp',{deviceId:uniqueId})
}
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#000000', '#000000']} // Change colors to black
        style={styles.linearGradient}
      > */}

        <Swiper style={styles.wrapper} showsButtons={false}
          autoplay={true} // Enable auto-play
          autoplayTimeout={4} //  time interval (in seconds) between slides
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          
          <View style={styles.slide}>
            <View >
                <Text style={styles.headings}>{t('gsheader1')}</Text>
            </View>
              <Image
              source={require('../assets/Re2.jpg')}
              style={styles.images}
              resizeMode="cover"
            />
            <View >
        
            <Text style={styles.subtext}>{t('getstart1')}</Text>
            </View>
            </View>
            <View style={styles.slide}>
            <View >
                <Text style={styles.headings}>{t('gsheader2')}</Text>
            </View>
            <Image
              source={require('../assets/Re1.jpg')}
              style={styles.images}
              resizeMode="cover"
            />
            <Text style={styles.subtext}>{t('getstart2')}</Text>
          </View>
          <View style={styles.slide}>
          <View >
                <Text style={styles.headings}>{t('gsheader3')}</Text>
            </View>
            <Image
              source={require('../assets/Re.jpg')}
              style={styles.image3}
              resizeMode="cover"
            />
           <Text style={styles.subtext1}>{t('getstart3')}</Text>
          </View>
        </Swiper>
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlegetstart}
          >
            <Text style={styles.buttonText}>{t('gsbottontext')}</Text>
          </TouchableOpacity>
        </View>
      {/* </LinearGradient> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#111111'
  },
  linearGradient: {
      height: '100%',
  },
  wrapper: {
    // marginTop:scale(30),
    // height:scale(300),
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderWidth:1,
    // borderColor:'red'
  },
  dot: {
    backgroundColor: 'gray',
    width: moderateScale(10),
    height: verticalScale(2),
    borderRadius: scale(4),
    marginHorizontal: moderateScale(3),
    marginTop: verticalScale(10), 
  },
  activeDot: {
    backgroundColor: 'red', // Active dot color
    width: moderateScale(20),
    height: verticalScale(2),
    borderRadius: scale(4),
    marginHorizontal: moderateScale(3),
    marginTop: verticalScale(10), 
  },
  slide: {
    marginTop:scale(30),
    rowGap: scale(50),
    flex:1,
    height:verticalScale(200),
    alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: scale(20),
  },
  images: {
    width: moderateScale(200),
    height: verticalScale(200),
    borderRadius:scale(12)
  },
  headings:{
    fontSize:moderateScale(20),
    color:'white',
    letterSpacing:0.5,
  },
  image3: {
    width: moderateScale(200),
    height: verticalScale(180),
    borderRadius:scale(12)
  },
  subtext:{
    width:moderateScale(330),
    fontSize:moderateScale(14),
    color:'white', 
    fontWeight:'400', 
    letterSpacing:0.2,
  },
  subtext1:{
    width:moderateScale(330),
    fontSize:moderateScale(12),
    color:'white', 
    fontWeight:'400', 
    letterSpacing:0.3,
  },
  buttonContainer:{
    alignItems:'center',
    padding: scale(10),
    marginBottom:verticalScale(50),
  },
  button: {
    backgroundColor: 'white',
    justifyContent:'center',
    borderRadius: scale(4),
    height: verticalScale(30),
    width: moderateScale(250),
    shadowColor: '#000000',
  },
  buttonText: {
    color: 'black',
    fontSize: moderateScale(16),
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight: 'bold',
    fontFamily: 'Outfit-Regular'
  },

});

export default Getstarted;