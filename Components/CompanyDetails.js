
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

const CompanyDetails = () => {

 
  const [brandName, setBrandName] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [modelName, setModelName] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [color, setColor] = useState('');
  const [exShowroomPrice, setExShowroomPrice] = useState('');
  const [roadTax, setRoadTax] = useState('');
  const [registration, setRegistration] = useState('');

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Your content here */}
        <Text style={styles.title}>CompanyDetails</Text>

        <View style={styles.line}></View>
        <View style={{ flexDirection: 'column', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            
           
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550}}>
            <Text style={{ width: 120, marginRight: 10, color: 'white',fontSize:18 ,fontWeight:700 }}>Company Name</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Brand Name"
              placeholderTextColor="gray"
              value={brandName}
              onChangeText={(text) => setBrandName(text)}
            />
          </View>
         <Text style={{color:'white',fontSize:20,marginBottom:20,marginTop:20,fontWeight:700}}>Company Address</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16 }}>Adress1</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Address Name"
              placeholderTextColor="gray"
              value={vehicleName}
              onChangeText={(text) => setVehicleName(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16 }}>Street Name</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Street Name"
              placeholderTextColor="gray"
              value={modelName}
              onChangeText={(text) => setModelName(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA',fontSize:16 }}>City</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter City Name"
              placeholderTextColor="gray"
              value={engineCC}
              onChangeText={(text) => setEngineCC(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16 }}>Pincode</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Pincode"
              placeholderTextColor="gray"
              value={color}
              onChangeText={(text) => setColor(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16}}>State</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Statename"
              placeholderTextColor="gray"
              value={exShowroomPrice}
              onChangeText={(text) => setExShowroomPrice(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA',fontSize:16 }}>Country</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Country Name"
              placeholderTextColor="gray"
              value={roadTax}
              onChangeText={(text) => setRoadTax(text)}
            />
          </View>
          <Text style={{color:'white',fontSize:20,marginBottom:20,marginTop:20,fontWeight:700}}>Contact Details</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16 }}>ContactNumber</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Contact Number"
              placeholderTextColor="gray"
              value={registration}
              onChangeText={(text) => setRegistration(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
            <Text style={{ width: 120, marginRight: 10, color: '#CBCBCA' }}>EmailId</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter EmailId"
              placeholderTextColor="gray"
              value={registration}
              onChangeText={(text) => setRegistration(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:550 }}>
           
            <Text style={{ width: 120, marginRight: 10,  color: '#CBCBCA',fontSize:16 }}>Website</Text>
            <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Website"
              placeholderTextColor="gray"
              value={registration}
              onChangeText={(text) => setRegistration(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Add your logic to add the vehicle here
            }}
          >
            <Text style={styles.buttonText}>Add Details</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 16,
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
  dropdown: {
    height: 40,
    width: '100%',
    justifyContent: 'center', // Center the text vertically
    paddingLeft: 10, // Add some padding to align text properly
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
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 200,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CompanyDetails;
