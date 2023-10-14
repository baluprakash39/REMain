
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground,Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
// import {launchImageLibrary }from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import Home from './Home';
import Care from './Care';
import Accessories from './Accessories';
import Update from './Update';
import { scale, moderateScale, verticalScale} from './scaling';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(8),
    paddingTop: verticalScale(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    marginHorizontal: moderateScale(5)
    },
  searchInput: {
    height: verticalScale(35),
    color: '#868687',
    fontSize: moderateScale(16),
    width: scale(200),
  },
  searchcontainer:{
    width: scale(220),
    height: verticalScale(35),
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
  loginButton: {
    backgroundColor: '#F9F9F9', // Use the same background color as searchInput
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#111111', // Change the text color as needed
    fontWeight: 'bold',
    fontSize: moderateScale(12),
    // marginRight: moderateScale(2),
  },
  vehiclevalue:{
    flexDirection: 'row',
    paddingRight: 2,
    gap: 3,
    alignItems: 'flex-end',
  },
});

function Inventory() {
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

  const [docId, setDocId] = useState(null);
  // const [selectedFiles, setSelectedFiles] = useState([]);
  const [singleFile, setSingleFile] = useState(null);

  const navigation = useNavigation(); // Get the navigation object



  useFocusEffect(
    React.useCallback(() => {
      // This function will be called when the screen gains focus
     fetchBikeDetails(); // Replace with the function that fetches your data
    }, [])
  );
 


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

  // const fetchSections = () => {
  //   const url = 'https://dull-plum-woodpecker-veil.cyclic.cloud/bikes/bikes';

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data && data.sections && data.sections.length > 0) {
  //         setSections(data.sections);
  //         console.log(data.sections)
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching sections:', error);
  //     });
  // };
  const fetchSections = async () => {
    try {
      // Retrieve the JWT token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      
      // Set the API endpoint URL
      const apiUrl = 'https://dull-plum-woodpecker-veil.cyclic.cloud/bikes/bikes';
  
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
      const apiUrl = 'https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes';

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





  // const products = (section) => {
  //   setSelectedSection(section);
  //   setAcc(section);
  
  //   if (section === 'Accesories' || section === 'Care') {
  //     // Call fetchBikeDetails if sectionname is Accessories or Care
  //     setReloadKey(reloadKey + 1);
  //     fetchBikeDetails();
  //   } else {
  //     axios
  //       .get(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes/${section}`, {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/json',
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data) {
  //           setProductData(response.data.bikes);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching bike details:', error);
  //       });
  //   }
  // };
  
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
        const apiUrl = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes/${section}`;

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
    
          // console.log('Data saved successfully:', data._id);
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
                const apiUrl = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/deletebikes/${Id}`;
  
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
      console.log('Selected file URI:', result[0].uri);
  
      const formData = new FormData();
      formData.append('adminallimage', {
        uri: result[0].uri,
        type: result[0].type,
        name: result[0].name,
      });
  
      const apiUrl = `https://dull-plum-woodpecker-veil.cyclic.cloud/upload/upload/${Id}`;
  
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
          <View style={styles.searchcontainer}>
          <View style={{justifyContent:'center'}}>
              <Ionicons name="search" size={moderateScale(20)} color="#F9f9f9" />
              </View>
                    <TextInput style={styles.searchInput} placeholder="Search Vehicle" placeholderTextColor="#868687"
                      value={search}
                      selectionColor="red"
                      onChangeText={setSearch}/>
          </View>

          <View style={{flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
          <TouchableOpacity style={{marginHorizontal: moderateScale(15),}}>
              <Ionicons style={{color:'#f9f9f9',borderRadius:scale(1000)}} name='person-circle-sharp' size={scale(29)} onPress={()=>navigation.navigate('CompanyDetails')}/>
              </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // Handle login button press here
              // You can navigate to the login screen or perform the desired action.
              navigation.navigate('Home'); 
              console.log('Login button pressed');
            }}
          >
            <Text style={styles.loginButtonText}>Logout</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: verticalScale(10) }}>
  {sections
    .filter((sec) => sec.Sectionname === 'Accesories' || sec.Sectionname === 'Care')
    .map((sec, index) => (
      <TouchableOpacity
        key={index}
        style={{
          backgroundColor: selectedSection === sec.Sectionname ? '#F9F9F9' : '#868687',
          borderWidth: scale(1),
          borderColor: '#F9F9F9',
          borderRadius: scale(10),
          margin: scale(5),
          width: scale(90),
          height: verticalScale(40),
          marginBottom: verticalScale(10),
          justifyContent: 'center', // Center the content vertically
          alignItems: 'center', // Center the content Horizontally
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
              borderWidth: scale(1),
              backgroundColor: '#11111190',
              margin: moderateScale(3),
              borderRadius: scale(10),
              height:scale(200),
              width: scale(164),
              justifyContent: 'space-between',
              
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


            <TouchableOpacity
            
            onPress={() => {
              carddata(item._id);
            }}
            // style={{
            //   borderColor: 'rgba(249, 249, 249, 0.50)',
            //   borderWidth: 1,
            //   // backgroundColor: 'rgba(151, 151, 151, 0.50)',
            //   height: 250,
            //   flex: 1,
            //   margin: 5,
            //   borderRadius: 10,
            //   width: 100,
            // }}
          >
            <View style={{justifyContent: 'space-between',flexDirection: 'column'}}>
              <Image
                style={{
                  height: scale(90),
                  width: scale(162),
                  resizeMode:'cover',

                }}
                source={{ uri: item.adminallimage }}
                />
                <View style={{height:scale(48), paddingHorizontal: moderateScale(5),flexDirection: 'column'}}>
                <View style={{  flexDirection: 'column',gap:scale(4) }}>
                  <Text style={{ fontSize:moderateScale(12),color: '#F9F9F9', fontWeight: '600', textTransform: 'uppercase',}}>{item.vehiclename}</Text>
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
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                    <Text style={{ color: '#F9F9F9', fontWeight: 'semibold', fontSize: moderateScale(10) }}>Price Starts from</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ color: '#F9F9F9', fontWeight: 'bold', fontSize: moderateScale(14), paddingRight: moderateScale(5) }} >{'\u20B9'}</Text>
                         <Text style={{ color: '#F9F9F9', fontWeight: '500', fontSize: moderateScale(14) }}>{item.exShowroomPrice}</Text>
                      </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          )}
        />       
        <TouchableOpacity
          
        style={{
            backgroundColor: '#f9f9f9',
            borderWidth:moderateScale(0.5),
            borderColor:'red',
            borderRadius: scale(100), // Make it round
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', // Position it absolutely
            bottom: scale(20), // Adjust the distance from the bottom as needed
            right: '50%', // Center it horizontally
            transform: [{ translateX: 25 }],

        }}
        onPress={() => {
          // Handle the "+" button press here
          // You can navigate to the "AddVehicle" screen
          navigation.navigate('Addvehicle'); 
        }}
       >
          
            <MaterialIcons name='add-circle' size={scale(30)} color='#111111' />
   
      </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
}

export default Inventory;