
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native'; // Import ScrollView for scrolling if needed
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


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


// dropdowns
const [selectedMirrorstext, setSelectedMirrorstext] = useState(''); // Initialize with a default value
  const [selectedMirrorsvalue, setSelectedMirrorsvalue] = useState('');
  const [selectedOilFillerCapText, setSelectedOilFillerCapText] = useState(''); // Initialize with a default value for oilfillercap
  const [selectedOilFillerCapValue, setSelectedOilFillerCapValue] = useState('');
  const [selectedHeadLightText, setSelectedHeadLightText] = useState('');
const [selectedHeadLightValue, setSelectedHeadLightValue] = useState('');
const [selectedWindshieldsText, setSelectedWindshieldsText] = useState('');
const [selectedWindshieldsValue, setSelectedWindshieldsValue] = useState('');
const [selectedPanniersText, setSelectedPanniersText] = useState('');
const [selectedPanniersValue, setSelectedPanniersValue] = useState('');
const [selectedSeatsText, setSelectedSeatsText] = useState('');
const [selectedSeatsValue, setSelectedSeatsValue] = useState('');

const [selectedBackrestText, setSelectedBackrestText] = useState('');
const [selectedBackrestValue, setSelectedBackrestValue] = useState('');

const [selectedFootPegsText, setSelectedFootPegsText] = useState('');
const [selectedFootPegsValue, setSelectedFootPegsValue] = useState('');

const [selectedEngineGuardsText, setSelectedEngineGuardsText] = useState('');
const [selectedEngineGuardsValue, setSelectedEngineGuardsValue] = useState('');

const [selectedSumpGuardsText, setSelectedSumpGuardsText] = useState('');
const [selectedSumpGuardsValue, setSelectedSumpGuardsValue] = useState('');


const [selectedSafetyAccessoriesText, setSelectedSafetyAccessoriesText] = useState('');
const [selectedSafetyAccessoriesValue, setSelectedSafetyAccessoriesValue] = useState('');
// Add state variables for other dropdowns here



console.log(selectedMirrorsvalue,selectedMirrorstext)
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
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundimage} >
      <ScrollView contentContainerStyle={styles.container}>
        {dataArray.map((data, index) => (
        <View key={index} style={styles.content}>
          {/* <TouchableOpacity
              onPress={() => {
                // Navigate back to the 'Home' screen
                navigation.navigate('Home');
              }}
            >
              <Text style={{ color: '#F9F9F9', fontSize: 20 }}>Back</Text>
            </TouchableOpacity> */}
          <View style={styles.header}>
            <View style={{ alignContent: 'center'}}>
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
              <Text style={{fontWeight:600, color: '#f9f9f9', fontSize: 20, borderBottomWidth:1, borderColor: '#F9F9F9', paddingVertical: 5, textAlign:'center', }}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.3, borderBottomColor: '#F9F9F9', height: 50,}}>
              <Text style={{ color: '#F9F9F9', fontSize: 16, flex: 1,marginLeft:5, letterSpacing: 0.4 }}>Ex.showroom price (including GST)</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600' }}>₹  {data.exShowroomPrice}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.3, borderBottomColor: '#F9F9F9', height: 30,paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: 16, flex: 1,marginLeft:5, letterSpacing: 0.4 }}>RTO Charges</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600' }}>₹  500</Text>
              </View >
              <View style={{borderBottomWidth: 0.3, borderBottomColor: '#F9F9F9', height: 60,}}> 
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{ marginLeft:5,justifyContent:'flex-start', color: '#F9F9F9', fontSize: 16,marginBottom:4, letterSpacing: 0.4}}>Insurance</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600' }}>₹  500</Text>
                </View>
             <View style={{display:'flex',flexDirection:'row'}}>
            {/* Basic */}
             <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>Basic</Text>
             <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View> 
            {/* Nilldip */}
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>Nildip</Text>
             <CheckBox
                value={isNilldip}
                onValueChange={setnilldip}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View>
            
            {/* EP */}
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>EP</Text>
             <CheckBox
                value={EP}
                onValueChange={setEP}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View>
            {/* RTI */}
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>RTI</Text>
             <CheckBox
          value={RTI}
          onValueChange={setRTI}
          style={{ borderColor: 'red',}} // Change the box color here
          tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
        />
            </View>
            </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.3, borderBottomColor: '#F9F9F9', height: 30,paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: 16, flex: 1,marginLeft:5, letterSpacing: 0.4 }}>Registartion(Fixed)</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600'  }}>₹  1000</Text>
              </View>
              <View style={{borderBottomWidth: 0.3, borderBottomColor: '#F9F9F9', height: 60}}> 
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                      <Text style={{ marginLeft:5,justifyContent:'flex-start', color: '#F9F9F9', fontSize: 16,marginBottom:4, letterSpacing: 0.4,}}>Hypothecation</Text>
                      <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600' }}>₹  1000</Text>
                  </View>
              <View style={{display:'flex',flexDirection:'row'}}>
            {/* YES */}
            <View style={{alignItems:'center',flexDirection:'row'}}>
                <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>YES</Text>
                <CheckBox
                    value={YES}
                    onValueChange={setYes}
                    style={{ borderColor: 'red',}} // Change the box color here
                    tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
                  />
            </View> 
           {/* NO */}
           <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>NO</Text>
             <CheckBox
          value={NO}
          onValueChange={setNo}
          style={{ borderColor: 'red',}} // Change the box color here
          tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
        />
            </View>
             
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',height: 40,paddingVertical:5}}>
                <Text style={{ color: '#F9F9F9', fontSize: 18, flex: 1,marginLeft:5, letterSpacing: 0.4, fontWeight: '600' }}>OnRoad Price total :</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 18, flex: 1, textAlign: 'right',marginRight:4, fontWeight: '600' }}>₹  3,50,000</Text>
              </View>
              </View>
              </View>
              <View style={styles.optionaladdoncontainer}>
              <Text style={{fontWeight:600, color: '#f9f9f9', fontSize: 20, borderBottomWidth:1, borderColor: '#F9F9F9', paddingVertical: 5, textAlign:'center', }}>Optional Add Ons/Products</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{ marginLeft:5,justifyContent:'flex-start', color: '#F9F9F9', fontSize: 16,marginBottom:4, letterSpacing: 0.4}}>Extended Warranty</Text>
                <Text style={{ color: '#F9F9F9', fontSize: 14, flex: 1, textAlign: 'right',marginRight:4, fontWeight:'600' }}>₹  500</Text>
                </View>
             <View style={{display:'flex',flexDirection:'row',borderBottomWidth:0.3, borderColor: '#F9F9F9', paddingBottom:5}}>
            {/* 4 */}
             <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>4Years</Text>
             <CheckBox
                value={four}
                onValueChange={setfour}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View>
            {/* 5 */}
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>5Years</Text>
             <CheckBox
                value={five}
                onValueChange={setfive}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View>
            
            {/* 5+RSA*/}
            <View style={{alignItems:'center',flexDirection:'row'}}>
             <Text style={{color:'#F9F9F9',fontSize:14,marginLeft:5, letterSpacing: 0.4}}>5Years+RSA</Text>
             <CheckBox
                value={fiveRsa}
                onValueChange={setfiveRsa}
                style={{ borderColor: 'red',}} // Change the box color here
                tintColors={{ true: 'blue', false: '#f9f9f9' }} // Change the checkmark color here
              />
            </View>
            
         {/* style,comfort,safty tabs */}
      

             
            </View>

<View style={{ margin:4,borderRadius:2,padding:3, flexDirection:'row' ,justifyContent: 'space-between', borderRadius:10, backgroundColor:'#111111'}}>
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
  <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',width:230,marginHorizontal:2 }}>
    {selectedTab === 'Style' && (
      <>
        {/* Show mirrors dropdown */}
        <View style={styles.dropdown}>
          <Picker
            backgroundColor={'#111111'}
            borderColor={'#f9f9f9'}
            selectedValue={selectedMirrorstext}
            onValueChange={(itemValue) => {
              const selectedMirror = data.mirrors.find(
                (mirror) => mirror.mirrorstext === itemValue
              );
              setSelectedMirrorstext(selectedMirror ? selectedMirror.mirrorstext : '');
              setSelectedMirrorsvalue(selectedMirror ? selectedMirror.mirrorsvalue : '');
            }}
          >
            <Picker.Item label="Mirrors"  value="" />
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
              const selectedoil = data.oilfillercap.find(
                (oil) => oil.oilfillercaptext === itemValue
                );
              setSelectedOilFillerCapText(selectedoil ? selectedoil.oilfillercaptext : '');
              setSelectedOilFillerCapValue(selectedoil ? selectedoil.oilfillercapvalue : '');
                }}
              >
            <Picker.Item label="Oilfiller cap" value="" />
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
              const selectedHeadLight = data.headlight.find(
                (headlight) => headlight.headlighttext === itemValue
                 );
              setSelectedHeadLightText(selectedHeadLight ? selectedHeadLight.headlighttext : '');
              setSelectedHeadLightValue(selectedHeadLight ? selectedHeadLight.headlightvalue : '');
                }}
              >
              <Picker.Item label="Headlight" value="" />
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
                    const selectedWindshield = data.windshields.find(
                      (windshield) => windshield.windshieldstext === itemValue
                    );
                    setSelectedWindshieldsText(selectedWindshield ? selectedWindshield.windshieldstext : '');
                    setSelectedWindshieldsValue(selectedWindshield ? selectedWindshield.windshieldsvalue : '');
                  }}
                >
                  <Picker.Item label="Windshields" value="" />
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
                    const selectedPannier = data.panniers.find(
                      (pannier) => pannier.pannierstext === itemValue
                    );
                    setSelectedPanniersText(selectedPannier ? selectedPannier.pannierstext : '');
                    setSelectedPanniersValue(selectedPannier ? selectedPannier.panniersvalue : '');
                  }}
                >
                  <Picker.Item label="Panniers" value="" />
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
                    const selectedSeat = data.seats.find(
                      (seat) => seat.seatstext === itemValue
                    );
                    setSelectedSeatsText(selectedSeat ? selectedSeat.seatstext : '');
                    setSelectedSeatsValue(selectedSeat ? selectedSeat.seatsvalue : '');
                  }}
                >
                  <Picker.Item label="Seats" value="" />
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
                    const selectedBackrest = data.backrests.find(
                      (backrest) => backrest.backreststext === itemValue
                    );
                    setSelectedBackrestText(selectedBackrest ? selectedBackrest.backreststext : '');
                    setSelectedBackrestValue(selectedBackrest ? selectedBackrest.backrestsvalue : '');
                  }}
                >
                  <Picker.Item label="Backrest" value="" />
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
                const selectedFootPeg = data.footpegs.find(
                  (footpeg) => footpeg.footpegstext === itemValue
                );
                setSelectedFootPegsText(selectedFootPeg ? selectedFootPeg.footpegstext : '');
                setSelectedFootPegsValue(selectedFootPeg ? selectedFootPeg.footpegsvalue : '');
              }}
            >
              <Picker.Item label="Foot Pegs" value="" />
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
                const selectedEngineGuard = data.enginegaurds.find(
                  (engineGuard) => engineGuard.enginegaurdstext === itemValue
                  );
                setSelectedEngineGuardsText(selectedEngineGuard ? selectedEngineGuard.enginegaurdstext : '');
                setSelectedEngineGuardsValue(selectedEngineGuard ? selectedEngineGuard.enginegaurdsvalue : '');
                  }}
                >
              <Picker.Item label="Engine Guards" value="" />
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
                const selectedSumpGuard = data.sumpgaurds.find(
                  (sumpGuard) => sumpGuard.sumpgaurdstext === itemValue
                  );
                setSelectedSumpGuardsText(selectedSumpGuard ? selectedSumpGuard.sumpgaurdstext : '');
                setSelectedSumpGuardsValue(selectedSumpGuard ? selectedSumpGuard.sumpgaurdsvalue: '');
                }}
              >
              <Picker.Item label="Sump Guards" value="" />
              {data.sumpgaurds.map((sumpGuard) => (
                <Picker.Item
                  key={sumpGuard._id}
                  label={`${sumpGuard.sumpgaurdstext} (${sumpGuard.sumpgaurdsvalue})`}
                  value={sumpGuard.sumpgaurdstext}
                />
              ))}
            </Picker>
          </View>

{/* Other Dropdowns */}
{/* Add more Picker components for other dropdowns here */}

        {/* Safety Accessories */}
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedSafetyAccessoriesText}
            onValueChange={(itemValue) => {
              const selectedSafetyAccessory = data.safetyaccessories.find(
                (safetyAccessory) => safetyAccessory.safetyaccessoriestext === itemValue
                );
              setSelectedSafetyAccessoriesText(selectedSafetyAccessory ? selectedSafetyAccessory.safetyaccessoriestext : '');
              setSelectedSafetyAccessoriesValue(selectedSafetyAccessory ? selectedSafetyAccessory.safetyaccessoriesvalue : '');
                }}
              >
            <Picker.Item label="Safety Accessories" value="" />
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
</View>

             

              {/* Add a separate view for the extended line */}
              {/* <View style={styles.extendedLine} /> */}
            </View>
          
          <View style={styles.bottombuttonscontainer}>
            
              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => {
                  // Handle the share functionality here
                }}
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
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  dropdown: {
    height: 40,
    width:'100%',
    justifyContent: 'center', // Center the text vertically
    paddingVertical: 5, // Add some padding to align text properly
    backgroundColor:'#F9F9F9',
    borderRadius:5,
    marginHorizontal:5,
    marginVertical:5,
  },
  header:{
    gap: 130,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  headertitle:{
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  tab: {
    color:'#F9F9F9',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingVertical:25,
    marginHorizontal:2,
    marginVertical:5,
    borderRadius: 10,
    textAlign: 'center',
    height:70,
    width:120,
    alignItems:'center',
    alignContent:'center',
    borderColor: '#F9F9F9',
    borderWidth:1,
  },
  checkbox: {
    borderColor: '#f9f9f9'
  },
  extendedLine: {
    borderBottomWidth: 100, // Set the desired length (e.g., 50 pixels)
    borderBottomColor: '#F9F9F9',
    marginBottom: 20, // Add spacing between the line and the next content
  },
  
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F9F9F9',
    marginBottom: 20, // Add spacing between the line and the next content
    // columnGap: 100
  },
  container: {
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },
  title: {
    color: '#f9f9f9',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  logo: {
    width: 180,
    borderRadius: 10,
    height: 60,
    marginTop: 10,
  },
  card: {
    flexDirection:'column',
    borderWidth: 1,
    borderColor: '#f9f9f9',
    borderRadius: 10,
    height: 200,
    width: '100%', // Adjust the width as needed
    backgroundColor: 'black',
    marginTop: 10, // Add margin between sections
    paddingHorizontal: 5, // Add padding inside the card
  },
  cardContent: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, // Add vertical margin between items
  },
  labelText: {
    color: '#f9f9f9',
    width: 100,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
  input: {
    flex: 1, // To allow TextInput to expand
    color: '#868687',
    backgroundColor: '#cbcbca',
    borderRadius:5,
    paddingLeft: 10, // Add left padding for better appearance
  },
  imageCard: {
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
    height: 200,
  },
  customerImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  centeredContainer: {
    height: '500',
    width: '100%',
    borderRadius:10,
    backgroundColor:'#434242',
    marginBottom: 5,
    gap: 5,
    borderColor:'#f9f9f9',
    borderWidth: 0.5,
  },
  datacardtext: {
    color: '#f9f9f9',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginLeft:5,
    marginBottom: 4,
    textAlign:'center',
  },
  optionaladdoncontainer:{
    width:'100%',
    // alignItems: 'center',
    borderRadius: 10 ,
    gap: 5,
    borderRadius:10,
    backgroundColor: '#434242',
    borderColor:'#f9f9f9',
    borderWidth: 1,
    paddingBottom:5,
  },
  bottombuttonscontainer:{
    alignItems:'center',
    width:'100%', 
    height:50, 
    marginTop: 30,
    marginBottom:20,
  },
  shareButton: {
    borderColor: '#f9f9f9',
    backgroundColor:'#453F3F',
    borderWidth: 1,
    borderRadius: 6,
    width:'70%',
    height: 50,
    padding: 10,
    alignItems: 'center'
  },
  shareButtonText: {
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: '500',
    textAlign:'center',
  },
});

export default Share;
