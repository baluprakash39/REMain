
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

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
    marginHorizontal: 5
  },
  searchInput: {
    height: 35,
    marginTop: 32,
    marginRight: 16,
    color: 'white',
    padding: 4,
    fontSize: 16,
    width: 250,
    color: '#868687',
    padding: 2,
    borderRadius: 10,
    backgroundColor: 'transparent', // Transparent background
    borderColor: 'white', // White border
    borderWidth: 1, // 1 pixel border width
  },
  searchcontainer:{
    width: 250,
    height: 35,
    flexDirection: 'row',
    alignItems:'center',
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#3D3C3C',
    borderColor: 'rgba(249, 249, 249, 0.50)', // White border
    borderWidth: 1, // 1 pixel border width
  },
  searchInput: {
    color: '#868687',
    padding: 2,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#F9F9F9', // Use the same background color as searchInput
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black', // Change the text color as needed
    fontWeight: 'bold',
  },
});

function Home() {
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
  

  

  const fetchSections = () => {
    const url = 'https://dull-plum-woodpecker-veil.cyclic.cloud/bikes/bikes';


    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.sections && data.sections.length > 0) {
          setSections(data.sections);
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

  const carddata = (data) => {
    AsyncStorage.setItem('homedata', JSON.stringify(data._id))
      .then(() => {
        console.log('Data saved successfully:', data._id);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const products = (section) => {
    setSelectedSection(section);
    setAcc(section);
    axios.get(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbikes/${section}`, {
      
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

  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
        <View style={styles.searchcontainer}>
              <Ionicons name="search" size={15} color="#F9f9f9" />
                    <TextInput style={styles.searchInput} placeholder="Search Vehicle" placeholderTextColor="#868687"
                      value={search}
                      selectionColor="red"
                      onChangeText={setSearch}/>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate('Otp');
              console.log('Login button pressed');
            }}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderRadius: 10, marginTop: 10 }}>
          {sections
            .filter((sec) => sec.Sectionname !== 'Accesories' && sec.Sectionname !== 'Care')
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
              carddata(item); // Handle any card data logic you need here
              navigation.navigate('Share'); // Navigate to the Share screen
            }}
            style={{
              
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
              <View style={{ flex: 1, justifyContent: 'space-between', padding: 5, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 600, textTransform: 'uppercase'}}>{item.vehiclename}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="speedometer-outline" size={15} color="#FFFFFF" />
                    <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', marginLeft: 5 }}>
                      {item.EngineCC} CC
                    </Text>
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
