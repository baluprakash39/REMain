import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons if not already imported


const Login = () => {


    const onSubmit = () => {
        // Add your onSubmit logic here
        // This function will be called when the "Submit" button is pressed
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons style={styles.icon} name="arrow-back-outline" size={20} color="white" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: 'https://wallpapercave.com/wp/wp4347432.jpg' }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.headerText}>We have sent you a verification code to your mobile number</Text>

        {/* Add your OTP input component here */}

        <Text style={styles.resendText}>
          Didn't get OTP <Text style={styles.resendLink}>click here to resend</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  icon: {
    color: 'white',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
  },
  textContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpInput: {
    // Style your OTP input component here
    // You can use TextInput or a library like react-native-otp-inputs
  },
  resendText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  resendLink: {
    color: 'blue',
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    width: '70%',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Login;
