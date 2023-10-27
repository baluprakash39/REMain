import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button,ScrollView  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
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

const Care = ({route}) => {
  const {t} = useTranslation();
  const { vehicleId } = route.params;
  console.log('vehicle',vehicleId)
  const [dataArray, setDataArray] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false); 
  console.log('dataara',dataArray)

  useEffect(() => {
 
  
     fetchBikeDetails(vehicleId);
    
  }, []);

  const fetchBikeDetails = async (vehicleId) => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
  
      const url = `https://vast-newt-crown.cyclic.app/formdetails/getbike/${vehicleId}`;
  
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const bike = response.data;
      setDataArray([]);
      setDataArray((prevDataArray) => [...prevDataArray, bike]);
      console.log('Bike data stored successfully', bike);
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };
  


  const navigation = useNavigation();
    const [Basic, setValue] = useState('');
    const [Nildip, setnilldip] = useState('');
    const [Ep, setEP] = useState('');
    const [RTI, setRTI] = useState('');
    const [Yes,setYES]=useState('');
    const [No,setNO]=useState('');
    const [fouryears,setfour]=useState('');
    const [fiveyears,setfive]=useState('');
    const[fiveplusRSAyears,setRsa]=useState('')

    const navigateToInventory = () => {
      navigation.navigate('Inventory');
    };
    // Error messages state
  const [basicError, setBasicError] = useState('');
  const [nilldipError, setNilldipError] = useState('');
  const [epError, setEPError] = useState('');
  const [rtiError, setRTIError] = useState('');
  const [yesError, setYESError] = useState('');
  const [noError, setNOError] = useState('');
  const [fourError, setFourError] = useState('');
  const [fiveError, setFiveError] = useState('');
  const [fiveRsaError, setRsaError] = useState('');



  
  



 
  
  const handleSubmit = async () => {
    // Reset all error states initially
    setBasicError('');
    setNilldipError('');
    setEPError('');
    setRTIError('');
    setYESError('');
    setNOError('');
    setFourError('');
    setFiveError('');
    setRsaError('');
  
    // Validate each input field
    if (!Basic) {
      setBasicError('Basic insurance value is required');
    }
    if (!Nildip) {
      setNilldipError('Nilldip value is required');
    }
    if (!Ep) {
      setEPError('EP value is required');
    }
    if (!RTI) {
      setRTIError('RTI value is required');
    }
    if (!Yes) {
      setYESError('Yes value is required');
    }
    if (!No) {
      setNOError('No value is required');
    }
    if (!fouryears) {
      setFourError('4Years value is required');
    }
    if (!fiveyears) {
      setFiveError('5years value is required');
    }
    if (!fiveplusRSAyears) {
      setRsaError('5years+Rsa value is required');
    }
  
    // Check if any errors exist
    if (
      !Basic ||
      !Nildip ||
      !Ep ||
      !RTI ||
      !Yes ||
      !No ||
      !fouryears ||
      !fiveyears ||
      !fiveplusRSAyears
    ) {
      // If there are errors, do not proceed with form submission
      return;
    }
  
    try {
      // Prepare the data to be sent in the POST request
      const token = await AsyncStorage.getItem('token');
      const data = {
        Basic,
        Nildip,
        Ep,
        RTI,
        Yes,
        No,
        fouryears,
        fiveyears,
        fiveplusRSAyears,
      };
  
      // Make the POST request to your API endpoint
      const response = await axios.post(
        `https://vast-newt-crown.cyclic.app/formdetails/uploadcare/${vehicleId}`,
        data,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
  
      // Handle the response as needed
      console.log('Response:', response.data);
      navigation.navigate('Inventory')
      // You can add logic here to handle success or navigate to another screen.
  
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show an error message, etc.
    }
  };
const handleBasicChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
      setValue(text);
      setBasicError('');
    } else {
      setValue('');
      setBasicError('Required number');
    }
  };
const handlenillChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setnilldip(text);
      setNilldipError('');
    } else {
      setnilldip('');
      setNilldipError('Required number');
    }
  };
const handleEpChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setEP(text);
     setEPError('');
    } else {
      setEP('');
      setEPError('Required number');
    }
  };
const  handleRtichange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setRTI(text);
     setRTIError('');
    } else {
      setRTI('');
      setRTIError('Required number');
    }
  };
const  handleHypochange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setYES(text);
     setYESError('');
    } else {
      setYES('');
      setYESError('Required number');
    }
  };
const handleHypozeroChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setNO(text);
      setNOError('');
    } else {
      setNO('');
      setNOError('Required number');
    }
  };
  const handleFourChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setfour(text);
      setFourError('');
    } else {
      setfour('');
      setFourError('Required number');
    }
  };
  const handleFiveChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setfive(text);
      setFiveError('');
    } else {
      setfive('');
      setFiveError('Required number');
    }
  };
const handleFiversaChange = (text) => {
    // Check if the input is a valid number
    if (/^\d+$/.test(text)) {
     setRsa(text);
      setRsaError('');
    } else {
      setRsa('');
      setRsaError('Required number');
    }
  };
return (
   <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.page}>
        {dataArray.map((bike, index) => (
      <View key={index} style={styles.container}>
        {/* Your content here */}
        <View style={styles.header}>
          <View style={{ alignContent: 'center'}}>
            <TouchableOpacity onPress={navigateToInventory} style={styles.backButton}>
              <MaterialIcons name='arrow-back' size={moderateScale(20)} color={'#F9F9F9'}/>
            </TouchableOpacity>
          </View>
            <View style={{ justifyContent: 'center', width:scale(315), height:scale(20)}}>
            <Text style={styles.title}>Vehicle Care</Text>
            </View>
        </View>
        <View style={styles.line}></View>
          <View style={{ gap: scale(5)}}>
            <View style={{ flexDirection: 'row',marginTop:verticalScale(10) }}>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Vehicle</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4)}}>Scooty</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Model</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4)}}>125</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>EngineCC</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4) }}>250cc</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Color</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
              <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4) }}>Red</Text>
            </View>
          </View>
          {/* Insurance  view*/}
          <Text style={{color: '#F9F9F9', fontSize: moderateScale(16), fontWeight: '600', marginTop: verticalScale(15)}}>
            Insurance
          </Text>
          <View style={{ flexDirection: 'column', marginTop: verticalScale(10),gap: scale(5), width: scale(335) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335) }}>
              <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>Basic</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter value"
                  selectionColor="red"
                  placeholderTextColor="#868687"
                  value={Basic}
                  // onChangeText={(text) => setValue(text)}
                  onChangeText={(text) => handleBasicChange(text)}
                  keyboardType="numeric"
                  />
            </View>
            {basicError ? <Text style={styles.errorText}>{basicError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335)  }}>
              <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>Nildip</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter value"
                  selectionColor="red"
                  placeholderTextColor="#868687"
                  value={Nildip}
                  // onChangeText={(text) =>setnilldip(text)}
                  onChangeText={(text) =>handlenillChange(text)}
                  keyboardType="numeric"
                  />
            </View>
            {nilldipError ? <Text style={styles.errorText}>{nilldipError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335)  }}>
              <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>EP</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter value"
                  selectionColor="red"
                  placeholderTextColor="#868687"
                  value={Ep}
                  onChangeText={(text)=> handleEpChange(text)}
                  keyboardType="numeric"
                  />
            </View>
            {epError ? <Text style={styles.errorText}>{epError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335)  }}>
              <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>RTI</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter value"
                  selectionColor="red"
                  placeholderTextColor="#868687"
                  value={RTI}
                  onChangeText={(text)=> handleRtichange(text)}
                  keyboardType='numeric'
                  />
            </View>
          {rtiError ? <Text style={styles.errorText}>{rtiError}</Text> : null}
      </View>  
      {/* Hypothication view */}
      <Text style={{color: '#F9F9F9', fontSize: moderateScale(16), fontWeight: '600', marginTop: verticalScale(15)}}>
        Hypothication
      </Text>
      <View style={{ flexDirection: 'column', marginTop: verticalScale(10),gap: scale(5), width: scale(335) }}>
         <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335) }}>
            <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>Yes</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter value"
                selectionColor="red"
                placeholderTextColor="#868687"
                value={Yes}
                onChangeText={(text) => handleHypochange (text)}
                keyboardType='numeric'
              />
          </View>
          {yesError ? <Text style={styles.errorText}>{yesError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335)}}>
            <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>No</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter value"
              selectionColor="red"
              placeholderTextColor="#868687"
              value={No}
              onChangeText={(text) =>handleHypozeroChange(text)}
              keyboardType='numeric'
            />
          </View>
          {noError ? <Text style={styles.errorText}>{noError}</Text> : null}
        </View>
        {/* Extednedwarenty */}
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(16), fontWeight: '600', marginTop: verticalScale(15) }}>
            Extended Warranty
          </Text>


        <View style={{ flexDirection: 'column', marginTop: verticalScale(10),gap: scale(5), width: scale(335) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335) }}>
            <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>4Years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter value"
              selectionColor="red"
              placeholderTextColor="#868687"
              value={fouryears}
              onChangeText={(text) =>  handleFourChange (text)}
            />
          </View>
          {fourError ? <Text style={styles.errorText}>{fourError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335) }}>
            <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>5years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter value"
              selectionColor="red"
              placeholderTextColor="#868687"
              value={fiveyears}
              onChangeText={(text) =>handleFiveChange(text)}
            />
          </View>
          {fiveError ? <Text style={styles.errorText}>{fiveError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', width:scale(335) }}>
            <Text style={{ fontSize:moderateScale(14), fontWeight: '500', width: scale(80),letterSpacing: moderateScale(0.2), marginRight: moderateScale(10), color: '#F9F9F9' }}>5years+Rsa</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter value"
              selectionColor="red"
              placeholderTextColor="#868687"
              value={fiveplusRSAyears}
              onChangeText={(text) => handleFiversaChange(text)}
            />
          </View>
          {fiveRsaError ? <Text style={styles.errorText}>{fiveRsaError}</Text> : null}
        


        </View>
          <View style={styles.bottombuttons}>
              <TouchableOpacity style={styles.bottomeditbutton} onPress={handleSubmit}>
                  <MaterialIcons name='save' size={scale(15)} color={'#111111'}/>
                <Text style={{ color: '#303030', fontSize: moderateScale(18), fontWeight: '600', textAlign:'center', letterSpacing: moderateScale(0.4)}}>Save</Text>
              </TouchableOpacity>
            </View>
      </View>
          ))}
      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    
    textAlign:'center',
    fontSize:17
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
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20, // Adjust this value as needed
        marginBottom: 100, // Adjust this value as needed
      },
      
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
      },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
    paddingTop: verticalScale(10),
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
  errorText: {
    color: 'red',
    textAlign:'center',
    fontSize:moderateScale(10)
  },
  inputField: {
      flex: 1,
      height: verticalScale(30),
      backgroundColor: '#cbcbca',
      borderRadius: 5,
      paddingLeft: moderateScale(10),
      color: '#111111',
      fontSize: moderateScale(10),
    },
  bottombuttons:{ 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems:'center',
    // width:scale(330), 
    width:'100%',
    height:scale(40), 
    marginTop: verticalScale(40),
    marginHorizontal: moderateScale(5),
  },
 bottomeditbutton:{
      borderColor: '#868687',
      backgroundColor: '#f9f9f9',
      borderWidth: moderateScale(1),
      borderRadius: scale(6),
      // width: scale(170),
      width:'70%',
      height: scale(40),
      justifyContent:'center',
      alignItems:'center',
      gap: moderateScale(15),
      flexDirection:'row',
      // marginLeft:scale(105)
    },
});

export default Care;

