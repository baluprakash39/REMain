import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import cyclicUrl from '../cylic/Cyclic';
import { useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpdateAdmins = ({route}) => {
  const navigation=useNavigation();
    const Id = route.params.Id;
    console.log(Id);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [brandname, setBrandName] = useState('');
  const [role,setRole]=useState('admin');
  const [deviceId, setDeviceId] = useState('');
  const [adminaccept,setAdmin]=useState('')
console.log("device",deviceId)
  const [adminInfo, setAdminInfo] = useState(null);
  console.log("adminInfo",adminInfo)


  const [updatedData, setUpdatedData] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    companyname: '',
    brandname: '',
    deviceId: '',
    role:'' ,
    adminaccept:''
  });


console.log("updateData",updatedData)
  useEffect(() => {
    const getAdminInfo = async () => {
      try {
        const response = await axios.get(`${cyclicUrl}/registerPhoneNumber/getadminid/${Id}`);
        const { phoneNumber, name, email, companyname, brandname, deviceId, role, adminaccept } = response.data.data;
        
        setPhoneNumber(phoneNumber);
        setName(name);
        setEmail(email);
        setCompanyName(companyname);
        setBrandName(brandname);
        setDeviceId(deviceId);
        setRole(role);
        setAdmin(adminaccept); 
        
        
        
        
        
        
        
        
        setUpdatedData({
          phoneNumber,
          name,
          email,
          companyname,
          brandname,
          deviceId,
          role,
          adminaccept,
        });
  
       
        setAdminInfo(response.data.data);
        setDeviceId(deviceId)
        setRole(role)
        setAdmin(adminaccept)
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to retrieve admin information. Please try again.');
      }
    };

    getAdminInfo();
  }, []);



  

  
  
  const updateAdmin = async () => {
    // Field validation
  
    try {
      // Make the PUT request to update the admin
      const response = await axios.put(`${cyclicUrl}/registerPhoneNumber/updateadmin/${Id}`, updatedData);
  
      // Handle the success case
      if (response.data === 'Admin details updated successfully') {
        // Navigate to a success screen or perform any other actions needed
        console.log('Admin updated successfully:', response.data);
        navigation.navigate('Superadminpage')
      } else {
        // Handle the failure case
        console.log('Failed to update admin:', response.data);
      }
    } catch (error) {
      console.error('Error updating admin:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Phone Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={updatedData.phoneNumber}
          onChangeText={(text) => setUpdatedData({ ...updatedData, phoneNumber: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput style={styles.input} value={updatedData.name} 
     onChangeText={(text) => setUpdatedData({ ...updatedData, name: text })}/>
      </View>

      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput style={styles.input} value={updatedData.email} 
       onChangeText={(text) => setUpdatedData({ ...updatedData, email: text })}
      />
      </View>

      <View style={styles.inputContainer}>
        <Text>Company Name:</Text>
        <TextInput
          style={styles.input}
          value={updatedData.companyname}
          onChangeText={(text) => setUpdatedData({ ...updatedData, companyname: text })}

        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Brand Name:</Text>
        <TextInput
          style={styles.input}
          value={updatedData.brandname}
          onChangeText={(text) => setUpdatedData({ ...updatedData, brandname: text })}

        />
      </View>

      

      <TouchableOpacity style={styles.button} onPress={updateAdmin}>
        <Text>Update Admins</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
});

export default UpdateAdmins;
