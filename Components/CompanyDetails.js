
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
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
const CompanyDetails = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    companyname: '',
    companyaddress: '',
    streetname: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    contactnumber: '',
    emailid: '',
    website: '',
    gstin: '', 
  });
  

  const [formErrors, setFormErrors] = useState({
    companyname: '',
    companyaddress: '',
    streetname: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    contactnumber: '',
    emailid: '',
    website: '',
    gstin:''
  });

  console.log(formData)

  const handleInputChange = (field, text) => {
    setFormData({ ...formData, [field]: text });
    setFormErrors({ ...formErrors, [field]: '' });
  };
  

  const handleSubmit = async () => {
    let formIsValid = true;
    const newFormErrors = { ...formErrors };

    // Validation logic for each field
    if (formData.companyname === '') {
      newFormErrors.companyname = 'Company Name is required';
      formIsValid = false;
    }

    if (formData.companyaddress === '') {
      newFormErrors.companyaddress = 'Company Address is required';
      formIsValid = false;
    }

    if (formData.streetname === '') {
      newFormErrors.streetname = 'Street Name is required';
      formIsValid = false;
    }

    if (formData.city === '') {
      newFormErrors.city = 'City is required';
      formIsValid = false;
    }

    if (formData.pincode === '') {
      newFormErrors.pincode = 'Pincode is required';
      formIsValid = false;
    }

    if (formData.state === '') {
      newFormErrors.state = 'State is required';
      formIsValid = false;
    }

    if (formData.country === '') {
      newFormErrors.country = 'Country is required';
      formIsValid = false;
    }

    if (formData.contactnumber === '') {
      newFormErrors.contactnumber = 'Contact Number is required';
      formIsValid = false;
    }

    if (formData.emailid === '') {
      newFormErrors.emailid = 'Email is required';
      formIsValid = false;
    }

    if (formData.website === '') {
      newFormErrors.website = 'Website is required';
      formIsValid = false;
    }
    
  if (formData.gstin === '') {
  newFormErrors.gstin = 'GST Number is required';
  formIsValid = false;
  }

    if (formIsValid) {
      try {
        const token = await AsyncStorage.getItem('token');
        // Send a POST request to your server's /dealerdetails endpoint
        const response = await fetch('https://vast-newt-crown.cyclic.app/dealerdetails/dealerdetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
console.log('response',response)
        if (response.ok) {
          // If the request was successful, you can handle the response here
          const data = await response.json();
          console.log('Response from server:', data);
        } else {
          // Handle errors here
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setFormErrors(newFormErrors);
    }
  };

  const handleBackPress = () => {
    // Navigate back to the Inventory screen
    navigation.navigate('Inventory');
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{alignContent: 'center' }}>
              <TouchableOpacity onPress={() => { handleBackPress(); navigation.navigate('Inventory'); }} style={styles.backButton}>
                <MaterialIcons name='arrow-back' size={moderateScale(20)} color={'#F9F9F9'} />
              </TouchableOpacity>
            </View>
          
          <View style={{ justifyContent: 'center', width:scale(315), height:scale(20)}}>
          <Text style={styles.title}>Company Details</Text>
          </View>
          </View>
          <View style={styles.line}></View>

          {/* Company Name */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 , marginTop: 10 }}>
            <Text style={styles.subtitle}>Company Name</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your Company name"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.companyname}
              onChangeText={(text) => handleInputChange('companyname', text)}
            />
          </View>
          {formErrors.companyname ? <Text style={styles.errorText}>{formErrors.companyname}</Text> : null}

          {/* Company Address */}
          <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 10, marginBottom: 5 }}>Company Address</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Address1</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Address Name"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.companyaddress}
              onChangeText={(text) => handleInputChange('companyaddress', text)}
            />
          </View>
          {formErrors.companyaddress ? <Text style={styles.errorText}>{formErrors.companyaddress}</Text> : null}

          {/* Street Name */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Street Name</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Street Name"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.streetname}
              onChangeText={(text) => handleInputChange('streetname', text)}
            />
          </View>
          {formErrors.streetname ? <Text style={styles.errorText}>{formErrors.streetname}</Text> : null}

          {/* City */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>City</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter City Name"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.city}
              onChangeText={(text) => handleInputChange('city', text)}
            />
          </View>
          {formErrors.city ? <Text style={styles.errorText}>{formErrors.city}</Text> : null}

          {/* Pincode */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Pincode</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Pincode"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.pincode}
              onChangeText={(text) => handleInputChange('pincode', text)}
            />
          </View>
          {formErrors.pincode ? <Text style={styles.errorText}>{formErrors.pincode}</Text> : null}

          {/* State */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>State</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Statename"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.state}
              onChangeText={(text) => handleInputChange('state', text)}
            />
          </View>
          {formErrors.state ? <Text style={styles.errorText}>{formErrors.state}</Text> : null}

          {/* Country */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Country</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Country Name"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.country}
              onChangeText={(text) => handleInputChange('country', text)}
            />
          </View>
          {formErrors.country ? <Text style={styles.errorText}>{formErrors.country}</Text> : null}
         
         

          {/* Contact Details */}
          <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 15, marginBottom: 5 }}>Contact Details</Text>

          {/* GST */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
  <Text style={styles.subtitle}>GST</Text>
  <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
  <TextInput
  style={styles.inputField}
  placeholder="Enter GST Number"
  selectionColor="red"
  placeholderTextColor="#000000"
  backgroundColor="#CBCBCA"
  value={formData.gstin}
  onChangeText={(text) => handleInputChange('gstin', text)}
/>

         </View>
         {formErrors.gstin ? <Text style={styles.errorText}>{formErrors.gstin}</Text> : null}









          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Contact Number</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Contact Number"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.contactnumber}
              onChangeText={(text) => handleInputChange('contactnumber', text)}
            />
          </View>
          {formErrors.contactnumber ? <Text style={styles.errorText}>{formErrors.contactnumber}</Text> : null}



         



          {/* Email Id */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Email Id</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Email Id"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.emailid}
              onChangeText={(text) => handleInputChange('emailid', text)}
            />
          </View>
          {formErrors.emailid ? <Text style={styles.errorText}>{formErrors.emailid}</Text> : null}

          {/* Website */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={styles.subtitle}>Website</Text>
            <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Website"
              selectionColor="red"
              placeholderTextColor="#000000"
              backgroundColor="#CBCBCA"
              value={formData.website}
              onChangeText={(text) => handleInputChange('website', text)}
            />
          </View>
          {formErrors.website ? <Text style={styles.errorText}>{formErrors.website}</Text> : null}

          <View style={styles.bottombuttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                <FontAwesome6 name='address-card' size={20} color={'#f9f9f9'} />
                <Text style={styles.buttonText}>Add Details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: verticalScale(10),
    width: scale(335),
    height: verticalScale(30),
  },
  backButton:{
    alignItems: 'center',
    width:scale(20),
    height:verticalScale(20),
    justifyContent:'center',
  },
  title: {
    color: '#F9F9F9',
    fontSize: moderateScale(16),
    fontWeight: 'semibold',
    textAlign: 'center',
    letterSpacing: moderateScale(0.5),
  },
  line: {
    height: verticalScale(1),
    backgroundColor: 'white',
    width: scale(335),
  },
  subtitle: {
    width: 120,
    marginRight: 10,
    color: '#F9F9F9',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  inputField: {
    flex: 1,
    height: 40,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#111111',
  },
  bottombuttons: {
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 50,
  },
  button: {
    borderColor: '#f9f9f9',
    backgroundColor: '#453F3F',
    borderWidth: 1,
    borderRadius: 6,
    width: '70%',
    height: 50,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: 14,
    textAlign:'center'
  },
});

export default CompanyDetails;
