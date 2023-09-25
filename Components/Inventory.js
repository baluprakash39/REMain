
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground,Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import Home from './Home';
import Care from './Care';
import Accessories from './Accessories';
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchInput: {
    height: 35,
    marginTop: 32,
    marginRight: 16,
    color: 'white',
    padding: 4,
    fontSize: 16,
    width: 250,
    borderRadius: 10,
    backgroundColor: 'transparent', // Transparent background
    borderColor: 'white', // White border
    borderWidth: 1, // 1 pixel border width
  },
  loginButton: {
    backgroundColor: '#F9F9F9', // Use the same background color as searchInput
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black', // Change the text color as needed
    fontWeight: 'bold',
  },
});

function Inventory() {
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
  const [selectedFiles, setSelectedFiles] = useState([]);

  const navigation = useNavigation(); // Get the navigation object


  const handleFileInput = () => {
    const options = {
      title: 'Select Images',
      mediaType: 'photo', // Specify the media type you want to pick (photo or video)
      quality: 0.5, // Image quality
      storageOptions: {
        skipBackup: true, // Do not back up the image to the cloud
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User cancelled the image picker
      } else if (response.error) {
        // Handle error
        console.error(response.error);
      } else {
        // Image selected, add it to the selectedFiles array
        const newSelectedFiles = [...selectedFiles, response];
        setSelectedFiles(newSelectedFiles);
      }
    });
  };

  const uploadImages = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file, index) => {
      formData.append(`adminallimages[${index}]`, {
        uri: file.uri,
        type: file.type,
        name: file.fileName,
      });
    });

    try {
      const response = await axios.post(
        `https://shy-tan-tam.cyclic.cloud/upload/upload/${docId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
      // Handle success response here
    } catch (error) {
      console.error(error);
      // Handle error here
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

  const fetchSections = () => {
    const url = 'https://dull-plum-woodpecker-veil.cyclic.cloud/bikes/bikes';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sections && data.sections.length > 0) {
          setSections(data.sections);
          console.log(data.sections)
        }
      })
      .catch((error) => {
        console.error('Error fetching sections:', error);
      });
  };

  const fetchBikeDetails = () => {
    const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes`;

    axios
      .get(url)
      .then((response) => {
        if (response.data) {
          setProductData(response.data.user);
        }
      })
      .catch((error) => {
        console.error('Error fetching bike details:', error);
      });
  };

//   const carddata = (data) => {
//     AsyncStorage.setItem('homedata', JSON.stringify(data._id))
//       .then(() => {
//         console.log('Data saved successfully:', data._id);
//       })
//       .catch((error) => {
//         console.error('Error saving data:', error);
//       });
//   };



  const products = (section) => {
    setSelectedSection(section);
    setAcc(section);
  
    if (section === 'Accesories' || section === 'Care') {
      // Call fetchBikeDetails if sectionname is Accessories or Care
      setReloadKey(reloadKey + 1);
      fetchBikeDetails();
    } else {
      axios
        .get(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes/${section}`, {
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
    }
  };
  
  const carddata = (data) => {
    console.log(acc)
    if (acc === "Accesories") {
      AsyncStorage.setItem('ACC', JSON.stringify(data._id))
        .then(() => {
          // console.log('Data saved successfully:', data._id);
          navigation.navigate('Accessories'); // Navigate to the Accessories screen
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }  if (acc === "Care"){
      AsyncStorage.setItem('Care', JSON.stringify(data._id))
        .then(() => {
          console.log('Data saved successfully:', data._id);
          navigation.navigate('Care'); // Navigate to the Care screen
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  };
  

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TextInput
            style={[styles.searchInput, { color: 'white' }]}
            placeholderTextColor="white"
            placeholder="Search Vehicle"
            value={search}
            onChangeText={setSearch}
          />
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
        <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: 10 }}>
  {sections
    .filter((sec) => sec.Sectionname === 'Accesories' || sec.Sectionname === 'Care')
    .map((sec, index) => (
      <TouchableOpacity
        key={index}
        style={{
            backgroundColor: selectedSection === sec.Sectionname ? 'gray' : 'transparent',
          borderWidth: 1,
         
          borderColor: '#F9F9F9',
          borderRadius: 10,
          padding: 10,
          margin: 5,
          width: '48%',
          marginBottom: 20,
          justifyContent: 'center', // Center the content vertically
          alignItems: 'center',     // Center the content horizontally
          
        }}
        
        
        onPress={() => products(sec.Sectionname)}
      >
        <Text style={{ color: 'black', fontSize: 15, fontWeight: 700 ,color:'white'}}>{sec.Sectionname}</Text>
      </TouchableOpacity>
    ))}
</View>

        <FlatList
        
          data={filteredProductData}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
            
            <View    style={{
              borderColor: 'rgba(249, 249, 249, 0.50)',
              borderWidth: 1,
              // backgroundColor: 'rgba(151, 151, 151, 0.50)',
              height: 300,
              flex: 1,
              margin: 5,
              borderRadius: 10,
              width: 100,
              marginBottom:15
            }}>

              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={{marginBottom:30,width:70}}>
              <Text style={{color:'black',backgroundColor:'white',height:30,fontSize:20,borderRadius:30,textAlign:'center'}} onPress={() => handleDelete(item._id)}>Edit</Text>
              </TouchableOpacity>
           

              <TouchableOpacity style={{marginBottom:30,width:70}}>
              <Text style={{color:'black',backgroundColor:'white',height:30,fontSize:20,borderRadius:30,textAlign:'center'}}>delete</Text>
              </TouchableOpacity>
</View>


            <TouchableOpacity
            
            onPress={() => {
              carddata(item);
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
              <Image
                style={{
                  height: '70%',
                  width: '100%',
                  borderRadius: 10,
                  
                }}
                source={{ uri: item.adminallimages[0] }}
              />
              <View style={{ flex: 1, justifyContent: 'space-between', padding: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold',fontSize:18 }}>{item.vehiclename}</Text>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold',fontSize:15 }}>
                   
                    {item.EngineCC} CC
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold',fontSize:18 }}>Price Starts from</Text>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold',fontSize:15 }}>{item.exShowroomPrice}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          )}
        />
       
        <TouchableOpacity
          
        style={{
          backgroundColor: 'white',
          borderRadius: 100, // Make it round
          width: 50, // Set a fixed width for a round button
          height: 50, // Set a fixed height for a round button
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute', // Position it absolutely
          bottom: 30, // Adjust the distance from the bottom as needed
          right: '50%', // Center it horizontally
          transform: [{ translateX: 25 }],
          fontWeight:1000 // Move it half of its width to center it,
          
        }}
        onPress={() => {
          // Handle the "+" button press here
          // You can navigate to the "AddVehicle" screen
          navigation.navigate('Addvehicle'); 
        }}
       >
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 700 }}>+</Text>
      </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
}

export default Inventory;
