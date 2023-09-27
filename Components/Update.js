
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Update = () => {
  const navigation = useNavigation();
  const [localdata, setLocalData] = useState({
    _id: '',
    section: '',
    vehiclename: '',
    model: '',
    EngineCC: '',
    vehiclecolor: '',
    exShowroomPrice: '',
    registration: '',
    roadtax: '',
  });

  const [sectionError, setSectionError] = useState('');
  const [vehicleNameError, setVehicleNameError] = useState('');
  const [modelNameError, setModelNameError] = useState('');
  const [engineCCError, setEngineCCError] = useState('');
  const [colorError, setColorError] = useState('');
  const [exShowroomPriceError, setExShowroomPriceError] = useState('');
  const [roadTaxError, setRoadTaxError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('Bikes');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setLocalData(parsedData);
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const updateVehicle = async () => {
    // Reset error messages
    setSectionError('');
    setVehicleNameError('');
    setModelNameError('');
    setEngineCCError('');
    setColorError('');
    setExShowroomPriceError('');
    setRoadTaxError('');
    setRegistrationError('');

    // Check for errors
    let hasErrors = false;

    if (!localdata.section) {
      setSectionError('Section is required');
      hasErrors = true;
    }

    if (!localdata.vehiclename) {
      setVehicleNameError('Vehicle Name is required');
      hasErrors = true;
    }

    if (!localdata.model) {
      setModelNameError('Model Name is required');
      hasErrors = true;
    }

    if (!localdata.EngineCC) {
      setEngineCCError('Engine CC is required');
      hasErrors = true;
    }

    if (!localdata.vehiclecolor) {
      setColorError('Color is required');
      hasErrors = true;
    }

    if (!localdata.exShowroomPrice) {
      setExShowroomPriceError('ExShowroom Price is required');
      hasErrors = true;
    }

    if (!localdata.roadtax) {
      setRoadTaxError('Road Tax is required');
      hasErrors = true;
    }

    if (!localdata.registration) {
      setRegistrationError('Registration is required');
      hasErrors = true;
    }

    // if (!hasErrors) {
    //   // All required fields are filled, you can send the PUT request here
    //   const id = localdata._id;
    //   console.log(id) // Replace with the ID you want to update
    //   const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/updatebikes/${id}`;

    //   fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(localdata), // Pass the updated data in the request body
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       // Handle the response here if needed
    //       // Navigate back to the 'Inventory' screen or any other screen as needed
    //       navigation.navigate('Inventory');
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //       // Handle the error here
    //     });
    // }
    
  if (!hasErrors) {
    const id = localdata._id;
    const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/updatebikes/${id}`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(localdata),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the data in AsyncStorage
      await AsyncStorage.setItem('Bikes', JSON.stringify(localdata));

      // Update the state to reflect the changes
      setLocalData(localdata); // Update the local state with the updated data

      // Handle the response here if needed
      navigation.navigate('Inventory');
    } catch (error) {
      console.error('Error:', error);
      // Handle the error here
    }
  }
    
  };

  const handleBackPress = () => {
    // Navigate back to the Inventory screen
    navigation.navigate('Inventory');
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text style={{ color: 'white', fontSize: 20 }}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Vehicle</Text>
        <View style={styles.line} />
        <View style={{ flexDirection: 'column', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Section Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Section Name"
              placeholderTextColor="gray"
              value={localdata.section}
              onChangeText={(text) => setLocalData({ ...localdata, section: text })}
            />
          </View>
          <Text style={styles.errorText}>{sectionError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Vehicle Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Vehicle Name"
              placeholderTextColor="gray"
              value={localdata.vehiclename}
              onChangeText={(text) => setLocalData({ ...localdata, vehiclename: text })}
            />
          </View>
          <Text style={styles.errorText}>{vehicleNameError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Model Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Model Name"
              placeholderTextColor="gray"
              value={localdata.model}
              onChangeText={(text) => setLocalData({ ...localdata, model: text })}
            />
          </View>
          <Text style={styles.errorText}>{modelNameError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Engine CC</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine CC"
              placeholderTextColor="gray"
              value={localdata.EngineCC}
              onChangeText={(text) => setLocalData({ ...localdata, EngineCC: text })}
            />
          </View>
          <Text style={styles.errorText}>{engineCCError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Color</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Color"
              placeholderTextColor="gray"
              value={localdata.vehiclecolor}
              onChangeText={(text) => setLocalData({ ...localdata, vehiclecolor: text })}
            />
          </View>
          <Text style={styles.errorText}>{colorError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>ExShowroom Price</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter ExShowroom price"
              placeholderTextColor="gray"
              value={localdata.exShowroomPrice}
              onChangeText={(text) => setLocalData({ ...localdata, exShowroomPrice: text })}
            />
          </View>
          <Text style={styles.errorText}>{exShowroomPriceError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Road tax</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Roadtax"
              placeholderTextColor="gray"
              value={localdata.roadtax}
              onChangeText={(text) => setLocalData({ ...localdata, roadtax: text })}
            />
          </View>
          <Text style={styles.errorText}>{roadTaxError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Registartion(fixed)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Registration"
              placeholderTextColor="gray"
              value={localdata.registration}
              onChangeText={(text) => setLocalData({ ...localdata, registration: text })}
            />
          </View>
          <Text style={styles.errorText}>{registrationError}</Text>

          <TouchableOpacity style={styles.button} onPress={updateVehicle}>
            <Text style={styles.buttonText}>Update Vehicle</Text>
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
    marginTop: 2,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default Update;
