
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
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
import { scale, moderateScale, verticalScale} from './scaling';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

const AdminUserUpdate = ({route}) => {
  const Id = route.params.Id;
  const naviagtion=useNavigation();
  console.log(Id);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [brandname, setBrandName] = useState('');
  const [role,setRole]=useState('admin');
  const [deviceId, setDeviceId] = useState('');
  const [adminaccept,setAdmin]=useState('')

  const [adminInfo, setAdminInfo] = useState(null);

//  errormsgs

const[nameErr,setNameError]=useState('');
const[phoneErr,phoneNumberError]=useState('')


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
    getAdminInfo();
  }, []);
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
        companyname,
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

  const updateAdmin = async () => {
    // Field validation
    setNameError('');
    phoneNumberError('');
    let hasError = false;
  
    if (!updatedData.phoneNumber) {
      phoneNumberError('Please enter your contact number');
      hasError = true;
    }
  
    if (!updatedData.name) {
      setNameError('Please enter your full name');
      hasError = true;
    }
  
    if (hasError) {
      // Show an error message or prevent the submission
      return;
    }
  
    try {
      // Make the PUT request to update the admin
      const response = await axios.put(`${cyclicUrl}/registerPhoneNumber/updateadmin/${Id}`, updatedData);
      // Handle the success case
      if (response.data === 'Admin details updated successfully') {
        // Navigate to a success screen or perform any other actions needed
        console.log('Admin updated successfully:', response.data);
        getAdminInfo();
        naviagtion.navigate('AdminUsers');
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
  <View style={styles.container}>
    <View style={{flexDirection:'column',justifyContent:'space-between'}}>
      <View style={styles.header}>
        <View style={{alignContent: 'center' }}>
        <TouchableOpacity onPress={() => naviagtion.navigate('Inventory')} style={styles.backButton}>
  <MaterialIcons name='arrow-back' size={moderateScale(25)} color={'#F9F9F9'} />
</TouchableOpacity>

        </View>
        <Text style={styles.title}>User Management</Text>
        <Image
            source={require('../assets/Mg.jpg')}
            style={{height:scale(50),width:scale(50)}}
            resizeMode="cover"
        />
      </View>
      <View style={styles.line}></View>
    </View>
    <ScrollView contentContainerStyle={styles.userDetails}>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Name</Text>
        <TextInput style={styles.input} value={updatedData.name} selectionColor="red" 
        onChangeText={(text) => setUpdatedData({ ...updatedData, name: text })}/>
      </View>
      {nameErr ? <Text style={styles.errorText}>{nameErr}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Phone Number</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          selectionColor="red"
          value={updatedData.phoneNumber}
          onChangeText={(text) => setUpdatedData({ ...updatedData, phoneNumber: text })}
        />
      </View>
      {phoneErr ? <Text style={styles.errorText}>{phoneErr}</Text> : null}
      <View style={styles.bottombuttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={updateAdmin} // Add the addVehicle function to the onPress handler
        >
            <Text style={styles.buttonText}>Update</Text>
            <FontAwesome6 name='angles-right' size={scale(15)} color={'#111111'} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: '#f9f9f9',
    marginVertical: scale(1),
    fontSize: moderateScale(10),
    textAlign: 'center',
    paddingLeft:scale(5),
    backgroundColor:'#B70404',
    marginLeft: scale(110),
    width:scale(120),
  },
  container: {
    flex: 1,
    backgroundColor:'black',
    paddingTop: 10,
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    width:'100%',
    height: verticalScale(50),
    justifyContent:'space-between',
  },
  backButton:{
    alignItems: 'center',
    width:scale(20),
    height:verticalScale(20),
    justifyContent:'center',
    marginLeft:moderateScale(16),
  },
  title: {
    color: '#F9F9F9',
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: moderateScale(0.2),
  },
  line: {
    height: verticalScale(1),
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  userDetails: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
    alignItems:'center',
    justifyContent:'flex-start',
  },
  inputContainer: {
    marginTop:verticalScale(30),
    width:'100%',
    gap:scale(10),
  },
  subtitle:{
    fontSize:moderateScale(18),
    fontWeight:'500',
    color:'#f9f9f9'
  },
  input: {
    fontSize:moderateScale(16),
    borderWidth: 1,
    backgroundColor:'#232026',
    borderColor: '#56596C',
    borderRadius: scale(4),
    padding: scale(6),
  },
  // button: {
  //   backgroundColor: '#3498db',
  //   padding: 16,
  //   borderRadius: 4,
  //   alignItems: 'center',
  //   marginTop: 16,
  // },
  bottombuttons:{ 
    alignItems:'center',
    width:'100%', 
    height:verticalScale(40), 
    marginVertical: verticalScale(40),
  },
  button: {
    flexDirection:'row',
    paddingHorizontal:moderateScale(30),
    backgroundColor:'#f9f9f9',
    borderWidth: scale(1),
    borderRadius: scale(8),
    width:'50%',
    height: verticalScale(40),
    alignItems:'center',
    justifyContent:'space-between'
  },
  buttonText: {
    color: '#111111',
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlignVertical:'center'
  },
});
export default AdminUserUpdate;
