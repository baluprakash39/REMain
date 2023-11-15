import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView, ImageBackground, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Dropdown } from 'react-native-element-dropdown';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';
import cyclicUrl from '../cylic/Cyclic';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
  },
  lng: 'en',
  fallbackLng: 'en',
});

const AddVehicle = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [sections, setSections] = useState([]);
  const [value, setValue] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [vehicleName, setVehicleName] = useState('null');
  const [modelName, setModelName] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [color, setColor] = useState('');
  const [exShowroomPrice, setExShowroomPrice] = useState('');
  const [roadTax, setRoadTax] = useState('');
  const [registration, setRegistration] = useState('');

  const [brandNameError, setBrandNameError] = useState('');
  const [vehicleNameError, setVehicleNameError] = useState('');
  const [modelNameError, setModelNameError] = useState('');
  const [engineCCError, setEngineCCError] = useState('');
  const [colorError, setColorError] = useState('');
  const [exShowroomPriceError, setExShowroomPriceError] = useState('');
  const [roadTaxError, setRoadTaxError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [sectionError, setSectionError] = useState('');

  useEffect(() => {
    // Fetch sections when the component mounts
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing
        console.error('Token is missing. Please log in or fetch the token.');
        return;
      }
  
      const response = await fetch(`${cyclicUrl}/bikes/bikes`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data && data.sections && data.sections.length > 0) {
        // Update the sections state with the fetched data
        setSections(data.sections);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  
  

  const addVehicle = async () => {
    // Reset error messages
    setBrandNameError('');
    // setVehicleNameError('');
    setModelNameError('');
    setEngineCCError('');
    setColorError('');
    setExShowroomPriceError('');
    setRoadTaxError('');
    setRegistrationError('');
    setSectionError('');
  
    // Check for errors
    let hasErrors = false;
  
    if (!value) {
      // Handle section not selected
      setSectionError('Section is required');
      hasErrors = true;
    }
  
    // if (!vehicleName) {
    //   setVehicleNameError('Vehicle Name is required');
    //   hasErrors = true;
    // }
  
    if (!modelName) {
      setModelNameError('Model Name is required');
      hasErrors = true;
    }
  
    if (!engineCC) {
      setEngineCCError('Engine CC is required');
      hasErrors = true;
    }
  
    if (!color) {
      setColorError('Color is required');
      hasErrors = true;
    }
  
    if (!exShowroomPrice) {
      setExShowroomPriceError('ExShowroom Price is required');
      hasErrors = true;
    }
  
    if (!roadTax) {
      setRoadTaxError('Road Tax is required');
      hasErrors = true;
    }
  
    if (!registration) {
      setRegistrationError('Registration is required');
      hasErrors = true;
    }
  
    if (!hasErrors) {
      try {
        // Retrieve the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('token');
  
        if (!token) {
          // Handle the case where the token is missing
          console.error('Token is missing. Please log in or fetch the token.');
          return;
        }
  
        // All required fields are filled, so you can send the POST request here
        const url = `${cyclicUrl}/formdetails/uploadbikes`;
  
        const userData = {
          // vehiclename: vehicleName,
          model: modelName,
          EngineCC: engineCC,
          vehiclecolor: color,
          exShowroomPrice: exShowroomPrice,
          registration: registration,
          roadtax: roadTax,
          section: value,
        };
  
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add the token to the headers
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            // Clear the input fields by updating state variables
            // setVehicleName('');
            setModelName('');
            setEngineCC('');
            setColor('');
            setExShowroomPrice('');
            setRoadTax('');
            setRegistration('');
            setSectionError('');
            setValue(null);
            navigation.navigate('Inventory');
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle the error here
          });
      } catch (error) {
        console.error('Error:', error);
        // Handle errors related to AsyncStorage
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
               <View style={{backgroundColor:'#1f1f1f',borderBottomColor:'#f9f9f9', borderBottomWidth:verticalScale(1)}}>
                  <View style={styles.header}>
                      <View style={{alignContent: 'center' }}>
                        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                          <MaterialIcons name="arrow-back" size={moderateScale(20)} color="#F9F9F9" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center',  height:verticalScale(25)}}>
                      <Text style={styles.title}>Add Vehicle</Text>
                    </View>
                    <View></View>
                  </View>
                  <View style={styles.line}></View>
                </View>
        </View>
        <ScrollView>
        <View>
        <View style={{ flexDirection: 'column', marginTop: verticalScale(10),marginHorizontal:moderateScale(10)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.subtitle}>Vehicle type</Text>

            <View style={{ flex: 1, backgroundColor: '#CBCBCA', borderRadius: scale(2) }}>
            <Dropdown
  style={styles.dropdown}
  placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle}
  itemTextStyle={{ color: '#111111' }}
  dropdownTextStyle={{ color: '#111111', backgroundColor: 'red' }}
  inputSearchStyle={styles.inputSearchStyle}
  data={dealers.map(dealer => ({ label: dealer, value: dealer }))}
  search
  maxHeight={300}
  labelField="label"
  valueField="value"
  placeholder="Select Company"
  searchPlaceholder="Search..."
  value={selectedCompanyInfo}
  onChangeText={(item) => {
    setSelectedCompanyInfo(item);
    
  }}
/>

            </View>

          </View>
          <Text style={styles.errorText}>{sectionError}</Text>


          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={styles.subtitle}>Model Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Name/Number"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              value={modelName}
              onChangeText={(text) => {
                setModelName(text);
                setModelNameError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{modelNameError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={styles.subtitle}>Engine CC</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine CC"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              value={engineCC}
              keyboardType='numeric'
              onChangeText={(text) => {
                setEngineCC(text);
                setEngineCCError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{engineCCError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.subtitle}>Color</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Color"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              value={color}
              onChangeText={(text) => {
                setColor(text);
                setColorError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{colorError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.subtitle}>Ex-Showroom Price</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Value"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              value={exShowroomPrice}
              keyboardType='numeric'
              onChangeText={(text) => {
                setExShowroomPrice(text);
                setExShowroomPriceError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{exShowroomPriceError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subtitle}>Road tax</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Value"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              keyboardType='numeric'
              value={roadTax}
              onChangeText={(text) => {
                setRoadTax(text);
                setRoadTaxError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{roadTaxError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subtitle}>Registration(fixed)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Value"
              selectionColor="red"
              placeholderTextColor="#303030"
              backgroundColor="#CBCBCA"
              value={registration}
              keyboardType='numeric'
              onChangeText={(text) => {
                setRegistration(text);
                setRegistrationError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{registrationError}</Text>

          
        </View>
        </View>
        </ScrollView>
        <View style={styles.bottombuttons}>
          <TouchableOpacity
              style={styles.button}
              onPress={addVehicle} // Add the addVehicle function to the onPress handler
            >
                <View style={{ flexDirection: 'row', alignItems: 'center',gap: scale(20)}}>
                  <FontAwesome6 name='motorcycle' size={scale(15)} color={'#111111'} />
                  <Text style={styles.buttonText}>Add Vehicle</Text>
                </View>
            </TouchableOpacity>
        </View>



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
    flex: 1,
    backgroundColor:'#11111199',
    justifyContent:'space-between'
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop:verticalScale(10),
    marginBottom: verticalScale(10),
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
    fontWeight: 'semibold',
    textAlign: 'center',
    letterSpacing: moderateScale(0.5),
  },
  dropdown: {
    flex:1,
    height:verticalScale(40),
    color:'#303030',
    borderRadius:moderateScale(2),
    backgroundColor: '#CBCBCA',
    justifyContent: 'center',
    paddingLeft: moderateScale(5),
  },
  subtitle:{ 
    width: moderateScale(140),
    marginRight: moderateScale(5),
    color: '#F9F9F9',
    fontSize: scale(14),
    fontWeight: '400',
    letterSpacing: moderateScale(0.2),
  },
  placeholderStyle:{
    color:'#111111',
    fontSize: moderateScale(12),
    fontWeight:'500',
  },
  selectedTextStyle:{
    color:'#111111',
  },
  inputSearchStyle:{
    color:'#111111',
    borderRadius:moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight:'500',
  },
  inputField: {
    flex: 1,
    height: verticalScale(40),
    backgroundColor: '#F9F9F9',
    borderRadius: scale(2),
    paddingLeft: moderateScale(5),
    color: 'black',
    fontSize: moderateScale(12),
    fontWeight:'500',
    letterSpacing: moderateScale(0.2),
  },
  bottombuttons:{ 
    alignItems:'center',
    width:'100%', 
    height:verticalScale(40), 
    marginVertical: verticalScale(20),
  },
  button: {
    backgroundColor:'#f9f9f9',
    borderWidth: scale(1),
    borderRadius: scale(2),
    width:'70%',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: '#111111',
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign:'center',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: moderateScale(8),
    textAlign: 'center',
    marginBottom:verticalScale(7),
    letterSpacing: moderateScale(0.2),
    fontWeight: '500'
  },
});
export default AddVehicle;