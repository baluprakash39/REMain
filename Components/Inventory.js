
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground,Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import cyclicUrl from '../cylic/Cyclic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import Care from './Care';
import Accessories from './Accessories';
import Update from './Update';
import { scale, moderateScale, verticalScale} from './scaling';
import DeviceInfo from 'react-native-device-info';
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent:'space-between'
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(50),
    marginTop: verticalScale(10),
    marginHorizontal: moderateScale(5),
    },
  headerIcons:{
      marginLeft: moderateScale(5),
      flexDirection:'column',
      paddingHorizontal:moderateScale(15),
      paddingVertical:verticalScale(2),
      rowGap:scale(1),
      backgroundColor:'#3A3A3A',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:scale(5)
    },
    searchInputContainer:{
      flex: 1,
      alignItems: 'flex-start',
      paddingLeft: moderateScale(4),
      paddingTop:verticalScale(10),
    },
  searchInput: {
      width:'100%',
      color: '#f9f9f9',
      fontSize: moderateScale(16),
      textAlignVertical:'center',
      paddingTop:verticalScale(0),
    },
    
    searchcontainer: {
      width: '100%',
      paddingVertical:verticalScale(0),
      paddingLeft: moderateScale(4),
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: moderateScale(6),
      backgroundColor: '#3D3C3C',
      borderColor: '#979797',
      borderWidth: moderateScale(1),
    },
  loginButton: {

  },
  vehiclevalue:{
    flexDirection: 'row',
    paddingRight: moderateScale(2),
    gap: scale(3),
    alignItems: 'flex-end',
  },
});
function Inventory() {
  const {t} = useTranslation();
  const ans=AsyncStorage.getItem('token')
  console.log("ans",ans)
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
  const [reloadKey, setReloadKey] = useState(0); 
  const [selectedSection, setSelectedSection] = useState(null);
  const [deviceId, setDeviceId] = useState(null)

  const [docId, setDocId] = useState(null);
  const [singleFile, setSingleFile] = useState(null);
  const navigation = useNavigation(); // Get the navigation object
  useFocusEffect(
    React.useCallback(() => {
      // This function will be called when the screen gains focus
     fetchBikeDetails(); // Replace with the function that fetches your data
    }, [])
  );
  useEffect(() => {
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    try {
      const uniqueId = await DeviceInfo.getUniqueId();
      setDeviceId(uniqueId);
    } catch (error) {
      console.error('Error getting device info:', error);
    }
  };


  useEffect(() => {
    fetchSections();
    fetchBikeDetails();
  }, [reloadKey]);

  useEffect(() => {
    filterProductData();
  }, [search, productData]);

  const filterProductData = () => {
    const filteredData = productData.filter((data) =>
    data?.vehiclename?.toLowerCase().includes(search.toLowerCase())
  );
  
    setFilteredProductData(filteredData);
  };

  const fetchSections = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      
      // Set the API endpoint URL
      const apiUrl = `${cyclicUrl}/bikes/bikes`;
  
      // Make the API request with the 'Authorization' header
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data && data.sections && data.sections.length > 0) {
          setSections(data.sections);
          console.log(data.sections);
        }
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  
  const fetchBikeDetails = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      
      // Set the API endpoint URL
      const apiUrl = `${cyclicUrl}/formdetails/getbikes`;

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
  const products = (section) => {
  setSelectedSection(section);
  setAcc(section);

  if (section === 'Accesories' || section === 'Care') {
    // Call fetchBikeDetails if section name is Accessories or Care
    setReloadKey(reloadKey + 1);
    fetchBikeDetails();
  } else {
    // Retrieve the JWT token from AsyncStorage
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        
        // Set the API endpoint URL
        const apiUrl = `${cyclicUrl}/formdetails/getbikes/${section}`;

        // Make the API request with the 'Authorization' header
        axios
          .get(apiUrl, {
            headers: {
              'Authorization': `Bearer ${token}`,
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
      } catch (error) {
        console.error('Error fetching token from AsyncStorage:', error);
      }
    };

    fetchToken();
  }
};
  const carddata = (data) => {
    console.log('data',data)
    console.log(acc)
    if (acc === "Accesories") {
          navigation.navigate('Accessories',{ vehicleId: data }); // Navigate to the Accessories screen
    }  if (acc === "Care"){
          navigation.navigate('Care',{ vehicleId: data } ); // Navigate to the Care screen
    }
  };
const deleteProduct = (Id) => {
    console.log(Id);
  
    // Retrieve the JWT token from AsyncStorage
    AsyncStorage.getItem('token')
      .then((token) => {
        // Show confirmation alert (optional)
        Alert.alert(
          'Confirmation',
          'Are you sure you want to delete this item?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              onPress: () => {
                // Define your API endpoint URL
                const apiUrl = `${cyclicUrl}/formdetails/deletebikes/${Id}`;
  
                // Send a DELETE request to the API endpoint with the token in headers
                fetch(apiUrl, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                  },
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    // Update the state by removing the deleted item
                    setProductData((prevProductData) =>
                      prevProductData.filter((item) => item._id !== Id)
                    );
  
                    // Trigger a re-render by updating the reloadKey
                    setReloadKey(reloadKey + 1);
  
                    // Show a success alert
                    Alert.alert('Success', 'Product Deleted Successfully');
                  })
                  .catch((error) => {
                    console.error('Error deleting product:', error);
                    Alert.alert('Error', 'Failed to delete product');
                  });
              },
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error('Error retrieving token from AsyncStorage:', error);
      });
  };
  function handleEdit(item) {
    // Store the item data locally using AsyncStorage
    AsyncStorage.setItem('Bikes', JSON.stringify(item))
      .then(() => {
        console.log(item);
        // Navigate to the 'Update' screen using navigation
        navigation.navigate('Update');
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  }
  const uploadImage = async (Id) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (!result || !result[0].uri) {
        // User canceled the picker or the URI is empty
        console.log('User canceled image picker or empty URI');
        return;
      }
      // Log the URI for debugging
      const formData = new FormData();
      formData.append('adminallimage', {
        uri: result[0].uri,
        type: result[0].type,
        name: result[0].name,
      });
      const apiUrl = `${cyclicUrl}/upload/upload/${Id}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        // Handle success
        console.log('Image uploaded successfully');
        fetchBikeDetails(Id);
        // You may want to trigger a refresh or update here if needed
      } else {
        // Handle error
        console.error('Image upload failed');
      }
      // Ensure that the selected file is an image
      if (
        result[0].name.endsWith('.jpg') ||
        result[0].name.endsWith('.jpeg') ||
        result[0].name.endsWith('.png')
      ) {
        const fileURI = result[0].uri;
        // Now you have a valid image file URI (e.g., file:///path/to/selected/image.jpg)
        // You can use this URI to upload or display the image.
        console.log('File URI:', fileURI);
      } else {
        console.error('Invalid file type. Please select a valid image.');
      }
    } catch (error) {
      console.error('Error picking or uploading an image:', error);
    }
  };
  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection:'row',width:'100%',marginBottom:verticalScale(5),alignItems:'center',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.headerIcons}>
              <Ionicons style={{color:'#f9f9f9',borderRadius:scale(1000)}} name='person-circle-outline' size={scale(20)} onPress={()=>navigation.navigate('CompanyDetails')}/>
              <Text style={{color:'#f9f9f9',fontSize:moderateScale(10)}}>Profile</Text>
              </TouchableOpacity>
          <Text style={{color:'#f9f9f9',fontSize:moderateScale(24),paddingHorizontal:moderateScale(10)}}>Inventory</Text>
          <TouchableOpacity style={styles.headerIcons}
            onPress={() => {
              navigation.navigate('Home', {deviceId}); 
              console.log('Login button pressed');
            }}
          >
            <AntDesign style={{color:'#f9f9f9'}} name='home' size={scale(20)}/>
            <Text style={{color:'#f9f9f9',fontSize:moderateScale(12),fontWeight:'400',letterSpacing:moderateScale(0.4)}}>Home</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.searchcontainer}>
            <View style={{justifyContent:'center'}}>
              <Ionicons name="search" size={moderateScale(20)} color="#F9f9f9" />
            </View>
              <View style={styles.searchInputContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Vehicle"
                  placeholderTextColor="#868687"
                  value={search}
                  selectionColor="red"
                  onChangeText={setSearch}
                />
              </View>
            </View>
          
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: verticalScale(50)}}>
            {sections
              .filter((sec) => sec.Sectionname === 'Accesories' || sec.Sectionname === 'Care')
              .map((sec, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: selectedSection === sec.Sectionname ? '#F9F9F9' : '#868687',
                    borderWidth: scale(1),
                    borderColor: '#F9F9F9',
                    borderRadius: scale(4),
                    marginHorizontal: scale(10),
                    width: moderateScale(150),
                    height: verticalScale(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => products(sec.Sectionname)}
                >
                <Text style={{color: '#111111',fontSize:moderateScale(12),fontWeight:'700' }}>{sec.Sectionname}</Text>
              </TouchableOpacity>
              ))}
          </View>
        <FlatList
          data={filteredProductData}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View    style={{
              borderColor:'#979797',
              justifyContent: 'space-between',
              borderWidth: scale(1),
              backgroundColor: '#11111199',
              height: scale(220),
              flex: 1,
              margin: scale(3),
              borderRadius: scale(6),
              marginTop:scale(5),
              paddingBottom:scale(10),
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:scale(3), paddingVertical:scale(3)}}>
              <TouchableOpacity style={{ height:scale(30), width: scale(30), borderRadius: scale(50), alignItems: 'center', justifyContent: 'center',borderWidth:scale(0.5), backgroundColor:'#484848' }}>
                <AntDesign style={{color: '#f9f9f9'}} name='edit' size={scale(10)} onPress={() => handleEdit(item)}/>
              </TouchableOpacity>
              <TouchableOpacity style={{ height:scale(30), width: scale(30), borderRadius: scale(50), alignItems: 'center', justifyContent: 'center',borderWidth:scale(0.5), backgroundColor:'#484848' }}>
                <AntDesign style={{color: '#f9f9f9'}} name="upload" size={scale(10)} onPress={() => uploadImage(item._id)}/>
              </TouchableOpacity>
              <TouchableOpacity style={{ height:scale(30), width: scale(30), borderRadius: scale(50), alignItems: 'center', justifyContent: 'center',borderWidth:scale(0.5), backgroundColor:'#484848' }}>
                <AntDesign style={{ color: '#f9f9f9'}} name='delete' size={scale(10)} onPress={() => deleteProduct(item._id)} />
              </TouchableOpacity>
            </View>
            <View style={{height:'50%',width:'100%',paddingVertical:scale(2)}}>
            <TouchableOpacity onPress={() => {
              carddata(item._id);
              }}
            style={{
              flex: 1,
            }}
            >
              <Image
                style={{
                  flex:1,
                  resizeMode:'cover',
                }}
                source={{ uri: item.adminallimage }}
                />
                </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: moderateScale(5),flexDirection: 'column',justifyContent:'space-between'}}>
                <TouchableOpacity  onPress={() => {
                    carddata(item._id);
                    }}>
                <View style={{  flexDirection: 'row',justifyContent:'space-between',paddingVertical:scale(2) }}>
                  <Text style={{paddingVertical:scale(2), fontSize:moderateScale(12),color: '#F9F9F9', fontWeight: '600', textTransform: 'uppercase',}}>{item.vehiclename}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',paddingVertical:scale(2)}}>
                    <View style={{paddingVertical:scale(2),flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="speedometer-outline" size={scale(10)} color="#FFFFFF" />
                    <Text style={{color: '#FFFFFF', fontWeight: 'semibold', marginLeft: moderateScale(4),fontSize:moderateScale(12)}}>
                      {item.EngineCC} CC
                    </Text>
                    </View>
                    <View style={{paddingVertical:scale(2),flexDirection:'row', alignItems:'center'}}>
                      <Ionicons name="color-palette" size={scale(10)} color="#FFFFFF" />
                      <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', marginLeft: moderateScale(4),fontSize:moderateScale(12)}}>
                        {item.vehiclecolor} 
                      </Text>
                    </View>
                  </View>
                    <View style={{paddingVertical:scale(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingVertical:scale(2)}}>
                    <Text style={{ color: '#F9F9F9', fontWeight: 'semibold', fontSize: moderateScale(10) }}>Starts from</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ color: '#F9F9F9', fontWeight: 'bold', fontSize: moderateScale(14), paddingRight: moderateScale(5) }} >{'\u20B9'}</Text>
                        <Text style={{ color: '#F9F9F9', fontWeight: '500', fontSize: moderateScale(14)}}>{item.exShowroomPrice}</Text>
                      </View>
                  </View>
                </TouchableOpacity>
                </View>
            </View>
          )}
        />     
        <TouchableOpacity style={{
                                    backgroundColor: '#f9f9f9',
                                    borderWidth:moderateScale(0.5),
                                    borderRadius: scale(100),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: scale(20),
                                    right: '49%',
                                    transform: [{ translateX: 25 }],
                                  }}
                                      onPress={() => {
                                        navigation.navigate('Addvehicle'); 
                                      }}
                                    >
          <MaterialIcons name='add-circle' size={scale(40)} color='#111111' />
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}
export default Inventory;