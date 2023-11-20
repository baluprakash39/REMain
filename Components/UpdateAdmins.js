
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
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
import Superadminpage from './Superadminpage';
import DocumentPicker from 'react-native-document-picker';

const UpdateAdmins = ({route}) => {
  const navigation=useNavigation();
  const Id = route.params.Id;
  console.log(Id);
  const[image,setImage]=useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [brandname, setBrandName] = useState('');
  const [role,setRole]=useState('admin');
  const [deviceId, setDeviceId] = useState('');
  const [adminaccept,setAdmin]=useState('')
  const [result, setResult] = useState(null);

  const [adminInfo, setAdminInfo] = useState(null);

  const [updatedData, setUpdatedData] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    companyname: '',
    brandname: '',
    gst:'',
    address:'',
    streetname:'',
    pincode:'',
    city:'',
    country:'',
    image:'',
    website:'',
    count:'',


  });
  console.log("updateData",updatedData)
  useEffect(() => {
    
    getAdminInfo();
  }, []);
  const getAdminInfo = async () => {
    try {
      const response = await axios.get(`${cyclicUrl}/registerPhoneNumber/getadminid/${Id}`);
      const { phoneNumber, name, email,count,address, companyname, brandname, adminaccept,gst,image,pincode,state,streetname,city,country,website} = response.data.data;
     console.log(count)
      setDeviceId(deviceId);
      setRole(role);
      setAdmin(adminaccept);
      setUpdatedData({
        phoneNumber,
        name,
        email,
        companyname,
        brandname,
        count,gst,streetname,address,pincode,city,state,country,website,image
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
  const handleDocumentPicker = async () => {
    try {
      const documentResult = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setImage(documentResult[0].uri);
      setResult(documentResult);
  getAdminInfo();
      // The selected document is in the result variable
      console.log('result',documentResult);
      
      // Handle the selected document as needed
      // For example, you can set it to the state
      // setDocument(result);
  
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
        console.log('User cancelled document picker');
      } else {
        // Handle errors
        console.log('DocumentPicker Error: ', err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column',justifyContent:'space-between'}}>
        <View style={styles.header}>
          <View style={{alignContent: 'center' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Superadminpage')} style={styles.backButton}>
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
      <ScrollView contentContainerStyle={styles.admincontainer}>
        <View style={{width:'100%',alignItems:'flex-start'}}>
          <Text style={{ fontSize: moderateScale(20), color: '#f9f9f9',fontWeight:'500',marginTop:verticalScale(15)}}>Contact details :</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Name</Text>
          <TextInput style={styles.input} value={updatedData.name} 
            placeholder="Enter your full name"
            selectionColor="red"
            placeholderTextColor="#979797"
          onChangeText={(text) => setUpdatedData({ ...updatedData, name: text })}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Mobile number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile number"
            keyboardType="number-pad"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.phoneNumber}
            onChangeText={(text) => setUpdatedData({ ...updatedData, phoneNumber: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Email</Text>
          <TextInput style={styles.input} value={updatedData.email}
            placeholder="Enter email address"
            selectionColor="red"
            placeholderTextColor="#979797"
            onChangeText={(text) => setUpdatedData({ ...updatedData, email: text })}
          />
        </View>
        <View style={{width:'100%',alignItems:'flex-start'}}>
          <Text style={{ fontSize: moderateScale(20), color: '#f9f9f9',fontWeight:'500',marginTop:verticalScale(15)}}>Company information :</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Company Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Company Name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.companyname}
            onChangeText={(text) => setUpdatedData({ ...updatedData, companyname: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Brand Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Brand name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.brandname}
            onChangeText={(text) => setUpdatedData({ ...updatedData, brandname: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>GSTIN</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter GSTIN number"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.gst}
            onChangeText={(text) => setUpdatedData({ ...updatedData, gst: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter D.no / Flat no"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.address}
            onChangeText={(text) => setUpdatedData({ ...updatedData, address: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Street Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Street name / Colony name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.streetname}
            onChangeText={(text) => setUpdatedData({ ...updatedData, streetname: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>PIN Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your city PIN code"
            selectionColor="red"
            keyboardType="number-pad"
            placeholderTextColor="#979797"
            value={updatedData.pincode}
            onChangeText={(text) => setUpdatedData({ ...updatedData, pincode: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>City Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter city name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.city}
            onChangeText={(text) => setUpdatedData({ ...updatedData, city: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>State Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter state name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.state}
            onChangeText={(text) => setUpdatedData({ ...updatedData, state: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Country Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter country name"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.country}
            onChangeText={(text) => setUpdatedData({ ...updatedData, country: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Count</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter count"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.count.toString()}  
            onChangeText={(text) => setUpdatedData({ ...updatedData, count: text })}
          />
        </View>





        <View style={styles.inputContainer}>
          <Text style={styles.subtitle}>Brand Website Address</Text>
          <TextInput
            style={styles.input}
            placeholder="www.brandwebsite.com"
            selectionColor="red"
            placeholderTextColor="#979797"
            value={updatedData.website}
            onChangeText={(text) => setUpdatedData({ ...updatedData, website: text })}
          />
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center', marginVertical:verticalScale(20), borderWidth:1,borderColor:'red' }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',borderWidth:1,borderColor:'white',paddingHorizontal:moderateScale(20),gap:scale(10), borderRadius:scale(6),paddingVertical:moderateScale(10) }} onPress={handleDocumentPicker}>
                <MaterialIcons name="upload" size={moderateScale(20)} color="#f9f9f9" />
                <Text style={{color:'#f9f9f9',fontSize:moderateScale(14),textAlign:'center',fontWeight:'500'}}>Upload your brand LOGO image</Text>
              </TouchableOpacity>
              <Text style={{color:'#f9f9f9',fontSize:moderateScale(10),textAlign:'center',fontWeight:'500'}}>Image Preview</Text>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width:moderateScale(300), height: verticalScale(80), marginTop: verticalScale(5),resizeMode: 'stretch',}}
                />
              )}
              
            </View>
        <View style={styles.bottombuttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={updateAdmin} // Add the addVehicle function to the onPress handler
          >
            <FontAwesome6 name='user-check' size={scale(15)} color={'#7E7474'} />
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 16,
  // },
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
  admincontainer:{
    paddingHorizontal: moderateScale(10),
    alignItems:'center',
    justifyContent:'flex-start',
  },
  inputContainer: {
    marginTop:verticalScale(10),
    width:'100%',
    gap:scale(10),
  },
  subtitle:{
    fontSize: moderateScale(16),
    color: '#A8A196',
    fontWeight:'500',
  },
  input: {
    fontSize:moderateScale(16),
    borderWidth: 1,
    backgroundColor:'#232026',
    borderColor: '#56596C',
    borderRadius: scale(4),
    padding: scale(6),
  },
  bottombuttons:{ 
    alignItems:'center',
    width:'100%', 
    height:verticalScale(40), 
    marginVertical: verticalScale(40),
  },
  button: {
    flexDirection:'row',
    paddingHorizontal:moderateScale(40),
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
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlignVertical:'center'
  },
});

export default UpdateAdmins;
