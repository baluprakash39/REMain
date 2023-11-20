// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// // import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
// // import { useNavigation } from '@react-navigation/native';
// // import { scale, moderateScale, verticalScale} from './scaling';
// // import {initReactI18next, useTranslation} from 'react-i18next';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import cyclicUrl from '../cylic/Cyclic';
// // import i18n from 'i18next';
// // import en from './locales/en.json';
// // import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// // import axios from 'axios';
// // import UpdateAdmins from './UpdateAdmins';
// // import { CommonActions } from '@react-navigation/native';
// // import { useFocusEffect } from '@react-navigation/native';

// // const AdminUsers = () => {
// //   const navigation = useNavigation();
// //   const [activeTab, setActiveTab] = useState(1);
// //   const [searchQueryAdmins, setSearchQueryAdmins] = useState('');
// //   const [dealers, setDealers] = useState([]);
// //   const [dealersF, setDealersF] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [responseMessage, setResponseMessage] = useState('');

// // useEffect(()=>{
// //  fetchDealers();
// // },[])



// //   const handleTabPress = (tabNumber) => {
// //         setActiveTab(tabNumber);
// //       };
 
// // const handleSearchAdminsInputChange = (text) => {
// //   setSearchQueryAdmins(text);
 
// //   // Check if the search input is empty
// //   if (text === '') {
// //     // If empty, reset the displayed data to the original list
// //     setDealers(dealers);
// //     fetchDealers();
// //   } else {
// //     // If not empty, filter the dealers based on the search query
// //     const filteredDealers = dealers.filter(
// //       (dealer) =>
// //         (dealer.companyname && dealer.companyname.toLowerCase().includes(text.toLowerCase()))
// //     );
// //     setDealers(filteredDealers);
// //   }
// // };



  
// //   const fetchDealers = async () => {
// //     try {
// //       // Set the API endpoint URL
// //       const apiUrl = `${cyclicUrl}/registerPhoneNumber/getAllRegisteredPhoneNumbers`;
  
// //       // Make the API request without headers
// //       const response = await axios.get(apiUrl);
  
// //       if (response.data) {
// //         // Filter dealers where role is equal to "admin"
// //         const adminDealerstrue = response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === true);
// //         const adminDealersfalse= response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === false);
// //         setDealers(adminDealerstrue);
// //         setDealersF(adminDealersfalse)
// //       }
// //     } catch (error) {
// //       console.error('Error fetching dealers:', error);
// //       // Handle the error, e.g., set an error state or display an error message
// //     }
// //   };
// //   const deleteadmin = async (Id) => {
// //     try {
// //       const response = await axios.delete(`${cyclicUrl}/registerPhoneNumber/deleteRegisteredPhoneNumber/${Id}`);
      
// //       // Handle the success case
// //       if (response.data.status === 'success') {
// //         setResponseMessage(response.data.message);
// //         fetchDealers();
// //       } else {
// //         // Handle the failure case
// //         setResponseMessage('Failed to delete phone number');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting phone number:', error);
// //       setResponseMessage('Internal server error');
// //     }
// //   };


// //   const handleupdate= async (Id) => {
// //     try {

// //       // Replace 'your_backend_url' with the actual URL of your backend
// //       const apiUrl = `${cyclicUrl}/registerPhoneNumber/updateAcceptStatus/${Id}`;

// //       // Make the PUT request to update the accept status to true
// //       const response = await axios.put(apiUrl, { adminaccept: true });

// //       // Handle the response as needed
// //       console.log('Updated accept status:', response.data);
// //       fetchDealers();

// //     } catch (error) {
// //       console.error('Error updating accept status:', error);
// //       // Handle errors, e.g., show an error message to the user
// //     }
// //   };
// //   useFocusEffect(
// //     React.useCallback(() => {
// //       fetchDealers();
// //       return () => {
// //         // Cleanup function (optional) when the component loses focus
// //         console.log('Cleaning up SuperAdminPage');
// //       };
// //     }, [])
// //   );
// // const logout = async () => {
// //     try {
// //       setIsLoading(true); // Display loader
  
// //       // Execute the logout logic here
// //       await AsyncStorage.setItem('isloggedIn', 'false');
// //       await AsyncStorage.removeItem('token');
// //       if (route.params && route.params.onLoginClick) {
// //         const randomValue = Math.random();
// //         console.log("r", randomValue);
// //         route.params.onLoginClick(randomValue);
// //       }
// //       navigation.dispatch(
// //         CommonActions.reset({
// //           index: 0,
// //           routes: [{ name: 'Home' }],
// //         })
// //       );
// //     } catch (error) {
// //       console.error('Error during logout:', error);
// //     } finally {
// //       setIsLoading(false); // Hide loader regardless of success or failure
// //     }
// //   };
  
// // const updateadmin=(Id)=>{
// //   navigation.navigate('AdminUserUpdate',{Id})
// // }
 




// //   return (
   
// //         <View style={styles.container}>
          
          
// //           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          
// //           <Image
// //               source={require('../assets/Mg.jpg')}
// //               style={{height:100,width:100}}
// //               resizeMode="cover"
// //             />
          
// //           <TouchableOpacity onPress={logout}>
// //           {/* Increase the size of the profile icon */}
// //           <Text style={{ color: '#f9f9f9', fontSize: moderateScale(20) }}>Back</Text>
// //         </TouchableOpacity>

// //           </View>
          

// //           {/* tabs should be below*/}
// //           <View style={styles.container}>
// //       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20) }}>
// //         <TouchableOpacity onPress={() => handleTabPress(1)} style={activeTab === 1 ? styles.activeTab : styles.tab}>
        
// //           <Text style={{color:'white',fontSize:20}}>Users</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => handleTabPress(2)} style={activeTab === 2 ? styles.activeTab : styles.tab}>
        
// //           <Text style={{color:'white',fontSize:20}}>Requests</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.header}></View>
// //       <View style={styles.line}></View>

// //       {/*tab1 to bind data*/}
// //       {activeTab === 1 && (
// //         <View>
// //         <View style={{marginTop:20,height:50}}>
// //         <TextInput
// //       style={styles.searchInput}
// //       placeholder="Search Admins/  Company  /  BrandName"
// //       placeholderTextColor="gray"
// //       value={searchQueryAdmins}
// //       onChangeText={handleSearchAdminsInputChange}
// // />
// //     </View>

        
     
// //         <ScrollView>
// //   {dealers.map((dealer, index) => (
// //     <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:10,height:350,marginTop:20}}>
// //     <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //     <Ionicons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-outline' /> 
// //    <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.name}</Text>
// //   </View>
// //   <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //     <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='phone' /> 
// //    <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.phoneNumber}</Text>
// //   </View>
  
// //   <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //     <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
// //    <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.companyname}</Text>
// //   </View>
 
// //   <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //     <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='calendar' /> 
// //    <Text style={{color:'white',fontSize:20,marginLeft:10}}>user From {dealer.currentdate}</Text>
// //   </View>
// //   <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
// //     <View style={{display:'flex',flexDirection:'row'}}>
// //     <MaterialIcons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-remove'/> 
   
// //     <TouchableOpacity onPress={() => deleteadmin(dealer._id)}>
// //     <Text style={{color:'white',fontSize:20,marginLeft:10,textDecorationLine:'underline'}}>Delete User</Text>
// //     </TouchableOpacity>
// //    </View>


// //     <TouchableOpacity style={{backgroundColor:'white',width:200,borderRadius:30}} onPress={()=>updateadmin(dealer._id)}>
// //    <Text style={{color:'black',fontSize:20,marginLeft:10,textDecorationLine:'underline'}}>View/Edit button</Text>
// //    </TouchableOpacity>




// //   </View>
 
 

// //     </View>
// //   ))}
// // </ScrollView>

// //         </View>
// //       )}

// //       {activeTab === 2 && (
      
       
     








// //       //   </View>
// //       <ScrollView>
// //       {dealersF.map((dealer, index) => (
// //         <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:10,height:350,marginTop:20}}>
// //         <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //         <Ionicons style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='person-outline' /> 
// //        <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.name}</Text>
// //       </View>
// //       <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //         <Feather style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='phone' /> 
// //        <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.phoneNumber}</Text>
// //       </View>
// //       <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //       <Text style={{color:'white',fontSize:20,marginLeft:10}}>@</Text>
// //        <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.email}</Text>
// //       </View>
// //       <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //         <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
// //        <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.companyname}</Text>
// //       </View>
// //       <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
// //         <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
// //        <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.brandname}</Text>
// //       </View>
// //       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
// //         <View style={{display:'flex',flexDirection:'row'}}>
// //         <TouchableOpacity style={{backgroundColor:"red",width:200,borderRadius:10,height:40}}  onPress={() => deleteadmin(dealer._id)}> 
// //          <Text style={{color:'white',fontSize:20,marginLeft:10,textDecorationLine:'underline',textAlign:'center'}}>Reject</Text>
// //         </TouchableOpacity>
// //         </View>


// //          <TouchableOpacity style={{backgroundColor:'white',width:200,borderRadius:10}} onPress={()=>handleupdate(dealer._id)}>
// //         <Text style={{color:'black',fontSize:20,marginLeft:10,textDecorationLine:'underline',textAlign:'center'}}>Accept</Text>
// //       </TouchableOpacity>
// //       </View>
     
     
    
// //         </View>
// //       ))}
// //     </ScrollView>

// //       )}
// //     </View>



// //           <View style={styles.header}>
           
          
         
// //           </View>
// //           <View style={styles.line}></View>
         
          
// //         </View>
      
  
// //   );
// // };
// // const styles = StyleSheet.create({
 
// //   container: {
// //     flex: 1,
// //     backgroundColor:'black',
// //     paddingHorizontal: 10,
// //     paddingTop: 10,
// //   },
// //   header:{
// //     alignItems: 'center',
// //     flexDirection: 'row',
// //     width: scale(335),
// //     height: verticalScale(10),
// //   },
 
  
// //   line: {
// //     height: verticalScale(1),
// //     backgroundColor: 'white',
// //     width: scale(335),
// //   },
 
// //   tab: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexDirection: 'row',
// //     height: verticalScale(40),
// //     backgroundColor: 'transparent', // Set the color you want for inactive tabs
// //   },
// //   activeTab: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexDirection: 'row',
// //     height: verticalScale(40),
// //     backgroundColor: 'transparent', // Set the color you want for active tabs
// //   },
// //   tabIcon: {
// //     color: '#f9f9f9',
// //     borderRadius: scale(1000),
// //     fontSize: moderateScale(30),
// //     marginRight: moderateScale(5),
// //   },
// //   tabText: {
// //     fontSize: moderateScale(10),
// //   },
// //   tabsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     height: verticalScale(40), // Adjust the height as needed
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     paddingHorizontal: 10,
// //     color: 'white',
// //     borderRadius: 10,
// //     backgroundColor: 'transparent',
// //   },
  
  
 
// // });
// // export default  AdminUsers;
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';
// import { scale, moderateScale, verticalScale} from './scaling';
// import {initReactI18next, useTranslation} from 'react-i18next';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import cyclicUrl from '../cylic/Cyclic';
// import i18n from 'i18next';
// import en from './locales/en.json';
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import axios from 'axios';
// import UpdateAdmins from './UpdateAdmins';
// import { CommonActions } from '@react-navigation/native';
// import { useFocusEffect } from '@react-navigation/native';

// const AdminUsers = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState(1);
//   const [searchQueryAdmins, setSearchQueryAdmins] = useState('');
//   const [dealers, setDealers] = useState([]);
//   const [dealersF, setDealersF] = useState([]);
//   const [search, setSearch] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [responseMessage, setResponseMessage] = useState('');

//   useEffect(()=>{
//   fetchDealers();
//   },[])
//   const handleTabPress = (tabNumber) => {
//         setActiveTab(tabNumber);
//       };
//   const handleSearchAdminsInputChange = (text) => {
//   setSearchQueryAdmins(text);
//   // Check if the search input is empty
//   if (text === '') {
//     // If empty, reset the displayed data to the original list
//     setDealers(dealers);
//     fetchDealers();
//   } else {
//     // If not empty, filter the dealers based on the search query
//     const filteredDealers = dealers.filter(
//       (dealer) =>
//         (dealer.companyname && dealer.companyname.toLowerCase().includes(text.toLowerCase()))
//     );
//     setDealers(filteredDealers);
//   }
// };
//   const fetchDealers = async () => {
//     try {
//       // Set the API endpoint URL
//       const apiUrl = `${cyclicUrl}/registerPhoneNumber/getAllRegisteredPhoneNumbers`;
//       // Make the API request without headers
//       const response = await axios.get(apiUrl);
//       if (response.data) {
//         // Filter dealers where role is equal to "admin"
//         const adminDealerstrue = response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === true);
//         const adminDealersfalse= response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === false);
//         setDealers(adminDealerstrue);
//         setDealersF(adminDealersfalse)
//       }
//     } catch (error) {
//       console.error('Error fetching dealers:', error);
//       // Handle the error, e.g., set an error state or display an error message
//     }
//   };
//   const deleteadmin = async (Id) => {
//     try {
//       const response = await axios.delete(`${cyclicUrl}/registerPhoneNumber/deleteRegisteredPhoneNumber/${Id}`);
//       // Handle the success case
//       if (response.data.status === 'success') {
//         setResponseMessage(response.data.message);
//         fetchDealers();
//       } else {
//         // Handle the failure case
//         setResponseMessage('Failed to delete phone number');
//       }
//     } catch (error) {
//       console.error('Error deleting phone number:', error);
//       setResponseMessage('Internal server error');
//     }
//   };
//   const handleupdate= async (Id) => {
//     try {
//       // Replace 'your_backend_url' with the actual URL of your backend
//       const apiUrl = `${cyclicUrl}/registerPhoneNumber/updateAcceptStatus/${Id}`;
//       // Make the PUT request to update the accept status to true
//       const response = await axios.put(apiUrl, { adminaccept: true });
//       // Handle the response as needed
//       console.log('Updated accept status:', response.data);
//       fetchDealers();
//     } catch (error) {
//       console.error('Error updating accept status:', error);
//       // Handle errors, e.g., show an error message to the user
//     }
//   };
//   useFocusEffect(
//     React.useCallback(() => {
//       fetchDealers();
//       return () => {
//         // Cleanup function (optional) when the component loses focus
//         console.log('Cleaning up SuperAdminPage');
//       };
//     }, [])
//   );
// const logout = async () => {
//     try {
//       setIsLoading(true); // Display loader
//       // Execute the logout logic here
//       await AsyncStorage.setItem('isloggedIn', 'false');
//       await AsyncStorage.removeItem('token');
//       if (route.params && route.params.onLoginClick) {
//         const randomValue = Math.random();
//         console.log("r", randomValue);
//         route.params.onLoginClick(randomValue);
//       }
//       navigation.dispatch(
//         CommonActions.reset({
//           index: 0,
//           routes: [{ name: 'Home' }],
//         })
//       );
//     } catch (error) {
//       console.error('Error during logout:', error);
//     } finally {
//       setIsLoading(false); // Hide loader regardless of success or failure
//     }
//   };
//   const updateadmin=(Id)=>{
//   navigation.navigate('AdminUserUpdate',{Id})
// }
//   return (
//   <View style={styles.container}>
//     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//       {/* <TouchableOpacity onPress={logout}>
//         <Text style={{ color: '#f9f9f9', fontSize: moderateScale(20) }}>Back</Text>
//       </TouchableOpacity> */}
//       <View style={styles.header}>
//         <View style={{alignContent: 'center' }}>
//           <TouchableOpacity onPress={logout} style={styles.backButton}>
//             <MaterialIcons name='arrow-back' size={moderateScale(25)} color={'#F9F9F9'} />
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.title}>User Management</Text>
//         <Image
//             source={require('../assets/Mg.jpg')}
//             style={{height:scale(50),width:scale(50)}}
//             resizeMode="cover"
//         />
//       </View>
//     </View>
//     {/* tabs should be below*/}
//     <View style={styles.tabcontainer}>
//       {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(5)}}>
//         <TouchableOpacity onPress={() => handleTabPress(1)} style={activeTab === 1 ? styles.activeTab : styles.tab}>
//           <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),fontWeight:'500'}}>Users</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTabPress(2)} style={activeTab === 2 ? styles.activeTab : styles.tab}>
//           <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),fontWeight:'500'}}>Requests</Text>
//         </TouchableOpacity>
//       </View> */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20) }}>
//         <TouchableOpacity onPress={() => handleTabPress(1)} style={styles.tab}>
//           <Text style={{ color: activeTab === 1 ? 'white' : '#979797', fontSize: activeTab === 1 ? moderateScale(24) : moderateScale(20) }}>Users</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleTabPress(2)} style={styles.tab}>
//           <Text style={{ color: activeTab === 2 ? 'white' : '#979797', fontSize: activeTab === 2 ? moderateScale(24) : moderateScale(20) }}>Requests</Text>
//         </TouchableOpacity>
//       </View>
//         <View style={styles.line}></View>
//         {/*tab1 to bind data*/}
//         {activeTab === 1 && (
//           <ScrollView style={{marginBottom:verticalScale(5)}}>
//             <View style={{marginTop:verticalScale(6),height:verticalScale(35)}}>
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search Admins/  Company  /  BrandName"
//                 placeholderTextColor="#979797"
//                 selectionColor="red"
//                 value={searchQueryAdmins}
//                 onChangeText={handleSearchAdminsInputChange}
//               />
//             </View>
//             {dealers.map((dealer, index) => (
//               <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:scale(6),marginTop:verticalScale(5)}}>
//                 <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
//                   <FontAwesome style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(18) }} name='user' /> 
//                   <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),marginLeft:moderateScale(7),textTransform:'capitalize',fontWeight:'500', letterSpacing:moderateScale(0.4)}}>{dealer.name}</Text>
//                 </View>
//                 <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
//                   <MaterialIcons style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='call' /> 
//                   <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.phoneNumber}</Text>
//                 </View>
//                 <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
//                   <FontAwesome6 style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='building' /> 
//                   <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.companyname}</Text>
//                 </View>
//                 <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
//                   <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='solution1' /> 
//                   <Text style={{color:'#979797',fontSize:moderateScale(12),marginLeft:moderateScale(7)}}>User from {dealer.currentdate}</Text>
//                 </View>
//                 <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingRight:moderateScale(8)}}>
//                   <View style={{flexDirection:'row',alignItems:'center'}}>
//                     <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='deleteuser'/>
//                     <TouchableOpacity onPress={() => deleteadmin(dealer._id)} style={{borderBottomWidth:1,borderBottomColor:'red',marginLeft:moderateScale(5),}}>
//                       <Text style={{color:'#f9f9f9',fontSize:moderateScale(14)}}>Delete User</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <TouchableOpacity style={{backgroundColor:'#f9f9f9',alignItems:'center',borderRadius:scale(8),height:verticalScale(25),justifyContent:'center',flexDirection:'row', paddingHorizontal:moderateScale(15),gap:moderateScale(5)}} onPress={()=>updateadmin(dealer._id)}>
//                     <MaterialCommunityIcons style={{ color: '#111111',marginLeft:moderateScale(5),fontSize: moderateScale(20) }} name="account-edit" />
//                     <Text style={{color:'#111111',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Edit User</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               ))}
//             </ScrollView>
//           )}
//           {activeTab === 2 && (
//           <ScrollView style={{marginBottom:verticalScale(5)}}>
//           {dealersF.map((dealer, index) => (
//             <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:scale(6),marginTop:verticalScale(5)}}>
//               <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
//                 <FontAwesome style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(18)}} name='user' /> 
//                 <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),marginLeft:moderateScale(7),textTransform:'capitalize',fontWeight:'500', letterSpacing:moderateScale(0.4)}}>{dealer.name}</Text>
//               </View>
//               <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
//                 <MaterialIcons style={{color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='call' /> 
//                 <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.phoneNumber}</Text>
//               </View>
//               <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
//                 <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
//                 <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.companyname}</Text>
//               </View>
//               <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingHorizontal:moderateScale(8)}}>
//                 <TouchableOpacity style={{backgroundColor:'#BE9595',alignItems:'center',borderRadius:scale(4),height:verticalScale(25),justifyContent:'center',paddingHorizontal:moderateScale(35)}}onPress={() => deleteadmin(dealer._id)}> 
//                   <Text style={{color:'#A00000',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Reject</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{backgroundColor:'#9ABA99',alignItems:'center',borderRadius:scale(4),height:verticalScale(25),justifyContent:'center',paddingHorizontal:moderateScale(35)}} onPress={()=>handleupdate(dealer._id)}>
//                   <Text style={{color:'#187700',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Accept</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             ))}
//           </ScrollView>
//           )}
//         </View>
//       </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'black',
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   header:{
//     alignItems: 'center',
//     flexDirection: 'row',
//     width:'100%',
//     height: verticalScale(50),
//     justifyContent:'space-between',
//   },
//   backButton:{
//     alignItems: 'center',
//     width:scale(20),
//     height:verticalScale(20),
//     justifyContent:'center',
//   },
//   title: {
//     color: '#F9F9F9',
//     fontSize: moderateScale(18),
//     fontWeight: '600',
//     textAlign: 'center',
//     letterSpacing: moderateScale(0.2),
//   },
//   line: {
//     height: verticalScale(1),
//     backgroundColor: '#f9f9f9',
//     width: '100%',
//   },
//   tabcontainer: {
//     flex: 1,
//     backgroundColor:'#111111',
//     borderRadius:scale(6)
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     height: verticalScale(40),
//     backgroundColor: 'transparent', // Set the color you want for inactive tabs
//   },
//   tabIcon: {
//     color: '#f9f9f9',
//     borderRadius: scale(1000),
//     fontSize: moderateScale(30),
//     marginRight: moderateScale(5),
//   },
//   tabText: {
//     fontSize: moderateScale(10),
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: verticalScale(40), // Adjust the height as needed
//     borderColor: '#56596C',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     color: '#ffffff',
//     borderRadius: 10,
//     backgroundColor: '#232026',
//   },
  
  
 
// });
// export default  AdminUsers;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cyclicUrl from '../cylic/Cyclic';
import i18n from 'i18next';
import en from './locales/en.json';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import axios from 'axios';
import UpdateAdmins from './UpdateAdmins';
import { CommonActions } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
const AdminUsers = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(1);
  const [searchQueryAdmins, setSearchQueryAdmins] = useState('');
  const [dealers, setDealers] = useState([]);
  const [dealersF, setDealersF] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');

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
        const adminDealerstrue = response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === true);
        const adminDealersfalse= response.data.data.filter(dealer => dealer.role === 'user'&& dealer.adminaccept === false);
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
  useFocusEffect(
    React.useCallback(() => {
      fetchDealers();
      return () => {
        // Cleanup function (optional) when the component loses focus
        console.log('Cleaning up SuperAdminPage');
      };
    }, [])
  );
const back = async () => {
   navigation.navigate('Inventory')
   
  };
  const updateadmin=(Id)=>{
  navigation.navigate('AdminUserUpdate',{Id})
}
  return (
  <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      {/* <TouchableOpacity onPress={logout}>
        <Text style={{ color: '#f9f9f9', fontSize: moderateScale(20) }}>Back</Text>
      </TouchableOpacity> */}
      <View style={styles.header}>
        <View style={{alignContent: 'center' }}>
          <TouchableOpacity onPress={back} style={styles.backButton}>
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
    </View>
    {/* tabs should be below*/}
    <View style={styles.tabcontainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: verticalScale(20) }}>
        <TouchableOpacity onPress={() => handleTabPress(1)} style={styles.tab}>
          <Text style={{ color: activeTab === 1 ? 'white' : '#979797', fontSize: activeTab === 1 ? moderateScale(24) : moderateScale(20) }}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress(2)} style={styles.tab}>
          <Text style={{ color: activeTab === 2 ? 'white' : '#979797', fontSize: activeTab === 2 ? moderateScale(24) : moderateScale(20) }}>Requests</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.line}></View>
        {/*tab1 to bind data*/}
        {activeTab === 1 && (
          <ScrollView style={{marginBottom:verticalScale(5)}}>
            <View style={{marginTop:verticalScale(6),height:verticalScale(35)}}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search Admins/  Company  /  BrandName"
                placeholderTextColor="#979797"
                selectionColor="red"
                value={searchQueryAdmins}
                onChangeText={handleSearchAdminsInputChange}
              />
            </View>
            {dealers.map((dealer, index) => (
              <View key={index} style={{borderWidth:1,borderColor:'grey',borderRadius:scale(6),marginTop:verticalScale(5)}}>
                <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
                  <FontAwesome style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(18) }} name='user' /> 
                  <Text style={{color:'#f9f9f9',fontSize:moderateScale(18),marginLeft:moderateScale(7),textTransform:'capitalize',fontWeight:'500', letterSpacing:moderateScale(0.4)}}>{dealer.name}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
                  <MaterialIcons style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='call' /> 
                  <Text style={{color:'#979797',fontSize:moderateScale(16),marginLeft:moderateScale(7)}}>{dealer.phoneNumber}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(10)}}>
                  <FontAwesome6 style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15)}} name='building' /> 
                  <Text style={{color:'white',fontSize:moderateScale(16),marginLeft:moderateScale(7), textTransform:'capitalize'}}>{dealer.companyname}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:verticalScale(10),gap:(8)}}>
                  <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='solution1' /> 
                  <Text style={{color:'#979797',fontSize:moderateScale(12),marginLeft:moderateScale(7)}}>User from {dealer.currentdate}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingRight:moderateScale(8)}}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AntDesign style={{ color: '#f9f9f9',marginLeft:moderateScale(5),fontSize: moderateScale(15) }} name='deleteuser'/>
                    <TouchableOpacity onPress={() => deleteadmin(dealer._id)} style={{borderBottomWidth:1,borderBottomColor:'red',marginLeft:moderateScale(5),}}>
                      <Text style={{color:'#f9f9f9',fontSize:moderateScale(14)}}>Delete User</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{backgroundColor:'#f9f9f9',alignItems:'center',borderRadius:scale(8),height:verticalScale(25),justifyContent:'center',flexDirection:'row', paddingHorizontal:moderateScale(15),gap:moderateScale(5)}} onPress={()=>updateadmin(dealer._id)}>
                    <MaterialCommunityIcons style={{ color: '#111111',marginLeft:moderateScale(5),fontSize: moderateScale(20) }} name="account-edit" />
                    <Text style={{color:'#111111',fontSize:moderateScale(18),marginLeft:moderateScale(5)}}>Edit User</Text>
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
              <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
                <FontAwesome style={{ color: '#f9f9f9',marginLeft:10, borderRadius: scale(1000), fontSize: moderateScale(20) }} name='building-o' /> 
                <Text style={{color:'white',fontSize:20,marginLeft:10}}>{dealer.companyname}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(10),alignItems:'center', paddingHorizontal:moderateScale(8)}}>
                <TouchableOpacity style={{backgroundColor:'#BE9595',alignItems:'center',borderRadius:scale(4),height:verticalScale(25),justifyContent:'center',paddingHorizontal:moderateScale(35)}}onPress={() => deleteadmin(dealer._id)}> 
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
    width:'100%',
    height: verticalScale(50),
    justifyContent:'space-between',
  },
  backButton:{
    alignItems: 'center',
    width:scale(20),
    height:verticalScale(20),
    justifyContent:'center',
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
  tabcontainer: {
    flex: 1,
    backgroundColor:'#111111',
    borderRadius:scale(6)
  },
  tab: {
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
    borderColor: '#56596C',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#232026',
  },
  
  
 
});
export default  AdminUsers;