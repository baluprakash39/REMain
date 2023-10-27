import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import { useTheme } from '../ThemeContext';
import { scale, moderateScale, verticalScale} from './scaling';
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
  },
  lng: 'en',
  fallbackLng: 'en',
});



function Home({route}) {
  const {t} = useTranslation();
  const {deviceId} = route.params
 
  // const { isDarkTheme } = useTheme(); // Access the theme
  const [search, setSearch] = useState('');
  const [createVehicle1, setCreateVehicle1] = useState(true);
  const [addVehicle1, setAddVehicle1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const [newSectionName, setNewSectionName] = useState('');

  const [bikeData, setBikeData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [acc, setAcc] = useState(null);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    fetchSections();
    fetchBikeDetails();
  }, []);

  useEffect(() => {
    filterProductData();
  }, [search, productData]);

  // const filterProductData = () => {
  //   const filteredData = productData.filter((data) =>
  //     data.vehiclename.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredProductData(filteredData);
  // };
  const filterProductData = () => {

    const filteredData = productData.filter((data) =>
      data.vehiclename?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProductData(filteredData);
  };
  
  const fetchSections = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
  
      if (!token) {
        // Handle the case where the token is missing
        console.error('Token is missing. Please log in or fetch the token.');
        return;
      }
  
      const url = 'https://dull-pink-hermit-crab-hat.cyclic.app/bikes/bikes';
  
      fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`, // Add the token to the headers
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.sections && data.sections.length > 0) {
            setSections(data.sections);
          }
        })
        .catch((error) => {
          console.error('Error fetching sections:', error);
        });
    } catch (error) {
      console.error('Error:', error);
      // Handle errors related to AsyncStorage
    }
  };
  
  // const fetchBikeDetails = async() => {
  //   const token = await AsyncStorage.getItem('token');
  //   console.log("token",token)
  //   const url = `https://dull-pink-hermit-crab-hat.cyclic.app/formdetails/getbikes`;
  

  //   axios
  //   .get(url, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.data) {
  //         setProductData(response.data.user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching bike details:', error);
  //     });
  // };
  const fetchBikeDetails = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      
      // Set the API endpoint URL
      const apiUrl = 'https://dull-pink-hermit-crab-hat.cyclic.app/formdetails/getbikes';

      // Make the API request with the 'Authorization' header
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.data) {
        setProductData(response.data.user);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const carddata = (Id) => {
    navigation.navigate('Share',{vehicleId:Id, deviceId:deviceId})
    console.log(Id)
  };

  const handleInventory = () =>{
    navigation.navigate('Inventory')
  }

  const products = (section) => {
    setSelectedSection(section);
    setAcc(section);
    axios.get(`https://dull-pink-hermit-crab-hat.cyclic.app/formdetails/getbikes/${section}`, {
      
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data) {
          setProductData(response.data.bikes);
        }
      })
      .catch((error) => {
        console.error('Error fetching bike details:', error);
      });
  };

  const handlelogout = async () => {
    setIsLoading(true); // Display loader
    const zero=0
    const randomValue = Math.random();
  
    try {
      // Execute the logout logic here
      await AsyncStorage.setItem('isloggedIn', 'false');
      await AsyncStorage.removeItem('token');
      route.params.onLoginClick(zero);
      setIsLoading(false); // Hide loader
      console.log("device", deviceId);
  
      // Navigate to the OTP screen
      navigation.navigate('Otp', { deviceId });
    } catch (error) {
      console.error('Error during logout:', error);
      setIsLoading(false); // Hide loader in case of an error
    }
  };
  const navigation = useNavigation(); // Get the navigation object
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: verticalScale(50),
      marginTop: verticalScale(10),
      marginHorizontal: moderateScale(5),
      // backgroundColor: isDarkTheme ? 'black' : 'white',
    },  
    searchInput: {
      height: scale(30),
      color: '#f9f9f9',
      fontSize: moderateScale(16),
      width: moderateScale(200),
    },
    searchcontainer:{
      width: moderateScale(220),
      height: scale(30),
      gap:scale(2),
      paddingLeft:moderateScale(4),
      flexDirection: 'row',
      alignItems:'stretch',
      justifyContent:'space-between',
      borderRadius: moderateScale(6),
      backgroundColor: '#3D3C3C',
      borderColor: '#979797', // White border
      borderWidth: moderateScale(1), // 1 pixel border width
    },
    // searchInput: {
    //   height: 35,
    //   marginTop: 32,
    //   marginRight: 16,
    //   color: 'white',
    //   padding: 4,
    //   fontSize: 16,
    //   width: 250,
    //   color: '#868687',
    //   padding: 2,
    //   borderRadius: 10,
    //   backgroundColor: 'transparent', // Transparent background
    //   borderColor: 'white', // White border
    //   borderWidth: 1, // 1 pixel border width
    //   // backgroundColor: isDarkTheme ? 'black' : 'white',
    // },
    // searchcontainer:{
    //   width: 250,
    //   height: 35,
    //   flexDirection: 'row',
    //   alignItems:'center',
    //   padding: 4,
    //   borderRadius: 5,
    //   backgroundColor: '#3D3C3C',
    //   borderColor: 'rgba(249, 249, 249, 0.50)', // White border
    //   borderWidth: 1, // 1 pixel border width
    //   // backgroundColor: isDarkTheme ? 'black' : 'white',
    // },
    // searchInput: {
    //   color: '#868687',
    //   padding: 2,
    //   fontSize: 16,
    //   // backgroundColor: isDarkTheme ? 'black' : 'white',
    // },
    loginButton: {
      backgroundColor: '#3A3A3A', // Use the same background color as searchInput
      // paddingVertical: 4,
      // paddingHorizontal: 16,
      height:scale(30),
      width:moderateScale(50),
      gap:scale(2),
      borderRadius: scale(4),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:moderateScale(1),
      borderColor:'#979797'
      // backgroundColor: isDarkTheme ? 'black' : 'white',
    },
    loginButtonText: {
      color: '#f9f9f9', // Change the text color as needed
      fontWeight: '600',
      letterSpacing:moderateScale(0.4),
      fontSize:moderateScale(10),
      // color: isDarkTheme ? 'white' : 'black',
    },
  
  });
  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
        <View style={styles.searchcontainer}>
        <View style={{justifyContent:'center'}}>
              <Ionicons name="search" size={verticalScale(20)} color="#F9f9f9" />
              </View>
                    <TextInput style={styles.searchInput} placeholder="Search Vehicle" placeholderTextColor="#868687"
                      value={search}
                      selectionColor="red"
                      onChangeText={setSearch}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',}}>
          <TouchableOpacity style={{marginHorizontal: moderateScale(15), height: scale(30), width: scale(30),backgroundColor:'#3A3A3A',alignItems:'center',justifyContent:'center',borderRadius:scale(100)}}
                      onPress={handleInventory}>
                        {/* navigation.navigate('Inventory');
                        console.log('Clicked on settings');
                      }}> */}
              <Ionicons style={{color:'#f9f9f9'}} name='settings-outline' size={scale(20)} />
              </TouchableOpacity>
              <TouchableOpacity
            style={styles.loginButton}
            onPress={ handlelogout}
          >
            <Text style={styles.loginButtonText}>Logout</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: 10 }}>
          {sections
            .filter((sec) => sec.Sectionname !== 'Accesories' && sec.Sectionname !== 'Care')
            .map((sec, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: selectedSection === sec.Sectionname ? 'white' : 'gray',
                  // backgroundColor: isDarkTheme ? '#333' : '#3498db',
                  borderWidth: 1,
                  borderColor: '#F9F9F9',
                  borderRadius: 10,
                  padding: 10,
                  margin: 5,
                  width: '30%',
                  marginBottom: 20,
                  justifyContent: 'center', // Center the content vertically
                  alignItems: 'center'
                }}
                onPress={() => products(sec.Sectionname)}
              >
                <Text style={{ color: 'black',fontSize:15,fontWeight:700 }}>{sec.Sectionname}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <FlatList
          data={filteredProductData}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => {
              carddata(item._id); // Handle any card data logic you need here
               // Navigate to the Share screen
            }}
            style={{
              
              borderWidth: 1,
              borderColor:'#979797',
              backgroundColor: '#11111190',
              // backgroundColor: isDarkTheme ? 'black' : 'white',
              height: 250,
              flex: 1,
              margin: 5,
              borderRadius: 10,
              width: 100,
              
            }}
          >
              <Image
                style={{
                  height: '60%',
                  width: '100%',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
                source={{ uri: item.adminallimage }}
              />
              <View style={{ flex: 1, justifyContent: 'space-between', padding: 5, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 600, textTransform: 'uppercase'}}>{item.vehiclename}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
                    <View style={{flexDirection:'row'}}>
                    <Ionicons name="speedometer-outline" size={15} color="#FFFFFF" />
                    <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', marginLeft: 5 }}>
                      {item.EngineCC} CC
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Ionicons name="color-palette" size={15} color="#FFFFFF" />
                    <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', marginLeft: 5 }}>
                      {item.vehiclecolor} 
                    </Text>
                   </View>
                  </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 10 }}>Price Starts from</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, paddingRight: 5 }} >{'\u20B9'}</Text>
                  <Text style={{ color: '#FFFFFF', fontWeight: 500, fontSize: 18 }}>{item.exShowroomPrice}</Text>
                </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default Home;