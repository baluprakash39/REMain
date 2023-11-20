
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,Alert, StyleSheet,Modal,ScrollView,ActivityIndicator } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import cyclicUrl from '../cylic/Cyclic';
import i18n from 'i18next';
import en from './locales/en.json';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import axios from 'axios';
import UpdateAdmins from './UpdateAdmins';

const Superadminpage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(1);
  const [searchQueryAdmins, setSearchQueryAdmins] = useState('');
  const [dealers, setDealers] = useState([]);
  const [dealersF, setDealersF] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [showUserData, setShowUserData] = useState({});
  const [isUserDataVisible, setIsUserDataVisible] = useState(false);
  const[userdata,setUserData]=useState([])
  const route = useRoute();
console.log("userdata",userdata)

const [isEditModalVisible, setIsEditModalVisible] = useState(false);

const [document, setDocument] = useState(null);



const [updatedData, setUpdatedData] = useState({
  name: '',
  phoneNumber: '',
});


console.log(updatedData)






console.log(document)
  const openEditModal = (Id) => {
    fetchusedbyId(Id)
    setIsEditModalVisible(true);
   
  };



  
  const fetchusedbyId = async (Id) => {
    try {
      // Replace 'your_backend_url' with the actual URL of your backend
      const apiUrl = `${cyclicUrl}/registerUser/getDocumentById/${Id}`;

      const response = await axios.get(apiUrl);
      console.log('Id',Id)
      if (response.data.success) {
        // Document found
        setDocument(response.data.document);
        const{name,phoneNumber}=response.data.document
        setUpdatedData({
          phoneNumber,
          name,
        });
      } else {
        // Document not found
        Alert.alert('Error', 'Document not found.');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
      // Handle errors, e.g., show an error message to the user
      Alert.alert('Error', 'Internal server error');
    }
  };





  const closeEditModal = () => {
    setIsEditModalVisible(false);
   
    
  };
  
 
  

  const handleUpdateUser = async (Id) => {
    try {
      // Replace 'your_backend_url' with the actual URL of your backend
      const apiUrl = `${cyclicUrl}/registerUser/updateUser/${Id}`;

      const response = await axios.put(apiUrl, updatedData);

      if (response.data) {
        // User details updated successfully
        Alert.alert('Success', 'User details updated successfully');

        closeEditModal();
      } else {
        // Handle the case where the response does not contain the expected data
        Alert.alert('Error', 'Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
      // Handle errors, e.g., show an error message to the user
      Alert.alert('Error', 'Internal server error');
    }
  };



    
  const fetchData = async (companyname,) => {
    try {
  
      // Replace the URL below with your actual backend endpoint
      
      const response = await axios.get(`${cyclicUrl}/registerUser/checkCompanyNameAndRole`, {
        params: {
          companyname:companyname , // Replace with actual company name
          role: 'user', // Replace with actual role
        },
        headers: {
          'Content-Type': 'application/json', // Adjust headers as needed
          
        },
      });
      const filteredUserData = response.data.users.filter(user => user.role === 'user');
  
      setUserData(filteredUserData)
      setIsUserDataVisible(!isUserDataVisible);
   
    } catch (err) {
     console.log('errro geting data')
    } finally {
      setIsLoading(false);
    }
  };


  const deleteuser=async(Id)=>{
    console.log('id',Id)
       try {
         // Replace 'your_backend_url' with the actual URL of your backend
         const apiUrl = `${cyclicUrl}/registerUser/deleteUser/${Id}`;
         
         // Make the DELETE request to delete the user
         const response = await axios.delete(apiUrl);
   
         if (response.data.status === 'fail') {
           // Handle the case where the user is not found
           Alert.alert('Error', 'User not found.');
         } else {
           // Handle the success case
           Alert.alert('Success', 'User deleted successfully');
           fetchData();
         }
       } catch (error) {
         console.error('Error deleting user:', error);
         // Handle errors, e.g., show an error message to the user
         Alert.alert('Error', 'Internal server error');
       }
     };


























useEffect(()=>{
fetchDealers();
},[])
const handleTabPress = (tabNumber) => {
  setActiveTab(tabNumber);
  };
const handleSearchAdminsInputChange = (text) => {
  setSearchQueryAdmins(text);
  // Check if the search input is empty
  if (text === '') {
    // If empty, reset the displayed data to the original list
    setDealers(dealers);
    fetchDealers();
  } else {
    // If not empty, filter the dealers based on the search query
    const filteredDealers = dealers.filter(
      (dealer) =>
        (dealer.companyname && dealer.companyname.toLowerCase().includes(text.toLowerCase()))
    );
    setDealers(filteredDealers);
  }
};
  const fetchDealers = async () => {
    try {
      // Set the API endpoint URL
      const apiUrl = `${cyclicUrl}/registerPhoneNumber/getAllRegisteredPhoneNumbers`;
      // Make the API request without headers
      const response = await axios.get(apiUrl);
      if (response.data) {
        // Filter dealers where role is equal to "admin"
        const adminDealerstrue = response.data.data.filter(dealer => dealer.role === 'admin'&& dealer.adminaccept === true);
        const adminDealersfalse= response.data.data.filter(dealer => dealer.role === 'admin'&& dealer.adminaccept === false);
        setDealers(adminDealerstrue);
        setDealersF(adminDealersfalse)
      }
    } catch (error) {
      console.error('Error fetching dealers:', error);
      // Handle the error, e.g., set an error state or display an error message
    }
  };
  const deleteadmin = async (Id) => {
    try {
      const response = await axios.delete(`${cyclicUrl}/registerPhoneNumber/deleteRegisteredPhoneNumber/${Id}`);
      // Handle the success case
      if (response.data.status === 'success') {
        setResponseMessage(response.data.message);
        fetchDealers();
      } else {
        // Handle the failure case
        setResponseMessage('Failed to delete phone number');
      }
    } catch (error) {
      console.error('Error deleting phone number:', error);
      setResponseMessage('Internal server error');
    }
  };
  const handleupdate= async (Id) => {
    try {
      // Replace 'your_backend_url' with the actual URL of your backend
      const apiUrl = `${cyclicUrl}/registerPhoneNumber/updateAcceptStatus/${Id}`;
      // Make the PUT request to update the accept status to true
      const response = await axios.put(apiUrl, { adminaccept: true });
      // Handle the response as needed
      console.log('Updated accept status:', response.data);
      fetchDealers();
    } catch (error) {
      console.error('Error updating accept status:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };
  const logout = async () => {
    try {
      setIsLoading(true); // Display loader
      // Execute the logout logic here
      await AsyncStorage.setItem('isloggedIn', 'false');
      await AsyncStorage.removeItem('token');
      if (route.params && route.params.onLoginClick) {
        const randomValue = Math.random();
        console.log("r", randomValue);
        route.params.onLoginClick(randomValue);
      }
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Otp' }],
        })
      );
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsLoading(false); // Hide loader regardless of success or failure
    }
  };
const updateadmin=(Id)=>{
  navigation.navigate('UpdateAdmins',{Id})
}
useFocusEffect(
  React.useCallback(() => {
    fetchDealers();
    return () => {
      // Cleanup function (optional) when the component loses focus
      console.log('Cleaning up SuperAdminPage');
    };
  }, [])
);
if (isLoading) {
  // Display an activity loader while loading the AsyncStorage value.
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
return (
  <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', paddingHorizontal:moderateScale(5),}}>
      <Image
          source={require('../assets/Mg.jpg')}
          style={{height:scale(50),width:scale(50)}}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={logout} style={styles.headerIcons}>
        <AntDesign style={{color:'#f9f9f9'}} name='logout' size={scale(20)}/>
          <Text style={{ color: '#f9f9f9', fontSize: moderateScale(12) }}>Logout</Text>
        </TouchableOpacity>
    </View>
    {/* tabs should be below*/}
    <View style={styles.tabContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20) }}>
        <TouchableOpacity onPress={() => handleTabPress(1)} style={styles.tab}>
          <Text style={{ color: activeTab === 1 ? 'white' : '#979797', fontSize: activeTab === 1 ? moderateScale(24) : moderateScale(20) }}>Admins</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(2)} style={styles.tab}>
          <Text style={{ color: activeTab === 2 ? 'white' : '#979797', fontSize: activeTab === 2 ? moderateScale(24) : moderateScale(20) }}>Requests</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.header}></View> */}
      <View style={styles.line}></View>
      {/*tab1 to bind data*/}
      {activeTab === 1 && (
        <ScrollView style={{marginBottom:verticalScale(5)}}>
          <View style={{marginTop:verticalScale(6),height:verticalScale(35)}}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by Admin name /  Company name  /  Brand name"
              placeholderTextColor="gray"
              selectionColor="red"
              value={searchQueryAdmins}
              onChangeText={handleSearchAdminsInputChange}
            />
          </View>
        {dealers.map((dealer, index) => (
          <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:scale(6),marginTop:verticalScale(5)}}>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
              <FontAwesome style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(18)}} name='user' /> 
              <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),marginLeft:moderateScale(7),textTransform:'capitalize',fontWeight:'500', letterSpacing:moderateScale(0.4)}}>{dealer.name}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
              <MaterialIcons style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='call' /> 
              <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.phoneNumber}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
              <MaterialIcons style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='alternate-email'/>
              <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.email}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
              <FontAwesome6 style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='building' /> 
              <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.companyname}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(2)}}>
              <FontAwesome6 style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='city' /> 
              <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.brandname}</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
              <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='solution1' /> 
              <Text style={{color:'#979797',fontSize:moderateScale(12),marginLeft:moderateScale(7)}}>User from {dealer.currentdate}</Text>
            </View>
{/* Users List */}
          <View style={styles.usersContainer}>
            <TouchableOpacity onPress={() => fetchData(dealer.companyname)} style={styles.userslist}>
              <Text style={{color: '#f9f9f9', fontSize: moderateScale(14)}}>Users</Text>
              <AntDesign style={{color: '#f9f9f9'}} name='down' size={scale(15)}/>
            </TouchableOpacity>
            <View style={{}}>
            {/* userdata */}
            {isUserDataVisible && (
              <View style={{borderWidth:1,borderColor:'#f9f9f9',paddingHorizontal:moderateScale(10),marginTop:verticalScale(5),borderRadius:scale(6)}}>
              {/* userdata */}
              {userdata.map((user, index) => (
              user.companyname === dealer.companyname && (
                <View key={index} style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#f9f9f9',paddingVertical:verticalScale(5),alignItems:'center'}}>
                  <View style={{width:'45%'}}>
                    <Text style={{ color: '#f9f9f9', fontSize: moderateScale(14),textTransform:'capitalize'}}>{user.name}</Text>
                  </View>
                  <Text style={{ color: '#979797', fontSize: moderateScale(14) }}>{user.phoneNumber}</Text>
                    <TouchableOpacity onPress={()=>openEditModal(user._id)}>
                      <FontAwesome5 style={{color:'#f9f9f9',}}  name='user-edit' size={scale(15)}/>
                    </TouchableOpacity>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      style={{}}
                      visible={isEditModalVisible}
                      onRequestClose={closeEditModal}
                    >
                    <View style={{top:'33%',width:'100%',flexDirection:'column',backgroundColor: '#f9f9f9', paddingHorizontal: moderateScale(10), borderRadius: scale(10),justifyContent:'space-between'}}>
                      <TouchableOpacity onPress={closeEditModal} style={{alignItems:'flex-end',paddingRight:moderateScale(1),marginVertical:verticalScale(2)}}>
                        <AntDesign style={{ color: '#111111'}} name='close' size={scale(20)}/>
                      </TouchableOpacity>
                      <View style={{width:'100%',paddingLeft:moderateScale(10),marginTop:verticalScale(5)}}>
                        <Text style={{fontSize:moderateScale(18),color:'#111111',fontWeight:'500'}}>Update user details</Text>
                      </View>
                      <View style={{ flexDirection:'column',paddingHorizontal: scale(10),paddingVertical:verticalScale(10),justifyContent:'space-between' }}>
                        <View style={{flexDirection:'column'}}>
                          <View style={{width:'100%',marginVertical:verticalScale(5)}}>
                            <Text style={{fontSize:moderateScale(12),color:'#111111',fontWeight:'400'}}>Name</Text>
                          </View>
                          {/* update input filds */}
                          <TextInput
                            style={{marginBottom:15,color:'#111111',fontSize:moderateScale(14),paddingLeft:moderateScale(10),borderRadius:scale(4)}}
                            placeholder="Enter your full name"
                            selectionColor="red"
                            placeholderTextColor="#979797"
                            backgroundColor="#ebebeb"
                            value={updatedData.name} 
                            onChangeText={(text) => setUpdatedData({ ...updatedData, name: text })}
                          />
                          <View style={{width:'100%',marginVertical:verticalScale(5)}}>
                            <Text style={{fontSize:moderateScale(12),color:'#111111',fontWeight:'400'}}>Mobile number</Text>
                          </View>
                          <TextInput
                            style={{marginBottom:5,color:'#111111',fontSize:moderateScale(14),paddingLeft:moderateScale(10),borderRadius:scale(4)}}
                            placeholder="Enter your phonenumber name"
                            selectionColor="red"
                            placeholderTextColor="#979797"
                            backgroundColor="#ebebeb"
                            value={updatedData.phoneNumber} 
                            onChangeText={(text) => setUpdatedData({ ...updatedData, phoneNumber: text })}
                          />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginVertical:verticalScale(10),width:'100%',paddingHorizontal:moderateScale(70)}}>
                          <TouchableOpacity style={{backgroundColor:'#111111',justifyContent:'center',borderRadius:scale(5),width:'100%',paddingVertical:verticalScale(9)}} onPress={()=>handleUpdateUser(user._id)}>
                            <Text style={{color:'#f9f9f9',textAlign:'center',textAlignVertical:'center',fontSize:moderateScale(14),fontWeight:'600',letterSpacing:moderateScale(0.5)}}>update</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      </View>
                    </Modal>
                    <TouchableOpacity onPress={()=>deleteuser(user._id)}>
                      <Entypo style={{color:'#f9f9f9',}} name='remove-user' size={scale(15)}/>
                    </TouchableOpacity>
                  </View>
                )
              ))}
              </View>
            )}
            </View>
          </View>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingRight:moderateScale(8)}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='deleteuser'/>
                  <TouchableOpacity onPress={() => deleteadmin(dealer._id)} style={{borderBottomWidth:1,borderBottomColor:'red',marginLeft:moderateScale(5),}}>
                    <Text style={{color:'#f9f9f9',fontSize:moderateScale(14)}}>Delete Admin</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity style={{backgroundColor:'#f9f9f9',alignItems:'center',borderRadius:scale(8),height:verticalScale(25),justifyContent:'center',flexDirection:'row', paddingHorizontal:moderateScale(15),gap:moderateScale(5)}} onPress={()=>updateadmin(dealer._id)}>
                <MaterialCommunityIcons style={{ color: '#111111',marginLeft:moderateScale(5),fontSize: moderateScale(20) }} name="account-edit" />
                <Text style={{color:'#111111',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Edit Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    )}
    {activeTab === 2 && (
    <ScrollView style={{marginBottom:verticalScale(5)}}>
    {dealersF.map((dealer, index) => (
      <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:scale(6),marginTop:verticalScale(5)}}>
        <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
          <FontAwesome style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(18)}} name='user' /> 
          <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),marginLeft:moderateScale(7),textTransform:'capitalize',fontWeight:'500', letterSpacing:moderateScale(0.4)}}>{dealer.name}</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
          <MaterialIcons style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='call' /> 
          <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.phoneNumber}</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
          <MaterialIcons style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='alternate-email'/>
          <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.email}</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
          <FontAwesome6 style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='building' /> 
          <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.companyname}</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(2)}}>
          <FontAwesome6 style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='city' /> 
          <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.brandname}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingHorizontal:moderateScale(8)}}>
          <TouchableOpacity style={{backgroundColor:'#BE9595',alignItems:'center',borderRadius:scale(4),height:verticalScale(25),justifyContent:'center',paddingHorizontal:moderateScale(35)}} onPress={() => deleteadmin(dealer._id)}> 
            <Text style={{color:'#A00000',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#9ABA99',alignItems:'center',borderRadius:scale(4),height:verticalScale(25),justifyContent:'center',paddingHorizontal:moderateScale(35)}} onPress={()=>handleupdate(dealer._id)}>
            <Text style={{color:'#187700',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
      ))}
    </ScrollView>
    )}
  </View>
  <View style={styles.header}>
  </View>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    paddingHorizontal: moderateScale(10),
    paddingTop: scale(10),
  },
  tabContainer: {
    flex: 1,
    backgroundColor:'black',
  },
  headerIcons:{
    flexDirection:'column',
    paddingHorizontal:moderateScale(10),
    paddingVertical:verticalScale(4),
    rowGap:scale(1),
    backgroundColor:'#3A3A3A',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:scale(5)
  },
  line: {
    height: verticalScale(1),
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    backgroundColor: 'transparent', // Set the color you want for inactive tabs
  },
  activeTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    backgroundColor: 'transparent', // Set the color you want for inactive tabs
  },
  tabIcon: {
    color: '#f9f9f9',
    borderRadius: scale(1000),
    fontSize: moderateScale(30),
    marginRight: moderateScale(5),
  },
  tabText: {
    fontSize: moderateScale(10),
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: verticalScale(40), // Adjust the height as needed
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  usersContainer:{
    // borderWidth:1,
    // borderColor:'red',
    marginHorizontal:moderateScale(20),
  },
  userslist:{
    borderWidth:1,
    borderColor:'#f9f9f9',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:verticalScale(7),
    paddingHorizontal:moderateScale(10),
    marginTop:verticalScale(10),
    borderRadius:scale(6)
  },
});
export default Superadminpage;
