

// WORKING CODE//
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'; // Import ScrollView for scrolling if needed
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const Share = ({route}) => {
  const { vehicleId } = route.params;
  console.log(vehicleId)
  // const { isDarkTheme } = useTheme();
  const navigation = useNavigation();
    const [selectedStyle, setSelectedStyle] = useState(null);

  const [value, setValue] = useState(null);
  // const [dataArray, setDataArray] = useState([]);
  const [customername, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailid, setEmailId] = useState('');
  
  //date//
  const [enquiryDate, setEnquiryDate] = useState('');
  //checkboxes//
  const [dataArray, setDataArray] = useState([]);
    const [isSelected, setSelection] = useState(false);
  const [isNilldip,setnilldip]=useState(false);
  const [EP,setEP]=useState(false);
  const[RTI,setRTI]=useState(false);
  const [YES,setYes]=useState(false);
  const[NO,setNo]=useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [fiveRsa, setFiveRsa] = useState(false);
  // const [selectedTab, setSelectedTab] = useState('Style');
  const [selectedValue, setSelectedValue] = useState('default'); // Initialize

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
const [selectedMirrorstext, setSelectedMirrorstext] = useState(''); // Initialize with a default value
  const [selectedMirrorsvalue, setSelectedMirrorsvalue] = useState(0);
  const [selectedOilFillerCapText, setSelectedOilFillerCapText] = useState(''); // Initialize with a default value for oilfillercap
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
    setFour(true);
    setFive(false);
    setFiveRsa(false);
    setSelectedOption(out);
    setextext(text)
  };

const handleFiveChange = (out,text) => {
  setFour(false);
  setFive(true);
  setFiveRsa(false);
  setSelectedOption(out);
  setextext(text)
};

const handleFiveRsaChange = (out,text) => {
  setFour(false);
  setFive(false);
  setFiveRsa(true);
setSelectedOption(out);
setextext(text)
};
const handleYes=(out,text)=>{
setYes(true)
setNo(false)
sethype(out)
sethypetext(text)
}

const handleNo=(out,text)=>{
setYes(false)
setNo(true);
sethype(out);
sethypetext(text)
}

const handlebasic=(out,text)=>{
setSelection(true);
setnilldip(false);
setEP(false);
setRTI(false);
setins(out)
settext(text)
}

const handleNill=(out,text)=>{
setSelection(false);
setnilldip(true);
setEP(false);
setRTI(false);
setins(out)
settext(text)
}
const handleEP=(out,text)=>{
setSelection(false);
setnilldip(false);
setEP(true);
setRTI(false);
setins(out)
settext(text)
}

const handleRTI=(out,text)=>{
setSelection(false);
setnilldip(false);
setEP(false);
setRTI(true);
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
    // Basic:false,
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
      // Store the formData in AsyncStorage
      await AsyncStorage.setItem('formData', JSON.stringify(formData));

      // Navigate to the SharePdf screen and pass formData as a parameter
      navigation.navigate('SharePdf', { 
        formData,
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
        ins,
        instext,
        hype,
        hypetext,
        exwarrantytext,
        reimage,
        totalonroad,
        grandtotal,
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
    } catch (error) {
      console.error('Error storing formData:', error);
    }
  };

  useEffect(() => {
 
  
    fetchBikeDetails(vehicleId);
   
  }, []);
  const fetchBikeDetails = async (vehicleId) => {
    const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbike/${vehicleId}`;

    try {
      const response = await axios.get(url);
      const bike = response.data;
      const{exShowroomPrice,roadtax,registration}=bike
      const exShowroompriceNumber = parseFloat(exShowroomPrice.replace(/,/g, ''));
     const roadtaxNumber = parseFloat(roadtax.replace(/,/g, ''));
     const registrationnumber = parseFloat(registration.replace(/,/g, ''));

     const totalPrice = exShowroompriceNumber + roadtaxNumber+registrationnumber;
      setexprice(totalPrice);
      console.log(response)
      const { vehiclecolor,EngineCC,adminallimage,vehiclename,model } = bike;

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
  
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await axios.get('https://dull-plum-woodpecker-veil.cyclic.cloud/dealerdetails/getdealers');
        
        // Extract the data from the response
        const responseData = response.data.user[0];
        console.log("data",responseData)
        const {companyaddress,companyname,city,contactnumber,country,dealeremailid,pincode,state,streetname,website}=responseData
        setcopmapnyadress(companyaddress)
        setcompanyname(companyname)
        setcity(city)
        setgstin(gstin)
        setcontactnumber(contactnumber)
        setcountry(country)
        setdealeremailid(dealeremailid)
        setpincode(pincode)
        setstate(state)
        setstreetname(streetname)
        setwebsite(website)
        // Update the state with the fetched data
        setData([...dataaa,responseData]);
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
   
  const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: '80%',
        justifyContent: 'center', // Center the text vertically
        paddingLeft: 10, // Add some padding to align text properly
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:25
      },
    tab: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        textAlign: 'center', // Center the text horizontally
        alignItems: 'center', // Center the text vertically
        width: 150,
        height:50,
        marginLeft:50,
      },
    accessoriesText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginTop: 100,
        marginBottom: 30,
        // backgroundColor:'rgba(151, 151, 151, 0.3)',
        borderRadius:50,
        height:800,
       
      },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    width:'auto'
    
  },
  extendedLine: {
    borderBottomWidth: 100, // Set the desired length (e.g., 50 pixels)
    borderBottomColor: 'white',
    marginBottom: 20, // Add spacing between the line and the next content
  },
  
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 20, // Add spacing between the line and the next content
    // columnGap: 100
  },
  priceContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop:70,
    marginBottom: 20, // Add spacing between the line and the next content
    // columnGap: 100
  },
  container: {
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20, // Add horizontal padding as needed
      marginBottom: 10, // Add margin at the bottom as needed
    },
  
    flexGrow: 1, // To make sure content can be scrolled if needed
    paddingVertical: 20, // Add some padding at the top and bottom
    paddingHorizontal: 10, // Add horizontal padding
  },
  content: {
    marginVertical: 10,
  },
  hr: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  logo: {
    height: 80,
    width: 180,
    borderRadius: 10,
    height: 60,
    marginTop: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%', // Adjust the width as needed
    backgroundColor: 'black',
    marginTop: 10, // Add margin between sections
    padding: 10, // Add padding inside the card
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, // Add vertical margin between items
  },
  labelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    flex: 1, // To allow text to expand and push TextInput to the right
  },
  input: {
    flex: 2, // To allow TextInput to expand
    color: 'black',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    paddingLeft: 10, // Add left padding for better appearance
  },
  imageCard: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
    height: 600
  },
  customerImage: {
    width: 800,
    height: 500,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  datacard: {
    width: 800,
    height: 1400,
    backgroundColor: 'rgba(151, 151, 151, 0.3)',
    // alignItems: 'center',
    borderRadius: 10,
  },
  datacardtext: {
    color: 'white',
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign:'center',
  
  },shareButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width:200
  },
  shareButtonText: {
    color: 'white',
    fontSize: 18,
  },
  });

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundimage} >
      <ScrollView contentContainerStyle={styles.container}>
        {dataArray.map((data, index) => (
        <View key={index} style={styles.content}>
          
          <View style={styles.header}>
          <View >
  <TouchableOpacity onPress={() => {
    // Navigate back to the 'Home' screen
    navigation.navigate('Home');
  }} style={styles.backButton}>
    <MaterialIcons name='arrow-back' size={20} color={'#F9F9F9'}/>
  </TouchableOpacity>
</View>


              <View style={{ alignContent: 'center'}}>
                <Text style={styles.headertitle}>Quotation</Text>
              </View>
          </View>

        <View style={styles.line}></View>
        {/* Add Customer Details Section Below */}
        <Text style={styles.title}>Customer details</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Customer Name :</Text>
            <TextInput
              style={styles.input}
              value={customername}
              onChangeText={setCustomerName}
              placeholder="Enter name"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Address :</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter address"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Mobilenumber :</Text>
            <TextInput
              style={styles.input}
              value={mobilenumber}
              onChangeText={setMobileNumber}
              placeholder="Enter mobile number"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Email-id :</Text>
            <TextInput
              style={styles.input}
              value={emailid}
              onChangeText={setEmailId}
              placeholder="example@email.com"
            />
          </View>
        </View>
        <View style={styles.imageCard}>
            {data.adminallimage && data.adminallimage.length > 0 && (
              <Image
                style={styles.customerImage}
                source={{ uri: data.adminallimage }}
              />
            )}
          </View>

            {/* Center the datacard container */}
            <View style={styles.centeredContainer}>
              <View style={styles.datacard}>
                <Text style={styles.datacardtext}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

                <View style={styles.priceContainer}>
                  <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1, marginLeft: 30 }}>Ex.showroom price (including GST)</Text>
                  <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right', marginRight: 30 }}>₹  {data.exShowroomPrice}</Text>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1, marginLeft: 30 }}>RTO Charges</Text>
                  <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right', marginRight: 30 }}>₹ {data.roadtax}</Text>
                </View>
                <View > 

{/* Insurence */}
<Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Insurence</Text>
{data.insurance.map((insu)=>(
     <View style={{display:'flex',flexDirection:'row'}}>
     {/* Basic */}
      <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Basic({insu.Basic}-/-)</Text>
      <CheckBox
   value={isSelected}
   onValueChange={()=>handlebasic(insu.Basic)}
   style={styles.checkbox}
 />
     </View> 
     {/* Nilldip */}
     <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Nildip({insu.Nildip}-/-)</Text>
      <CheckBox
   value={isNilldip}
   onValueChange={()=>handleNill(insu.Nildip)}
   style={styles.checkbox}
 />
     </View>
     
     {/* EP */}
     <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>EP({insu.Ep}-/-)</Text>
      <CheckBox
   value={EP}
   onValueChange={()=>handleEP(insu.Ep)}
   style={styles.checkbox}
 />
     </View>
     {/* RTI */}
     <View style={{display:'flex',flexDirection:'row'}}>
      <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>RTI({insu.RTI}-/-)</Text>
      <CheckBox
   value={RTI}
   onValueChange={()=>handleRTI(insu.RTI)}
   style={styles.checkbox}
 />
     </View>
      
     </View>
))}
<View style={styles.priceContainer}>

<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹{ins}</Text>
</View>








<View style={styles.priceContainer}>
<Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30,marginTop:20,marginBottom:10 }}>Registartion(Fixed)</Text>
<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹ {data.registration}</Text>
</View>


{/* hypothication */}
<Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Hypothiccation</Text>
{data.hypothication.map((hype)=>(
<View style={{display:'flex',flexDirection:'row'}}>
{/* YES */}
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>YES({hype.Yes}-/-)</Text>
<CheckBox
value={YES}
onValueChange={()=>handleYes(hype.Yes)}
style={styles.checkbox}
/>
</View> 


{/* NO */}
<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>NO({hype.No})</Text>
<CheckBox
value={NO}
onValueChange={()=>handleNo(hype.No)}
style={styles.checkbox}
/>
</View>

</View>



))}
<View style={styles.priceContainer}>

<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {hype}</Text>
</View>






<View style={styles.priceContainer}>
<Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30 }}>OnRoad Price</Text>
<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {totalonroad}</Text>
</View>


<Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: '#F9F9F9', fontSize: 22 ,marginBottom:10,fontWeight:600}}>Optional Add Ons/Products</Text>
<Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Extended Warrenty</Text>
{/* extendedwarranty */}
<>
{data.extendedwarranty.map((ans) => (
<View key={index} style={{ flexDirection: 'row' }}>
{/* 4 */}
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>4 Years({ans.fouryears}-/-)</Text>
<CheckBox
value={four}
onValueChange={()=>handleFourChange(ans.fouryears)}
style={styles.checkbox}
/>
</View>
{/* 5 */}
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>5 Years({ans.fiveyears}-/-)</Text>
<CheckBox
value={five}
onValueChange={()=>handleFiveChange(ans.fiveyears)}
style={styles.checkbox}
/>
</View>

{/* 5+RSA */}
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
<Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>5 Years+RSA({ans.fiveplusRSAyears}-/-)</Text>

<CheckBox
value={fiveRsa} // Pass ans.fiveplusRSAyears when it's checked
onValueChange={() => handleFiveRsaChange(ans.fiveplusRSAyears)} // Pass ans.fiveplusRSAyears to the function
style={styles.checkbox}
/>

</View>


</View>

))}
<View style={styles.priceContainer}>

<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {selectedOption}</Text>
</View>
</>

<View style={styles.accessoriesText}>
<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
<Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Style')}>
Style
</Text>
<Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Comfort')}>
Comfort
</Text>
<Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Protection')}>
Protection
</Text>
</View>
<View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
{selectedTab === 'Style' && (
<>
{/* Show mirrors dropdown */}
<View style={styles.dropdown}>
<Picker
selectedValue={selectedMirrorstext}
onValueChange={(itemValue) => {
if (itemValue === "") {
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Mirrors" value="" />
{data.mirrors.map((mirror) => (
<Picker.Item
key={mirror._id}
label={`${mirror.mirrorstext} (${mirror.mirrorsvalue})`}
value={mirror.mirrorstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Oilfiller Cap" value="" />
{data.oilfillercap.map((oil) => (
<Picker.Item
key={oil._id}
label={`${oil.oilfillercaptext} (${oil.oilfillercapvalue})`}
value={oil.oilfillercaptext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Headlight" value="" />
{data.headlight.map((headlight) => (
<Picker.Item
key={headlight._id}
label={`${headlight.headlighttext} (${headlight.headlightvalue})`}
value={headlight.headlighttext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Windshields" value="" />
{data.windshields.map((windshield) => (
<Picker.Item
key={windshield._id}
label={`${windshield.windshieldstext} (${windshield.windshieldsvalue})`}
value={windshield.windshieldstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Panniers" value="" />
{data.panniers.map((pannier) => (
<Picker.Item
key={pannier._id}
label={`${pannier.pannierstext} (${pannier.panniersvalue})`}
value={pannier.pannierstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Seats" value="" />
{data.seats.map((seat) => (
<Picker.Item
key={seat._id}
label={`${seat.seatstext} (${seat.seatsvalue})`}
value={seat.seatstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Backrest" value="" />
{data.backrests.map((backrest) => (
<Picker.Item
key={backrest._id}
label={`${backrest.backreststext} (${backrest.backrestsvalue})`}
value={backrest.backreststext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Foot Pegs" value="" />
{data.footpegs.map((footpeg) => (
<Picker.Item
key={footpeg._id}
label={`${footpeg.footpegstext} (${footpeg.footpegsvalue})`}
value={footpeg.footpegstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Engine Guards" value="" />
{data.enginegaurds.map((engineGuard) => (
<Picker.Item
key={engineGuard._id}
label={`${engineGuard.enginegaurdstext} (${engineGuard.enginegaurdsvalue})`}
value={engineGuard.enginegaurdstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Sump Guards" value="" />
{data.sumpgaurds.map((sumpGuard) => (
<Picker.Item
key={sumpGuard._id}
label={`${sumpGuard.sumpgaurdstext} (${sumpGuard.sumpgaurdsvalue})`}
value={sumpGuard.sumpgaurdstext}
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
// If the selected value is an empty string, set the state to 0
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
<Picker.Item label="Select Safety Accessories" value="" />
{data.safetyaccessories.map((safetyAccessory) => (
<Picker.Item
key={safetyAccessory._id}
label={`${safetyAccessory.safetyaccessoriestext} (${safetyAccessory.safetyaccessoriesvalue})`}
value={safetyAccessory.safetyaccessoriestext}
/>
))}
</Picker>
</View>




</>
)}


</View>

<View style={styles.priceContainer1}>
<Text style={{ color: 'white', fontSize: 30, flex: 1,marginLeft:30 }}>GrandTotal</Text>
<Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {grandtotal}</Text>
</View>
</View>

</View>
               
              </View>
            </View>
            <View style={styles.centeredContainer}>

              
              <TouchableOpacity
                style={styles.shareButton}
                onPress={handleShare} // Call handleShare when the button is pressed
              >
                                <View style={{ flexDirection: 'row', alignItems: 'center',gap: 20}}>
                  <Ionicons name='document-text' size={20} color={'#f9f9f9'} />
                  <Text style={styles.shareButtonText}>Preview & Share Doc</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};


export default Share;