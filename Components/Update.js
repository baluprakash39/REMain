
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, moderateScale, verticalScale} from './scaling';
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

const Update = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [localdata, setLocalData] = useState({
    _id: '',
    section: '',
    vehiclename: '',
    model: '',
    EngineCC: '',
    vehiclecolor: '',
    exShowroomPrice: '',
    registration: '',
    roadtax: '',
  });

  const [sectionError, setSectionError] = useState('');
  const [vehicleNameError, setVehicleNameError] = useState('');
  const [modelNameError, setModelNameError] = useState('');
  const [engineCCError, setEngineCCError] = useState('');
  const [colorError, setColorError] = useState('');
  const [exShowroomPriceError, setExShowroomPriceError] = useState('');
  const [roadTaxError, setRoadTaxError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('Bikes');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setLocalData(parsedData);
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const updateVehicle = async () => {
    // Reset error messages
    setSectionError('');
    setVehicleNameError('');
    setModelNameError('');
    setEngineCCError('');
    setColorError('');
    setExShowroomPriceError('');
    setRoadTaxError('');
    setRegistrationError('');

    // Check for errors
    let hasErrors = false;

    if (!localdata.section) {
      setSectionError('Section is required');
      hasErrors = true;
    }

    if (!localdata.vehiclename) {
      setVehicleNameError('Vehicle Name is required');
      hasErrors = true;
    }

    if (!localdata.model) {
      setModelNameError('Model Name is required');
      hasErrors = true;
    }

    if (!localdata.EngineCC) {
      setEngineCCError('Engine CC is required');
      hasErrors = true;
    }

    if (!localdata.vehiclecolor) {
      setColorError('Color is required');
      hasErrors = true;
    }

    if (!localdata.exShowroomPrice) {
      setExShowroomPriceError('ExShowroom Price is required');
      hasErrors = true;
    }

    if (!localdata.roadtax) {
      setRoadTaxError('Road Tax is required');
      hasErrors = true;
    }

    if (!localdata.registration) {
      setRegistrationError('Registration is required');
      hasErrors = true;
    }

    // if (!hasErrors) {
    //   // All required fields are filled, you can send the PUT request here
    //   const id = localdata._id;
    //   console.log(id) // Replace with the ID you want to update
    //   const url = `https://vast-newt-crown.cyclic.app/formdetails/updatebikes/${id}`;

    //   fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(localdata), // Pass the updated data in the request body
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       // Handle the response here if needed
    //       // Navigate back to the 'Inventory' screen or any other screen as needed
    //       navigation.navigate('Inventory');
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //       // Handle the error here
    //     });
    // }
    
    if (!hasErrors) {
      const id = localdata._id;
      const url = `https://vast-newt-crown.cyclic.app/formdetails/updatebikes/${id}`;
  
      try {
        const token = await AsyncStorage.getItem('token');
  
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify(localdata),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Update the data in AsyncStorage
        await AsyncStorage.setItem('Bikes', JSON.stringify(localdata));
  
        // Update the state to reflect the changes
        setLocalData(localdata); // Update the local state with the updated data
  
        // Handle the response here if needed
        navigation.navigate('Inventory');
      } catch (error) {
        console.error('Error:', error);
        // Handle the error here
      }
    }
    
  };

  const handleBackPress = () => {
    // Navigate back to the Inventory screen
    navigation.navigate('Inventory');
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View>
          {/* <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
            <View style={{ alignContent: 'center'}}>
              <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                  <MaterialIcons name='arrow-back' size={moderateScale(20)} color={'#F9F9F9'}/>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', width:scale(315), height:scale(20)}}>
              <Text style={styles.headertitle}>Edit Vehicle</Text>
            </View>
            </View>
          <View style={styles.line}></View>
          </View> */}
                <View style={{backgroundColor:'#1f1f1f',borderBottomColor:'#f9f9f9', borderBottomWidth:verticalScale(1)}}>
                  <View style={styles.header}>
                      <View style={{alignContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Inventory')} style={styles.backButton}>
                          <MaterialIcons name="arrow-back" size={moderateScale(20)} color="#F9F9F9" />
                        </TouchableOpacity>
                       </View>
                      <View style={{ justifyContent: 'center',  height:verticalScale(25)}}>
                        <Text style={styles.title}>Edit Vehicle</Text>
                      </View>
                      <View></View>
                  </View>
                  <View style={styles.line}></View>
                </View>
        <View style={{ flexDirection: 'column', marginTop: verticalScale(20), paddingHorizontal:moderateScale(8) }}>
          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Section Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Section Name"
              placeholderTextColor='black'
              value={localdata.section}
              onChangeText={(text) => setLocalData({ ...localdata, section: text })}
            />
          </View>
          <Text style={styles.errorText}>{sectionError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Vehicle Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Vehicle Name"
              placeholderTextColor='black'
              value={localdata.vehiclename}
              onChangeText={(text) => setLocalData({ ...localdata, vehiclename: text })}
            />
          </View>
          <Text style={styles.errorText}>{vehicleNameError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Model Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Model Name"
              placeholderTextColor='black'
              value={localdata.model}
              onChangeText={(text) => setLocalData({ ...localdata, model: text })}
            />
          </View>
          <Text style={styles.errorText}>{modelNameError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Engine CC</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine CC"
              placeholderTextColor='black'
              value={localdata.EngineCC}
              onChangeText={(text) => setLocalData({ ...localdata, EngineCC: text })}
            />
          </View>
          <Text style={styles.errorText}>{engineCCError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Color</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Color"
              placeholderTextColor='black'
              value={localdata.vehiclecolor}
              onChangeText={(text) => setLocalData({ ...localdata, vehiclecolor: text })}
            />
          </View>
          <Text style={styles.errorText}>{colorError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>ExShowroom Price</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter ExShowroom price"
              placeholderTextColor='black'
              value={localdata.exShowroomPrice}
              onChangeText={(text) => setLocalData({ ...localdata, exShowroomPrice: text })}
            />
          </View>
          <Text style={styles.errorText}>{exShowroomPriceError}</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Road tax</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Roadtax"
              placeholderTextColor='black'
              value={localdata.roadtax}
              onChangeText={(text) => setLocalData({ ...localdata, roadtax: text })}
            />
          </View>
          <Text style={styles.errorText}>{roadTaxError}</Text>

          {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}> */}
          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Registartion(fixed)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Registration"
              placeholderTextColor='black'
              value={localdata.registration}
              onChangeText={(text) => setLocalData({ ...localdata, registration: text })}
            />
          </View>
          <Text style={styles.errorText}>{registrationError}</Text>
          </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={updateVehicle}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    // flex: 1,
    // backgroundColor:'#11111190',
    // padding: scale(8),
    // justifyContent:'space-between'
    flex: 1,
    // paddingTop:moderateScale(10),
    // paddingHorizontal: moderateScale(10),
    backgroundColor:'#11111199',
    justifyContent:'space-between'
  },
//   header:{
//     alignItems: 'center',
//     flexDirection: 'column',
//     marginBottom: verticalScale(10),
//     width: '100%',
//     height: verticalScale(30),
//   },
// backButton:{
//     alignItems: 'center',
//     width:moderateScale(20),
//     height:verticalScale(20),
//     justifyContent:'center',
//   },
// headertitle: {
//     color: '#F9F9F9',
//     fontSize: moderateScale(16),
//     fontWeight: 'semibold',
//     textAlign: 'center',
//     letterSpacing: moderateScale(0.5),
//   },
//   line: {
//     height: verticalScale(1),
//     backgroundColor: 'white',
//     width: '100%',
//   },
header:{
  alignItems: 'center',
  flexDirection: 'row',
  paddingTop:verticalScale(10),
  marginBottom: verticalScale(10),
  // borderBottomWidth:verticalScale(1),
  // borderBottomColor:'#f9f9f9',
  // width: moderateScale(335),
  height: verticalScale(35),
  justifyContent:'space-between',
},
backButton:{
  paddingLeft:moderateScale(10),
  alignItems: 'center',
  width:moderateScale(30),
  height:verticalScale(20),
  justifyContent:'center',
},
title: {
  color: '#F9F9F9',
  fontSize: scale(16),
  fontWeight: '600',
  textAlign: 'center',
  letterSpacing: moderateScale(0.5),
},
  subtitle: {
    width: moderateScale(120),
    marginRight: moderateScale(8),
    color: '#F9F9F9',
    fontSize: moderateScale(14),
    fontWeight: '400',
    letterSpacing: moderateScale(0.2),
  },
  fieldContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(2),
  },
  inputField: {
    flex: 1,
    height: verticalScale(30),
    backgroundColor: '#f9f9f9',
    borderRadius: scale(2),
    paddingLeft: moderateScale(10),
    color: '#000000',
    fontSize:moderateScale(12),
    fontWeight:'500'
  },
  button: {
    position:'relative',
    backgroundColor: '#f9f9f9',
    width: moderateScale(320),
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    borderRadius: scale(3),
    marginBottom: verticalScale(10),
    borderWidth:moderateScale(1),
    borderColor:'#f9f9f9'
  },
  buttonText: {
    color: '#111111',
    fontWeight: '600',
    fontSize:moderateScale(14)
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: moderateScale(10),
    textAlign: 'center',
    marginBottom: verticalScale(8),
  },
});

export default Update;
