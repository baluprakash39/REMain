
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, Button } from 'react-native';
// import axios from 'axios';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import  FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import { useNavigation } from '@react-navigation/native';

// const CompanyDetails = () => {
//   const [CompanyName, setCompanyName] = useState('');
//   const [CompanyAddress, setCompanyAddress] = useState('');
//   const [StreetName, setStreetName] = useState('');
//   const [City, setCity] = useState('');
//   const [Pincode, setPincode] = useState('');
//   const [State, setState] = useState('');
//   const [Country, setCountry] = useState('');
//   const [ContactNumber, setContactNumber] = useState('');
//   const [EmailId, setEmailId] = useState('');
//   const [Website, setWebsite] = useState('');

//   const [companyNameError, setCompanyNameError] = useState('');
//   const [companyAddressError, setCompanyAddressError] = useState('');
//   const [streetNameError, setStreetNameError] = useState('');
//   const [cityError, setCityError] = useState('');
//   const [pincodeError, setPincodeError] = useState('');
//   const [stateError, setStateError] = useState('');
//   const [countryError, setCountryError] = useState('');
//   const [contactNumberError, setContactNumberError] = useState('');
//   const [emailIdError, setEmailIdError] = useState('');
//   const [websiteError, setWebsiteError] = useState('');

//   const handleCompanyNameChange = (text) => {
//     setCompanyName(text);
//     setCompanyNameError(''); // Clear the error message
//   };

//   const handleCompanyAddressChange = (text) => {
//     setCompanyAddress(text);
//     setCompanyAddressError('');
//   };

//   const handleStreetNameChange = (text) => {
//     setStreetName(text);
//     setStreetNameError('');
//   };

//   const handleCityChange = (text) => {
//     setCity(text);
//     setCityError('');
//   };

//   const handlePincodeChange = (text) => {
//     setPincode(text);
//     setPincodeError('');
//   };

//   const handleStateChange = (text) => {
//     setState(text);
//     setStateError('');
//   };

//   const handleCountryChange = (text) => {
//     setCountry(text);
//     setCountryError('');
//   };

//   const handleContactNumberChange = (text) => {
//     setContactNumber(text);
//     setContactNumberError('');
//   };

//   const handleEmailIdChange = (text) => {
//     setEmailId(text);
//     setEmailIdError('');
//   };

//   const handleWebsiteChange = (text) => {
//     setWebsite(text);
//     setWebsiteError('');
//   };

//   const handleSubmit = () => {
//     setCompanyNameError('');
//     setCompanyAddressError('');
//     setStreetNameError('');
//     setCityError('');
//     setPincodeError('');
//     setStateError('');
//     setCountryError('');
//     setContactNumberError('');
//     setEmailIdError('');
//     setWebsiteError('');

//     let isValid = true;

//     if (!CompanyName) {
//       setCompanyNameError('Company Name is required');
//       isValid = false;
//     }

//     if (!CompanyAddress) {
//       setCompanyAddressError('Company Address is required');
//       isValid = false;
//     }

//     if (!StreetName) {
//       setStreetNameError('Street Name is required');
//       isValid = false;
//     }

//     if (!City) {
//       setCityError('City is required');
//       isValid = false;
//     }

//     if (!Pincode) {
//       setPincodeError('Pincode is required');
//       isValid = false;
//     }

//     if (!State) {
//       setStateError('State is required');
//       isValid = false;
//     }

//     if (!Country) {
//       setCountryError('Country is required');
//       isValid = false;
//     }

//     if (!ContactNumber) {
//       setContactNumberError('Contact Number is required');
//       isValid = false;
//     }

//     if (!EmailId) {
//       setEmailIdError('Email Id is required');
//       isValid = false;
//     }

//     if (!Website) {
//       setWebsiteError('Website is required');
//       isValid = false;
//     }

//     if (isValid) {
//       // All required fields are filled, you can proceed with the form submission
//       const url = 'https://dull-plum-woodpecker-veil.cyclic.cloud/dealerdetails/dealerdetails';

//       const userData = {
//         companyname: CompanyName,
//         companyaddress: CompanyAddress,
//         streetname: StreetName,
//         city: City,
//         pincode: Pincode,
//         state: State,
//         country: Country,
//         contactnumber: ContactNumber,
//         emailid: EmailId,
//         website: Website,
//         // You can add other fields as needed
//       };

//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData), // Convert to JSON string
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);

//           // Optionally, you can reset the form fields here
//           setCompanyName('');
//           setCompanyAddress('');
//           setStreetName('');
//           setCity('');
//           setPincode('');
//           setState('');
//           setCountry('');
//           setContactNumber('');
//           setEmailId('');
//           setWebsite('');
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }
//   };
//   const handleBackPress = () => {
//     // Navigate back to the Inventory screen
//     navigation.navigate('Inventory');
//   };

//   return (
//     <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
//       <ScrollView>
//         <View style={styles.container}>
//         <View style={styles.header}>
//           <View style={{ height:'100%', alignContent: 'center'}}>
//             <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
//               <MaterialIcons name='arrow-back' size={20} color={'#F9F9F9'}/>
//             </TouchableOpacity>
//           </View>
//             <View style={{ alignItems: 'center'}}>
//               <Text style={styles.title}>Company details</Text>
//             </View>
//         </View>
//           <View style={styles.line}></View>
//           <View style={{ flexDirection: 'column', marginTop: 20, }}>
//             {/* Company Name */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:5,}}>
//               <Text style={styles.subtitle}>Company Name</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center'}}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter your Company name"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={CompanyName}
//                 onChangeText={handleCompanyNameChange}
//               />
//             </View>
//             {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}
            

//             {/* Company Address */}
//             <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 10, marginBottom:5 }}>Company Address</Text>

//             <View style={{ flexDirection: 'column', marginTop: 10,gap: 5, width: '100%' }}>

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>Address1</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Address Name"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={CompanyAddress}
//                 onChangeText={handleCompanyAddressChange}
//               />
//             </View>
//             {companyAddressError ? <Text style={styles.errorText}>{companyAddressError}</Text> : null}

//             {/* Street Name */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>Street Name</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Street Name"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={StreetName}
//                 onChangeText={handleStreetNameChange}
//               />
//             </View>
//             {streetNameError ? <Text style={styles.errorText}>{streetNameError}</Text> : null}

//             {/* City */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>City</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter City Name"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={City}
//                 onChangeText={handleCityChange}
//               />
//             </View>
//             {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}

//             {/* Pincode */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>Pincode</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Pincode"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={Pincode}
//                 onChangeText={handlePincodeChange}
//               />
//             </View>
//             {pincodeError ? <Text style={styles.errorText}>{pincodeError}</Text> : null}

//             {/* State */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>State</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Statename"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={State}
//                 onChangeText={handleStateChange}
//               />
//             </View>
//             {stateError ? <Text style={styles.errorText}>{stateError}</Text> : null}

//             {/* Country */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>Country</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Country Name"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={Country}
//                 onChangeText={handleCountryChange}
//               />
//             </View>
//             {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}
//         </View>
//             {/* Contact Details */}
//             <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 15, marginBottom:5 }}>Contact Details</Text>

//             <View style={{ flexDirection: 'column', marginTop: 10,gap: 5, width: '100%' }}>

//             {/* Contact Number */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>ContactNumber</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Contact Number"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={ContactNumber}
//                 onChangeText={handleContactNumberChange}
//               />
//             </View>
//             {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}

//             {/* Email Id */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>EmailId</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter EmailId"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={EmailId}
//                 onChangeText={handleEmailIdChange}
//               />
//             </View>
//             {emailIdError ? <Text style={styles.errorText}>{emailIdError}</Text> : null}

//             {/* Website */}
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
//               <Text style={styles.subtitle}>Website</Text>
//               <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
//               <TextInput
//                 style={styles.inputField}
//                 placeholder="Enter Website"
//                 selectionColor="red"
//                 placeholderTextColor="#303030"
//                 backgroundColor="#CBCBCA"
//                 value={Website}
//                 onChangeText={handleWebsiteChange}
//               />
//             </View>
//             {websiteError ? <Text style={styles.errorText}>{websiteError}</Text> : null}
//           </View>
//           <View style={styles.bottombuttons}>
//           <TouchableOpacity
//               style={styles.button}
//               onPress={handleSubmit} // Add the addVehicle function to the onPress handler
//             >
//                 <View style={{ flexDirection: 'row', alignItems: 'center',gap: 20}}>
//                   <FontAwesome6 name='address-card' size={20} color={'#f9f9f9'} />
//                   <Text style={styles.buttonText}>Add Details</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//           </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };


// const styles = StyleSheet.create({

//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   header:{
//     gap: 110,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   title: {
//     color: '#F9F9F9',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     letterSpacing: 0.5,
//   },
//   line: {
//     height: 1,
//     backgroundColor: 'white',
//     width: '100%',
//   },
//   subtitle:{ 
//     width: 120,
//     marginRight: 10,
//     color: '#F9F9F9',
//     fontSize: 14,
//     fontWeight: '400',
//     letterSpacing: 0.2,
//   },
//   inputField: {
//     flex: 1,
//     height: 40,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingLeft: 10,
//     color: '#868687',
//   },
//   bottombuttons:{ 
//     alignItems:'center',
//     width:'100%', 
//     height:50, 
//     marginTop: 50,
//   },
//   button: {
//     borderColor: '#f9f9f9',
//     backgroundColor:'#453F3F',
//     borderWidth: 1,
//     borderRadius: 6,
//     width:'70%',
//     height: 50,
//     padding: 10,
//     alignItems: 'center'
//   },
//   buttonText: {
//     color: '#f9f9f9',
//     fontSize: 18,
//     fontWeight: '500',
//     textAlign:'center',
//   },
//   errorText: {
//     color: '#ffffff',
//     textDecorationLine:'underline',
//     marginTop: 0,
//     fontSize: 12,
//     textAlign: 'right',
//     marginBottom:5,
//     letterSpacing: 0.4,
//     fontWeight: '500',
//   },
// });

// export default CompanyDetails;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const CompanyDetails = () => {
  const navigation=useNavigation();
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
  const handleBackPress = () => {
    // Navigate back to the Inventory screen
    navigation.navigate('Inventory');
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ height:'100%', alignContent: 'center'}}>
          <TouchableOpacity onPress={() => { handleBackPress(); navigation.navigate('Inventory'); }} style={styles.backButton}>
    <MaterialIcons name='arrow-back' size={20} color={'#F9F9F9'}/>
</TouchableOpacity>

          </View>
          
                
             
        </View>
        <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Company Details</Text>
          <View style={styles.line}></View>
          <View style={{ flexDirection: 'column', marginTop: 20, }}>
           
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:5,}}>
              <Text style={styles.subtitle}>Company Name</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center'}}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your Company name"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={CompanyName}
                onChangeText={handleCompanyNameChange}
              />
            </View>
            {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}
            

            {/* Company Address */}
            <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 10, marginBottom:5 }}>Company Address</Text>

            <View style={{ flexDirection: 'column', marginTop: 10,gap: 5, width: '100%' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>Address1</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Address Name"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={CompanyAddress}
                onChangeText={handleCompanyAddressChange}
              />
            </View>
            {companyAddressError ? <Text style={styles.errorText}>{companyAddressError}</Text> : null}

            {/* Street Name */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>Street Name</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Street Name"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={StreetName}
                onChangeText={handleStreetNameChange}
              />
            </View>
            {streetNameError ? <Text style={styles.errorText}>{streetNameError}</Text> : null}

            {/* City */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>City</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter City Name"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={City}
                onChangeText={handleCityChange}
              />
            </View>
            {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}

            {/* Pincode */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>Pincode</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Pincode"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={Pincode}
                onChangeText={handlePincodeChange}
              />
            </View>
            {pincodeError ? <Text style={styles.errorText}>{pincodeError}</Text> : null}

            {/* State */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>State</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Statename"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={State}
                onChangeText={handleStateChange}
              />
            </View>
            {stateError ? <Text style={styles.errorText}>{stateError}</Text> : null}

            {/* Country */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>Country</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Country Name"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={Country}
                onChangeText={handleCountryChange}
              />
            </View>
            {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}
        </View>
            {/* Contact Details */}
            <Text style={{ color: '#F9F9F9', fontSize: 18, fontWeight: '700', marginTop: 15, marginBottom:5 }}>Contact Details</Text>

            <View style={{ flexDirection: 'column', marginTop: 10,gap: 5, width: '100%' }}>

            {/* Contact Number */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>ContactNumber</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Contact Number"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={ContactNumber}
                onChangeText={handleContactNumberChange}
              />
            </View>
            {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}

            {/* Email Id */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>EmailId</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter EmailId"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={EmailId}
                onChangeText={handleEmailIdChange}
              />
            </View>
            {emailIdError ? <Text style={styles.errorText}>{emailIdError}</Text> : null}

            {/* Website */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <Text style={styles.subtitle}>Website</Text>
              <Text style={{ color: 'white', fontSize: 14, width: 20, textAlign: 'center' }}>:</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Website"
                selectionColor="red"
                placeholderTextColor="#303030"
                backgroundColor="#CBCBCA"
                value={Website}
                onChangeText={handleWebsiteChange}
              />
            </View>
            {websiteError ? <Text style={styles.errorText}>{websiteError}</Text> : null}
          </View>
          <View style={styles.bottombuttons}>
          <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit} // Add the addVehicle function to the onPress handler
            >
                <View style={{ flexDirection: 'row', alignItems: 'center',gap: 20}}>
                  <FontAwesome6 name='address-card' size={20} color={'#f9f9f9'} />
                  <Text style={styles.buttonText}>Add Details</Text>
                </View>
            </TouchableOpacity>
        </View>
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
    gap: 110,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#F9F9F9',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
    letterSpacing: 0.5,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  subtitle:{ 
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
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#868687',
  },
  bottombuttons:{ 
    alignItems:'center',
    width:'100%', 
    height:50, 
    marginTop: 50,
  },
  button: {
    borderColor: '#f9f9f9',
    backgroundColor:'#453F3F',
    borderWidth: 1,
    borderRadius: 6,
    width:'70%',
    height: 50,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: 12,
    textAlign: 'center',
    marginBottom:5,
    letterSpacing: 0.4,
    fontWeight: '500',
  },
});

export default CompanyDetails;