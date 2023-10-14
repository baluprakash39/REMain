import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'; // Import Image component
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info';
function Getstarted() {
 
const navigation = useNavigation()


const handlegetstart = async() => {

  let uniqueId=await DeviceInfo.getUniqueId();
  console.log("i",uniqueId)
  navigation.navigate('Otp',{deviceId:uniqueId})
}
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#000000']} // Change colors to black
        style={styles.linearGradient}
      >

        <Swiper style={styles.wrapper} showsButtons={false}
          autoplay={true} // Enable auto-play
          autoplayTimeout={3} //  time interval (in seconds) between slides
        >
          
          <View style={styles.slide}>
            <View >
                <Text style={styles.headings}>Welcome to the Vehicle Guide App!</Text>
            </View>
              <Image
              source={require('../assets/Re2.jpeg')}
              style={styles.images}
              resizeMode="cover"
            />
            <View >
        
            <Text style={styles.subtext}>This app will streamline your experience in all aspects related to vehicles. You can browse through a variety of vehicles and models, along with their pricing details.</Text>
            </View>
            </View>
            <View style={styles.slide}>
            <View >
                <Text style={styles.headings}>One - Stop Shop for Vehicle Information</Text>
            </View>
            <Image
              source={require('../assets/Re1.jpeg')}
              style={styles.images}
              resizeMode="cover"
            />
            <Text style={styles.subtext}>With our comprehensive database, you can find information on any make or model of vehicle and pricing details.</Text>
          </View>
          <View style={styles.slide}>
          <View >
                <Text style={styles.headings}>Easily Share Vehicle Info & Prices</Text>
            </View>
            <Image
              source={require('../assets/Re.jpeg')}
              style={styles.image3}
              resizeMode="cover"
            />
           <Text style={styles.subtext}>You can effortlessly exchange detailed information about vehicles, including specifications and pricing details. This user-friendly feature simplifies the process, making it convenient for users to access and share essential information about various vehicles quickly and efficiently.</Text>
          </View>
        </Swiper>
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlegetstart}
          >
            <Text style={styles.buttonText}>Let's start</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>

  );
}

const styles = StyleSheet.create({
    buttonContainer: {
       
        justifyContent: 'center',
        alignItems: 'center',
      },
  container: {
    justifyContent: 'center'
  },

  linearGradient: {
    height: '100%'

  },
  buttonText: {
    color: 'black',
    fontSize: moderateScale(16),
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight: 'bold',
    fontFamily: 'Outfit-Regular'
  },

  wrapper: {},
  slide: {
    marginTop:scale(30),
    height:scale(300),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  images: {
    width: scale(200),
    height: scale(200),
    borderRadius:scale(12)
  },
headings:{
    fontSize:moderateScale(20),
    color:'white',
    letterSpacing:0.5,
},
  image3: {
    width: scale(200),
    height: scale(150),
    borderRadius:scale(12)
  },
  subtext:{
    width:scale(300),
    fontSize:moderateScale(14),
    color:'white', 
    fontWeight:'400', 
    letterSpacing:0.2,
},
  button: {
    backgroundColor: 'white',
    justifyContent:'center',
    borderRadius: scale(10),
    height: scale(30),
    width: scale(200),
    shadowColor: '#000000',
    marginBottom:scale(50),
  },

});

export default Getstarted;