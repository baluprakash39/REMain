import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState,useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { scale, moderateScale, verticalScale} from './scaling';
import { color } from 'react-native-elements/dist/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initReactI18next, useTranslation} from 'react-i18next';
import cyclicUrl from '../cylic/Cyclic';
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
const Accessories = ({route}) => {
  const {t} = useTranslation();
  const {vehicleId} =route.params
  const navigation = useNavigation(); // Initialize navigation
  const [reloadKey, setReloadKey] = useState(0); 
  useEffect(() => {}, [reloadKey]);
  const [selectedTab, setSelectedTab] = useState('Style');
  const [showSafetyAccessoriesDropdown, setShowSafetyAccessoriesDropdown] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showWindshieldDropdown, setShowWindshieldDropdown] = useState(false);
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [showSeatsDropdown, setShowSeatsDropdown] = useState(false);
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [showBackrestsDropdown, setShowBackrestsDropdown] = useState(false);
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [showStorageAccessoriesDropdown, setShowStorageAccessoriesDropdown] = useState(false);
  const [input9, setInput9] = useState('');
  const [input10, setInput10] = useState('');
  // Additional Dropdowns
  const [showPanniersDropdown, setShowPanniersDropdown] = useState(false);
  const [input11, setInput11] = useState('');
  const [input12, setInput12] = useState('');
  const [showFootpegsDropdown, setShowFootpegsDropdown] = useState(false);
  const [input13, setInput13] = useState('');
  const [input14, setInput14] = useState('');
  const [showEngineGuardsDropdown, setShowEngineGuardsDropdown] = useState(false);
  const [enginegaurdstext, setInput15] = useState('');
  const [enginegaurdsvalue, setInput16] = useState('');
  const [showSumpGuardsDropdown, setShowSumpGuardsDropdown] = useState(false);
  const [input17, setInput17] = useState('');
  const [input18, setInput18] = useState('');
  const [showMirrorsDropdown, setShowMirrorsDropdown] = useState(false);
  const [input19, setInput19] = useState('');
  const [input20, setInput20] = useState('');
  const [showOilFillerCapDropdown, setShowOilFillerCapDropdown] = useState(false);
  const [input21, setInput21] = useState('');
  const [input22, setInput22] = useState('');
  const [showHeadlightDropdown, setShowHeadlightDropdown] = useState(false);
  const [input23, setInput23] = useState('');
  const [input24, setInput24] = useState('');
  const [input1Error, setInput1Error] = useState('');
  const [input2Error, setInput2Error] = useState('');
  const [input19Error, setInput19Error] = useState('');
  const [input20Error, setInput20Error] = useState('');
  const [input21Error, setInput21Error] = useState('');
  const [input22Error, setInput22Error] = useState('');
  const [input23Error, setInput23Error] = useState('');
  const [input24Error, setInput24Error] = useState('');
  const [input3Error, setInput3Error] = useState('');
  const [input4Error, setInput4Error] = useState('');
  const [input5Error, setInput5Error] = useState('');
  const [input6Error, setInput6Error] = useState('');
  const [input7Error, setInput7Error] = useState('');
  const [input8Error, setInput8Error] = useState('');
  const [input11Error, setInput11Error] = useState('');
  const [input12Error, setInput12Error] = useState('');
  const [input13Error, setInput13Error] = useState('');
  const [input14Error, setInput14Error] = useState('');
  const [input15Error, setInput15Error] = useState('');
  const [input16Error, setInput16Error] = useState('');
  const [input17Error, setInput17Error] = useState(''); 
  const [input18Error, setInput18Error] = useState('');
  const [dataArray, setDataArray] = useState([]);
  console.log("dataarray",dataArray)
  const toggleSafetyAccessoriesDropdown = () => {
    setShowSafetyAccessoriesDropdown(!showSafetyAccessoriesDropdown);
  };
  const selectSafetyAccessoriesValue = async (Id) => {
    if (!input1 || !input2) {
      setInput1Error('This field is required');
      setInput2Error('This field is required');
      return;
    }
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const usersdata = {
      safetyaccessories: [
        {
          safetyaccessoriestext: input1,
          safetyaccessoriesvalue: input2,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/acc?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(usersdata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput1('');
      setInput2('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput1Error(''); // Clear error when value is selected
    setInput2Error(''); // Clear error when value is selected
    // toggleSafetyAccessoriesDropdown();
  };
const selectMirrorsValue = async (Id) => {
  if (!input19 || !input20) {
    setInput19Error('This field is required');
    setInput20Error('This field is required');
    return;
  }
  // Retrieve the JWT token from AsyncStorage
  const token = await AsyncStorage.getItem('token');
  const mirrorsData = {
      mirrors: [
        {
          mirrorstext: input19,
          mirrorsvalue: input20,
        },
      ],
    };
  fetch(`${cyclicUrl}/formdetails/mirrors?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(mirrorsData),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput19('');
      setInput20('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput19Error('');
    setInput20Error('');
    // toggleMirrorsDropdown();
  };
const selectOilFillerCapValue = async (Id) => {
    if (!input21 || !input22) {
      setInput21Error('This field is required');
      setInput22Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const oilFilterCapsData = {
      oilfillercap: [
        {
          oilfillercaptext: input21,
          oilfillercapvalue: input22,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/oil?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(oilFilterCapsData),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput21('');
      setInput22('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput21Error('');
    setInput22Error('');
    // toggleOilFillerCapDropdown();
  };
  const toggleWindshieldDropdown = () => {
    setShowWindshieldDropdown(!showWindshieldDropdown);
  };
  const selectWindshieldValue = async (Id) => {
    if (!input3 || !input4) {
      setInput3Error('This field is required');
      setInput4Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const windata = {
      windshields: [
        {
          windshieldstext: input3,
          windshieldsvalue: input4,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/wind?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(windata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput3('');
      setInput4('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput3Error('');
    setInput4Error('');
    // toggleWindshieldDropdown();
  };
  const toggleSeatsDropdown = () => {
    setShowSeatsDropdown(!showSeatsDropdown);
  };
  const selectSeatsValue = async (Id) => {
    if (!input5 || !input6) {
      setInput5Error('This field is required');
      setInput6Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const seatsdata = {
      seats: [
        {
          seatstext: input5,
          seatsvalue: input6,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/seats?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(seatsdata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput5('');
      setInput6('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput5Error('');
    setInput6Error('');
    // toggleSeatsDropdown();
  };
  const toggleBackrestsDropdown = () => {
    setShowBackrestsDropdown(!showBackrestsDropdown);
  };
  const selectBackrestsValue = async (Id) => {
    if (!input7 || !input8) {
      setInput7Error('This field is required');
      setInput8Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const backrestdata = {
      backrests: [
        {
          backreststext: input7,
          backrestsvalue: input8,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/back?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(backrestdata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput7('');
      setInput8('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput7Error('');
    setInput8Error('');
    // toggleBackrestsDropdown();
  };
  const togglePanniersDropdown = () => {
    setShowPanniersDropdown(!showPanniersDropdown);
  };
  const selectPanniersValue = async (Id) => {
    if (!input11 || !input12) {
      setInput11Error('This field is required');
      setInput12Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const panniersData = {
      panniers: [
        {
          pannierstext: input11,
          panniersvalue: input12,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/pan?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(panniersData),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput11('');
      setInput12('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput11Error('');
    setInput12Error('');
    // togglePanniersDropdown();
  };
  const toggleFootpegsDropdown = () => {
    setShowFootpegsDropdown(!showFootpegsDropdown);
  };
  const selectFootpegsValue = async (Id) => {
    if (!input13 || !input14) {
      setInput13Error('This field is required');
      setInput14Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const footPegsData = {
      footpegs: [
        {
          footpegstext: input13,
          footpegsvalue: input14,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/foot?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(footPegsData),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput13('');
      setInput14('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput13Error('');
    setInput14Error('');
    // toggleFootpegsDropdown();
  };
  const toggleEngineGuardsDropdown = () => {
    setShowEngineGuardsDropdown(!showEngineGuardsDropdown);
  };
  const selectEngineGuardsValue = async (Id) => {
    if (!enginegaurdstext || !enginegaurdsvalue) {
      setInput15Error('This field is required');
      setInput16Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const enginedata = {
      enginegaurds: [
        {
          enginegaurdstext: enginegaurdstext,
          enginegaurdsvalue: enginegaurdsvalue,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/engine?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(enginedata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput15('');
    setInput16('');
    setInput15Error('');
    setInput16Error('');
    // toggleEngineGuardsDropdown();
  };
  const toggleSumpGuardsDropdown = () => {
    setShowSumpGuardsDropdown(!showSumpGuardsDropdown);
  };
  const toggleMirrorsDropdown = () => {
  setShowMirrorsDropdown(!showMirrorsDropdown);
  };
  const toggleOilFillerCapDropdown = () => {
    setShowOilFillerCapDropdown(!showOilFillerCapDropdown);
  };
  const selectSumpGuardsValue = async (Id) => {
    if (!input17 || !input18) {
      setInput17Error('This field is required');
      setInput18Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const sumpgaurdsdata = {
      sumpgaurds: [
        {
          sumpgaurdstext: input17,
          sumpgaurdsvalue: input18,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/sump?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(sumpgaurdsdata),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput17('');
      setInput18('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput17Error(''); // Clear error when value is selected
    setInput18Error(''); // Clear error when value is selected
    // toggleSumpGuardsDropdown();
  };
  const toggleHeadlightDropdown = () => {
    setShowHeadlightDropdown(!showHeadlightDropdown);
  };
  const selectHeadlightValue = async (Id) => {
    if (!input23 || !input24) {
      setInput23Error('This field is required');
      setInput24Error('This field is required');
      return;
    }
    // Replace 'your_token_here' with the actual JWT token or your token retrieval logic
    const token = await AsyncStorage.getItem('token');
    const headlightsData = {
      headlight: [
        {
          headlighttext: input23,
          headlightvalue: input24,
        },
      ],
    };
    fetch(`${cyclicUrl}/formdetails/headlight?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(headlightsData),
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput23('');
      setInput24('');
      fetchBikeDetails(Id);
    })
    .catch((error) => {
      console.error(error);
    });
    setInput23Error('');
    setInput24Error('');
    // toggleHeadlightDropdown();
  };
  useEffect(() => {
    fetchBikeDetails(vehicleId);
  }, []);
  const fetchBikeDetails = async (vehicleId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/getbike/${vehicleId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const bike = response.data;
    setDataArray([]);
    setDataArray((prevDataArray) => [...prevDataArray, bike]);
    // await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
    console.log('Bike data stored successfully', bike);
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };
  //start below
  const handleRemovesafty = async (objId, safetyAccessoryId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/acc/${objId}/${safetyAccessoryId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('Deleted safety accessory successfully');
      fetchBikeDetails(objId); // Fetch updated bike details
      } else {
      console.error('Error deleting safety accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
      console.error('Error deleting safety accessory:', error);
      }
  };
  const deleteSeats = async (objId, seatId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/seats/${objId}/${seatId}`;
    if (!token) {
    // Handle the case where the token is missing
    console.error('Token is missing. Please log in or fetch the token.');
    return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted seat:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    } else {
      console.error('Error deleting seat:', response.statusText);
      // Handle error
      }
    } catch (error) {
    console.error('Error deleting seat:', error);
    }
  };
  const deleteWindshield = async (objId, windshieldId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/wind/${objId}/${windshieldId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted windshield:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    } else {
      console.error('Error deleting windshield:', response.statusText);
      // Handle error
    }
    } catch (error) {
    console.error('Error deleting windshield:', error);
    }
  };
  const deleteBackrest = async (objId, backrestId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/back/${objId}/${backrestId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted backrest:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    } else {
      console.error('Error deleting backrest:', response.statusText);
      // Handle error
      }
    } catch (error) {
    console.error('Error deleting backrest:', error);
    }
  };
  const deleteEngine = async (objId, engineId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/engine/${objId}/${engineId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted engine:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    } else {
      console.error('Error deleting engine:', response.statusText);
      // Handle error
    }
  } catch (error) {
    console.error('Error deleting engine:', error);
  }
};
const deletesumpguard = async (objId, sumpId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/sump/${objId}/${sumpId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
    }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted sump guard:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting sump guard:', response.statusText);
      // Handle error
      }
    } catch (error) {
    console.error('Error deleting sump guard:', error);
    }
  };
const deletefoot = async (objId, footpegId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/foot/${objId}/${footpegId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
      }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted footpeg accessory:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting footpeg accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
    console.error('Error deleting footpeg accessory:', error);
    }
  };
  const deletepanniers = async (objId, panId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/pan/${objId}/${panId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
      }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted panniers accessory:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting panniers accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
    console.error('Error deleting panniers accessory:', error);
    }
  };
  const deleteMirrors = async (objId, mirrorId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/mirrors/${objId}/${mirrorId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
      }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted mirrors accessory:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting mirrors accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
      console.error('Error deleting mirrors accessory:', error);
      }
  };
  const deleteoilfiller = async (objId, oilId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/oil/${objId}/${oilId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
      }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted oil filler accessory:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting oil filler accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
      console.error('Error deleting oil filler accessory:', error);
      }
  };
  const deletheadlight = async (objId, headId) => {
  try {
    // Retrieve the JWT token from AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const url = `${cyclicUrl}/formdetails/headlight/${objId}/${headId}`;
    if (!token) {
      // Handle the case where the token is missing
      console.error('Token is missing. Please log in or fetch the token.');
      return;
      }
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log('Deleted headlight accessory:', data);
      fetchBikeDetails(objId); // Fetch updated bike details
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
      } else {
      console.error('Error deleting headlight accessory:', response.statusText);
      // Handle error
      }
    } catch (error) {
      console.error('Error deleting headlight accessory:', error);
      }
  };
  const navigateToInventory=()=>{
  navigation.navigate('Inventory')
  }
  const handleMirrorchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput19('');
    setInput19Error('Numbers are not allowed');
    } else {
    setInput19(text);
    setInput19Error('');
    }
  };
  const handleMirrorchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput20(text)
    setInput20Error();
  } else {
    setInput20('')
    setInput20Error("Enter number only");
    }
  };
  const handleoilchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput21('');
    setInput21Error('Numbers are not allowed');
    } else {
    setInput21(text);
    setInput21Error('');
    }
  };
  const handleoilchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput22(text)
    setInput22Error();
    } else {
    setInput22('')
    setInput22Error("Enter number only");
    }
  };
  const handleheadchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput23('');
    setInput23Error('Numbers are not allowed');
    } else {
      setInput23(text);
      setInput23Error('');
    }
  };
  const handleheadchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput24(text)
    setInput24Error();
    } else {
    setInput24('')
    setInput24Error("Enter number only");
    }
  };
  const handleWindchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput3('');
    setInput3Error('Numbers are not allowed');
    } else {
      setInput3(text);
      setInput3Error('');
      }
  };
  const handlewindchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput4(text)
    setInput4Error();
    } else {
    setInput4('')
    setInput4Error("Enter number only");
    }
  };
  const handleseatchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput5('');
    setInput5Error('Numbers are not allowed');
    } else {
      setInput5(text);
      setInput5Error('');
      }
  };
  const handleseatchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput6(text)
    setInput6Error();
    } else {
    setInput6('')
    setInput6Error("Enter number only");
    }
  };
  const handlebackchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput7('');
    setInput7Error('Numbers are not allowed');
    } else {
      setInput7(text);
      setInput7Error('');
      }
  };
  const handlebackchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput8(text)
    setInput8Error();
    } else {
    setInput8('')
    setInput8Error("Enter number only");
    }
  };
  const handlepanierchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput11('');
    setInput11Error('Numbers are not allowed');
    } else {
      setInput11(text);
      setInput11Error('');
      }
  };
  const handlepanierchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput12(text)
    setInput12Error();
    } else {
      setInput12('')
      setInput12Error("Enter number only");
      }
  };
  const handlefootpegschangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput13('');
    setInput13Error('Numbers are not allowed');
    } else {
      setInput13(text);
      setInput13Error('');
      }
  };
  const handlefootpegschangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput14(text)
    setInput14Error();
    } else {
      setInput14('')
      setInput14Error("Enter number only");
      }
  };
  const handleenginechangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput15('');
    setInput15Error('Numbers are not allowed');
    } else {
      setInput15(text);
      setInput15Error('');
      }
  };
  const handleenginechangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput16(text)
    setInput16Error();
    } else {
      setInput16('')
      setInput16Error("Enter number only");
      }
  };
const handlesumpchangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput17('');
    setInput17Error('Numbers are not allowed');
    } else {
      setInput17(text);
      setInput17Error('');
      }
  };
  const handlesumpchangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput18(text)
    setInput18Error();
    } else {
      setInput18('')
      setInput18Error("Enter number only");
      }
  };
  const handlesaftychangetext = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput1('');
    setInput1Error('Numbers are not allowed');
    } else {
      setInput1(text);
      setInput1Error('');
      }
  };
  const handlesaftychangenumber = (text) => {
  // Check if the input contains any numbers
  if (/\d/.test(text)) {
    setInput2(text)
    setInput2Error();
    } else {
      setInput2('')
      setInput2Error("Enter number only");
      }
  };
return (
  <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <ScrollView>
        {dataArray.map((data, index) => (
          <View key={index} style={styles.container}>
            <View style={styles.header}>
              <View style={{ alignContent: 'center'}}>
                <TouchableOpacity onPress={navigateToInventory} style={styles.backButton}>
                  <MaterialIcons name='arrow-back' size={moderateScale(20)} color={'#F9F9F9'}/>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: 'center', width:scale(315), height:scale(20)}}>
                <Text style={styles.title}>{t('accheader')}</Text>
              </View>
            </View>
            <View style={styles.line}></View>
              <View style={{ gap: scale(5)}}>
                <View style={{ flexDirection: 'row',marginTop:verticalScale(10) }}>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Vehicle</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4)}}>{data.vehiclename}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Model</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4)}}>{data.model}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>EngineCC</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4) }}>{data.EngineCC}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'400', width: scale(100), letterSpacing: moderateScale(0.4) }}>Color</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', width: scale(50), textAlign: 'center' }}>:</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), fontWeight:'600', letterSpacing: moderateScale(0.4) }}>{data.vehiclecolor}</Text>
                </View>
              </View>
            <Text style={styles.accessoriesText}>Available Accessories</Text>
     {/* Add tabs for Style, Comfort, and Protection */}
    <View style={{ borderWidth:moderateScale(1), borderColor: '#868687',backgroundColor: 'rgba(249, 249, 249, 0.30)', borderRadius:moderateScale(5),padding:moderateScale(5) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'flex-start', alignSelf: 'stretch' }}>
            <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? '#F9F9F9' : '#868687' }} onPress={() => setSelectedTab('Style')}>
              Style
            </Text>
            <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? '#F9F9F9' : '#868687' }} onPress={() => setSelectedTab('Comfort')}>
              Comfort
            </Text>
            <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ? '#F9F9F9' : '#868687' }} onPress={() => setSelectedTab('Protection')}>
              Protection
            </Text>
        </View>
      {/* Show dropdowns based on the selected tab */}
      {selectedTab === 'Style' && (
        // Add your dropdown components for Style here
      <>
      {/* Mirrors Dropdown */}
      <TouchableOpacity onPress={toggleMirrorsDropdown}>
        <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {' Mirrors'}
            </Text>
            <MaterialIcons
              name={showMirrorsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
              size={scale(20)}
              color='#303030'
            />
        </View>
      </TouchableOpacity>
      {showMirrorsDropdown && (
      <View style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
          <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Text"
              selectionColor="red"
              placeholderTextColor={'#111111'}
              value={input19}
              // onChangeText={(text) => setInput19(text)}
              onChangeText={(text) => handleMirrorchangetext(text)}
            />
            {input19Error ? <Text style={styles.errorText}>{input19Error}</Text> : null}
          </View>
          <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Value"
              selectionColor="red"
              placeholderTextColor={'#111111'}
              value={input20}
              onChangeText={(text) =>handleMirrorchangenumber(text)}
            />
            {input20Error ? <Text style={styles.errorText}>{input20Error}</Text> : null}
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectMirrorsValue(data._id)}>                 
              <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />                
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', 
                      width:scale(310),
                      flexWrap: 'wrap',
                      paddingVertical: verticalScale(10),
                      paddingHorizontal: verticalScale(0),
                      alignItems: 'flex-start',
                      alignContent: 'flex-start',
                      justifyContent: 'flex-start',
                      alignSelf: 'stretch', }}>
          {data.mirrors.map((mirror, mirrorIndex) => (
            <View key={mirrorIndex}>
              <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
                  <TouchableOpacity onPress={() => deleteMirrors(data._id,mirror._id)} style={{padding:scale(1)}}>
                    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
                  </TouchableOpacity>
                  <View style={{ padding:scale(3) }}>
                    <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{mirror.mirrorstext}</Text>
                    <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{mirror.mirrorsvalue}</Text>
                  </View>
              </View>
            </View>
            ))}
          </View>
        </View>
      )}
      {/* Oil Filler Cap Dropdown */}
      <TouchableOpacity onPress={toggleOilFillerCapDropdown}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {' Oil Filler Cap'}
          </Text>
          <MaterialIcons
            name={showOilFillerCapDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={scale(20)}
            color='#303030'
          />
        </View>
      </TouchableOpacity>
      {showOilFillerCapDropdown && (
      <View style={{borderRadius: moderateScale(6),
                    padding: scale(3),
                    marginTop: verticalScale(4),
                    gap:scale(2),
                    width:scale(320),
                    flexDirection: 'column',
                    alignItems:'flex-start',
                    justifyContent:'space-between',}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
          <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Text"
              selectionColor="red"
              value={input21}
              placeholderTextColor={'#111111'}
              onChangeText={(text) => handleoilchangetext(text)}
            />
            {input21Error ? <Text style={styles.errorText}>{input21Error}</Text> : null} 
          </View>
          <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Value"
              selectionColor="red"
              value={input22}
              placeholderTextColor={'#111111'}
              onChangeText={(text) => handleoilchangenumber(text)}
            />
            {input22Error ? <Text style={styles.errorText}>{input22Error}</Text> : null}
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectOilFillerCapValue(data._id)} >                 
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />                 
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', 
                      width:scale(310),
                      flexWrap: 'wrap',
                      paddingVertical: verticalScale(10),
                      paddingHorizontal: verticalScale(0),
                      alignItems: 'flex-start',
                      alignContent: 'flex-start',
                      justifyContent: 'flex-start',
                      alignSelf: 'stretch', }}>
          {data.oilfillercap.map((oil, oilIndex) => (
          <View key={oilIndex}>
            <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
              <TouchableOpacity onPress={() => deleteoilfiller(data._id,oil._id)} style={{padding:scale(1)}}>
                <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
              </TouchableOpacity>
              <View style={{ padding:scale(3) }}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{oil.oilfillercaptext}</Text>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{oil.oilfillercapvalue}</Text>
              </View>
            </View>
          </View>
          ))}
        </View>
      </View>
      )}
      {/* Headlight Dropdown */}
      <TouchableOpacity onPress={toggleHeadlightDropdown}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {'Headlight'}
          </Text>
          <MaterialIcons
            name={showHeadlightDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={scale(20)}
            color='#303030'
          />
        </View>
      </TouchableOpacity>
      {showHeadlightDropdown && (
      <View style={{borderRadius: moderateScale(6),
                    padding: scale(3),
                    marginTop: verticalScale(4),
                    gap:scale(2),
                    width:scale(320),
                    flexDirection: 'column',
                    alignItems:'flex-start',
                    justifyContent:'space-between',}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
          <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
            <TextInput style={styles.inputField}
              placeholder="Enter Text"
              selectionColor="red"
              placeholderTextColor={'#111111'}
              value={input23}
              onChangeText={(text) => handleheadchangetext(text)}
            />
            {input23Error ? <Text style={styles.errorText}>{input23Error}</Text> : null}
          </View>
            <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
              <TextInput
                style={styles.inputField2}
                placeholder="Enter Value"
                selectionColor="red"
                placeholderTextColor={'#111111'}
                value={input24}
                onChangeText={(text) => handleheadchangenumber(text)}
              />
              {input24Error ? <Text style={styles.errorText}>{input24Error}</Text> : null}
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectHeadlightValue(data._id)}>     
              <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', 
                        width:scale(310),
                        flexWrap: 'wrap',
                        paddingVertical: verticalScale(10),
                        paddingHorizontal: verticalScale(0),
                        alignItems: 'flex-start',
                        alignContent: 'flex-start',
                        justifyContent: 'flex-start',
                        alignSelf: 'stretch', }}>
            {data.headlight.map((head, headIndex) => (
            <View key={headIndex}>
              <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
                <TouchableOpacity onPress={() => deletheadlight(data._id,head._id)} style={{padding:scale(1)}}>
                  <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
                </TouchableOpacity>
              <View style={{ padding:scale(3) }}>
                <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{head.headlighttext}</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{head.headlightvalue}</Text>
              </View>
            </View>
          </View>
          ))}
        </View>
      </View>
      )}
      </>
      )}
      {selectedTab === 'Comfort' && (
        // Add your dropdown components for Comfort here
        <>
      {/* Windshield Dropdown */}
      <TouchableOpacity onPress={toggleWindshieldDropdown}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {' Windshield'}
          </Text>
          <MaterialIcons
            name={showWindshieldDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={scale(20)}
            color='#303030'
          />
        </View>
        </TouchableOpacity>
          {showWindshieldDropdown && (
          <View style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input3}
                  onChangeText={(text) => handleWindchangetext(text)}
                />
                  {input3Error ? <Text style={styles.errorText}>{input3Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input4}
                  onChangeText={(text) => handlewindchangenumber(text)}
                />
                  {input4Error ? <Text style={styles.errorText}>{input4Error}</Text> : null}
              </View>
              <TouchableOpacity style={styles.selectButton} onPress={()=>selectWindshieldValue(data._id)}>              
                <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', 
                          width:scale(310),
                          flexWrap: 'wrap',
                          paddingVertical: verticalScale(10),
                          paddingHorizontal: verticalScale(0),
                          alignItems: 'flex-start',
                          alignContent: 'flex-start',
                          justifyContent: 'flex-start',
                          alignSelf: 'stretch', }}>
              {data.windshields.map((wind, windIndex) => (
              <View key={windIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
                  <TouchableOpacity onPress={() => deleteWindshield(data._id,wind._id)} style={{padding:scale(1)}}>
                    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
                  </TouchableOpacity>
                  <View style={{ padding:scale(3) }}>
                    <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{wind.windshieldstext}</Text>
                    <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{wind.windshieldsvalue}</Text>
                  </View>
                </View>
              </View>
              ))}
            </View>
        </View>
      )}
      {/* Seats Dropdown */}
      <TouchableOpacity onPress={toggleSeatsDropdown}>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {' Seats'}
          </Text>
          <MaterialIcons
            name={showSeatsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={scale(20)}
            color='#303030'
          />
        </View>
        </TouchableOpacity>
          {showSeatsDropdown && (
        <View style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
          <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
            <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
              <TextInput style={styles.inputField}
                placeholder="Enter Text"
                selectionColor="red"
                placeholderTextColor={'#111111'}
                value={input5}
                onChangeText={(text) =>handleseatchangetext (text)}
              />
                  {input5Error ? <Text style={styles.errorText}>{input5Error}</Text> : null}
                </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input6}
                  onChangeText={(text) => handleseatchangenumber(text)}
                />
                  {input6Error ? <Text style={styles.errorText}>{input6Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectSeatsValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
{data.seats.map((seat, seatIndex) => (
  <View key={seatIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>

    <TouchableOpacity onPress={() => deleteSeats(data._id,seat._id)} style={{padding:scale(1)}}>
    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
          </TouchableOpacity>
          <View style={{ padding:scale(3) }}>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{seat.seatstext}</Text>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{seat.seatsvalue}</Text>
      </View>
    </View>
  </View>
))}
</View>
        </View>
      )}
      {/* Backrests Dropdown */}
      <TouchableOpacity onPress={toggleBackrestsDropdown}>
      <View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {' Backrests '}
      </Text>
      <MaterialIcons
        name={showBackrestsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
      </TouchableOpacity>
      {showBackrestsDropdown && (
        <View 
        style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input7}
                  onChangeText={(text) => handlebackchangetext(text)}
                />
                  {input7Error ? <Text style={styles.errorText}>{input7Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input8}
                  onChangeText={(text) => handlebackchangenumber(text)}
                />
                  {input8Error ? <Text style={styles.errorText}>{input8Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectBackrestsValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
{data.backrests.map((back, backIndex) => (
  <View key={backIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>

    <TouchableOpacity onPress={() => deleteBackrest(data._id,back._id)} style={{padding:scale(1)}}>
    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
          </TouchableOpacity>
          <View style={{ padding:scale(3) }}>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{back.backreststext}</Text>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{back.backrestsvalue}</Text>
      </View>
    </View>
  </View>
))}
</View>
        </View>
      )}
      {/* Panniers Dropdown */}
      <TouchableOpacity onPress={togglePanniersDropdown}>
      <View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {'Panniers'}
      </Text>
      <MaterialIcons
        name={showPanniersDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
      </TouchableOpacity>
      {showPanniersDropdown && (
        <View 
        style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input11}
                  onChangeText={(text) => handlepanierchangetext(text)}
                />
                  {input11Error ? <Text style={styles.errorText}>{input11Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input12}
                  onChangeText={(text) => handlepanierchangenumber(text)}
                />
                  {input12Error ? <Text style={styles.errorText}>{input12Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectPanniersValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
{data.panniers.map((pan, panIndex) => (
  <View key={panIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
    <TouchableOpacity onPress={() => deletepanniers(data._id,pan._id)} style={{padding:scale(1)}}>
    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
      </TouchableOpacity>
      <View style={{ padding:scale(3) }}>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{pan.pannierstext}</Text>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{pan.panniersvalue}</Text>
      </View>
    </View>
  </View>
))}
</View>
        </View>
      )}
      {/* Footpegs Dropdown */}
      <TouchableOpacity onPress={toggleFootpegsDropdown}>
      <View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {'Footpegs'}
      </Text>
      <MaterialIcons
        name={showFootpegsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
      </TouchableOpacity>
      {showFootpegsDropdown && (
        <View 
        style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input13}
                  onChangeText={(text) =>handlefootpegschangetext(text)}
                />
                  {input13Error ? <Text style={styles.errorText}>{input13Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input14}
                  onChangeText={(text) => handlefootpegschangenumber(text)}
                />
                  {input14Error ? <Text style={styles.errorText}>{input14Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton} onPress={()=>selectFootpegsValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
{data.footpegs.map((foot, footIndex) => (
  <View key={footIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
    <TouchableOpacity onPress={() => deletefoot(data._id,foot._id)} style={{padding:scale(1)}}>
    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
          </TouchableOpacity>
      <View style={{ padding:scale(3) }}>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{foot.footpegstext}</Text>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{foot.footpegsvalue}</Text>
      </View>
    </View>
  </View>
))}
</View>
        </View>
      )}
        </>
      )}
    {selectedTab === 'Protection' && (
        <>
           {/* Engine Guards Dropdown */}
      <TouchableOpacity onPress={toggleEngineGuardsDropdown}>
      <View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {'Engine Guards'}
      </Text>
      <MaterialIcons
        name={showEngineGuardsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
      </TouchableOpacity>
      {showEngineGuardsDropdown && (
        <View 
        style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={enginegaurdstext}
                  onChangeText={(text) => handleenginechangetext(text)}
                />
                  {input15Error ? <Text style={styles.errorText}>{input15Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={enginegaurdsvalue}
                  onChangeText={(text) => handleenginechangenumber(text)}
                />
                  {input16Error ? <Text style={styles.errorText}>{input16Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton}  onPress={() => selectEngineGuardsValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
{data.enginegaurds.map((engine, engineIndex) => (
  <View key={engineIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
    <TouchableOpacity onPress={() => deleteEngine(data._id,engine._id)} style={{padding:scale(1)}}>
    <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
          </TouchableOpacity>
      <View style={{ padding:scale(3) }}>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{engine.enginegaurdstext}</Text>
        <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{engine.enginegaurdsvalue}</Text>
      </View>
    </View>
  </View>
))}
</View>
        </View>
      )}
      {/* Sump Guards Dropdown */}
      <TouchableOpacity onPress={toggleSumpGuardsDropdown}>
      <View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {'Sump Guards'}
      </Text>
      <MaterialIcons
        name={showSumpGuardsDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
      </TouchableOpacity>
      {showSumpGuardsDropdown && (
        <View 
          style={{borderRadius: moderateScale(6),
                  padding: scale(3),
                  marginTop: verticalScale(4),
                  gap:scale(2),
                  width:scale(320),
                  flexDirection: 'column',
                  alignItems:'flex-start',
                  justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310)}}>
              <View style={{flexDirection:'column'}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input17}
                  onChangeText={(text) => handlesumpchangetext(text)}
                />
                  {input17Error ? <Text style={styles.errorText}>{input17Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column'}}>
                <TextInput
                  style={styles.inputField2}
                  placeholder="Enter Value"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input18}
                  onChangeText={(text) => handlesumpchangenumber(text)}
                />
                  {input18Error ? <Text style={styles.errorText}>{input18Error}</Text> : null}
              </View>
          <TouchableOpacity style={styles.selectButton}  onPress={()=>selectSumpGuardsValue(data._id)}>              
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />              
            </TouchableOpacity>
            </View>
            <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
                {data.sumpgaurds.map((sump, sumpIndex) => (
                <View key={sumpIndex}>
                  <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
                  <TouchableOpacity onPress={() => deletesumpguard(data._id,sump._id)} style={{padding:scale(1)}}>
                  <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
                    </TouchableOpacity>
                    <View style={{ padding:scale(3) }}>
                      <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{sump.sumpgaurdstext}</Text>
                      <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{sump.sumpgaurdsvalue}</Text>
                    </View>
                  </View>
                </View>
                ))}
            </View>
        </View>
      )}
      {/* Safety Accessories Dropdown */}
<TouchableOpacity onPress={toggleSafetyAccessoriesDropdown}>
<View style={styles.dropdown}>
      <Text style={styles.dropdownText}>
        {'Safety Accessories'}
      </Text>
      <MaterialIcons
        name={showSafetyAccessoriesDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
        size={scale(20)}
        color='#303030'
      />
  </View>
  </TouchableOpacity>
{showSafetyAccessoriesDropdown && (
      <View 
        style={{borderRadius: moderateScale(6),
                padding: scale(3),
                marginTop: verticalScale(4),
                gap:scale(2),
                width:scale(320),
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent:'space-between',}}>
          <View style={{flexDirection:'row', justifyContent:'space-between',width:scale(310), alignItems:'center'}}>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2),}}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter Text"
                  selectionColor="red"
                  placeholderTextColor={'#111111'}
                  value={input1}
                  onChangeText={(text) => {
                  handlesaftychangetext(text);
                  setInput1Error(''); // Clear the error message when text changes
                  }} />
                  {input1Error ? <Text style={styles.errorText}>{input1Error}</Text> : null}
              </View>
              <View style={{flexDirection:'column', paddingBottom:moderateScale(2)}}>
                  <TextInput
                    style={styles.inputField2}
                    placeholder="Enter Value"
                    selectionColor="red"
                    placeholderTextColor={'#111111'}
                    value={input2}
                    onChangeText={(text) => {
                      handlesaftychangenumber(text);
                      setInput2Error(''); // Clear the error message when text changes
                    }} />
                    {input2Error ? <Text style={styles.errorText}>{input2Error}</Text> : null}
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => selectSafetyAccessoriesValue(data._id)}>
            <MaterialIcons name='add-circle' size={moderateScale(40)} color='#f9f9f9' />
            </TouchableOpacity>
          </View>
          <View style={{  flexDirection: 'row', 
                            width:scale(310),
                            flexWrap: 'wrap',
                            paddingVertical: verticalScale(10),
                            paddingHorizontal: verticalScale(0),
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch', }}>
          {data.safetyaccessories.map((safty, saftyIndex) => (
            <View key={saftyIndex}>
                <View style={{borderWidth:moderateScale(1), borderColor:'#f9f9f9', alignItems:'flex-end', margin:scale(3), borderRadius:moderateScale(5)}}>
                <TouchableOpacity onPress={() => handleRemovesafty(data._id, safty._id)} style={{padding:scale(1)}}>
                <Ionicons name='close-circle' size={scale(12)} style={{color:'#f9f9f9'}} />
                </TouchableOpacity>
                <View style={{ padding:scale(3) }}>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{safty.safetyaccessoriestext}</Text>
                  <Text style={{ color: '#F9F9F9', fontSize: moderateScale(12), textAlign: 'center' }}>{safty.safetyaccessoriesvalue}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )}
        </>
      )}
      </View>
    </View>
    ))}
    </ScrollView>
  </ImageBackground>
);
};
const styles = StyleSheet.create({
backgroundImage: {
  flex: 1,
  resizeMode: 'cover',
},
container: {
  flex: 1,
  paddingHorizontal: moderateScale(10),
  paddingTop: verticalScale(10),
},
header:{
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: verticalScale(10),
  width: scale(335),
  height: verticalScale(30),
},
backButton:{
  alignItems: 'center',
  width:scale(20),
  height:verticalScale(20),
  justifyContent:'center',
},
title: {
  color: '#F9F9F9',
  fontSize: moderateScale(16),
  fontWeight: 'semibold',
  textAlign: 'center',
  letterSpacing: moderateScale(0.5),
},
line: {
  height: verticalScale(1),
  backgroundColor: '#F9F9F9',
  width: scale(335),
},
accessoriesText: {
  color: '#f9f9f9',
  fontSize: moderateScale(16),
  fontWeight: '600',
  marginTop: verticalScale(10),
  marginBottom: verticalScale(10),
  letterSpacing: moderateScale(0.4),
  alignItems: 'center',
  alignSelf: 'stretch',
},
tab: {
  color: '#111111',
  fontSize: moderateScale(16),
  fontWeight: 'bold',
  borderRadius: scale(6),
  height:scale(30),
  width:scale(100),
  textAlign:'center',
  textAlignVertical:'center'
},
dropdown: {
  flex:1,
  borderRadius: moderateScale(6),
  height: verticalScale(40),
  marginTop: verticalScale(4),
  backgroundColor: '#CBCBCA',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
  borderWidth: moderateScale(1),
  borderColor: '#f9f9f9',
  paddingRight: moderateScale(4)
  },
dropdownText: {
  color: '#303030',
  fontSize: moderateScale(12),
  fontWeight: '600',
  textAlign: 'left',
  letterSpacing: moderateScale(0.4),
  paddingLeft: moderateScale(5),
},
inputField: {
  height: verticalScale(40),
  width: moderateScale(180),
  fontSize: moderateScale(12),
  letterSpacing:moderateScale(0.4),
  color: '#111111',
  gap:scale(2),
  alignItems:'center',
  backgroundColor: 'rgba(217, 217, 217, 1)',
  borderRadius: moderateScale(5),
  marginBottom: verticalScale(2),
  paddingLeft: moderateScale(6),
},
inputField2: {
  height: verticalScale(40),
  width: moderateScale(80),
  fontSize: moderateScale(12),
  letterSpacing:moderateScale(0.4),
  color: '#111111',
  backgroundColor: 'rgba(217, 217, 217, 1)',
  borderRadius: moderateScale(5),
  paddingLeft: moderateScale(6),
  marginBottom: verticalScale(2),
},
selectButton: {
  borderRadius: scale(500),
  width: moderateScale(44),
  padding: scale(0),
  height: verticalScale(43),
  alignItems: 'center',
},
errorText: {
  color: 'red',
  fontSize: moderateScale(10),
  marginTop: verticalScale(4),
},
});
export default Accessories;