

// WORKING CODE//
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'; // Import ScrollView for scrolling if needed
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import CheckBox from '@react-native-community/checkbox';
// import { useNavigation } from '@react-navigation/native';
// import { Picker } from '@react-native-picker/picker';


// const Share = ({route}) => {
//   const { vehicleId } = route.params;
//   console.log(vehicleId)
//   // const { isDarkTheme } = useTheme();
//   const navigation = useNavigation();
//     const [selectedStyle, setSelectedStyle] = useState(null);

//   const [value, setValue] = useState(null);
//   // const [dataArray, setDataArray] = useState([]);
//   const [customername, setCustomerName] = useState('');
//   const [address, setAddress] = useState('');
//   const [mobilenumber, setMobileNumber] = useState('');
//   const [emailid, setEmailId] = useState('');
  
//   //date//
//   const [enquiryDate, setEnquiryDate] = useState('');
//   //checkboxes//
//   const [dataArray, setDataArray] = useState([]);
//     const [isSelected, setSelection] = useState(false);
//   const [isNilldip,setnilldip]=useState(false);
//   const [EP,setEP]=useState(false);
//   const[RTI,setRTI]=useState(false);
//   const [YES,setYes]=useState(false);
//   const[NO,setNo]=useState(false);
//   const [four, setFour] = useState(false);
//   const [five, setFive] = useState(false);
//   const [fiveRsa, setFiveRsa] = useState(false);
//   // const [selectedTab, setSelectedTab] = useState('Style');
//   const [selectedValue, setSelectedValue] = useState('default'); // Initialize

// const [oilFillerCap, setOilFillerCap] = useState(null);
// const [headlight, setHeadlight] = useState(null);
// const [windshields, setWindshields] = useState(null);
// const [panniers, setPanniers] = useState(null);
// const [seats, setSeats] = useState(null);
// const [backrest, setBackrest] = useState(null);
// const [footpegs, setFootpegs] = useState(null);
// const [engineGuards, setEngineGuards] = useState(null);
// const [sumpGuards, setSumpGuards] = useState(null);
// const [safetyAccessories, setSafetyAccessories] = useState(null);
// //image usesatate
// const [reimage, setreimage] = useState('https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg')
// console.log('r', reimage)
// // dropdowns
// const [selectedMirrorstext, setSelectedMirrorstext] = useState(''); // Initialize with a default value
//   const [selectedMirrorsvalue, setSelectedMirrorsvalue] = useState(0);
//   const [selectedOilFillerCapText, setSelectedOilFillerCapText] = useState(''); // Initialize with a default value for oilfillercap
//   const [selectedOilFillerCapValue, setSelectedOilFillerCapValue] = useState(0);
//   const [selectedHeadLightText, setSelectedHeadLightText] = useState('');
// const [selectedHeadLightValue, setSelectedHeadLightValue] = useState(0);
// const [selectedWindshieldsText, setSelectedWindshieldsText] = useState('');
// const [selectedWindshieldsValue, setSelectedWindshieldsValue] = useState(0);
// const [selectedPanniersText, setSelectedPanniersText] = useState('');
// const [selectedPanniersValue, setSelectedPanniersValue] = useState(0);
// const [selectedSeatsText, setSelectedSeatsText] = useState('');
// const [selectedSeatsValue, setSelectedSeatsValue] = useState(0);

// const [selectedBackrestText, setSelectedBackrestText] = useState('');
// const [selectedBackrestValue, setSelectedBackrestValue] = useState(0);

// const [selectedFootPegsText, setSelectedFootPegsText] = useState('');
// const [selectedFootPegsValue, setSelectedFootPegsValue] = useState(0);

// const [selectedEngineGuardsText, setSelectedEngineGuardsText] = useState('');
// const [selectedEngineGuardsValue, setSelectedEngineGuardsValue] = useState(0);

// const [selectedSumpGuardsText, setSelectedSumpGuardsText] = useState('');
// const [selectedSumpGuardsValue, setSelectedSumpGuardsValue] = useState(0);


// const [selectedSafetyAccessoriesText, setSelectedSafetyAccessoriesText] = useState('');
// const [selectedSafetyAccessoriesValue, setSelectedSafetyAccessoriesValue] = useState(0);
// // Add state variables for other dropdowns here
// console.log("S",selectedSafetyAccessoriesText)
// const [selectedOption, setSelectedOption] = useState(0);
// const [exwarrantytext, setextext] = useState('');
// //checkboxes
// // hype
// const [hype,sethype]=useState(0);
// const[hypetext,sethypetext]=useState('')
// // insu
// const [ins,setins]=useState(0);
// const [instext,settext]=useState('')


// // for count
// const [onroad,setexprice]=useState('')
// const zero =parseFloat(0)
// const totalonroad=onroad+parseFloat(ins)+zero+parseFloat(hype)+zero

// const grandtotal=totalonroad+parseFloat(selectedMirrorsvalue)+parseFloat(selectedOilFillerCapValue)+parseFloat(selectedHeadLightValue)+parseFloat(selectedOption)
// +parseFloat(selectedWindshieldsValue)+
// parseFloat(selectedPanniersValue)+parseFloat(selectedSeatsValue)+parseFloat(selectedBackrestValue)+
// parseFloat(selectedFootPegsValue)+parseFloat(selectedEngineGuardsValue)+parseFloat(selectedSumpGuardsValue)+parseFloat(selectedSafetyAccessoriesValue)






// console.log("x",totalonroad)
// console.log("y",grandtotal)

// console.log(selectedOption)
// console.log(dataArray)
// console.log("mirrorvlue",parseFloat(selectedMirrorsvalue))
 
// console.log(selectedMirrorsvalue)
//   useEffect(() => {
 
  
//     fetchBikeDetails(vehicleId);
   
//   }, []);

 


//   const handleFourChange = (out,text) => {
//     setFour(true);
//     setFive(false);
//     setFiveRsa(false);
//     setSelectedOption(out);
//     setextext(text)
//   };

// const handleFiveChange = (out,text) => {
//   setFour(false);
//   setFive(true);
//   setFiveRsa(false);
//   setSelectedOption(out);
//   setextext(text)
// };

// const handleFiveRsaChange = (out,text) => {
//   setFour(false);
//   setFive(false);
//   setFiveRsa(true);
// setSelectedOption(out);
// setextext(text)
// };
// const handleYes=(out,text)=>{
// setYes(true)
// setNo(false)
// sethype(out)
// sethypetext(text)
// }

// const handleNo=(out,text)=>{
// setYes(false)
// setNo(true);
// sethype(out);
// sethypetext(text)
// }

// const handlebasic=(out,text)=>{
// setSelection(true);
// setnilldip(false);
// setEP(false);
// setRTI(false);
// setins(out)
// settext(text)
// }

// const handleNill=(out,text)=>{
// setSelection(false);
// setnilldip(true);
// setEP(false);
// setRTI(false);
// setins(out)
// settext(text)
// }
// const handleEP=(out,text)=>{
// setSelection(false);
// setnilldip(false);
// setEP(true);
// setRTI(false);
// setins(out)
// settext(text)
// }

// const handleRTI=(out,text)=>{
// setSelection(false);
// setnilldip(false);
// setEP(false);
// setRTI(true);
// setins(out)
// settext(text)
// }

// // data
// const [exShowroomPrice, setExShowroomPrice] = useState('');
// const [roadtax, setRoadtax] = useState('');
// const [Vehiclecolor,setvehiclecolor]=useState('');
// const [EngineCC,setEngineCC]=useState('');
// const [adminallimage,setadminallimage]=useState('');
// const [vehiclename,setvehiclename]=useState('');
// const [model,setmodel]=useState('');

// // dealerdetails
// const [dataaa, setData] = useState([]);

// const [companyaddress,setcopmapnyadress]=useState('');
// const [companyname,setcompanyname]=useState('');
// const [city,setcity]=useState('');
// const [gstin,setgstin]=useState('');
// const [contactnumber,setcontactnumber]=useState('');
// const [country,setcountry]=useState('');
// const [dealeremailid,setdealeremailid]=useState('');
// const [pincode,setpincode]=useState('');
// const [state,setstate]=useState('');
// const [streetname,setstreetname]=useState('');
// const [website,setwebsite]=useState('');
// console.log("adress",companyaddress)


//   const formData ={
//     customername: '',
//     address: '',
//     mobilenumber: '',
//     emailid: '',
//     mirrortext:selectedMirrorstext,
//     mirrorvalue:selectedMirrorsvalue,
//     oilFillerCaptext: '',
//     oilFillerCapvalue: '',
//     headlightlabel: '',
//     headlightvalue: '',
//     windshieldslabel: '',
//     windshieldsvalue: '',
//     pannierslabel: '',
//     panniersvalue: '',
//     seatslabel: '',
//     seatsvalue: '',
//     backrestlabel: '',
//     backrestvalue: '',
//     footpegslabel: '',
//     footpegsvalue: '',
//     engineguardslabel: '',
//     engineguardsvalue: '',
//     sumpguardslabel: '',
//     sumpguardsvalue: '',
//     safetyaccessorieslabel: '',
//     safetyaccessoriesvalue: '',
//     isSelected: false,
//     // Basic:false,
//     isNilldip: false,
//     EP: false,
//     RTI: false,
//     YES: false,
//     NO: false,
//     four: false,
//     five: false,
//     fiveRsa: false,
//   }
  
//   console.log(formData)

//   const [selectedTab, setSelectedTab] = useState('Style');
//   // Define an array of options with labels and values, including the "Select" option

//   const handleShare = async () => {
//     try {
//       // Store the formData in AsyncStorage
//       await AsyncStorage.setItem('formData', JSON.stringify(formData));

//       // Navigate to the SharePdf screen and pass formData as a parameter
//       navigation.navigate('SharePdf', { 
//         formData,
//         customername,
//         address,
//         mobilenumber,
//         emailid,
//         enquiryDate,
//         exShowroomPrice,
//         roadtax,
//         Vehiclecolor,
//         EngineCC,
//         adminallimage,
//         vehiclename,
//         model,
//         companyaddress,
//         companyname,
//         city,
//         contactnumber,
//         gstin,
//         country,
//         dealeremailid,
//         pincode,
//         state,
//         streetname,
//         website,
//         ins,
//         instext,
//         hype,
//         hypetext,
//         exwarrantytext,
//         reimage,
//         totalonroad,
//         grandtotal,
//         selectedOption,
//         selectedMirrorstext,
//         selectedMirrorsvalue,
//         selectedOilFillerCapText,
//         selectedOilFillerCapValue,
//         selectedHeadLightText,
//         selectedHeadLightValue,
//         selectedWindshieldsText,
//         selectedWindshieldsValue,
//         selectedPanniersText,
//         selectedPanniersValue,
//         selectedSeatsText,
//         selectedSeatsValue,
//         selectedBackrestText,
//         selectedBackrestValue,
//         selectedFootPegsText,
//         selectedFootPegsValue,
//         selectedEngineGuardsText,
//         selectedEngineGuardsValue,
//         selectedSumpGuardsText,
//         selectedSumpGuardsValue,
//         selectedSafetyAccessoriesText,
//         selectedSafetyAccessoriesValue,

 
//       });
//     } catch (error) {
//       console.error('Error storing formData:', error);
//     }
//   };

//   useEffect(() => {
 
  
//     fetchBikeDetails(vehicleId);
   
//   }, []);
//   const fetchBikeDetails = async (vehicleId) => {
//     const url = `https://vast-newt-crown.cyclic.app/formdetails/getbike/${vehicleId}`;

//     try {
//       const response = await axios.get(url);
//       const bike = response.data;
//       const{exShowroomPrice,roadtax,registration}=bike
//       const exShowroompriceNumber = parseFloat(exShowroomPrice.replace(/,/g, ''));
//      const roadtaxNumber = parseFloat(roadtax.replace(/,/g, ''));
//      const registrationnumber = parseFloat(registration.replace(/,/g, ''));

//      const totalPrice = exShowroompriceNumber + roadtaxNumber+registrationnumber;
//       setexprice(totalPrice);
//       console.log(response)
//       const { vehiclecolor,EngineCC,adminallimage,vehiclename,model } = bike;

//       // Filter and store exShowroomPrice and roadtax in separate useState variables
//       setExShowroomPrice(exShowroomPrice);
//       setRoadtax(roadtax);
//       setvehiclecolor(vehiclecolor);
//       setEngineCC(EngineCC);
//       setadminallimage(adminallimage);
//       setvehiclename(vehiclename);
//       setmodel(model);
      
      
//       // Append the bike details to the dataArray state
//       setDataArray([...dataArray, bike]);

//       // Store the bike data in AsyncStorage (optional)
//       await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
//       console.log('Bike data stored successfully', bike);
//     } catch (error) {
//       console.error('Error fetching bike details:', error);
//     }
//   };
  

//   useEffect(() => {
//     // Call the fetchData function to fetch data when the component mounts
//     fetchData();
//   }, []);
  
//     // Define a function to fetch the data
//     const fetchData = async () => {
//       try {
//         // Make a GET request to your API endpoint
//         const response = await axios.get('https://vast-newt-crown.cyclic.app/dealerdetails/getdealers');
        
//         // Extract the data from the response
//         const responseData = response.data.user[0];
//         console.log("data",responseData)
//         const {companyaddress,companyname,city,contactnumber,country,dealeremailid,pincode,state,streetname,website}=responseData
//         setcopmapnyadress(companyaddress)
//         setcompanyname(companyname)
//         setcity(city)
//         setgstin(gstin)
//         setcontactnumber(contactnumber)
//         setcountry(country)
//         setdealeremailid(dealeremailid)
//         setpincode(pincode)
//         setstate(state)
//         setstreetname(streetname)
//         setwebsite(website)
//         // Update the state with the fetched data
//         setData([...dataaa,responseData]);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
    
//   //date//
//   const getCurrentDate = () => {
//     const now = new Date();
//     const day = now.getDate();
//     const month = now.getMonth() + 1;
//     const year = now.getFullYear();
//     const formattedDate = `${day}-${month}-${year}`;
//     return formattedDate;
//   };

//   useEffect(() => {
//     const date = getCurrentDate();
//     setEnquiryDate(date);
//   }, []);
   
//   const styles = StyleSheet.create({
//     dropdown: {
//         height: 50,
//         width: '80%',
//         justifyContent: 'center', // Center the text vertically
//         paddingLeft: 10, // Add some padding to align text properly
//         backgroundColor:'white',
//         borderRadius:10,
//         marginBottom:25
//       },
//     tab: {
//         color: 'black',
//         fontSize: 18,
//         fontWeight: 'bold',
//         padding: 10,
//         margin: 5,
//         borderRadius: 10,
//         textAlign: 'center', // Center the text horizontally
//         alignItems: 'center', // Center the text vertically
//         width: 150,
//         height:50,
//         marginLeft:50,
//       },
//     accessoriesText: {
//         color: 'white',
//         fontSize: 22,
//         fontWeight: '500',
//         marginTop: 100,
//         marginBottom: 30,
//         // backgroundColor:'rgba(151, 151, 151, 0.3)',
//         borderRadius:50,
//         height:800,
       
//       },
//   centeredContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius:20,
//     width:'auto'
    
//   },
//   extendedLine: {
//     borderBottomWidth: 100, // Set the desired length (e.g., 50 pixels)
//     borderBottomColor: 'white',
//     marginBottom: 20, // Add spacing between the line and the next content
//   },
  
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     marginBottom: 20, // Add spacing between the line and the next content
//     // columnGap: 100
//   },
//   priceContainer1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     marginTop:70,
//     marginBottom: 20, // Add spacing between the line and the next content
//     // columnGap: 100
//   },
//   container: {
//     cardContent: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 20, // Add horizontal padding as needed
//       marginBottom: 10, // Add margin at the bottom as needed
//     },
  
//     flexGrow: 1, // To make sure content can be scrolled if needed
//     paddingVertical: 20, // Add some padding at the top and bottom
//     paddingHorizontal: 10, // Add horizontal padding
//   },
//   content: {
//     marginVertical: 10,
//   },
//   hr: {
//     borderWidth: 1,
//     borderColor: 'white',
//     width: '100%',
//   },
//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 25,
//     textAlign: 'center',
//   },
//   logo: {
//     height: 80,
//     width: 180,
//     borderRadius: 10,
//     height: 60,
//     marginTop: 10,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: 'white',
//     width: '100%', // Adjust the width as needed
//     backgroundColor: 'black',
//     marginTop: 10, // Add margin between sections
//     padding: 10, // Add padding inside the card
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5, // Add vertical margin between items
//   },
//   labelText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '700',
//     flex: 1, // To allow text to expand and push TextInput to the right
//   },
//   input: {
//     flex: 2, // To allow TextInput to expand
//     color: 'black',
//     backgroundColor: 'rgba(217, 217, 217, 1)',
//     paddingLeft: 10, // Add left padding for better appearance
//   },
//   imageCard: {
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 50,
//     height: 600
//   },
//   customerImage: {
//     width: 800,
//     height: 500,
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   datacard: {
//     width: 800,
//     height: 1400,
//     backgroundColor: 'rgba(151, 151, 151, 0.3)',
//     // alignItems: 'center',
//     borderRadius: 10,
//   },
//   datacardtext: {
//     color: 'white',
//     fontSize: 30,
//     textDecorationLine: 'underline',
//     marginBottom: 20,
//     textAlign:'center',
  
//   },shareButton: {
//     backgroundColor: 'crimson',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//     width:220
//   },
//   shareButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   });

//   return (
//     <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundimage} >
//       <ScrollView contentContainerStyle={styles.container}>
//         {dataArray.map((data, index) => (
//         <View key={index} style={styles.content}>
          
//           <View style={styles.header}>
//           <View >
//   <TouchableOpacity onPress={() => {
//     // Navigate back to the 'Home' screen
//     navigation.navigate('Home');
//   }} style={styles.backButton}>
//     <MaterialIcons name='arrow-back' size={20} color={'#F9F9F9'}/>
//   </TouchableOpacity>
// </View>


//               <View style={{ alignContent: 'center'}}>
//                 <Text style={styles.headertitle}>Quotation</Text>
//               </View>
//           </View>

//         <View style={styles.line}></View>
//         {/* Add Customer Details Section Below */}
//         <Text style={styles.title}>Customer details</Text>
//         <View style={styles.card}>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Customer Name :</Text>
//             <TextInput
//               style={styles.input}
//               value={customername}
//               onChangeText={setCustomerName}
//               placeholder="Enter name"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Address :</Text>
//             <TextInput
//               style={styles.input}
//               value={address}
//               onChangeText={setAddress}
//               placeholder="Enter address"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Mobilenumber :</Text>
//             <TextInput
//               style={styles.input}
//               value={mobilenumber}
//               onChangeText={setMobileNumber}
//               placeholder="Enter mobile number"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Email-id :</Text>
//             <TextInput
//               style={styles.input}
//               value={emailid}
//               onChangeText={setEmailId}
//               placeholder="example@email.com"
//             />
//           </View>
//         </View>
//         <View style={styles.imageCard}>
//             {data.adminallimage && data.adminallimage.length > 0 && (
//               <Image
//                 style={styles.customerImage}
//                 source={{ uri: data.adminallimage }}
//               />
//             )}
//           </View>

//             {/* Center the datacard container */}
//             <View style={styles.centeredContainer}>
//               <View style={styles.datacard}>
//                 <Text style={styles.datacardtext}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

//                 <View style={styles.priceContainer}>
//                   <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1, marginLeft: 30 }}>Ex.showroom price (including GST)</Text>
//                   <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right', marginRight: 30 }}>₹  {data.exShowroomPrice}</Text>
//                 </View>

//                 <View style={styles.priceContainer}>
//                   <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1, marginLeft: 30 }}>RTO Charges</Text>
//                   <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right', marginRight: 30 }}>₹ {data.roadtax}</Text>
//                 </View>
//                 <View > 

// {/* Insurence */}
// <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Insurence</Text>
// {data.insurance.map((insu)=>(
//      <View style={{display:'flex',flexDirection:'row'}}>
//      {/* Basic */}
//       <View style={{display:'flex',flexDirection:'row'}}>
//       <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Basic({insu.Basic}-/-)</Text>
//       <CheckBox
//    value={isSelected}
//    onValueChange={()=>handlebasic(insu.Basic)}
//    style={styles.checkbox}
//  />
//      </View> 
//      {/* Nilldip */}
//      <View style={{display:'flex',flexDirection:'row'}}>
//       <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Nildip({insu.Nildip}-/-)</Text>
//       <CheckBox
//    value={isNilldip}
//    onValueChange={()=>handleNill(insu.Nildip)}
//    style={styles.checkbox}
//  />
//      </View>
     
//      {/* EP */}
//      <View style={{display:'flex',flexDirection:'row'}}>
//       <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>EP({insu.Ep}-/-)</Text>
//       <CheckBox
//    value={EP}
//    onValueChange={()=>handleEP(insu.Ep)}
//    style={styles.checkbox}
//  />
//      </View>
//      {/* RTI */}
//      <View style={{display:'flex',flexDirection:'row'}}>
//       <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>RTI({insu.RTI}-/-)</Text>
//       <CheckBox
//    value={RTI}
//    onValueChange={()=>handleRTI(insu.RTI)}
//    style={styles.checkbox}
//  />
//      </View>
      
//      </View>
// ))}
// <View style={styles.priceContainer}>

// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹{ins}</Text>
// </View>








// <View style={styles.priceContainer}>
// <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30,marginTop:20,marginBottom:10 }}>Registartion(Fixed)</Text>
// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹ {data.registration}</Text>
// </View>


// {/* hypothication */}
// <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Hypothiccation</Text>
// {data.hypothication.map((hype)=>(
// <View style={{display:'flex',flexDirection:'row'}}>
// {/* YES */}
// <View style={{display:'flex',flexDirection:'row'}}>
// <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>YES({hype.Yes}-/-)</Text>
// <CheckBox
// value={YES}
// onValueChange={()=>handleYes(hype.Yes)}
// style={styles.checkbox}
// />
// </View> 


// {/* NO */}
// <View style={{display:'flex',flexDirection:'row'}}>
// <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>NO({hype.No})</Text>
// <CheckBox
// value={NO}
// onValueChange={()=>handleNo(hype.No)}
// style={styles.checkbox}
// />
// </View>

// </View>



// ))}
// <View style={styles.priceContainer}>

// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {hype}</Text>
// </View>






// <View style={styles.priceContainer}>
// <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30 }}>OnRoad Price</Text>
// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {totalonroad}</Text>
// </View>


// <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: '#F9F9F9', fontSize: 22 ,marginBottom:10,fontWeight:600}}>Optional Add Ons/Products</Text>
// <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Extended Warrenty</Text>
// {/* extendedwarranty */}
// <>
// {data.extendedwarranty.map((ans) => (
// <View key={index} style={{ flexDirection: 'row' }}>
// {/* 4 */}
// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>4 Years({ans.fouryears}-/-)</Text>
// <CheckBox
// value={four}
// onValueChange={()=>handleFourChange(ans.fouryears)}
// style={styles.checkbox}
// />
// </View>
// {/* 5 */}
// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>5 Years({ans.fiveyears}-/-)</Text>
// <CheckBox
// value={five}
// onValueChange={()=>handleFiveChange(ans.fiveyears)}
// style={styles.checkbox}
// />
// </View>

// {/* 5+RSA */}
// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ color: 'white', fontSize: 20, marginLeft: 20, marginLeft: 30 }}>5 Years+RSA({ans.fiveplusRSAyears}-/-)</Text>

// <CheckBox
// value={fiveRsa} // Pass ans.fiveplusRSAyears when it's checked
// onValueChange={() => handleFiveRsaChange(ans.fiveplusRSAyears)} // Pass ans.fiveplusRSAyears to the function
// style={styles.checkbox}
// />

// </View>


// </View>

// ))}
// <View style={styles.priceContainer}>

// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {selectedOption}</Text>
// </View>
// </>

// <View style={styles.accessoriesText}>
// <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
// <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Style')}>
// Style
// </Text>
// <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Comfort')}>
// Comfort
// </Text>
// <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Protection')}>
// Protection
// </Text>
// </View>
// <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
// {selectedTab === 'Style' && (
// <>
// {/* Show mirrors dropdown */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedMirrorstext}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedMirrorsvalue(0);
// } else {
// const selectedMirror = data.mirrors.find(
// (mirror) => mirror.mirrorstext === itemValue
// );
// setSelectedMirrorsvalue(selectedMirror ? selectedMirror.mirrorsvalue : 0);
// }
// setSelectedMirrorstext(itemValue);
// }}
// >
// <Picker.Item label="Select Mirrors" value="" />
// {data.mirrors.map((mirror) => (
// <Picker.Item
// key={mirror._id}
// label={`${mirror.mirrorstext} (${mirror.mirrorsvalue})`}
// value={mirror.mirrorstext}
// />
// ))}
// </Picker>
// </View>

// {/* Show oil filler dropdown */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedOilFillerCapText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedOilFillerCapValue(0);
// } else {
// const selectedOilFillerCap = data.oilfillercap.find(
// (oil) => oil.oilfillercaptext === itemValue
// );
// setSelectedOilFillerCapValue(selectedOilFillerCap ? selectedOilFillerCap.oilfillercapvalue : 0);
// }
// setSelectedOilFillerCapText(itemValue);
// }}
// >
// <Picker.Item label="Select Oilfiller Cap" value="" />
// {data.oilfillercap.map((oil) => (
// <Picker.Item
// key={oil._id}
// label={`${oil.oilfillercaptext} (${oil.oilfillercapvalue})`}
// value={oil.oilfillercaptext}
// />
// ))}
// </Picker>
// </View>

// {/* Show headlight dropdown */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedHeadLightText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedHeadLightValue(0);
// } else {
// const selectedHeadLight = data.headlight.find(
// (headlight) => headlight.headlighttext === itemValue
// );
// setSelectedHeadLightValue(selectedHeadLight ? selectedHeadLight.headlightvalue : 0);
// }
// setSelectedHeadLightText(itemValue);
// }}
// >
// <Picker.Item label="Select Headlight" value="" />
// {data.headlight.map((headlight) => (
// <Picker.Item
// key={headlight._id}
// label={`${headlight.headlighttext} (${headlight.headlightvalue})`}
// value={headlight.headlighttext}
// />
// ))}
// </Picker>
// </View>

// </>
// )}


// {selectedTab === 'Comfort' && (
// <>
// {/* Windshields */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedWindshieldsText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedWindshieldsValue(0);
// } else {
// const selectedWindshield = data.windshields.find(
// (windshield) => windshield.windshieldstext === itemValue
// );
// setSelectedWindshieldsValue(selectedWindshield ? selectedWindshield.windshieldsvalue : 0);
// }
// setSelectedWindshieldsText(itemValue);
// }}
// >
// <Picker.Item label="Select Windshields" value="" />
// {data.windshields.map((windshield) => (
// <Picker.Item
// key={windshield._id}
// label={`${windshield.windshieldstext} (${windshield.windshieldsvalue})`}
// value={windshield.windshieldstext}
// />
// ))}
// </Picker>
// </View>

// {/* Panniers */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedPanniersText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedPanniersValue(0);
// } else {
// const selectedPannier = data.panniers.find(
// (pannier) => pannier.pannierstext === itemValue
// );
// setSelectedPanniersValue(selectedPannier ? selectedPannier.panniersvalue : 0);
// }
// setSelectedPanniersText(itemValue);
// }}
// >
// <Picker.Item label="Select Panniers" value="" />
// {data.panniers.map((pannier) => (
// <Picker.Item
// key={pannier._id}
// label={`${pannier.pannierstext} (${pannier.panniersvalue})`}
// value={pannier.pannierstext}
// />
// ))}
// </Picker>
// </View>


// {/* Seats */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedSeatsText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedSeatsValue(0);
// } else {
// const selectedSeat = data.seats.find(
// (seat) => seat.seatstext === itemValue
// );
// setSelectedSeatsValue(selectedSeat ? selectedSeat.seatsvalue : 0);
// }
// setSelectedSeatsText(itemValue);
// }}
// >
// <Picker.Item label="Select Seats" value="" />
// {data.seats.map((seat) => (
// <Picker.Item
// key={seat._id}
// label={`${seat.seatstext} (${seat.seatsvalue})`}
// value={seat.seatstext}
// />
// ))}
// </Picker>
// </View>


// {/* Backrest */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedBackrestText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedBackrestValue(0);
// } else {
// const selectedBackrest = data.backrests.find(
// (backrest) => backrest.backreststext === itemValue
// );
// setSelectedBackrestValue(selectedBackrest ? selectedBackrest.backrestsvalue : 0);
// }
// setSelectedBackrestText(itemValue);
// }}
// >
// <Picker.Item label="Select Backrest" value="" />
// {data.backrests.map((backrest) => (
// <Picker.Item
// key={backrest._id}
// label={`${backrest.backreststext} (${backrest.backrestsvalue})`}
// value={backrest.backreststext}
// />
// ))}
// </Picker>
// </View>

// {/* Foot Pegs */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedFootPegsText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedFootPegsValue(0);
// } else {
// const selectedFootPeg = data.footpegs.find(
// (footpeg) => footpeg.footpegstext === itemValue
// );
// setSelectedFootPegsValue(selectedFootPeg ? selectedFootPeg.footpegsvalue : 0);
// }
// setSelectedFootPegsText(itemValue);
// }}
// >
// <Picker.Item label="Select Foot Pegs" value="" />
// {data.footpegs.map((footpeg) => (
// <Picker.Item
// key={footpeg._id}
// label={`${footpeg.footpegstext} (${footpeg.footpegsvalue})`}
// value={footpeg.footpegstext}
// />
// ))}
// </Picker>
// </View>

// </>
// )}


// {selectedTab==='Protection'&&(
// <>

// {/* Engine Guards */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedEngineGuardsText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedEngineGuardsValue(0);
// } else {
// const selectedEngineGuard = data.enginegaurds.find(
// (engineGuard) => engineGuard.enginegaurdstext === itemValue
// );
// setSelectedEngineGuardsValue(selectedEngineGuard ? selectedEngineGuard.enginegaurdsvalue : 0);
// }
// setSelectedEngineGuardsText(itemValue);
// }}
// >
// <Picker.Item label="Select Engine Guards" value="" />
// {data.enginegaurds.map((engineGuard) => (
// <Picker.Item
// key={engineGuard._id}
// label={`${engineGuard.enginegaurdstext} (${engineGuard.enginegaurdsvalue})`}
// value={engineGuard.enginegaurdstext}
// />
// ))}
// </Picker>
// </View>


// {/* Sump Guards */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedSumpGuardsText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedSumpGuardsValue(0);
// } else {
// const selectedSumpGuard = data.sumpgaurds.find(
// (sumpGuard) => sumpGuard.sumpgaurdstext === itemValue
// );
// setSelectedSumpGuardsValue(selectedSumpGuard ? selectedSumpGuard.sumpgaurdsvalue : 0);
// }
// setSelectedSumpGuardsText(itemValue);
// }}
// >
// <Picker.Item label="Select Sump Guards" value="" />
// {data.sumpgaurds.map((sumpGuard) => (
// <Picker.Item
// key={sumpGuard._id}
// label={`${sumpGuard.sumpgaurdstext} (${sumpGuard.sumpgaurdsvalue})`}
// value={sumpGuard.sumpgaurdstext}
// />
// ))}
// </Picker>
// </View>




// {/* Safety Accessories */}
// <View style={styles.dropdown}>
// <Picker
// selectedValue={selectedSafetyAccessoriesText}
// onValueChange={(itemValue) => {
// if (itemValue === "") {
// // If the selected value is an empty string, set the state to 0
// setSelectedSafetyAccessoriesValue(0);
// } else {
// const selectedSafetyAccessory = data.safetyaccessories.find(
// (safetyAccessory) => safetyAccessory.safetyaccessoriestext === itemValue
// );
// setSelectedSafetyAccessoriesValue(selectedSafetyAccessory ? selectedSafetyAccessory.safetyaccessoriesvalue : 0);
// }
// setSelectedSafetyAccessoriesText(itemValue);
// }}
// >
// <Picker.Item label="Select Safety Accessories" value="" />
// {data.safetyaccessories.map((safetyAccessory) => (
// <Picker.Item
// key={safetyAccessory._id}
// label={`${safetyAccessory.safetyaccessoriestext} (${safetyAccessory.safetyaccessoriesvalue})`}
// value={safetyAccessory.safetyaccessoriestext}
// />
// ))}
// </Picker>
// </View>




// </>
// )}


// </View>

// <View style={styles.priceContainer1}>
// <Text style={{ color: 'white', fontSize: 30, flex: 1,marginLeft:30 }}>GrandTotal</Text>
// <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {grandtotal}</Text>
// </View>
// </View>

// </View>
               
//               </View>
//             </View>
//             <View style={styles.centeredContainer}>

              
//               <TouchableOpacity
//                 style={styles.shareButton}
//                 onPress={handleShare} // Call handleShare when the button is pressed
//               >
//                                 <View style={{ flexDirection: 'row', alignItems: 'center',gap: 20}}>
//                   <Ionicons name='document-text' size={20} color={'#f9f9f9'} />
//                   <Text style={styles.shareButtonText}>Preview & Share Doc</Text>
//                 </View>
//               </TouchableOpacity>

//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </ImageBackground>
//   );
// };


// export default Share;


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
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import { RadioButton } from 'react-native-paper';
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
  const { vehicleId, deviceId } = route.params;
  console.log(vehicleId)
  // const { isDarkTheme } = useTheme();
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






  const [value, setValue] = useState(null);
 
  
  //date//
  const [enquiryDate, setEnquiryDate] = useState('');
  const[registration, setRegistration] = useState('');
  console.log('re', registration)
  //checkboxes//
  const [dataArray, setDataArray] = useState([]);
    const [isSelected, setSelection] = useState(false);
    const [checked, setChecked] = React.useState('first');
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
//Radiobuttons
//   const [selectedInsurance, setSelectedInsurance] = useState(''); // State for insurance section
// const [selectedHypothecation, setSelectedHypothecation] = useState(''); // State for hypothecation section
// const [selectedWarranty, setSelectedWarranty] = useState(''); // State for extended warranty section
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
     
    // Validation checks for each input field
    if (!customername) {
      setCustomerNameErr('Please enter customer name');
    }
    if (!address) {
      setadressErr('Please enter address');
    }

    if (!mobilenumber) {
      setmobileErr('Please enter mobile number');
    }

    if (!emailid) {
      setemailErr('Please enter email');
    }
    else{ // Store the formData in AsyncStorage
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
  
      const url = `https://vast-newt-crown.cyclic.app/formdetails/getbike/${vehicleId}`;
      
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
  
    // Define a function to fetch the data
    // const fetchData = async () => {
    //   try {
    //     // Make a GET request to your API endpoint
    //     const response = await axios.get('https://vast-newt-crown.cyclic.app/dealerdetails/getdealers');
        
    //     // Extract the data from the response
    //     const responseData = response.data.user[0];
    //     console.log("data",responseData)
    //     const {companyaddress,companyname,city,contactnumber,country,dealeremailid,gstin,pincode,state,streetname,website}=responseData
    //     setcopmapnyadress(companyaddress)
    //     setcompanyname(companyname)
    //     setcity(city)
    //     setgstin(gstin)
    //     setcontactnumber(contactnumber)
    //     setcountry(country)
    //     setdealeremailid(dealeremailid)
    //     setpincode(pincode)
    //     setstate(state)
    //     setstreetname(streetname)
    //     setwebsite(website)
    //     // Update the state with the fetched data
    //     setData([...dataaa,responseData]);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    const fetchData = async () => {
      try {
        // Retrieve the JWT token from AsyncStorage
        const token = await AsyncStorage.getItem('token');
    
        // Make a GET request to your API endpoint with the token in the headers
        const response = await axios.get('https://vast-newt-crown.cyclic.app/dealerdetails/getdealers', {
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
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundimage} >
      <ScrollView contentContainerStyle={styles.container}>
       
        {dataArray.map((data, index) => (
        <View key={index} style={styles.content}>
          
          <View style={styles.header}>
            <View style={{ alignContent: 'center'}}>
              <TouchableOpacity onPress={() => {
                  // Navigate back to the 'Home' screen
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
        {/* Add Customer Details Section Below */}
        <Text style={styles.title}>Enter Customer details :</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Customer Name :</Text>
            <TextInput
              style={styles.input}
              value={customername}
              onChangeText={(text) => handlecustomername(text)}
              placeholder="Enter name"
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
            />
          
          </View>
            {mobileErr? <Text style={styles.errorText}>{mobileErr}</Text> : null}
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Email-id :</Text>
            <TextInput
              style={styles.input}
              value={emailid}
              onChangeText={setEmailId}
              placeholder="example@email.com"
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

            {/* Center the datacard container */}
            <View style={styles.centeredContainer}>
              {/* <View style={styles.datacard}> */}
              <Text style={{fontWeight:'600', color: '#f9f9f9', fontSize: moderateScale(18), borderBottomWidth:scale(1), borderColor: '#F9F9F9', paddingVertical: verticalScale(5), textAlign:'center', }}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(30),}}>
                <Text style={{color: '#F9F9F9', fontSize: moderateScale(12), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4),textAlignVertical:'center'}}>Ex.showroom price (including GST)</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹  {data.exShowroomPrice}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(30),paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), flex: 1,marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4),textAlignVertical:'center' }}>RTO Charges</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(14), flex: 1, textAlign: 'right',marginRight:moderateScale(4), fontWeight:'600', textAlignVertical:'center' }}>₹ {data.roadtax}</Text>
              </View>
              <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: scale(40),alignItems:'center'}}> 
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between',}}>

                    {/* Insurance */}
                    <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(4), letterSpacing: moderateScale(0.4)}}>Insurance</Text>
                    {data.insurance.map((insu)=>(
                        <View style={{display:'flex',flexDirection:'row'}}>
                            {/* Basic */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                    {/* <CheckBox
                                      value={isSelected}
                                      onValueChange={()=>handlebasic(insu.Basic)}
                                      style={styles.checkbox}
                                    /> */}
  {/* <RadioButton
  value="isSelected"
  status={checked === 'isSelected' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'isSelected') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('isSelected'); // Check the radio button
    }
    handlebasic(insu.Basic); // Trigger your custom logic
  }}
/> */}
  <RadioButton
  value="isSelected"
  status={selectedStates.insurance === 'isSelected' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('insurance', insu.Basic)}
/>

                                    <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>Basic</Text>
                              </View> 
                              {/* Nilldip */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                    {/* <CheckBox
                                      value={isNilldip}
                                      onValueChange={()=>handleNill(insu.Nildip)}
                                      style={styles.checkbox}
 /> */}
  {/* <RadioButton
  value="isNilldip"
  status={checked === 'isNilldip' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'isNilldip') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('isNilldip'); // Check the radio button
    }
    handleNill(insu.Nildip); // Trigger your custom logic
  }}
                                   /> */}  
   <RadioButton
  value="isNilldip"
  status={selectedStates.insurance === 'isNilldip' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('insurance', insu.Nildip)}
/>
                                    <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>Nildip</Text>
                              </View>
                              {/* EP */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                    {/* <CheckBox
                                      value={EP}
                                      onValueChange={()=>handleEP(insu.Ep)}
                                      style={styles.checkbox}
 /> */}
   {/* <RadioButton
  value="EP"
  status={checked === 'EP' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'EP') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('EP'); // Check the radio button
    }
    handleEP(insu.Ep); // Trigger your custom logic
  }}
                                   /> */}
     <RadioButton
  value="EP"
  status={selectedStates.insurance === 'EP' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('insurance', insu.Ep)}
/>
                                    <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>EP</Text>
                              </View>
                              {/* RTI */}
                              <View style={{alignItems:'center',flexDirection:'row'}}>
                                    {/* <CheckBox
                                        value={RTI}
                                        onValueChange={()=>handleRTI(insu.RTI)}
                                        style={styles.checkbox}
 /> */}
 {/* <RadioButton
  value="RTI"
  status={checked === 'RTI' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'RTI') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('RTI'); // Check the radio button
    }
    handleRTI(insu.RTI); // Trigger your custom logic
  }}
                                     /> */}
                                  
     <RadioButton
  value="RTI"
  status={selectedStates.insurance === 'RTI' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('insurance', insu.RTI)}
/>
                                    <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>RTI</Text>
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
              <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: verticalScale(40),alignItems:'center'}}> 
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between',}}>

                    {/* hypothication */}
                    <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(3), letterSpacing: moderateScale(0.4)}}>Hypothecation</Text>
                      {data.hypothication.map((hype)=>(
                    <View style={{display:'flex',flexDirection:'row'}}>
                      {/* YES */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                          
                            {/* <CheckBox
                              value={YES}
                              onValueChange={()=>handleYes(hype.Yes)}
                              style={styles.checkbox}
                            /> */}
           {/* <RadioButton
  value="Yes"
  status={checked === 'Yes' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'Yes') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('Yes'); // Check the radio button
    }
    handleYes(hype.Yes); // Trigger your custom logic
  }}
/> */}
 <RadioButton
  value="Yes"
  status={selectedStates.hypothecation === 'Yes' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('hypothecation', hype.Yes)}
/>
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>YES</Text>
                        </View> 

                      {/* NO */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                          {/* <CheckBox
                              value={NO}
                              onValueChange={()=>handleNo(hype.No)}
                              style={styles.checkbox}
          /> */}
              {/* <RadioButton
  value="NO"
  status={checked === 'NO' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'NO') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('NO'); // Check the radio button
    }
    handleNo(hype.No); // Trigger your custom logic
  }}
                  /> */}
       <RadioButton
  value="NO"
  status={selectedStates.hypothecation === 'NO' ? 'checked' : 'unchecked'}
  onPress={() => handleRadioChange('hypothecation', hype.No)}
/>
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>NO</Text>
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
              {/* </View> */}
              </View>
              <View style={styles.optionaladdoncontainer}>
                <Text style={{fontWeight:'600', color: '#f9f9f9', fontSize: moderateScale(18), borderBottomWidth:scale(1), borderColor: '#F9F9F9', paddingVertical: verticalScale(5), textAlign:'center', }}>Optional Add Ons/Products</Text>
                <View style={{flexDirection:'row', borderBottomWidth: verticalScale(0.3), borderBottomColor: '#F9F9F9', height: scale(40),alignItems:'center'}}>
                  {/* extendedwarranty */}
                      {data.extendedwarranty.map((ans) => (
                    <View key={index} style={{ flexDirection: 'column', justifyContent: 'space-between',}}>
                      <Text style={{ marginLeft:moderateScale(5),justifyContent:'flex-start', color: '#F9F9F9', fontSize: moderateScale(12),fontWeight:'500',marginBottom:verticalScale(3), letterSpacing: moderateScale(0.4)}}>Extended Warranty</Text>
                        <View style={{display:'flex',flexDirection:'row', paddingBottom:verticalScale(5)}}>
                        {/* 4 */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                          
                            {/* <CheckBox
                              value={four}
                              onValueChange={()=>handleFourChange(ans.fouryears)}
                              style={styles.checkbox}
                              /> */}
                            <RadioButton
  value="four"
  status={checked === 'four' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'four') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('four'); // Check the radio button
    }
    handleFourChange(ans.fouryears); // Trigger your custom logic
  }}
/>
                              <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>4 Years</Text>
                          </View>
                        {/* 5 */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                        
                            {/* <CheckBox
                              value={five}
                              onValueChange={()=>handleFiveChange(ans.fiveyears)}
                              style={styles.checkbox}
                            /> */}
  <RadioButton
  value="five"
  status={checked === 'five' ? 'checked' : 'unchecked'}
  onPress={() => {
    if (checked === 'five') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('five'); // Check the radio button
    }
    handleFiveChange(ans.fiveyears); // Trigger your custom logic
  }}
/>
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>5 Years</Text>
                          </View>

                        {/* 5+RSA */}
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            {/* <CheckBox
                              value={fiveRsa} // Pass ans.fiveplusRSAyears when it's checked
                              onValueChange={() => handleFiveRsaChange(ans.fiveplusRSAyears)} // Pass ans.fiveplusRSAyears to the function
                              style={styles.checkbox}
                      /> */}
                       <RadioButton
  value={fiveRsa}
  status={checked === 'fiveRsa' ? 'checked' : 'unchecked'}
  style={styles.checkbox}
  onPress={() => {
    if (checked === 'fiveRsa') {
      setChecked(''); // Uncheck the radio button
    } else {
      setChecked('fiveRsa'); // Check the radio button
    }
    handleFiveRsaChange(ans.fiveplusRSAyears); // Trigger your custom logic
  }}
      />
                            <Text style={{color:'#F9F9F9',fontSize:moderateScale(12),marginLeft:moderateScale(5), letterSpacing: moderateScale(0.4)}}>5 Years+RSA</Text>
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
            backgroundColor={'#111111'}
            borderColor={'#f9f9f9'}
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
            <Picker.Item label="Mirrors"  value="" />
            {data.mirrors.map((mirror) => (
              <Picker.Item
                key={mirror._id}
                label={`${mirror.mirrorstext} - ₹ ${mirror.mirrorsvalue}`}
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
            <Picker.Item label="Oilfiller cap" value="" />
            {data.oilfillercap.map((oil) => (
              <Picker.Item
                key={oil._id}
                label={`${oil.oilfillercaptext} - ₹ ${oil.oilfillercapvalue}`}
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
              <Picker.Item label="Headlight" value="" />
              {data.headlight.map((headlight) => (
                <Picker.Item
                  key={headlight._id}
                  label={`${headlight.headlighttext} - ₹ ${headlight.headlightvalue}`}
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
                  <Picker.Item label="Windshields" value="" />
                  {data.windshields.map((windshield) => (
                    <Picker.Item
                      key={windshield._id}
                      label={`${windshield.windshieldstext} - ₹ ${windshield.windshieldsvalue}`}
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
                  <Picker.Item label="Panniers" value="" />
                  {data.panniers.map((pannier) => (
                    <Picker.Item
                      key={pannier._id}
                      label={`${pannier.pannierstext} - ₹ ${pannier.panniersvalue}`}
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
                  <Picker.Item label="Seats" value="" />
                  {data.seats.map((seat) => (
                    <Picker.Item
                      key={seat._id}
                      label={`${seat.seatstext} - ₹ ${seat.seatsvalue}`}
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
                  <Picker.Item label="Backrest" value="" />
                  {data.backrests.map((backrest) => (
                    <Picker.Item
                      key={backrest._id}
                      label={`${backrest.backreststext} - ₹ ${backrest.backrestsvalue}`}
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
              <Picker.Item label="Foot Pegs" value="" />
              {data.footpegs.map((footpeg) => (
                <Picker.Item
                  key={footpeg._id}
                  label={`${footpeg.footpegstext} - ₹ ${footpeg.footpegsvalue}`}
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
              <Picker.Item label="Engine Guards" value="" />
              {data.enginegaurds.map((engineGuard) => (
                <Picker.Item
                  key={engineGuard._id}
                  label={`${engineGuard.enginegaurdstext} - ₹ ${engineGuard.enginegaurdsvalue}`}
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
              <Picker.Item label="Sump Guards" value="" />
              {data.sumpgaurds.map((sumpGuard) => (
                <Picker.Item
                  key={sumpGuard._id}
                  label={`${sumpGuard.sumpgaurdstext} - ₹ ${sumpGuard.sumpgaurdsvalue}`}
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
            <Picker.Item label="Safety Accessories" value="" />
            {data.safetyaccessories.map((safetyAccessory) => (
              <Picker.Item
                key={safetyAccessory._id}
                label={`${safetyAccessory.safetyaccessoriestext} - ₹ ${safetyAccessory.safetyaccessoriesvalue}`}
                value={safetyAccessory.safetyaccessoriestext}
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
</ImageBackground>
  );
};

const styles = StyleSheet.create({
  horizontalcontainer:{
flexDirection:'row'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingHorizontal: moderateScale(10),
    paddingTop: verticalScale(10),
  },
    dropdown: {
    height: scale(30),
    width:scale(200),
    justifyContent: 'center', // Center the text vertically
    paddingVertical: verticalScale(5), // Add some padding to align text properly
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
    // width: scale(335),
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
  checkbox: {
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
    // marginBottom: moderateScale(40), // Add spacing between the line and the next content
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
    height: scale(250),
    // width: scale(335), // Adjust the width as needed
    backgroundColor: 'black',
    marginTop: verticalScale(5), // Add margin between sections
    paddingHorizontal: moderateScale(5), // Add padding inside the card
    },
  cardContent: {
    flex:1,
    // height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    color: '#f9f9f9',
    width: scale(80),
    fontSize: moderateScale(12),
    fontWeight: '400',
    letterSpacing: moderateScale(0.4),
    },
  input: {
    flex: 1, // To allow TextInput to expand
    height:scale(30),
    color: '#111111',
    backgroundColor: '#cbcbca',
    borderRadius:scale(5),
    paddingLeft: moderateScale(10), // Add left padding for better appearance
    fontSize:scale(12),
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
    // width: scale(335),
    borderRadius:moderateScale(6),
    backgroundColor:'#434242',
    marginBottom: verticalScale(5),
    gap: scale(5),
    borderColor:'#f9f9f9',
    borderWidth: moderateScale(0.5),
    justifyContent:'space-between'
    },
  // datacard: {
  //   width: 800,
  //   height: 1400,
  //   backgroundColor: 'rgba(151, 151, 151, 0.3)',
  //   // alignItems: 'center',
  //   borderRadius: 10,
  // },
  datacardtext: {
    color: '#f9f9f9',
    fontSize: moderateScale(16),
    textDecorationLine: 'underline',
    marginLeft:moderateScale(5),
    marginBottom: verticalScale(4),
    textAlign:'center',
    },
  optionaladdoncontainer:{
    // width:scale(335),
    // alignItems: 'center',
    gap: scale(5),
    borderRadius:moderateScale(6),
    backgroundColor: '#434242',
    borderColor:'#f9f9f9',
    borderWidth: moderateScale(1),
    paddingBottom:verticalScale(5),
  },
  bottombuttonscontainer:{
    alignItems:'center',
    // width:scale(335), 
    height:scale(40), 
    marginTop: verticalScale(30),
    marginBottom:verticalScale(20),
  },
  shareButton: {
    // borderColor: '#f9f9f9',
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
