import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Inventory';

export function Inventory() {
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
    const filteredData = productData.filter((data) => data.vehiclename?.toLowerCase().includes(search.toLowerCase())
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
          console.log(data.sections);
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
    console.log(acc);
    if (acc === "Accesories") {
      AsyncStorage.setItem('carddata', JSON.stringify(data._id))
        .then(() => {
          console.log('Data saved successfully:', data._id);
          navigation.navigate('Accessories'); // Navigate to the Accessories screen
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    } if (acc === "Care") {
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
          <View style={styles.searchcontainer}>
            <Ionicons name="search" size={15} color="#F9f9f9" />
            <TextInput style={styles.searchInput} placeholder="Search Vehicle" placeholderTextColor="#868687"
              value={search}
              selectionColor="red"
              onChangeText={setSearch} />
          </View>
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
                  backgroundColor: selectedSection === sec.Sectionname ? '#F9F9F9' : '#868687',
                  borderRadius: 10,
                  padding: 10,
                  margin: 5,
                  width: '30%',
                  marginBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center', // Center the content horizontally
                }}
                onPress={() => products(sec.Sectionname)}
              >
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 700 }}>{sec.Sectionname}</Text>
              </TouchableOpacity>
            ))}
        </View>
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
              backgroundColor: '#434242',
              flex: 1,
              margin: 5,
              borderRadius: 10,
              height: 250,
              width: 100,
              justifyContent: 'space-between',
            }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 3, paddingVertical: 3 }}>
              <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#f9f9f9' }}>
                <AntDesign style={{ color: '#f9f9f9' }} name='edit' size={20} onPress={() => handleEdit(item)} />
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#f9f9f9' }}>
                <AntDesign style={{ color: '#f9f9f9' }} name='delete' size={20} onPress={() => deleteProduct(item._id)} />
              </TouchableOpacity>
            </View>



            <TouchableOpacity

              onPress={() => {
                carddata(item);
              }}
            >
              <View style={{ justifyContent: 'space-between', flexDirection: 'column' }}>
                <Image
                  style={{
                    height: '60%',
                    width: '100%',
                  }}
                  source={{ uri: item.adminallimages[0] }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 4, paddingLeft: 4 }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 600, textTransform: 'uppercase' }}>{item.vehiclename}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 4 }}>
                  <Ionicons name="speedometer-outline" size={15} color="#FFFFFF" />
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', marginLeft: 5 }}>
                    {item.EngineCC} CC
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 4 }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 10 }}>Price Starts from</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, paddingRight: 5 }}>{'\u20B9'}</Text>
                    <Text style={{ color: '#FFFFFF', fontWeight: 500, fontSize: 18 }}>{item.exShowroomPrice}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
            <TouchableOpacity

              style={{
                backgroundColor: '#f9f9f9',
                borderWidth: 0.5,
                borderColor: 'red',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 30,
                right: '50%',
                transform: [{ translateX: 25 }],
              }}
              onPress={() => {
                // Handle the "+" button press here
                // You can navigate to the "AddVehicle" screen
                navigation.navigate('Addvehicle');
              }}
            >

              <MaterialIcons name='add-circle' size={50} color='#111111' />

            </TouchableOpacity>
          </View>)} />

    </ImageBackground>
  );
}
