
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const AddVehicle = () => {

  const [value, setValue] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [modelName, setModelName] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [color, setColor] = useState('');
  const [exShowroomPrice, setExShowroomPrice] = useState('');
  const [roadTax, setRoadTax] = useState('');
  const [registration, setRegistration] = useState('');

  return (
    <ImageBackground source={require('./assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Your content here */}
        <Text style={styles.title}>Add Vehicle</Text>

        <View style={styles.line}></View>
        <View style={{ flexDirection: 'column', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Select Section</Text>
            <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5 }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Section"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Brand Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Brand Name"
              placeholderTextColor="gray"
              value={brandName}
              onChangeText={(text) => setBrandName(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Vehicle Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Vehicle Name"
              placeholderTextColor="gray"
              value={vehicleName}
              onChangeText={(text) => setVehicleName(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Model Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Model Name"
              placeholderTextColor="gray"
              value={modelName}
              onChangeText={(text) => setModelName(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Engine CC</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine CC"
              placeholderTextColor="gray"
              value={engineCC}
              onChangeText={(text) => setEngineCC(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Color</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Color"
              placeholderTextColor="gray"
              value={color}
              onChangeText={(text) => setColor(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>ExShowroom Price</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter ExShowroom price"
              placeholderTextColor="gray"
              value={exShowroomPrice}
              onChangeText={(text) => setExShowroomPrice(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Road tax</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Roadtax"
              placeholderTextColor="gray"
              value={roadTax}
              onChangeText={(text) => setRoadTax(text)}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Registartion(fixed)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Registartion"
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
            <Text style={styles.buttonText}>Add Vehicle</Text>
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

export default AddVehicle;
