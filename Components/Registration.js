

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground,ActivityIndicator,Image,StyleSheet,Button, Alert, ScrollView, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info'; // Import the DeviceInfo module
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initReactI18next, useTranslation} from 'react-i18next';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Dropdown } from 'react-native-element-dropdown';
import PhoneInput from 'react-native-phone-number-input'; // Make sure to use the correct package name
import cyclicUrl from '../cylic/Cyclic';
import i18n from 'i18next';
import en from './locales/en.json';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';


i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
  },
  lng: 'en',
  fallbackLng: 'en',
});

const RegistrationScreen = () => {
  const { t } = useTranslation();
 
  const navigation = useNavigation();
  
 
  const [companyInfoVisible, setCompanyInfoVisible] = useState(false);
  const [companyDetailVisible, setCompanyDetailVisible] = useState(false);

  
  
 

// Adminside
  
const [phoneNumber, setPhonenumber] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [companyName, setCompanyName] = useState('');
const[currentdate,seDate]=useState('');
const[brandName,setBrand]=useState('')
const[gst,setGst]=useState('');
const[address,setAddress]=useState('');
const[streetname,setStreet]=useState();
const[pincode,setPincode]=useState('');
const[city,setCity]=useState('');
const[state,setState]=useState('');
const[country,setCountry]=useState('');
const[website,setWebsite]=useState('');
const[deviceId,setDeviceId]=useState('');
const[role,setRRole]=useState('admin');
const[image,setImage]=useState('');


// adminside Errors

const [phoneNumberError, setPhoneNumberError] = useState('');
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');
const [companyNameError, setCompanyNameError] = useState('');
const [brandError, setBrandError] = useState('');
const [gstError, setGstError] = useState('');
const [addressError, setAddressError] = useState('');
const [streetNameError, setStreetNameError] = useState('');
const [pincodeError, setPincodeError] = useState('');
const [cityError, setCityError] = useState('');
const [stateError, setStateError] = useState('');
const [countryError, setCountryError] = useState('');
const [websiteError, setWebsiteError] = useState('');
const [imageError, setImageError] = useState('');





// usersside
// userErrors mgs

// dealerdata contains company name
const [dealers, setDealers] = useState([]);


//  userregistration
const [Name,setuserName]=useState('');
const[phonenumber,setphoneNumber]=useState('');
const[companyname,setCompanyname]=useState('');
const [Role, setRole]=useState('user')
const[ Date,setCurrentdate]=useState('02/06/12');
const [deviceID,setDeviceID]=useState('')
const[ Adminaccept,setAdminccept]=useState('false')
const [result, setResult] = useState(null);


// uererrormsgs
const[usernameError,setUsernameErr]=useState('');
const[userMobileError,setUsermobileErr]=useState('');
const [companynameErr,setcompanyNameErr]=useState('');
const [selectedRole, setSelectedRole] = useState(null);



console.log("dealer",dealers)

useEffect(()=>{
  fetchDealers();

  },[])
const fetchDealers = async () => {
  try {
    const apiUrl = `${cyclicUrl}/registerPhoneNumber/getAllRegisteredPhoneNumbers`;
    const response = await axios.get(apiUrl);
    if (response.data) {
      const adminDealerstrue = response.data.data.filter(dealer => dealer.role === 'admin' && dealer.adminaccept === true);
      const dealerOptions = adminDealerstrue.map(dealer => dealer.companyname);
      setDealers(dealerOptions);
    }
  } catch (error) {
    console.error('Error fetching dealers:', error);
  }
};
  useEffect(() => {
    getDeviceInfo();
  }, []);
  const getDeviceInfo = async () => {
    try {
      const uniqueId = await DeviceInfo.getUniqueId();
      setDeviceId(uniqueId);
      setDeviceID(uniqueId)
    } catch (error) {
      console.error('Error getting device info:', error);
    }
  };
 
  

  // const getCurrentDate = () => {
  //   const now = new Date();
  //   const day = now.getDate();
  //   const month = now.getMonth() + 1;
  //   const year = now.getFullYear();
  //   const formattedDate = `${day}-${month}-${year}`;
    
  //   };
  // useEffect(() => {
  //     const date = getCurrentDate();
  //     seDate(date);
  //   }, []);
   const handleRegister = async () => {
    let hasError = false;
    if (!companyname) {
      setcompanyNameErr('Please enter your company name');
      hasError = true;
    }
    if (!phonenumber) {
      setUsermobileErr('Please enter your contact number');
      hasError = true;
    }
  
    if (!Name) {
      setUsernameErr('Please enter your full name');
      hasError = true;
    }
    if(!hasError){
    try {
      const data = {
        name: Name, 
        companyname: Companyname,
        phoneNumber: Phonenumber,
        deviceId: deviceID,
        currentdate: Date,
        adminaccept: Adminaccept,
        role: Role,
      };
      console.log('data', data);
      const response = await axios.post(
        `${cyclicUrl}/registerUser/registerUser`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("h",response.data); // You can handle the response as needed
  
      // Reset form fields after successful registration
      setuserName('');
      setphoneNumber('');
      setCompanyname('');
      // Reset other fields as needed
     navigation.navigate('Otp')
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error as needed, e.g., display an error message to the user
    }
  };
}

 
  
const handleDocumentPicker = async () => {
  try {
    const documentResult = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    setImage(documentResult[0].uri);
    setResult(documentResult);
    setImageError('')

    // The selected document is in the result variable
    console.log('result',documentResult);
    
    // Handle the selected document as needed
    // For example, you can set it to the state
    // setDocument(result);

  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the document picker
      console.log('User cancelled document picker');
    } else {
      // Handle errors
      console.log('DocumentPicker Error: ', err);
    }
  }
};


  const handleRegistration = async () => {
   
    setPhoneNumberError('');
    setNameError('');
    setEmailError('');
    setCompanyNameError('');
    setBrandError('');
    setGstError('');
    setAddressError('');
    setStreetNameError('');
    setCityError('');
    setStateError('');
    setPincodeError('');
    setCountryError('')
    setWebsiteError('');
    setImageError('');

    let hasError = false;
    if (!phoneNumber) {
      setPhoneNumberError('Please enter your contact number');
      hasError = true;
    }
  
    if (!name) {
      setNameError('Please enter your full name');
      hasError = true;
    }
  
    if (!email) {
      setEmailError('Please enter your email address');
      hasError = true;
    }
  
    if (!companyName) {
      setCompanyNameError('Please enter your company name');
      hasError = true;
    }
  
    if (!brandName) {
      setBrandError('Please enter your brand name');
      hasError = true;
    }
  
    if (!gst) {
      setGstError('Please enter your GSTIN number');
      hasError = true;
    }
  
    if (!address) {
      setAddressError('Please enter your address');
      hasError = true;
    }
  
    if (!streetname) {
      setStreetNameError('Please enter your street name');
      hasError = true;
    }
  
    if (!pincode) {
      setPincodeError('Please enter your PIN code');
      hasError = true;
    }
  
    if (!city) {
      setCityError('Please enter your city name');
      hasError = true;
    }
  
    if (!state) {
      setStateError('Please enter your state name');
      hasError = true;
    }
  
    if (!country) {
      setCountryError('Please enter your country name');
      hasError = true;
    }
  
    if (!website) {
      setWebsiteError('Please enter your website');
      hasError = true;
    }
    if(!image){
      setImageError('Please enter your Image');
      hasError = true;
    }
 



    const formData = new FormData();
    formData.append('phoneNumber', phoneNumber);
    formData.append('name', name);
    formData.append('email',email);
    formData.append('companyname',companyName);
    formData.append('brandname',brandName);
    formData.append('currentdate',currentdate);
    formData.append('gst',gst);
    formData.append('address',address);
    formData.append('streetname',streetname);
    formData.append('pincode',pincode);
    formData.append('city',city);
    formData.append('state',state);
    formData.append('country',country);
    formData.append('website',website);
    formData.append('deviceId',deviceId);
    formData.append('role',role);


    if (result && result.length > 0) {
      formData.append('image', {
        uri: result[0].uri,
        type: result[0].type,
        name: result[0].name,
      });
    }

    try {
      // Send the registration request to the server
      const response = await axios.post(`${cyclicUrl}/registerPhoneNumber/registerPhoneNumber`, formData, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       // Update the state variable 'image' after a successful upload
      Alert.alert('Success', response.data.message);
      navigation.navigate('Otp')
      setPhonenumber('')
      setName('')
      setEmail('')
      setCompanyName('')
     setBrand('')
     setGst('')
    setAddress('')
     setStreet('')
     setPincode('')
     setCity('')
     setState('')
     setCountry('')
     setWebsite('')
     fetchDealers();
    } catch (error) {
      // console.error('Error registering phone number:', error);
    }
  };

 

  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{paddingHorizontal: moderateScale(10),}}>
          <Text style={styles.rolesuggestion}>Select registration preference</Text>
            <View style={styles.rolesContainer}>
              <TouchableOpacity
                style={[
                  styles.adminContainer,
                  selectedRole === 'admin' && { backgroundColor: '#f9f9f9' },
                ]}
                onPress={() => {
                  setCompanyInfoVisible(!companyInfoVisible);
                  setCompanyDetailVisible(false);
                  setSelectedRole((prevRole) => (prevRole === 'admin' ? null : 'admin'));
                }}
              >
              <View style={{ marginTop: verticalScale(10) }}>
                <FontAwesome5
                  name="user-shield"
                  size={moderateScale(30)}
                  color={selectedRole === 'admin' ? '#232026' : '#F9F9F9'}
                />
              </View>
              <View style={{ marginVertical: verticalScale(20) }}>
                <Text
                  style={{
                    color: selectedRole === 'admin' ? '#232026' : '#f9f9f9',
                    fontSize: moderateScale(12),
                    fontWeight: '500',
                  }}
                >
                  Admin
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: moderateScale(16), color: '#979797', fontWeight: '500' }}>Or</Text>
          <TouchableOpacity
            style={[
              styles.usersContainer,
              selectedRole === 'user' && { backgroundColor: '#f9f9f9' },
            ]}
            onPress={() => {
              setCompanyDetailVisible(!companyDetailVisible);
              setCompanyInfoVisible(false);
              setSelectedRole((prevRole) => (prevRole === 'user' ? null : 'user'));
            }}
          >
            <View style={{ marginTop: verticalScale(10) }}>
              <FontAwesome5
                name="users"
                size={moderateScale(30)}
                color={selectedRole === 'user' ? '#232026' : '#F9F9F9'}
              />
            </View>
            <View style={{ marginVertical: verticalScale(20) }}>
              <Text
                style={{
                  color: selectedRole === 'user' ? '#232026' : '#f9f9f9',
                  fontSize: moderateScale(12),
                  fontWeight: '500',
                }}
              >
                Users
              </Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
       {/* admininputs */}
      <ScrollView>
      {companyInfoVisible && (
        <View style={{flex:1,paddingHorizontal: moderateScale(10), justifyContent:'space-between'}}>
          <View style={{paddingHorizontal: moderateScale(10) }}>
            <Text style={{ fontSize: moderateScale(18), color: '#f9f9f9', marginTop: scale(30) }}>Contact details :</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your full name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={name}
                onChangeText={(text) => {
                  // Update the input value
                  setName(text);
                  // Clear the error when the user starts typing
                  setNameError('');
                }}
              />
            </View>
           {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Contact Number"
                keyboardType="number-pad"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={phoneNumber}
                onChangeText={(text) => {
                  // Update the input value
                  setPhonenumber(text);
                  // Clear the error when the user starts typing
                  setPhoneNumberError('');
                }}
               
                />
            </View>
            {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter email address"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={email}
                onChangeText={(text) => {
                  setEmail(text)
                setEmailError('')
                }}
              />
            </View>
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          </View>
          <View style={{paddingHorizontal: moderateScale(10),justifyContent:'space-between'}}>
            <Text style={{ fontSize: moderateScale(18), color: '#f9f9f9', marginTop: scale(20) }}>Company information :</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Company Name"
                selectionColor="red"
                placeholderTextColor="#979797"
                value={companyName}
                onChangeText={(text) => {
                  setCompanyName(text)
                setCompanyNameError('')
                }}
              />
            </View>
            {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Brand name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={brandName}
                onChangeText={(text)=>{
                  setBrand(text)
                  setBrandError('')
                }}
              />
            </View>
            {brandError ? <Text style={styles.errorText}>{brandError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter GSTIN number"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={gst}
                onChangeText={(text)=>{
                setGst(text)
                setGstError('')
                }}
              />
            </View>
            {gstError ? <Text style={styles.errorText}>{gstError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter D.no / Flat no"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={address}
                onChangeText={(text)=>{
                setAddress(text)
                setAddressError('')
                }}
              />
            </View>
            {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter Street name / Colony name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={streetname}
                onChangeText={(text)=>{
                setStreet(text)
                setStreetNameError('')
                }}
              />
            </View>
            {streetNameError ? <Text style={styles.errorText}>{streetNameError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your city PIN code"
                selectionColor="red"
                keyboardType="number-pad"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={pincode}
                onChangeText={(text)=>{
                setPincode(text)
                setPincodeError('')
                }}
              />
            </View>
            {pincodeError ? <Text style={styles.errorText}>{pincodeError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter city name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={city}
                onChangeText={(text)=>{
                setCity(text)
                setCityError('')
                }}
              />
            </View>
            {cityError? <Text style={styles.errorText}>{cityError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter state name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={state}
                onChangeText={(text)=>{
                setState(text)
                setStateError('')
                }}
              />
            </View>
            {stateError ? <Text style={styles.errorText}>{stateError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter country name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={country}
                onChangeText={(text)=>{
                setCountry(text)
                setCountryError('')
                }}
              />
            </View>
            {countryError ? <Text style={styles.errorText}>{countryError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
              <TextInput
                style={styles.inputField}
                placeholder="www.brandwebsite.com"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={website}
                onChangeText={(text)=>{
                setWebsite(text)
                setWebsiteError('')
                }}
              />
            </View>
            {websiteError ? <Text style={styles.errorText}>{websiteError}</Text> : null}
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center', marginVertical:verticalScale(20), borderWidth:1,borderColor:'red' }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderWidth:1,borderColor:'white',paddingHorizontal:moderateScale(20),gap:scale(10), borderRadius:scale(6),paddingVertical:moderateScale(10) }} onPress={handleDocumentPicker}>
                <MaterialIcons name="upload" size={moderateScale(20)} color="#f9f9f9" />
                <Text style={{color:'#f9f9f9',fontSize:moderateScale(14),textAlign:'center',fontWeight:'500'}}>Upload your brand LOGO image</Text>
              </TouchableOpacity>
              <Text style={{color:'#f9f9f9',fontSize:moderateScale(10),textAlign:'center',fontWeight:'500'}}>Image Preview</Text>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width:moderateScale(300), height: verticalScale(80), marginTop: verticalScale(5),resizeMode: 'stretch',}}
                />
              )}
              {imageError ? <Text style={styles.errorText}>{imageError}</Text> : null}
            </View>
          <View style={{justifyContent:'center', marginTop:verticalScale(30),width:'100%',}}>
            <TouchableOpacity onPress={handleRegistration} style={{marginHorizontal:moderateScale(30),paddingVertical:verticalScale(10),backgroundColor:'#f9f9f9',borderRadius:scale(6)}}>
              <Text style={{color:'#111111',fontSize:moderateScale(20),textAlign:'center',fontWeight:'600'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
)}
</ScrollView>
{/* User role selected */}
<View style={{flex:1, flexDirection: 'row',marginBottom: scale(5)}}>
{companyDetailVisible && (
  <View style={{flex:1,paddingHorizontal: moderateScale(10)}}>
    <Text style={{ fontSize: moderateScale(18), color: '#f9f9f9', marginTop: scale(20) }}>User Information: </Text>
        <View style={{ flex: 1, backgroundColor: '#CBCBCA', borderRadius: scale(2),marginTop: verticalScale(20)}}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            containerStyle={styles.dropdownContainer}
            itemContainerStyle={styles.itemContainerStyle}
            itemTextStyle={styles.itemTextStyle}
            activeColor={styles.activeColor}
            data={dealers.map((dealer, index) => ({ label: dealer, value: dealer }))}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select your Company"
            searchPlaceholder="Search by company name..."
            value={companyname}
            onChange={(item) => {
              setCompanyname(item.value);
              setcompanyNameErr('');
            }}
          
            
          />
          
        </View>
        {companynameErr ? <Text style={styles.errorText}>{companynameErr}</Text> : null}

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your full name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={Name}
            onChangeText={(text) => {
              // Update the input value
            setuserName(text);
              // Clear the error when the user starts typing
              setUsernameErr('');
            }}
          />
        </View>
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
          <TextInput
            style={styles.inputField}
            placeholder="Enter mobile number"
            selectionColor="red"
            placeholderTextColor="#979797"
            backgroundColor="#111111"
            value={phonenumber}
            onChangeText={(text) => {
              // Update the input value
              setphoneNumber(text);
              // Clear the error when the user starts typing
              setUsermobileErr('');
            }}
          />
        </View>
        {userMobileError ? <Text style={styles.errorText}>{userMobileError}</Text> : null}
        <View style={{justifyContent:'center', marginTop:verticalScale(30),width:'100%',}}>
          <TouchableOpacity onPress={handleRegister} style={{marginHorizontal:moderateScale(60),paddingVertical:verticalScale(10),backgroundColor:'#f9f9f9',borderRadius:scale(6)}}>
            <Text style={{color:'#111111',fontSize:moderateScale(20),textAlign:'center',fontWeight:'600'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
    </View>
    </ScrollView>
  </View>
</ImageBackground>
  );
};
// 
// import { useNavigation } from '@react-navigation/native';
const HeaderComponent = () => {
  const navigation=useNavigation();
  return (
    // <View style={styles.headerContainer}>
    //   <Text style={styles.headerText}>Your Header Title</Text>
    // </View>
  <View style={styles.headerContainer}>
    <View style={{ alignContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Otp', )} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={moderateScale(20)} color="#F9F9F9" />
      </TouchableOpacity>
    </View>
    <View></View>
  </View>
  );
};
const renderScene = SceneMap({
  registration: RegistrationScreen,
});
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#f9f9f9' }} // Style for the indicator
    style={{ backgroundColor: '#333' }} // Style for the tab bar
    labelStyle={{ color: '#f9f9f9', fontSize:moderateScale(18) }} // Style for the tab labels
  />
);
export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'registration', title: 'Registration' },
  ]);
  return (
    <View style={{ flex: 1 }}>
    <HeaderComponent />
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar} // Add this line to use your custom tab bar renderer
    />
    </View>
  );
}
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
  backButton:{
    paddingLeft:moderateScale(10),
    alignItems: 'center',
    width:moderateScale(30),
    height:verticalScale(20),
    justifyContent:'center',
  },
  rolesuggestion:{
    color:'#f9f9f9',
    fontSize:moderateScale(18),
    fontWeight:'500',
    marginVertical:verticalScale(20),
    paddingLeft:moderateScale(10),
  },
  rolesContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: moderateScale(50),
    marginTop: verticalScale(5),
  },
  adminContainer:{
    backgroundColor: '#232026',
    flexDirection:'column',
    justifyContent:'center',
    height: moderateScale(100),
    width:moderateScale(80),
    borderWidth:1,
    borderColor:'#56596C',
    alignItems:'center',
    borderRadius: scale(6),
    paddingVertical: moderateScale(10),
  },
  usersContainer:{
    backgroundColor: '#232026',
    flexDirection:'column',
    justifyContent:'center',
    height: moderateScale(100),
    width:moderateScale(80),
    borderWidth:1,
    borderColor:'#56596C',
    alignItems:'center',
    borderRadius: scale(6),
    paddingVertical: moderateScale(10),
  },
  inputField: {
    flex: 1,
    paddingVertical:verticalScale(9),
    backgroundColor: '#111111',
    borderWidth:scale(1),
    borderColor:'#979797',
    fontSize:moderateScale(14),
    textAlignVertical:'center',
    color:'#f9f9f9',
    fontWeight:'500',
    letterSpacing:moderateScale(0.4),
    borderRadius: scale(3),
    paddingLeft: moderateScale(5),
  },
  errorText: {
    color: '#f9f9f9',
    marginVertical: scale(1),
    fontSize: moderateScale(10),
    textAlign: 'center',
    paddingLeft:scale(5),
    backgroundColor:'#B70404',
    marginLeft: scale(110),
    width:scale(120),
  },
  headerContainer: {
    backgroundColor: '#333',
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  dropdown: {
    flex:1,
    height:verticalScale(40),
    color:'#303030',
    borderRadius:moderateScale(2),
    backgroundColor: '#CBCBCA',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
  },
  placeholderStyle:{
    color:'#111111',
    fontSize: moderateScale(14),
    fontWeight:'500',
  },
  selectedTextStyle:{
    color:'#111111',
    fontSize:moderateScale(16)
  },
  inputSearchStyle:{
    color:'white',
    fontSize: moderateScale(14),
    fontWeight:'500',
    backgroundColor:'#232026',
    borderRadius:scale(6)
  },
  dropdownContainer:{
    backgroundColor:'#808080',
    borderRadius:scale(6),
    borderWidth:2,
    borderColor:'#56596C',
  },
  itemContainerStyle:{
    // backgroundColor:'#808080',
    marginHorizontal:moderateScale(5),
    marginVertical:verticalScale(1),
    borderRadius:scale(4),
    borderBottomWidth:1,
    borderBottomColor:'#111111'
  },
  itemTextStyle:{
    fontSize:moderateScale(14),
    color:'#111111',
  },
});