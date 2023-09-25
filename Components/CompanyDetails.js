
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const CompanyDetails = () => {
  const [CompanyName, setCompanyName] = useState('');
  const [CompanyAddress, setCompanyAddress] = useState('');
  const [StreetName, setStreetName] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [State, setState] = useState('');
  const [Country, setCountry] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [Website, setWebsite] = useState('');

  const [companyNameError, setCompanyNameError] = useState('');
  const [companyAddressError, setCompanyAddressError] = useState('');
  const [streetNameError, setStreetNameError] = useState('');
  const [cityError, setCityError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [stateError, setStateError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [emailIdError, setEmailIdError] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  const handleCompanyNameChange = (text) => {
    setCompanyName(text);
    setCompanyNameError(''); // Clear the error message
  };

  const handleCompanyAddressChange = (text) => {
    setCompanyAddress(text);
    setCompanyAddressError('');
  };

  const handleStreetNameChange = (text) => {
    setStreetName(text);
    setStreetNameError('');
  };

  const handleCityChange = (text) => {
    setCity(text);
    setCityError('');
  };

  const handlePincodeChange = (text) => {
    setPincode(text);
    setPincodeError('');
  };

  const handleStateChange = (text) => {
    setState(text);
    setStateError('');
  };

  const handleCountryChange = (text) => {
    setCountry(text);
    setCountryError('');
  };

  const handleContactNumberChange = (text) => {
    setContactNumber(text);
    setContactNumberError('');
  };

  const handleEmailIdChange = (text) => {
    setEmailId(text);
    setEmailIdError('');
  };

  const handleWebsiteChange = (text) => {
    setWebsite(text);
    setWebsiteError('');
  };

  const handleSubmit = () => {
    setCompanyNameError('');
    setCompanyAddressError('');
    setStreetNameError('');
    setCityError('');
    setPincodeError('');
    setStateError('');
    setCountryError('');
    setContactNumberError('');
    setEmailIdError('');
    setWebsiteError('');

    let isValid = true;

    if (!CompanyName) {
      setCompanyNameError('Company Name is required');
      isValid = false;
    }

    if (!CompanyAddress) {
      setCompanyAddressError('Company Address is required');
      isValid = false;
    }

    if (!StreetName) {
      setStreetNameError('Street Name is required');
      isValid = false;
    }

    if (!City) {
      setCityError('City is required');
      isValid = false;
    }

    if (!Pincode) {
      setPincodeError('Pincode is required');
      isValid = false;
    }

    if (!State) {
      setStateError('State is required');
      isValid = false;
    }

    if (!Country) {
      setCountryError('Country is required');
      isValid = false;
    }

    if (!ContactNumber) {
      setContactNumberError('Contact Number is required');
      isValid = false;
    }

    if (!EmailId) {
      setEmailIdError('Email Id is required');
      isValid = false;
    }

    if (!Website) {
      setWebsiteError('Website is required');
      isValid = false;
    }

    if (isValid) {
      // All required fields are filled, you can proceed with the form submission
      const url = 'https://dull-plum-woodpecker-veil.cyclic.cloud/dealerdetails/dealerdetails';

      const userData = {
        companyname: CompanyName,
        companyaddress: CompanyAddress,
        streetname: StreetName,
        city: City,
        pincode: Pincode,
        state: State,
        country: Country,
        contactnumber: ContactNumber,
        emailid: EmailId,
        website: Website,
        // You can add other fields as needed
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Convert to JSON string
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);

          // Optionally, you can reset the form fields here
          setCompanyName('');
          setCompanyAddress('');
          setStreetName('');
          setCity('');
          setPincode('');
          setState('');
          setCountry('');
          setContactNumber('');
          setEmailId('');
          setWebsite('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>CompanyDetails</Text>
          <View style={styles.line}></View>
          <View style={{ flexDirection: 'column', marginTop: 20 }}>
            {/* Company Name */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: 'white', fontSize: 18, fontWeight: '700' }}>Company Name</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Brand Name"
                placeholderTextColor="gray"
                value={CompanyName}
                onChangeText={handleCompanyNameChange}
              />
            </View>
            {companyNameError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{companyNameError}</Text> : null}

            {/* Company Address */}
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 20, marginTop: 20, fontWeight: '700' }}>Company Address</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>Address1</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Address Name"
                placeholderTextColor="gray"
                value={CompanyAddress}
                onChangeText={handleCompanyAddressChange}
              />
            </View>
            {companyAddressError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{companyAddressError}</Text> : null}

            {/* Street Name */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>Street Name</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Street Name"
                placeholderTextColor="gray"
                value={StreetName}
                onChangeText={handleStreetNameChange}
              />
            </View>
            {streetNameError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{streetNameError}</Text> : null}

            {/* City */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>City</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter City Name"
                placeholderTextColor="gray"
                value={City}
                onChangeText={handleCityChange}
              />
            </View>
            {cityError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{cityError}</Text> : null}

            {/* Pincode */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>Pincode</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Pincode"
                placeholderTextColor="gray"
                value={Pincode}
                onChangeText={handlePincodeChange}
              />
            </View>
            {pincodeError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{pincodeError}</Text> : null}

            {/* State */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>State</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Statename"
                placeholderTextColor="gray"
                value={State}
                onChangeText={handleStateChange}
              />
            </View>
            {stateError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{stateError}</Text> : null}

            {/* Country */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>Country</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Country Name"
                placeholderTextColor="gray"
                value={Country}
                onChangeText={handleCountryChange}
              />
            </View>
            {countryError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{countryError}</Text> : null}

            {/* Contact Details */}
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 20, marginTop: 20, fontWeight: '700' }}>Contact Details</Text>

            {/* Contact Number */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>ContactNumber</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Contact Number"
                placeholderTextColor="gray"
                value={ContactNumber}
                onChangeText={handleContactNumberChange}
              />
            </View>
            {contactNumberError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{contactNumberError}</Text> : null}

            {/* Email Id */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>EmailId</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter EmailId"
                placeholderTextColor="gray"
                value={EmailId}
                onChangeText={handleEmailIdChange}
              />
            </View>
            {emailIdError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{emailIdError}</Text> : null}

            {/* Website */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: 550 }}>
              <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA', fontSize: 16 }}>Website</Text>
              <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Website"
                placeholderTextColor="gray"
                value={Website}
                onChangeText={handleWebsiteChange}
              />
            </View>
            {websiteError ? <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{websiteError}</Text> : null}

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add Details </Text>
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
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  dropdown: {
    height: 40,
    width: '100%',
    justifyContent: 'center', // Center the text vertically
    paddingLeft: 10, // Add some padding to align text properly
  },
  inputField: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',

  },
  button: {
    backgroundColor: 'rgba(249, 249, 249, 0.6)',
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CompanyDetails;
