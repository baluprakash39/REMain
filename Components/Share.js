import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native'; // Import ScrollView for scrolling if needed
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const dataa = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
// import CheckBox from 'react-native-check-box'
const Share = () => {
  const navigation = useNavigation();
    const [selectedStyle, setSelectedStyle] = useState(null);

  const [value, setValue] = useState(null);
  const [dataArray, setDataArray] = useState([]);
  const [customername, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailid, setEmailId] = useState('');

  const [isSelected, setSelection] = useState(false);
  const [isNilldip,setnilldip]=useState(false);
  const [EP,setEP]=useState(false);
  const[RTI,setRTI]=useState(false);
  const [YES,setYes]=useState(false);
  const[NO,setNo]=useState(false);
  const[four,setfour]=useState(false);
  const[five,setfive]=useState(false);
  const[fiveRsa,setfiveRsa]=useState(false);
  const [selectedTab, setSelectedTab] = useState('Style');


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

const handleShare = async () => {
  try {
    // Prepare the formData object with customer details and other data
    const formData = {
      customername,
      address,
      mobilenumber,
      emailid,
      // Add other data you want to store
      value,
      oilFillerCap,
      headlight,
      windshields,
      panniers,
      seats,
      backrest,
      footpegs,
      engineGuards,
      sumpGuards,
      safetyAccessories,
    };

    // Convert formData to JSON string
    const formDataJSON = JSON.stringify(formData);

    // Store the formData in AsyncStorage
    await AsyncStorage.setItem('formData', formDataJSON);

    // Navigate to the SharePdf screen
    navigation.navigate('SharePdf');
  } catch (error) {
    console.error('Error storing formData:', error);
  }
};

  const removeQuotes = (str) => {
    return str.replace(/["']/g, '');
  };

  useEffect(() => {
    // Retrieve 'homedata' from AsyncStorage
    AsyncStorage.getItem('homedata')
      .then((id) => {
        if (id !== null) {
          const formattedId = removeQuotes(id);
          fetchBikeDetails(formattedId);
        }
      })
      .catch((error) => {
        console.error('Error retrieving homedata from AsyncStorage:', error);
      });
  }, []);

  const fetchBikeDetails = async (id) => {
    const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbike/${id}`;

    try {
      const response = await axios.get(url);
      const bike = response.data;
      setDataArray([]);
      setDataArray((prevDataArray) => [...prevDataArray, bike]);
      await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
      console.log('Bike data stored successfully',bike);
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };

  return (
    <ImageBackground
    source={require('../assets/red.jpg')} // Replace with your image path
    style={styles.container}
  >
    <ScrollView contentContainerStyle={styles.container}>
    {dataArray.map((data, index) => (
      <View key={index} style={styles.content}>
       <TouchableOpacity
          onPress={() => {
            // Navigate back to the 'Home' screen
            navigation.navigate('Home');
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Back</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ textAlign: 'left', color: 'white', fontSize: 30, flex: 1 }}>
            Quotation
          </Text>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg',
            }}
          />
        </View>

        {/* Add Customer Details Section Below */}
        <Text style={styles.title}>Customer details</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>Customer Name :</Text>
            <TextInput
              style={styles.input}
              value={customername}
              onChangeText={setCustomerName}
              placeholder="Enter customer name"
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
              placeholder="Enter Mobile"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.labelText}>emailid :</Text>
            <TextInput
              style={styles.input}
              value={emailid}
              onChangeText={setEmailId}
              placeholder="Enter mailId"
            />
          </View>
        </View>
        <View style={styles.imageCard}>
            {data.adminallimages && data.adminallimages.length > 0 && (
              <Image
                style={styles.customerImage}
                source={{ uri: data.adminallimages[0] }}
              />
            )}
          </View>

          {/* Center the datacard container */}
          <View style={styles.centeredContainer}>
            <View style={styles.datacard}>
              <Text style={styles.datacardtext}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

              <View style={styles.priceContainer}>
                <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30 }}>Ex.showroom price (including GST)</Text>
                <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  {data.exShowroomPrice}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30 }}>RTO Charges</Text>
                <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  500</Text>
              </View>
              <View > 
                <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Insurence</Text>
             <View style={{display:'flex',flexDirection:'row'}}>
            {/* Basic */}
             <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Basic</Text>
             <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
            </View> 
            {/* Nilldip */}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>Nildip</Text>
             <CheckBox
          value={isNilldip}
          onValueChange={setnilldip}
          style={styles.checkbox}
        />
            </View>
            
            {/* EP */}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>EP</Text>
             <CheckBox
          value={EP}
          onValueChange={setEP}
          style={styles.checkbox}
        />
            </View>
            {/* RTI */}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>RTI</Text>
             <CheckBox
          value={RTI}
          onValueChange={setRTI}
          style={styles.checkbox}
        />
            </View>
             
            </View>
            <View style={styles.priceContainer}>
                <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30,marginTop:20,marginBottom:10 }}>Registartion(Fixed)</Text>
                <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  1000</Text>
              </View>
              <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Hypothiccation</Text>
              <View style={{display:'flex',flexDirection:'row'}}>
            {/* YES */}
             <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:30,marginLeft:30}}>YES</Text>
             <CheckBox
          value={YES}
          onValueChange={setYes}
          style={styles.checkbox}
        />
            </View> 
           
           
            {/* NO */}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>NO</Text>
             <CheckBox
          value={NO}
          onValueChange={setNo}
          style={styles.checkbox}
        />
            </View>
             
            </View>
            <View style={styles.priceContainer}>
                <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,marginLeft:30 }}>OnRoad Price</Text>
                <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right',marginRight:30 }}>₹  3,50,000</Text>
              </View>
             

              <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: '#F9F9F9', fontSize: 22 ,marginBottom:10,fontWeight:600}}>Optional Add Ons/Products</Text>
              <Text style={{ marginLeft:30,display:'flex',justifyContent:'flex-start', color: 'rgba(249, 249, 249, 0.7)', fontSize: 22 ,marginBottom:10}}>Extended Warrenty</Text>
             <View style={{display:'flex',flexDirection:'row'}}>
            {/* 4 */}
             <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>4Years</Text>
             <CheckBox
          value={four}
          onValueChange={setfour}
          style={styles.checkbox}
        />
            </View> 
            {/* 5 */}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>5Years</Text>
             <CheckBox
          value={five}
          onValueChange={setfive}
          style={styles.checkbox}
        />
            </View>
            
            {/* 5+RSA*/}
            <View style={{display:'flex',flexDirection:'row'}}>
             <Text style={{color:'white',fontSize:20,marginLeft:20,marginLeft:30}}>5Years+RSA</Text>
             <CheckBox
          value={fiveRsa}
          onValueChange={setfiveRsa}
          style={styles.checkbox}
        />
            </View>
            
         {/* style,comfort,safty tabs */}
      

             
            </View>


            <View style={styles.accessoriesText}>
  <View style={{ display:'flex',flexDirection:'row',justifyContent:'center' }}>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Style')}>
      Style
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Comfort')}>
      Comfort
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Protection')}>
      Protection
    </Text>
    {/* Show dropdowns based on the selected tab */}
    
   






  </View>
  
  <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              {/* Show dropdowns based on the selected tab */}
              {selectedTab === 'Style' && (
                // Add your dropdown components for Style here

                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5,width:500 }}>
                  {/* Mirrors */}
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={dataa}
                  search
                  maxHeight={400}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Mirrors"
                  searchPlaceholder="Search..."
                  value={value}
                  onChange={(item) => {
                    setValue(item.value);
                  }}
                />

                 {/* Oil Filler Cap */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Oil Filler Cap"
      searchPlaceholder="Search..."
      value={oilFillerCap}
      onChange={(item) => {
        setOilFillerCap(item.value);
      }}
    />

    {/* Headlight */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Headlight"
      searchPlaceholder="Search..."
      value={headlight}
      onChange={(item) => {
        setHeadlight(item.value);
      }}
    />
              </View>
                
              )}
               
{selectedTab === 'Comfort' && (
    <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5,width:500 }}>
      {/* Windshields */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={dataa}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Windshields"
        searchPlaceholder="Search..."
        value={windshields} // Create a state variable for windshields
        onChange={(item) => {
          setWindshields(item.value); // Create a state variable and set its value
        }}
      />

      {/* Panniers */}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={dataa}
        search
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder="Select Panniers"
        searchPlaceholder="Search..."
        value={panniers} // Create a state variable for panniers
        onChange={(item) => {
          setPanniers(item.value); // Create a state variable and set its value
        }}
      />
           {/* Seats */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Seats"
      searchPlaceholder="Search..."
      value={seats}
      onChange={(item) => {
        setSeats(item.value);
      }}
    />

    {/* Backrest */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Backrest"
      searchPlaceholder="Search..."
      value={backrest}
      onChange={(item) => {
        setBackrest(item.value);
      }}
    />

    {/* Footpegs */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Footpegs"
      searchPlaceholder="Search..."
      value={footpegs}
      onChange={(item) => {
        setFootpegs(item.value);
      }}
    />

      
    </View>
  )}
{selectedTab === 'Protection' && (
  <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5, width: 500 }}>
    {/* Engine Guards */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Engine Guards"
      searchPlaceholder="Search..."
      value={engineGuards}
      onChange={(item) => {
        setEngineGuards(item.value);
      }}
    />

    {/* Sump Guards */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Sump Guards"
      searchPlaceholder="Search..."
      value={sumpGuards}
      onChange={(item) => {
        setSumpGuards(item.value);
      }}
    />

    {/* Safety Accessories */}
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dataa}
      search
      maxHeight={400}
      labelField="label"
      valueField="value"
      placeholder="Select Safety Accessories"
      searchPlaceholder="Search..."
      value={safetyAccessories}
      onChange={(item) => {
        setSafetyAccessories(item.value);
      }}
    />
  </View>
)}



            </View>
  



            


</View>
        













             </View>
             
             





              {/* Add a separate view for the extended line */}
              {/* <View style={styles.extendedLine} /> */}
            </View>
          </View>
          <View style={styles.centeredContainer}>
            
              {/* <TouchableOpacity
                style={styles.shareButton}
                onPress={() => {
                  // Handle the share functionality here
                  navigation.navigate('SharePdf');
                }}
              >
                <Text style={styles.shareButtonText}>Share Screen</Text>
              </TouchableOpacity> */}
       <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShare} // Call handleShare when the button is pressed
        >
          <Text style={styles.shareButtonText}>Share Screen</Text>
        </TouchableOpacity>

            </View>
      </View>
    ))}
  </ScrollView>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: '110%',
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
    height: 2000,
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

export default Share;