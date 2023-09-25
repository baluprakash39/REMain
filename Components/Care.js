
import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button,ScrollView  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Care = () => {

  const [dataArray, setDataArray] = useState([]);
  const removeQuotes = (str) => {
    return str.replace(/["']/g, '');
  };

  useEffect(() => {
    // Retrieve 'homedata' from AsyncStorage
    AsyncStorage.getItem('carddata')
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



  const validateFields = () => {
    let isValid = true;

    if (!basic) {
      setBasicError('Basic field is required');
      isValid = false;
    } else {
      setBasicError('');
    }

    if (!Nilldip) {
      setNilldipError('Nilldip field is required');
      isValid = false;
    } else {
      setNilldipError('');
    }

    if (!EP) {
      setEPError('EP field is required');
      isValid = false;
    } else {
      setEPError('');
    }

    if (!RTI) {
      setRTIError('RTI field is required');
      isValid = false;
    } else {
      setRTIError('');
    }

    if (!YES) {
      setYESError('Yes field is required');
      isValid = false;
    } else {
      setYESError('');
    }

    if (!NO) {
      setNOError('No field is required');
      isValid = false;
    } else {
      setNOError('');
    }

    if (!four) {
      setFourError('4Years field is required');
      isValid = false;
    } else {
      setFourError('');
    }

    if (!five) {
      setFiveError('5Years field is required');
      isValid = false;
    } else {
      setFiveError('');
    }

    if (!fiveRsa) {
      setRsaError('5Years+Rsa field is required');
      isValid = false;
    } else {
      setRsaError('');
    }

    return isValid;
  };

  handleEditDetails = async (Id) => {
    try {
      const data = {
        Basic: Basic,
        Nildip: Nildip,
        Ep: Ep,
        RTI: RTI,
        Yes: Yes,
        No: No,
        fouryears:fouryears,
        fiveyears: fiveyears,
        fiveplusRSAyears: fiveplusRSAyears,
      };

     console.log(data)

      const response = await fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/uploadcare/${Id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Upload successful:', result.message);
      // Handle the response as needed

    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }


  }



  return (
   
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container} contentContainerStyle={{ minHeight: 1000 }}>
        {dataArray.map((bike, index) => (
      <View key={index} style={[styles.container, { height: 1300 }]}>
        {/* Your content here */}
        <Text style={styles.title}>Vehicle Care</Text>
        <TouchableOpacity onPress={navigateToInventory} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>


        
        <View style={{ flexDirection: 'row', marginLeft: 30,marginTop:20 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Vehicle</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 25,fontWeight:700}}>{bike.vehiclename}</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Model</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>{bike.model}</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>EngineCC</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>{bike.EngineCC}</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Color</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>{bike.vehiclecolor}</Text>
</View>

{/* Insurance  view*/}
<View>
<Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Insurance
</Text>


<View  style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Basic</Text>
            
            <TextInput
              style={styles.inputField}
              placeholder="Enter Basic insurence value"
              placeholderTextColor="gray"
              value={Basic}
              onChangeText={(text) => setValue(text)}
            />
          </View>
          {basicError ? <Text style={styles.errorText}>{basicError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Nildip</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Nilldip value"
              placeholderTextColor="gray"
              value={Nildip}
              onChangeText={(text) =>setnilldip(text)}
            />
          </View>
          {nilldipError ? <Text style={styles.errorText}>{nilldipError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>EP</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter EP value"
              placeholderTextColor="gray"
              value={Ep}
              onChangeText={(text) =>setEP(text)}
            />
          </View>
          {epError ? <Text style={styles.errorText}>{epError}</Text> : null}


          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>RTI</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter RTI value"
              placeholderTextColor="gray"
              value={RTI}
              onChangeText={(text) =>setRTI(text)}
            />
          </View>
 {rtiError ? <Text style={styles.errorText}>{rtiError}</Text> : null}

        </View>
     </View>    


{/* Hypothication view */}

  <View >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Hypothication
</Text>


<View style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Yes</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Yes value"
              placeholderTextColor="gray"
              value={Yes}
              onChangeText={(text) => setYES(text)}
            />
          </View>
          {yesError ? <Text style={styles.errorText}>{yesError}</Text> : null}

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>No</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter No value"
              placeholderTextColor="gray"
              value={No}
              onChangeText={(text) =>setNO(text)}
            />
          </View>
          {noError ? <Text style={styles.errorText}>{noError}</Text> : null}

         

          

       
        </View>
</View>


{/* Extednedwarenty */}
<View>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Extended Warrenty
</Text>


<View style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>4Years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 4Years value"
              placeholderTextColor="gray"
              value={fouryears}
              onChangeText={(text) => setfour(text)}
            />
          </View>
          {fourError ? <Text style={styles.errorText}>{fourError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>5years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 5years value"
              placeholderTextColor="gray"
              value={fiveyears}
              onChangeText={(text) =>setfive(text)}
            />
          </View>
          {fiveError ? <Text style={styles.errorText}>{fiveError}</Text> : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>5yeasr+Rsa</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 5years+Rsa value"
              placeholderTextColor="gray"
              value={fiveplusRSAyears}
              onChangeText={(text) =>setRsa(text)}
            />
          </View>
          {fiveRsaError ? <Text style={styles.errorText}>{fiveRsaError}</Text> : null}
        


        </View>
</View>
        
  

      <TouchableOpacity style={styles.button} onPress={()=>handleEditDetails(bike._id)}>
            <Text style={styles.buttonText}>Edit/Add Details</Text>
          </TouchableOpacity>
          
      
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
    padding: 16,
    height:1
   
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },

  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  
});

export default Care;
