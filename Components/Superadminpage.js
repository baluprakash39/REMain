import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cyclicUrl from '../cylic/Cyclic';
import i18n from 'i18next';
import en from './locales/en.json';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Superadminpage = () => {
  
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(1);
  const [searchQueryAdmins, setSearchQueryAdmins] = useState('');
  const [dealers, setDealers] = useState([]);
  const [searchQueryRequests, setSearchQueryRequests] = useState('');
  const [search, setSearch] = useState('');
  console.log("dea",dealers)

useEffect(()=>{
 fetchDealers();;
},[])



  const handleTabPress = (tabNumber) => {
        setActiveTab(tabNumber);
      };
 // Function to handle search input change for Admins tab
 const handleSearchAdminsInputChange = (text) => {
    setSearchQueryAdmins(text);
    // You can perform any search-related logic here for Admins tab
  };

  
  const fetchDealers = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://localhost:3000/registerPhoneNumber/getAllRegisteredPhoneNumbers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setDealers(data.user); // Assuming the response structure is { user: [...] }
  
    } catch (error) {
      console.error('Error fetching dealers:', error);
    }
  }
  
   


  

  return (
   
        <View style={styles.container}>
          
          
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          
          <Image
              source={require('../assets/Mg.jpg')}
              style={{height:100,width:100}}
              resizeMode="cover"
            />
          
          <TouchableOpacity>
          {/* Increase the size of the profile icon */}
          <Ionicons style={{ color: '#f9f9f9', borderRadius: scale(1000), fontSize: moderateScale(40) }} name='person-circle-outline' />
          <Text style={{ color: '#f9f9f9', fontSize: moderateScale(10) }}>Profile</Text>
        </TouchableOpacity>

          </View>
          

          {/* tabs should be below*/}
          <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20) }}>
        <TouchableOpacity onPress={() => handleTabPress(1)} style={activeTab === 1 ? styles.activeTab : styles.tab}>
        
          <Text style={{color:'white',fontSize:20}}>Admins</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(2)} style={activeTab === 2 ? styles.activeTab : styles.tab}>
        
          <Text style={{color:'white',fontSize:20}}>Requests</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}></View>
      <View style={styles.line}></View>

      {/* Render content based on the active tab */}
      {activeTab === 1 && (
        <View>
        <View style={{marginTop:20,height:50}}>
            <TextInput
          style={styles.searchInput}
          placeholder="Search Admins/  Company  /  BrandName"
          placeholderTextColor="gray"
          value={searchQueryAdmins}
          onChangeText={handleSearchAdminsInputChange}
/>
        </View>
       
       <View style={{borderWidth:1,borderColor:'grey',borderRadius:10,height:350,marginTop:20}}>
        <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <Ionicons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-outline' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>Srinivasarao</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='phone' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>9182624157</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
      <Text style={{color:'white',fontSize:20,marginLeft:10}}>@</Text>
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>lekhanaautomotives@gmail.com</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>LekhanaAutomotives</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>Royal Enfield</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='calendar' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>user From 12-10-2022</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <View style={{display:'flex',flexDirection:'row'}}>
        <MaterialIcons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-remove'/> 
        <TouchableOpacity>
        <Text style={{color:'white',fontSize:20,marginLeft:10,textDecorationLine:'underline'}}>Delete Admin</Text>
        </TouchableOpacity>
       </View>


        <TouchableOpacity style={{backgroundColor:'white',width:200,borderRadius:30}}>
       <Text style={{color:'black',fontSize:20,marginLeft:10,textDecorationLine:'underline'}}>View/Edit button</Text>
       </TouchableOpacity>




      </View>
     
     

        </View>









        </View>
      )}

      {activeTab === 2 && (
        <View>
       
       
       <View style={{borderWidth:1,borderColor:'grey',borderRadius:10,height:350,marginTop:20}}>
        <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <Ionicons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-outline' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>Srinivasarao</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='phone' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>9182624157</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
      <Text style={{color:'white',fontSize:20,marginLeft:10}}>@</Text>
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>lekhanaautomotives@gmail.com</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>LekhanaAutomotives</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
       <Text style={{color:'white',fontSize:20,marginLeft:10}}>Royal Enfield</Text>
      </View>
      
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <View style={{display:'flex',flexDirection:'row'}}>
        <TouchableOpacity style={{backgroundColor:"red",width:200,borderRadius:10,height:40}}> 
        <Text style={{color:'white',fontSize:20,marginLeft:10,textDecorationLine:'underline',textAlign:'center'}}>Reject</Text>
        </TouchableOpacity>
       </View>


        <TouchableOpacity style={{backgroundColor:'white',width:200,borderRadius:10}}>
       <Text style={{color:'black',fontSize:20,marginLeft:10,textDecorationLine:'underline',textAlign:'center'}}>Accept</Text>
       </TouchableOpacity>




      </View>
     
     

        </View>









        </View>
      )}
    </View>



          <View style={styles.header}>
           
          
         
          </View>
          <View style={styles.line}></View>
         
          
        </View>
      
  
  );
};
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor:'black',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    width: scale(335),
    height: verticalScale(10),
  },
 
  
  line: {
    height: verticalScale(1),
    backgroundColor: 'white',
    width: scale(335),
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
    backgroundColor: 'transparent', // Set the color you want for active tabs
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
  
  
 
});
export default Superadminpage;

