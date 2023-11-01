import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView, useColorScheme } from 'react-native'; // Import ScrollView for scrolling if needed
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import { RadioButton } from 'react-native-paper';
import cyclicUrl from '../cylic/Cyclic';
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
const Share = ({route}) => {
const {t} = useTranslation();
const colorScheme = useColorScheme();
const { vehicleId, deviceId } = route.params;
console.log(vehicleId)
const navigation = useNavigation();
const [selectedStyle, setSelectedStyle] = useState(null);
const [customername, setCustomerName] = useState('');
const [address, setAddress] = useState('');
const [mobilenumber, setMobileNumber] = useState('');
const [emailid, setEmailId] = useState('');
console.log("c",customername,address)
// errors for customer
const [customernameErr, setCustomerNameErr]=useState('');
console.log(customernameErr)
const [adressseErr,setadressErr]=useState('');
console.log(adressseErr)
const[mobileErr,setmobileErr]=useState('');
const[emailErr,setemailErr]=useState('');
// customerdetails
const handlecustomername=(text)=>{
  if (/\d/.test(text)) {
    setCustomerName('')
    setCustomerNameErr('Numbers are not allowed');
  } else {
  setCustomerName(text);
  setCustomerNameErr('');
  }
}
const handleadresss = (text) => {
  setAddress(text);
  setadressErr('');
}
const handlemobile=(text)=>{
  if (/\d/.test(text)) {
  setMobileNumber(text)
  setmobileErr();
  } else {
  setMobileNumber('')
    setmobileErr("Enter number only");
  }
}
const handleEmail = (text) => {
  setEmailId(text);
  setemailErr('');
}
const [value, setValue] = useState(null);
//date//
const [enquiryDate, setEnquiryDate] = useState('');
const[registration, setRegistration] = useState('');
console.log('re', registration)
//checkboxes//
const [dataArray, setDataArray] = useState([]);
const [isSelected, setSelection] = useState(false);
// const [checked, setChecked] = React.useState('');
const [isNilldip,setnilldip]=useState(false);
const [EP,setEP]=useState(false);
const[RTI,setRTI]=useState(false);
const [YES,setYes]=useState(false);
const[NO,setNo]=useState(false);
const [four, setFour] = useState(false);
const [five, setFive] = useState(false);
const [fiveRsa, setFiveRsa] = useState(false);
const [selectedValue, setSelectedValue] = useState('default');
//Radiobuttons
const selectedStates = {
insurance: '',
hypothecation: '',
extendedWarranty: '',
};
const [oilFillerCap, setOilFillerCap] = useState(null);
const [headlight, setHeadlight] = useState(null);
const [windshields, setWindshields] = useState(null);
const [panniers, setPanniers] = useState(null);
const [seats, setSeats] = useState(null);
const [backrest, setBackrest] = useState(null);
const [footpegs, setFootpegs] = useState(null);
const [engineGuards, setEngineGuards] = useState(null);
const [sumpGuards, setSumpGuards] = useState(null);
const [safetyAccessories, setSafetyAccessories] = useState(null);
//image usesatate
const [reimage, setreimage] = useState('https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg')
console.log('r', reimage)
// dropdowns
const [selectedMirrorstext, setSelectedMirrorstext] = useState('');
const [selectedMirrorsvalue, setSelectedMirrorsvalue] = useState(0);
const [selectedOilFillerCapText, setSelectedOilFillerCapText] = useState('');
const [selectedOilFillerCapValue, setSelectedOilFillerCapValue] = useState(0);
const [selectedHeadLightText, setSelectedHeadLightText] = useState('');
const [selectedHeadLightValue, setSelectedHeadLightValue] = useState(0);
const [selectedWindshieldsText, setSelectedWindshieldsText] = useState('');
const [selectedWindshieldsValue, setSelectedWindshieldsValue] = useState(0);
const [selectedPanniersText, setSelectedPanniersText] = useState('');
const [selectedPanniersValue, setSelectedPanniersValue] = useState(0);
const [selectedSeatsText, setSelectedSeatsText] = useState('');
const [selectedSeatsValue, setSelectedSeatsValue] = useState(0);
const [selectedBackrestText, setSelectedBackrestText] = useState('');
const [selectedBackrestValue, setSelectedBackrestValue] = useState(0);
const [selectedFootPegsText, setSelectedFootPegsText] = useState('');
const [selectedFootPegsValue, setSelectedFootPegsValue] = useState(0);
const [selectedEngineGuardsText, setSelectedEngineGuardsText] = useState('');
const [selectedEngineGuardsValue, setSelectedEngineGuardsValue] = useState(0);
const [selectedSumpGuardsText, setSelectedSumpGuardsText] = useState('');
const [selectedSumpGuardsValue, setSelectedSumpGuardsValue] = useState(0);
const [selectedSafetyAccessoriesText, setSelectedSafetyAccessoriesText] = useState('');
const [selectedSafetyAccessoriesValue, setSelectedSafetyAccessoriesValue] = useState(0);
// Add state variables for other dropdowns here
console.log("S",selectedSafetyAccessoriesText)
const [selectedOption, setSelectedOption] = useState(0);
const [exwarrantytext, setextext] = useState('');
//checkboxes
// hype
const [hype,sethype]=useState(0);
const[hypetext,sethypetext]=useState('')
// insu
const [ins,setins]=useState(0);
const [instext,settext]=useState('')
// for count
const [onroad,setexprice]=useState('')
const zero =parseFloat(0)
const totalonroad=onroad+parseFloat(ins)+zero+parseFloat(hype)+zero
const grandtotal=totalonroad+parseFloat(selectedMirrorsvalue)+parseFloat(selectedOilFillerCapValue)+parseFloat(selectedHeadLightValue)+parseFloat(selectedOption)
+parseFloat(selectedWindshieldsValue)+
parseFloat(selectedPanniersValue)+parseFloat(selectedSeatsValue)+parseFloat(selectedBackrestValue)+
parseFloat(selectedFootPegsValue)+parseFloat(selectedEngineGuardsValue)+parseFloat(selectedSumpGuardsValue)+parseFloat(selectedSafetyAccessoriesValue)
const B=parseFloat(selectedMirrorsvalue)+parseFloat(selectedOilFillerCapValue)+parseFloat(selectedHeadLightValue)+parseFloat(selectedOption)
+parseFloat(selectedWindshieldsValue)+
parseFloat(selectedPanniersValue)+parseFloat(selectedSeatsValue)+parseFloat(selectedBackrestValue)+
parseFloat(selectedFootPegsValue)+parseFloat(selectedEngineGuardsValue)+parseFloat(selectedSumpGuardsValue)+parseFloat(selectedSafetyAccessoriesValue)
console.log("B",B)
console.log("x",totalonroad)
console.log("y",grandtotal)
console.log(selectedOption)
console.log(dataArray)
console.log("mirrorvlue",parseFloat(selectedMirrorsvalue))
console.log(selectedMirrorsvalue)
  useEffect(() => {
    fetchBikeDetails(vehicleId);
  }, []);
const handleFourChange = (out,text) => {
  setwarentyCheked('four')
  setSelectedOption(out);
  setextext(text)
};
const handleFiveChange = (out,text) => {
  setwarentyCheked('five')
  setSelectedOption(out);
  setextext(text)
};
const handleFiveRsaChange = (out,text) => {
  setwarentyCheked('fiveRsa')
  setSelectedOption(out);
  setextext(text)
};
const handleYes=(out,text)=>{
  sethypoCheked('YES')
  sethype(out)
  sethypetext(text)
}

const handleNo=(out,text)=>{
  sethypoCheked('NO')
  sethype(out);
  sethypetext(text)
}
const handlebasic=(out,text)=>{
  setChecked('Basic')
  setins(out)
  settext(text)
}
const handleNill=(out,text)=>{
  setChecked('Nilldip')
  setins(out)
  settext(text)
}
const handleEP=(out,text)=>{
  setChecked('EP')
  setins(out)
  settext(text)
}
const handleRTI=(out,text)=>{
  setChecked('RTI')
  setins(out)
  settext(text)
}
// data
const [exShowroomPrice, setExShowroomPrice] = useState('');
const [roadtax, setRoadtax] = useState('');
const [Vehiclecolor,setvehiclecolor]=useState('');
const [EngineCC,setEngineCC]=useState('');
const [adminallimage,setadminallimage]=useState('');
const [vehiclename,setvehiclename]=useState('');
const [model,setmodel]=useState('');
const [checked, setChecked] = React.useState('');
const[chekedhypo,sethypoCheked]=useState('')
const[Checkwarenty,setwarentyCheked]=useState('')
// dealerdetails
const [dataaa, setData] = useState([]);
const [companyaddress,setcopmapnyadress]=useState('');
const [companyname,setcompanyname]=useState('');
const [city,setcity]=useState('');
const [gstin,setgstin]=useState('');
const [contactnumber,setcontactnumber]=useState('');
const [country,setcountry]=useState('');
const [dealeremailid,setdealeremailid]=useState('');
const [pincode,setpincode]=useState('');
const [state,setstate]=useState('');
const [streetname,setstreetname]=useState('');
const [website,setwebsite]=useState('');
console.log("adress",companyaddress)
const formData ={
    customername: '',
    address: '',
    mobilenumber: '',
    emailid: '',
    mirrortext:selectedMirrorstext,
    mirrorvalue:selectedMirrorsvalue,
    oilFillerCaptext: '',
    oilFillerCapvalue: '',
    headlightlabel: '',
    headlightvalue: '',
    windshieldslabel: '',
    windshieldsvalue: '',
    pannierslabel: '',
    panniersvalue: '',
    seatslabel: '',
    seatsvalue: '',
    backrestlabel: '',
    backrestvalue: '',
    footpegslabel: '',
    footpegsvalue: '',
    engineguardslabel: '',
    engineguardsvalue: '',
    sumpguardslabel: '',
    sumpguardsvalue: '',
    safetyaccessorieslabel: '',
    safetyaccessoriesvalue: '',
    isSelected: false,
    isNilldip: false,
    EP: false,
    RTI: false,
    YES: false,
    NO: false,
    four: false,
    five: false,
    fiveRsa: false,
}
console.log(formData)
const [selectedTab, setSelectedTab] = useState('Style');
// Define an array of options with labels and values, including the "Select" option
const handleShare = async () => {
  try {
    let isValid = true; // Declare isValid as a variable and initialize it to true

    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;// Basic email validation regex

    if (!phoneRegex.test(mobilenumber)) {
      setmobileErr('Phone number must have 10 digits');
      isValid = false; // Set isValid to false when the validation fails
    }

    // Validation checks for each input field
    if (!customername) {
      setCustomerNameErr('Please enter customer name');
      isValid = false;
    }
    if (!address) {
      setadressErr('Please enter address');
      isValid = false;
    }

    if (!mobilenumber) {
      setmobileErr('Please enter mobile number');
      isValid = false;
    }

    if (!emailid || !emailRegex.test(emailid)) {
      if (!emailid) {
        setemailErr('Please enter email');
      } else {
        setemailErr('Please enter a valid email address');
      }
      isValid = false;
    }
    
    if (isValid) {

    // Navigate to the SharePdf screen and pass formData as a parameter
    navigation.navigate('SharePdf', { 
      // formData,
      customername,
      address,
      mobilenumber,
      emailid,
      enquiryDate,
      exShowroomPrice,
      roadtax,
      Vehiclecolor,
      EngineCC,
      adminallimage,
      vehiclename,
      model,
      companyaddress,
      companyname,
      city,
      contactnumber,
      gstin,
      country,
      dealeremailid,
      pincode,
      state,
      streetname,
      website,
      registration,
      ins,
      instext,
      hype,
      hypetext,
      exwarrantytext,
      reimage,
      totalonroad,
      grandtotal,
      B,
      selectedOption,
      selectedMirrorstext,
      selectedMirrorsvalue,
      selectedOilFillerCapText,
      selectedOilFillerCapValue,
      selectedHeadLightText,
      selectedHeadLightValue,
      selectedWindshieldsText,
      selectedWindshieldsValue,
      selectedPanniersText,
      selectedPanniersValue,
      selectedSeatsText,
      selectedSeatsValue,
      selectedBackrestText,
      selectedBackrestValue,
      selectedFootPegsText,
      selectedFootPegsValue,
      selectedEngineGuardsText,
      selectedEngineGuardsValue,
      selectedSumpGuardsText,
      selectedSumpGuardsValue,
      selectedSafetyAccessoriesText,
      selectedSafetyAccessoriesValue,


    });
  }
  } catch (error) {
    console.error('Error storing formData:', error);
  }
};
const fetchBikeDetails = async (vehicleId) => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
  
      const url = `${cyclicUrl}/formdetails/getbike/${vehicleId}`;
      
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const bike = response.data;
      const { exShowroomPrice, roadtax, registration } = bike;
      const exShowroompriceNumber = parseFloat(exShowroomPrice.replace(/,/g, ''));
      const roadtaxNumber = parseFloat(roadtax.replace(/,/g, ''));
      const registrationnumber = parseFloat(registration.replace(/,/g, ''));
      setRegistration(registrationnumber)
      const totalPrice = exShowroompriceNumber + roadtaxNumber + registrationnumber;
      setexprice(totalPrice);
      console.log(response);
      const { vehiclecolor, EngineCC, adminallimage, vehiclename, model } = bike;
      // Filter and store exShowroomPrice and roadtax in separate useState variables
      setExShowroomPrice(exShowroomPrice);
      setRoadtax(roadtax);
      setvehiclecolor(vehiclecolor);
      setEngineCC(EngineCC);
      setadminallimage(adminallimage);
      setvehiclename(vehiclename);
      setmodel(model);
      // Append the bike details to the dataArray state
      setDataArray([...dataArray, bike]);
      // Store the bike data in AsyncStorage (optional)
      await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
      console.log('Bike data stored successfully', bike);
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };
useEffect(() => {
    // Call the fetchData function to fetch data when the component mounts
    fetchData();
  }, []);
const fetchData = async () => {
      try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      // Make a GET request to your API endpoint with the token in the headers
      const response = await axios.get(`${cyclicUrl}/dealerdetails/getdealers`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        // Extract the data from the response
        const responseData = response.data.user[0];
        console.log("data", responseData);
        const { companyaddress, companyname, city, contactnumber, country, dealeremailid, gstin, pincode, state, streetname, website } = responseData;
        setcopmapnyadress(companyaddress);
        setcompanyname(companyname);
        setcity(city);
        setgstin(gstin);
        setcontactnumber(contactnumber);
        setcountry(country);
        setdealeremailid(dealeremailid);
        setpincode(pincode);
        setstate(state);
        setstreetname(streetname);
        setwebsite(website);
        // Update the state with the fetched data
        setData([...dataaa, responseData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
//date//
const getCurrentDate = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
  };
useEffect(() => {
    const date = getCurrentDate();
    setEnquiryDate(date);
  }, []);
return (
      <ScrollView contentContainerStyle={styles.container}>
      {dataArray.map((data, index) => (
        <View key={index} style={styles.content}>
          <View style={styles.header}>
            <View style={{ alignContent: 'center'}}>
              <TouchableOpacity onPress={() => {
                  navigation.navigate('Home',{deviceId});
                  }} style={styles.backButton}>
                  <MaterialIcons name='arrow-back' size={moderateScale(20)} color={'#F9F9F9'}/>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', width:scale(315), height:scale(20)}}>
              <Text style={styles.headertitle}>Quotation</Text>
            </View>
          </View>
      <View style={styles.line}></View>
        <Text style={styles.title}>Enter Customer details :</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Customer Name :</Text>
            <TextInput
              style={styles.input}
              value={customername}
              onChangeText={(text) => handlecustomername(text)}
              placeholder="Enter name"
              selectionColor="red"
              placeholderTextColor={'#868687'}
            />
          </View>
          {customernameErr ? <Text style={styles.errorText}>{customernameErr}</Text> : null}
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Address :</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={(text) => handleadresss(text)}
              placeholder="Enter address"
              selectionColor="red"
              placeholderTextColor={'#868687'}
            />
          </View>
            {adressseErr? <Text style={styles.errorText}>{adressseErr}</Text> : null}
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Mobilenumber :</Text>
            <TextInput
              style={styles.input}
              value={mobilenumber}
              onChangeText={(text) => handlemobile(text)}
              placeholder="Enter mobile number"
              selectionColor="red"
              placeholderTextColor={'#868687'}
              keyboardType='number-pad'
            />
          </View>
          {mobileErr? <Text style={styles.errorText}>{mobileErr}</Text> : null}
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Email-id :</Text>
            <TextInput
              style={styles.input}
              value={emailid}
              onChangeText={(text)=>handleEmail(text)}
              placeholder="example@email.com"
              selectionColor="red"
              placeholderTextColor={'#868687'}
            />
          </View>
          {emailErr? <Text style={styles.errorText}>{emailErr}</Text> : null}
        </View>
        <View style={styles.imageCard}>
            {data.adminallimage && data.adminallimage.length > 0 && (
              <Image
                style={styles.customerImage}
                source={{ uri: data.adminallimage }}
              />
            )}
          </View>
            <View style={styles.centeredContainer}>
              <Text style={{fontWeight:'600', color: '#f9f9f9', fontSize: moderateScale(18), borderBottomWidth:scale(1), borderColor: '#F9F9F9', paddingVertical: verticalScale(5), textAlign:'center', }}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(30),}}>
                <Text style={{color: '#F9F9F9', fontSize: moderateScale(12), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4),textAlignVertical:'center'}}>Ex.showroom price (including GST)</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹  {data.exShowroomPrice}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(30),paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4),textAlignVertical:'center' }}>RTO Charges</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹ {data.roadtax}</Text>
              </View>
              <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', paddingVertical:verticalScale(5),alignItems:'center'}}> 
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between',}}>
                    {/* Insurance */}
                    <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(4), letterSpacing: moderateScale(0.4)}}>Insurance</Text>
                    {data.insurance.map((insu)=>(
                        <View style={{display:'flex',flexDirection:'row'}}>
                            {/* Basic */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                <RadioButton
                                  value={isSelected}
                                  status={ checked === 'Basic' ? 'checked' : 'unchecked' }
                                  onPress={() =>handlebasic(insu.Basic)}
                                  color="#f9f9f9"
                                  uncheckedColor="#f9f9f9"
                                  style={styles.radioButton}
                                />
                                <Text style={{color:'#F9F9F9',fontSize:moderateScale(11),letterSpacing: moderateScale(0.4)}}>Basic</Text>
                              </View> 
                              {/* Nilldip */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                <RadioButton
                                  value={isNilldip}
                                  status={ checked === 'Nilldip' ? 'checked' : 'unchecked' }
                                  onPress={() =>handleNill(insu.Nildip)}
                                  color="#f9f9f9"
                                  uncheckedColor="#f9f9f9"
                                  style={styles.radioButton}
                                />
                                <Text style={{color:'#F9F9F9',fontSize:moderateScale(11),letterSpacing: moderateScale(0.4)}}>Nildip</Text>
                              </View>
                              {/* EP */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                <RadioButton
                                    value={EP}
                                    status={ checked === 'EP' ? 'checked' : 'unchecked' }
                                    onPress={() =>handleEP(insu.Ep)}
                                    color="#f9f9f9"
                                    uncheckedColor="#f9f9f9"
                                    style={styles.radioButton}
                                />
                                <Text style={{color:'#F9F9F9',fontSize:moderateScale(11), letterSpacing: moderateScale(0.4)}}>EP</Text>
                              </View>
                              {/* RTI */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                  <RadioButton
                                    value={RTI}
                                    status={ checked === 'RTI' ? 'checked' : 'unchecked' }
                                    onPress={() =>handleRTI(insu.RTI)}
                                    color="#f9f9f9"
                                    uncheckedColor="#f9f9f9"
                                    style={styles.radioButton}
                                  />
                                  <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>RTI</Text>
                              </View>
                        </View>
                        ))}
                  </View>
                  <Text style={{color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹{ins}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(30),paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4),textAlignVertical:'center' }}>Registartion(Fixed)</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹ {data.registration}</Text>
              </View>
              <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', paddingVertical:verticalScale(5),alignItems:'center'}}> 
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between',}}>
                  {/* hypothication */}
                    <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(3), letterSpacing: moderateScale(0.4)}}>Hypothecation</Text>
                      {data.hypothication.map((hype)=>(
                    <View style={{display:'flex',flexDirection:'row'}}>
                      {/* YES */}
                      <View style={{alignItems:'center',flexDirection:'row'}}>
                        <RadioButton
                          value={YES}
                          status={ chekedhypo === 'YES' ? 'checked' : 'unchecked' }
                          onPress={() =>handleYes(hype.Yes)}
                          color="#f9f9f9"
                          uncheckedColor="#f9f9f9"
                          style={styles.radioButton}
                        />
                        <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>Yes</Text>
                      </View>
                      {/* NO */}
                      <View style={{alignItems:'center',flexDirection:'row'}}>
                        <RadioButton
                          value={YES}
                          status={ chekedhypo === 'NO' ? 'checked' : 'unchecked' }
                          onPress={() =>handleNo(hype.No)}
                          color="#f9f9f9" 
                          uncheckedColor="#f9f9f9"
                          style={styles.radioButton}
                        />
                        <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>No</Text>
                      </View>
                    </View>
                  ))}
                  </View>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹  {hype}</Text>
              </View>
              <View style={{ flexDirection: 'row',alignItems:'center', justifyContent: 'space-between',height: verticalScale(50)}}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(16), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4), fontWeight: '600'}}>OnRoad Price total :</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center'  }}>₹  {totalonroad}</Text>
              </View>
              </View>
              <View style={styles.optionaladdoncontainer}>
                <Text style={{fontWeight:'600', color: '#f9f9f9', fontSize: moderateScale(18), borderBottomWidth:scale(1), borderColor: '#F9F9F9', paddingVertical: verticalScale(5), textAlign:'center', }}>Optional Add Ons/Products</Text>
                <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', paddingVertical:verticalScale(5),alignItems:'center'}}>
                  {/* extendedwarranty */}
                      {data.extendedwarranty.map((ans) => (
                    <View key={index} style={{ flexDirection: 'column', justifyContent: 'space-between',}}>
                      <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(3), letterSpacing: moderateScale(0.4)}}>Extended Warranty</Text>
                        <View style={{display:'flex',flexDirection:'row', paddingBottom:verticalScale(5)}}>
                        {/* 4 */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                              <RadioButton
                                value={four}
                                status={ Checkwarenty === 'four' ? 'checked' : 'unchecked' }
                                onPress={() =>handleFourChange(ans.fouryears)}
                                color="#f9f9f9"
                                uncheckedColor="#f9f9f9"
                                style={styles.radioButton}
                              />
                              <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>4 Years</Text>
                          </View>
                        {/* 5 */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <RadioButton
                              value={five}
                              status={ Checkwarenty === 'five' ? 'checked' : 'unchecked' }
                              onPress={() =>handleFiveChange(ans.fiveyears)}
                              color="#f9f9f9"
                              uncheckedColor="#f9f9f9"
                              style={styles.radioButton}
                            />     
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>5 Years</Text>
                          </View>
                        {/* 5+RSA */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                          <RadioButton
                                value={fiveRsa}
                                status={ Checkwarenty === 'fiveRsa' ? 'checked' : 'unchecked' }
                                onPress={() =>handleFiveRsaChange(ans.fiveplusRSAyears)}
                                color="#f9f9f9"
                                uncheckedColor="#f9f9f9"
                                style={styles.radioButton}
                              />
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12), letterSpacing: moderateScale(0.4)}}>5 Years+RSA</Text>
                          </View>
                      </View>
                    </View>
                    ))}
                  <Text style={{color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹  {selectedOption}</Text>
                </View>
               {/* style,comfort,safty tabs */}
              <View style={{ margin:scale(4),padding:scale(3), flexDirection:'row' ,borderRadius:scale(6), backgroundColor:'#111111'}}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between',alignItems: 'flex-start', alignSelf: 'stretch'}}>
                  <Text style={{ ...styles.tab, borderColor: selectedTab === 'Style' ? '#F9F9F9' : '#999999', backgroundColor: selectedTab === 'Style' ? '#434242' : '#111111' }} onPress={() => setSelectedTab('Style')}>
                    Style
                  </Text>
                  <Text style={{ ...styles.tab, borderColor: selectedTab === 'Comfort' ? '#F9F9F9' : '#999999', backgroundColor: selectedTab === 'Comfort' ? '#434242' : '#111111' }} onPress={() => setSelectedTab('Comfort')}>
                    Comfort
                  </Text>
                  <Text style={{ ...styles.tab, borderColor: selectedTab === 'Protection' ? '#F9F9F9' : '#999999', backgroundColor: selectedTab === 'Protection' ? '#434242' : '#111111' }} onPress={() => setSelectedTab('Protection')}>
                    Protection
                  </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',width:scale(210),marginHorizontal:moderateScale(2)}}>
                {selectedTab === 'Style' && (
                <>
                  {/* Show mirrors dropdown */}
                  <View style={styles.dropdown}>
                    <Picker
                      selectedValue={selectedMirrorstext}
                      onValueChange={(itemValue) => {
                        if (itemValue === "") {
                        setSelectedMirrorsvalue(0);
                        } else {
                        const selectedMirror = data.mirrors.find(
                        (mirror) => mirror.mirrorstext === itemValue
                        );
                        setSelectedMirrorsvalue(selectedMirror ? selectedMirror.mirrorsvalue : 0);
                        }
                        setSelectedMirrorstext(itemValue);
                        }}
                    >
                    <Picker.Item label="Mirrors"  value="" style={{ color: '#111111' }}
                    />
                    {data.mirrors.map((mirror) => (
                      <Picker.Item
                        key={mirror._id}
                        label={`${mirror.mirrorstext} - ₹ ${mirror.mirrorsvalue}`}
                        value={mirror.mirrorstext}
                        style={{ color: '#111111' }}
                      />
                      ))}
                    </Picker>
                  </View>
                  {/* Show oil filler dropdown */}
                  <View style={styles.dropdown}>
                    <Picker
                      selectedValue={selectedOilFillerCapText}
                      onValueChange={(itemValue) => {
                      if (itemValue === "") {
                      setSelectedOilFillerCapValue(0);
                      } else {
                      const selectedOilFillerCap = data.oilfillercap.find(
                      (oil) => oil.oilfillercaptext === itemValue
                      );
                      setSelectedOilFillerCapValue(selectedOilFillerCap ? selectedOilFillerCap.oilfillercapvalue : 0);
                      }
                      setSelectedOilFillerCapText(itemValue);
                      }}
                    >
                    <Picker.Item label="Oilfiller cap" value="" style={{ color: '#111111' }}/>
                      {data.oilfillercap.map((oil) => (
                      <Picker.Item
                        key={oil._id}
                        label={`${oil.oilfillercaptext} - ₹ ${oil.oilfillercapvalue}`}
                        value={oil.oilfillercaptext}
                        style={{ color: '#111111' }}
                      />
                     ))}
                    </Picker>
                  </View>
                  {/* Show headlight dropdown */}
                  <View style={styles.dropdown}>
                    <Picker
                      selectedValue={selectedHeadLightText}
                      onValueChange={(itemValue) => {
                        if (itemValue === "") {
                        setSelectedHeadLightValue(0);
                        } else {
                        const selectedHeadLight = data.headlight.find(
                        (headlight) => headlight.headlighttext === itemValue
                        );
                        setSelectedHeadLightValue(selectedHeadLight ? selectedHeadLight.headlightvalue : 0);
                        }
                        setSelectedHeadLightText(itemValue);
                      }}
                    >
                    <Picker.Item label="Headlight" value="" style={{ color: '#111111' }}/>
                      {data.headlight.map((headlight) => (
                      <Picker.Item
                        key={headlight._id}
                        label={`${headlight.headlighttext} - ₹ ${headlight.headlightvalue}`}
                        value={headlight.headlighttext}
                        style={{ color: '#111111' }}
                      />
                      ))}
                    </Picker>
                  </View>
                </>
              )}
              {selectedTab === 'Comfort' && (
              <>
              {/* Windshields */}
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedWindshieldsText}
                  onValueChange={(itemValue) => {
                  if (itemValue === "") {
                  setSelectedWindshieldsValue(0);
                  } else {
                  const selectedWindshield = data.windshields.find(
                  (windshield) => windshield.windshieldstext === itemValue
                  );
                  setSelectedWindshieldsValue(selectedWindshield ? selectedWindshield.windshieldsvalue : 0);
                  }
                  setSelectedWindshieldsText(itemValue);
                  }}
                >
                <Picker.Item label="Windshields" value="" style={{ color: '#111111' }}/>
                  {data.windshields.map((windshield) => (
                    <Picker.Item
                      key={windshield._id}
                      label={`${windshield.windshieldstext} - ₹ ${windshield.windshieldsvalue}`}
                      value={windshield.windshieldstext}
                      style={{ color: '#111111' }}
                    />
                  ))}
                </Picker>
              </View>
              {/* Panniers */}
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedPanniersText}
                  onValueChange={(itemValue) => {
                    if (itemValue === "") {
                    setSelectedPanniersValue(0);
                    } else {
                    const selectedPannier = data.panniers.find(
                    (pannier) => pannier.pannierstext === itemValue
                    );
                    setSelectedPanniersValue(selectedPannier ? selectedPannier.panniersvalue : 0);
                    }
                    setSelectedPanniersText(itemValue);
                  }}
                >
                <Picker.Item label="Panniers" value="" style={{ color: '#111111' }}/>
                  {data.panniers.map((pannier) => (
                    <Picker.Item
                      key={pannier._id}
                      label={`${pannier.pannierstext} - ₹ ${pannier.panniersvalue}`}
                      value={pannier.pannierstext}
                      style={{ color: '#111111' }}
                    />
                  ))}
                </Picker>
              </View>
              {/* Seats */}
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedSeatsText}
                  onValueChange={(itemValue) => {
                    if (itemValue === "") {
                    setSelectedSeatsValue(0);
                    } else {
                    const selectedSeat = data.seats.find(
                    (seat) => seat.seatstext === itemValue
                    );
                    setSelectedSeatsValue(selectedSeat ? selectedSeat.seatsvalue : 0);
                    }
                    setSelectedSeatsText(itemValue);
                  }}
                >
                <Picker.Item label="Seats" value="" style={{ color: '#111111' }}/>
                  {data.seats.map((seat) => (
                    <Picker.Item
                      key={seat._id}
                      label={`${seat.seatstext} - ₹ ${seat.seatsvalue}`}
                      value={seat.seatstext}
                      style={{ color: '#111111' }}
                    />
                  ))}
                </Picker>
              </View>
              {/* Backrest */}
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedBackrestText}
                  onValueChange={(itemValue) => {
                    if (itemValue === "") {
                    setSelectedBackrestValue(0);
                    } else {
                    const selectedBackrest = data.backrests.find(
                    (backrest) => backrest.backreststext === itemValue
                    );
                    setSelectedBackrestValue(selectedBackrest ? selectedBackrest.backrestsvalue : 0);
                    }
                    setSelectedBackrestText(itemValue);
                  }}
                >
                <Picker.Item label="Backrest" value="" style={{ color: '#111111' }}/>
                  {data.backrests.map((backrest) => (
                    <Picker.Item
                      key={backrest._id}
                      label={`${backrest.backreststext} - ₹ ${backrest.backrestsvalue}`}
                      value={backrest.backreststext}
                      style={{ color: '#111111' }}
                    />
                  ))}
                </Picker>
              </View>
              {/* Foot Pegs */}
              <View style={styles.dropdown}>
                <Picker
                  selectedValue={selectedFootPegsText}
                  onValueChange={(itemValue) => {
                    if (itemValue === "") {
                    setSelectedFootPegsValue(0);
                    } else {
                    const selectedFootPeg = data.footpegs.find(
                    (footpeg) => footpeg.footpegstext === itemValue
                    );
                    setSelectedFootPegsValue(selectedFootPeg ? selectedFootPeg.footpegsvalue : 0);
                    }
                    setSelectedFootPegsText(itemValue);
                  }}
                >
                <Picker.Item label="Foot Pegs" value="" style={{ color: '#111111' }}/>
                  {data.footpegs.map((footpeg) => (
                  <Picker.Item
                    key={footpeg._id}
                    label={`${footpeg.footpegstext} - ₹ ${footpeg.footpegsvalue}`}
                    value={footpeg.footpegstext}
                    style={{ color: '#111111' }}
                  />
                  ))}
                </Picker>
              </View>
            </>
          )}
          {selectedTab==='Protection'&&(
          <>
          {/* Engine Guards */}
          <View style={styles.dropdown}>
            <Picker
              selectedValue={selectedEngineGuardsText}
              onValueChange={(itemValue) => {
                if (itemValue === "") {
                setSelectedEngineGuardsValue(0);
                } else {
                const selectedEngineGuard = data.enginegaurds.find(
                (engineGuard) => engineGuard.enginegaurdstext === itemValue
                );
                setSelectedEngineGuardsValue(selectedEngineGuard ? selectedEngineGuard.enginegaurdsvalue : 0);
                }
                setSelectedEngineGuardsText(itemValue);
              }}
            >
            <Picker.Item label="Engine Guards" value="" style={{ color: '#111111' }}/>
              {data.enginegaurds.map((engineGuard) => (
                <Picker.Item
                  key={engineGuard._id}
                  label={`${engineGuard.enginegaurdstext} - ₹ ${engineGuard.enginegaurdsvalue}`}
                  value={engineGuard.enginegaurdstext}
                  style={{ color: '#111111' }}
                />
              ))}
            </Picker>
          </View>
          {/* Sump Guards */}
          <View style={styles.dropdown}>
            <Picker
              selectedValue={selectedSumpGuardsText}
              onValueChange={(itemValue) => {
                if (itemValue === "") {
                setSelectedSumpGuardsValue(0);
                } else {
                const selectedSumpGuard = data.sumpgaurds.find(
                (sumpGuard) => sumpGuard.sumpgaurdstext === itemValue
                );
                setSelectedSumpGuardsValue(selectedSumpGuard ? selectedSumpGuard.sumpgaurdsvalue : 0);
                }
                setSelectedSumpGuardsText(itemValue);
              }}
            >
            <Picker.Item label="Sump Guards" value="" style={{ color: '#111111' }}/>
              {data.sumpgaurds.map((sumpGuard) => (
                <Picker.Item
                  key={sumpGuard._id}
                  label={`${sumpGuard.sumpgaurdstext} - ₹ ${sumpGuard.sumpgaurdsvalue}`}
                  value={sumpGuard.sumpgaurdstext}
                  style={{ color: '#111111' }}
                />
              ))}
            </Picker>
          </View>
          {/* Safety Accessories */}
          <View style={styles.dropdown}>
            <Picker
              selectedValue={selectedSafetyAccessoriesText}
              onValueChange={(itemValue) => {
                if (itemValue === "") {
                setSelectedSafetyAccessoriesValue(0);
                } else {
                const selectedSafetyAccessory = data.safetyaccessories.find(
                (safetyAccessory) => safetyAccessory.safetyaccessoriestext === itemValue
                );
                setSelectedSafetyAccessoriesValue(selectedSafetyAccessory ? selectedSafetyAccessory.safetyaccessoriesvalue : 0);
                }
                setSelectedSafetyAccessoriesText(itemValue);
              }}
            >
            <Picker.Item label="Safety Accessories" value="" style={{ color: '#111111' }}/>
              {data.safetyaccessories.map((safetyAccessory) => (
                <Picker.Item
                  key={safetyAccessory._id}
                  label={`${safetyAccessory.safetyaccessoriestext} - ₹ ${safetyAccessory.safetyaccessoriesvalue}`}
                  value={safetyAccessory.safetyaccessoriestext}
                  style={{ color: '#111111' }}
                />
              ))}
            </Picker>
          </View>
        </>
        )}
        </View>
      </View>
      <View style={styles.priceContainer1}>
          <Text style={{ color: '#f9f9f9', fontSize: moderateScale(22), flex: 1,marginLeft:moderateScale(15) }}>GrandTotal</Text>
          <Text style={{ color: '#f9f9f9', fontSize: moderateScale(22), flex: 1, textAlign: 'right',marginRight:moderateScale(30) }}>₹  {grandtotal}</Text>
      </View>
    </View>
    <View style={styles.bottombuttonscontainer}>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <View style={{ flexDirection: 'row', alignItems: 'center',gap: 20}}>
          <Ionicons name='document-text' size={moderateScale(20)} color={'#111111'} />
          <Text style={styles.shareButtonText}>Preview & Share Doc</Text>
        </View>
      </TouchableOpacity>
    </View>
</View>
))}
</ScrollView>
);
};
const styles = StyleSheet.create({
horizontalcontainer:{
  flexDirection:'row'
},
container: {
  backgroundColor:'#000000',
  paddingHorizontal: moderateScale(10),
  paddingTop: verticalScale(10),
},
dropdown: {
  height: scale(30),
  width:scale(200),
  justifyContent: 'center',
  paddingVertical: verticalScale(5),
  backgroundColor:'#F9F9F9',
  borderRadius:scale(2),
  margin: moderateScale(3),
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
headertitle: {
  color: '#F9F9F9',
  fontSize: moderateScale(16),
  fontWeight: 'semibold',
  textAlign: 'center',
  letterSpacing: moderateScale(0.5),
},
line: {
  height: verticalScale(1),
  backgroundColor: '#F9F9F9',
},
tab: {
  color:'#F9F9F9',
  fontSize: moderateScale(16),
  fontWeight: '700',
  letterSpacing: moderateScale(0.5),
  paddingVertical:verticalScale(25),
  marginHorizontal:moderateScale(2),
  marginVertical:verticalScale(5),
  borderRadius: scale(6),
  textAlign: 'center',
  textAlignVertical:'center',
  height:scale(70),
  width:scale(100),
  alignItems:'center',
  alignContent:'center',
  borderColor: '#F9F9F9',
  borderWidth:scale(1),
},
radioButton: {
  borderColor: '#f9f9f9'
},
priceContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: moderateScale(1),
  borderBottomColor: '#F9F9F9',
  marginBottom: moderateScale(20),
},
priceContainer1: {
  height:verticalScale(70),
  alignItems:'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderTopWidth: moderateScale(1),
  borderTopColor: '#F9F9F9',
  marginTop: moderateScale(30),
},
title: {
  color: '#f9f9f9',
  fontSize: moderateScale(16),
  fontWeight: '600',
  marginTop: verticalScale(10),
  marginBottom: verticalScale(10),
  letterSpacing: moderateScale(0.4),
  alignItems: 'center',
  alignSelf: 'stretch',
},
card: {
  flexDirection:'column',
  borderWidth: moderateScale(1),
  borderColor: '#f9f9f9',
  borderRadius: scale(6),
  justifyContent:'center',
  backgroundColor: 'black',
  marginTop: verticalScale(5),
  paddingHorizontal: moderateScale(5),
  paddingVertical:verticalScale(5)
},
cardContent: {
  flex:1,
  flexDirection: 'column',
  alignItems: 'flex-start',
},
labelText: {
  flex:1,
  color: '#f9f9f9',
  fontSize: moderateScale(14),
  paddingVertical:verticalScale(2),
  fontWeight: '400',
  letterSpacing: moderateScale(0.4),
},
input: {
  flex: 1,
  paddingVertical:verticalScale(5),
  width:'100%',
  color: '#111111',
  backgroundColor: '#cbcbca',
  borderRadius:scale(5),
  paddingLeft: moderateScale(10),
  fontSize:scale(14),
},
imageCard: {
  alignItems: 'center',
  marginVertical: verticalScale(10),
  height: scale(130),
  backgroundColor:'#111111',
  borderWidth:scale(1),
  borderColor:'#979797',
  borderRadius:scale(6),
  justifyContent:'center'
},
customerImage: {
  width: scale(150),
  height: scale(120),
  resizeMode: 'contain',
  borderRadius: moderateScale(6),
  borderWidth:scale(1),
  borderColor:'#979797'
},
centeredContainer: {
  height: verticalScale(320),
  borderRadius:moderateScale(6),
  backgroundColor:'#434242',
  marginBottom: verticalScale(5),
  gap: scale(5),
  borderColor:'#f9f9f9',
  borderWidth: moderateScale(0.5),
  justifyContent:'space-between'
},
datacardtext: {
  color: '#f9f9f9',
  fontSize: moderateScale(16),
  textDecorationLine: 'underline',
  marginLeft:moderateScale(5),
  marginBottom: verticalScale(4),
  textAlign:'center',
},
optionaladdoncontainer:{
  gap: scale(5),
  borderRadius:moderateScale(6),
  backgroundColor: '#434242',
  borderColor:'#f9f9f9',
  borderWidth: moderateScale(1),
  paddingBottom:verticalScale(5),
},
bottombuttonscontainer:{
  alignItems:'center',
  height:scale(40), 
  marginTop: verticalScale(30),
  marginBottom:verticalScale(20),
},
shareButton: {
  backgroundColor:'#f9f9f9',
  borderWidth: moderateScale(1),
  borderRadius: moderateScale(6),
  width:scale(250),
  height: scale(40),
  alignItems: 'center',
  justifyContent:'center'
},
shareButtonText: {
  color: '#111111',
  fontSize: moderateScale(18),
  fontWeight: '500',
  textAlign:'center',
},
errorText: {
  color: 'red',
  marginTop: 0,
  fontSize: moderateScale(10),
  textAlign: 'center',
  marginBottom:verticalScale(5),
  letterSpacing: moderateScale(0.2),
  fontWeight: '500'
},
});
export default Share;