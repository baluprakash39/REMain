
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  searchInput: {
    height: 35,
    color: 'white',
    padding: 4,
    fontSize: 16,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#3D3C3C',
    borderColor: '#f9f9f9', // White border
    borderWidth: 1, // 1 pixel border width
  },
  loginButton: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5,
    borderWidth: 1,
    width: 70,
    height: 35,
    borderColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#F9F9F9', // Change the text color as needed
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  vehiclevalue:{
    flexDirection: 'row',
    paddingRight: 2,
    gap: 3,
    alignItems: 'flex-end',
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
  useEffect(() => {
    fetchSections();
    fetchBikeDetails();
  }, [reloadKey]);

  useEffect(() => {
    filterProductData();
  }, [search, productData]);

  const filterProductData = () => {
    const filteredData = productData.filter((data) =>
      data.vehiclename?.toLowerCase().includes(search.toLowerCase())
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
      AsyncStorage.setItem('carddata', JSON.stringify(data._id))
        .then(() => {
          console.log('Data saved successfully:', data._id);
          navigation.navigate('Accessories'); // Navigate to the Accessories screen
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }  if (acc === "Care"){
      AsyncStorage.setItem('carddata', JSON.stringify(data._id))
        .then(() => {
          console.log('Data saved successfully:', data._id);
          navigation.navigate('Care'); // Navigate to the Care screen
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  };
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Vehicle"
            placeholderTextColor="#F9F9F9"
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
          backgroundColor: selectedSection === sec.Sectionname ? 'gray' : 'white',
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
        <Text style={{ color: 'black', fontSize: 15, fontWeight: 700 }}>{sec.Sectionname}</Text>
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
              carddata(item);
            }}
            style={{
              borderColor: 'rgba(249, 249, 249, 0.50)',
              borderWidth: 1,
              backgroundColor: 'rgba(151, 151, 151, 0.50)',
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
                source={{ uri: item.adminallimages[0] }}
              />
              <View style={{ flex: 1, justifyContent: 'space-between', padding: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold' }}>{item.vehiclename}</Text>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold' }}>
                  <Icon name="speedometer" size={25} />
                    {item.EngineCC} CC
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 10 }}>Price Starts from</Text>
                  <View style={styles.vehiclevalue}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 12 }} >INR.</Text>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{item.exShowroomPrice}</Text>
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

export default Inventory;
