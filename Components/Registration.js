

//working code 
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Alert, ScrollView, useWindowDimensions } from 'react-native';
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
import AntDesign from '@expo/vector-icons/AntDesign';


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
 
  const [selectedCompanyInfo, setSelectedCompanyInfo] = useState('');
  const [companyInfoVisible, setCompanyInfoVisible] = useState(false);
  const [companyInfoOptions, setCompanyInfoOptions] = useState([]);
  const [companyDetailVisible, setCompanyDetailVisible] = useState(false);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [email,setEmail]=useState('');

  const [nameError, setNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');
  const [brandError, setBrandError] = useState('');
  const [registrationErr, setRegistrationError] = useState('');
 const [emailError,setEmailError]=useState('')

  const [deviceId, setDeviceId] = useState('');
  const [currentdate,setDate]=useState('') 
 
console.log(currentdate)


  

// usersside
// userErrors mgs
const[usernameError,setUsernameErr]=useState('');
const[userMobileError,setUsermobileErr]=useState('')

// dealerdata contains company name
const [dealers, setDealers] = useState([]);
//  userregistration
const [Name,setuserName]=useState('');
const[PhoneNumber,setphoneNumber]=useState('');
const[Companyname,setCompanyname]=useState('Re');
const [Role, setRole]=useState('user')
const[ Date,setCurrentdate]=useState('02/06/12');
const [deviceID,setDeviceID]=useState('')
const[ Adminaccept,setAdminccept]=useState('false')

console.log(Companyname)
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
  
  

  const handleAddDetails = async () => {
    // Reset error messages
    setNameError('');
    setCompanyNameError('');
    setContactNumberError('');
    setBrandError('');
    setRegistrationError('');

    let isValid = true;
    const phoneRegex = /^\d{10}$/;
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!phoneRegex.test(contactNumber)) {
      setContactNumberError('Phone number must have 10 digits');
      isValid = false;
    }

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!companyName) {
      setCompanyNameError('Company Name is required');
      isValid = false;
    }

    if (!contactNumber) {
      setContactNumberError('Contact Number is required');
      isValid = false;
    }
    
    if (!brand) {
      setBrandError('Brand Name is required');
      isValid = false;
    }
    

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (isValid) {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');

      // If all fields are valid, you can proceed with saving the details
      // Prepare the data to send to the backend, including deviceUniqueId
      const data = {
        name: name,
        companyname: companyName,
        phoneNumber: contactNumber,
        email: email,
        brandname:brand,
        deviceId: deviceId, // Use the deviceUniqueId
        currentdate:currentdate,
        role:'admin'
      };

      fetch(`${cyclicUrl}/registerPhoneNumber/registerPhoneNumber`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response.status === 400) {
            setRegistrationError('Your registration request already sent, please contact owner.');
          } else {
            // Example: Show an alert upon successful registration
            Alert.alert('Success', 'Request sent successfully');
            // You can navigate to another screen or perform additional actions here
            setCompanyName('');
            setName('');
            setBrand('');
            setEmail('');
            setContactNumber('');
            navigation.navigate('Otp', { deviceId });

          }
        })
        .catch(error => {
          console.error(error);
          // Example: Show an alert for registration failure
          Alert.alert('Error', 'Failed to save details. Please try again.');
        });
    }
  };




  

  // userpostcall
 
  const handleRegister = async () => {
    try {
      const data = {
        name: Name, 
        companyname: Companyname,
        phoneNumber: PhoneNumber,
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
  
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error as needed, e.g., display an error message to the user
    }
  };
  




  return (
    <ImageBackground source={require('../assets/bg2.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={{ backgroundColor: '#1f1f1f', borderBottomColor: '#f9f9f9', borderBottomWidth: verticalScale(1) }}>
          <View style={styles.line}></View>
        </View>
        <View style={{ flex: 1 }}>
      </View>
        <ScrollView>
        <View style={styles.rolesContainer}>
          <TouchableOpacity
          style={styles.adminContainer}
            onPress={() => {
            setCompanyInfoVisible(!companyInfoVisible);
            setCompanyDetailVisible(false); // Hide the company details section
            }}
          >
            <View style={{marginTop: verticalScale(10)}}>
              <FontAwesome5 name="user-shield" size={moderateScale(30)} color="#F9F9F9" />
            </View>
            <View style={{marginVertical: verticalScale(20)}}>
              <Text style={{color: '#f9f9f9',fontSize: moderateScale(12), fontWeight: '500'}}>Admin</Text>
            </View>
          </TouchableOpacity>
          <Text style={{fontSize: moderateScale(16),color:'#979797',fontWeight:'500'}}>Or</Text>
          <TouchableOpacity 
            style={styles.usersContainer}
            onPress={() => {
            setCompanyDetailVisible(!companyDetailVisible);
            setCompanyInfoVisible(false); // Hide the company info section
            }}
          >
            <View style={{marginTop: verticalScale(10)}}>
              <FontAwesome5 name="users" size={moderateScale(30)} color="#F9F9F9" />
            </View>
            <View style={{marginVertical: verticalScale(20)}}>
              <Text style={{color: '#f9f9f9',fontSize: moderateScale(12), fontWeight: '500'}}>Users</Text>
            </View>
          </TouchableOpacity>
      </View>
         
            {companyInfoVisible && (
        <View style={{paddingHorizontal: moderateScale(10) }}>
          <Text style={{ fontSize: moderateScale(18), color: '#f9f9f9', marginTop: scale(30) }}>Company Information</Text>
          <View style={{paddingHorizontal: moderateScale(10) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your full name"
                selectionColor="red"
                placeholderTextColor="#979797"
                backgroundColor="#111111"
                value={name}
                onChangeText={setName}
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
                value={contactNumber}
                onChangeText={setContactNumber}
              />
            </View>
            {contactNumberError ? <Text style={styles.errorText}>{contactNumberError}</Text> : null}
     
          
     
     
     
      </View>
          
          
          
          
          
          
          
          
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Company Name"
              selectionColor="red"
              placeholderTextColor="#979797"
              value={companyName}
              onChangeText={setCompanyName}
            />
          </View>
          {companyNameError ? <Text style={styles.errorText}>{companyNameError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter brand name"
              selectionColor="red"
              placeholderTextColor="#979797"
              backgroundColor="#111111"
              value={brand}
              onChangeText={setBrand}
            />
          </View>
          {brandError ? <Text style={styles.errorText}>{brandError}</Text> : null}
         
           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter email name"
              selectionColor="red"
              placeholderTextColor="#979797"
              backgroundColor="#111111"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity onPress={handleAddDetails} >
            <Text style={{color:'white',width:100,fontSize:30,borderWidth:1,borderColor:'white',textAlign:'center'}}>Save</Text>
          </TouchableOpacity>
          </View>
          
          
          
          
          </View>
)}




            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
            {companyDetailVisible && (
  <View>
    <Text style={{ color: '#f9f9f9',fontSize:30 }}>User Information: </Text>
    {/* bind company nmae in the drop down */}
    

    <View style={{ flex: 1, backgroundColor: '#CBCBCA', borderRadius: scale(2) }}>
  {/* dropdown */}
  <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dealers.map((dealer, index) => ({ label: dealer, value: dealer }))}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select dealer"
        searchPlaceholder="Search..."
        value={Companyname}
        onChange={(item) => {
          setCompanyname(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />





</View>


  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5), marginTop: verticalScale(20) }}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Name"
              selectionColor="red"
              placeholderTextColor="#979797"
              value={Name}
              onChangeText={setuserName}
            />
          </View>
          {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(5) }}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Phonenumber"
              selectionColor="red"
              placeholderTextColor="#979797"
              backgroundColor="#111111"
              value={PhoneNumber}
              onChangeText={setphoneNumber}
            />
          </View>
          {userMobileError ? <Text style={styles.errorText}>{userMobileError}</Text> : null}
         

          <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}} >
          <TouchableOpacity onPress={handleRegister} >
            <Text style={{color:'white',width:100,fontSize:30,borderWidth:1,borderColor:'white',textAlign:'center'}}>Save</Text>
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
    labelStyle={{ color: '#f9f9f9' }} // Style for the tab labels
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
    fontSize: moderateScale(16),
    fontWeight: 'semibold',
    textAlign: 'center',
    letterSpacing: moderateScale(0.5),
  },
  subtitle: {
    width: scale(90),
    marginRight: moderateScale(5),
    color: '#AAAAAA',
    fontSize: moderateScale(14),
    fontWeight: '400',
    letterSpacing: moderateScale(0.2),
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
  bottombuttons: {
    alignItems: 'center',
    alignContent:'center',
    width:'100%',
    height: verticalScale(40),
    marginTop:verticalScale(1),
    marginBottom:verticalScale(40),
  },
  button: {
    paddingHorizontal: moderateScale(100),
    height:verticalScale(40),
    backgroundColor: '#f9f9f9',
    borderRadius: scale(4),
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: '#111111',
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
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
  getdetailsbutton:{
    marginTop:50,
    width:'100%',
  },
  button2: {
    marginHorizontal: moderateScale(60),
    height: verticalScale(40),
    backgroundColor: '#f9f9f9',
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2Text: {
    color: '#000000',
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  inputFieldText: {
    flex: 1,
    paddingVertical: verticalScale(9),
    backgroundColor: '#111111',
    borderWidth: scale(1),
    borderColor: '#979797',
    fontSize: moderateScale(14),
    textAlignVertical: 'center',
    color: '#f9f9f9',
    fontWeight: '500',
    letterSpacing: moderateScale(0.4),
    borderRadius: scale(3),
    paddingLeft: moderateScale(5),
  },
  headerContainer: {
    backgroundColor: '#333',
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
 
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});


//working code 
