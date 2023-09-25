

import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const Accessories = () => {
  const navigation = useNavigation();
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
console.log(dataArray)


const toggleSafetyAccessoriesDropdown = () => {
  setShowSafetyAccessoriesDropdown(!showSafetyAccessoriesDropdown);
};

const selectSafetyAccessoriesValue = (Id) => {
  if (!input1 || !input2) {
    setInput1Error('This field is required');
    setInput2Error('This field is required');
    return;
  }
  const usersdata = {
    safetyaccessories: [
      {
        safetyaccessoriestext: input1,
        safetyaccessoriesvalue: input2,
      },
    ],
  };

  fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/acc?_id=${Id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usersdata),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput1('');
      setInput2('');
      
    })
    .catch((error) => {
      console.error(error);
    });

 
  setInput1Error(''); // Clear error when value is selected
  setInput2Error(''); // Clear error when value is selected
  toggleSafetyAccessoriesDropdown();
};

const selectMirrorsValue = (Id) => {
  if (!input19 || !input20) {
    setInput19Error('This field is required');
    setInput20Error('This field is required');
    return;
  }
  const mirrorsData = {
    mirrors: [
      {
        mirrorstext:input19,
        mirrorsvalue: input20,
      },
    ],
  };

  fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/mirrors?_id=${Id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mirrorsData),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput19('');
      setInput20('');
    })
    .catch((error) => {
      console.error(error);
    });


  setInput19Error('');
  setInput20Error('');
  toggleMirrorsDropdown();
};

const selectOilFillerCapValue = (Id) => {
  if (!input21 || !input22) {
    setInput21Error('This field is required');
    setInput22Error('This field is required');
    return;
  }
  const oilFilterCapsData = {
    oilfillercap: [
      {
        oilfillercaptext: input21,
        oilfillercapvalue:input22,
      },
    ],
  };

  fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/oil?_id=${Id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(oilFilterCapsData),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput21('');
      setInput22('');
    })
    .catch((error) => {
      console.error(error);
    });
  
  setInput21Error('');
  setInput22Error('');
  toggleOilFillerCapDropdown();
};

  const toggleWindshieldDropdown = () => {
    setShowWindshieldDropdown(!showWindshieldDropdown);
  };

 
  const selectWindshieldValue = (Id) => {
    if (!input3 || !input4) {
      setInput3Error('This field is required');
      setInput4Error('This field is required');
      return;
    }
    const windata = {
      windshields: [
        {
          windshieldstext: input3,
          windshieldsvalue: input4,
        },
      ],
    };
  
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/wind?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(windata),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput3('');
        setInput4('');
        // Note: There's no direct equivalent to "location.reload()" in React Native
      })
      .catch((error) => {
        console.error(error);
      });
   
    setInput3Error('');
    setInput4Error('');
    toggleWindshieldDropdown();
  };
  
  const toggleSeatsDropdown = () => {
    setShowSeatsDropdown(!showSeatsDropdown);
  };


  const selectSeatsValue = (Id) => {
    if (!input5 || !input6) {
      setInput5Error('This field is required');
      setInput6Error('This field is required');
      return;
    }
    const seatsdata = {
      seats: [
        {
          seatstext: input5,
          seatsvalue: input6,
        },
      ],
    };
  
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/seats?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seatsdata),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput5('');
        setInput6('');
        // Note: There's no direct equivalent to "location.reload()" in React Native
      })
      .catch((error) => {
        console.error(error);
      });
   
    setInput5Error('');
    setInput6Error('');
    toggleSeatsDropdown();
  };
  
  const toggleBackrestsDropdown = () => {
    setShowBackrestsDropdown(!showBackrestsDropdown);
  };

 
  const selectBackrestsValue = (Id) => {
    if (!input7 || !input8) {
      setInput7Error('This field is required');
      setInput8Error('This field is required');
      return;
    }
    const backrestdata = {
      backrests: [
        {
          backreststext: input7,
          backrestsvalue: input8,
        },
      ],
    };
  
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/back?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(backrestdata),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput7('');
        setInput8('');
        // Note: There's no direct equivalent to "location.reload()" in React Native
      })
      .catch((error) => {
        console.error(error);
      });
  
   
    setInput7Error('');
    setInput8Error('');
    toggleBackrestsDropdown();
  };
  
 

  
  const togglePanniersDropdown = () => {
    setShowPanniersDropdown(!showPanniersDropdown);
  };

  const selectPanniersValue = (Id) => {
    if (!input11 || !input12) {
      setInput11Error('This field is required');
      setInput12Error('This field is required');
      return;
    }
    const panniersData = {
      panniers: [
        {
          pannierstext: input11,
          panniersvalue: input12,
        },
      ],
    };
  
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/pan?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(panniersData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput11('');
        setInput12('');
        // Note: There's no direct equivalent to "location.reload()" in React Native
      })
      .catch((error) => {
        console.error(error);
      });
  
    setInput11Error('');
    setInput12Error('');
    togglePanniersDropdown();
  };
  

  const toggleFootpegsDropdown = () => {
    setShowFootpegsDropdown(!showFootpegsDropdown);
  };

  const selectFootpegsValue = (Id) => {
    if (!input13 || !input14) {
      setInput13Error('This field is required');
      setInput14Error('This field is required');
      return;
    }
    const footPegsData = {
      footpegs: [
        {
          footpegstext: input13,
          footpegsvalue: input14,
        },
      ],
    };
  
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/foot?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(footPegsData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setInput13('');
        setInput14('');
        // Note: There's no direct equivalent to "location.reload()" in React Native
      })
      .catch((error) => {
        console.error(error);
      });
   
    setInput13Error('');
    setInput14Error('');
    toggleFootpegsDropdown();
  };
  
  const toggleEngineGuardsDropdown = () => {
    setShowEngineGuardsDropdown(!showEngineGuardsDropdown);
  };
  const selectEngineGuardsValue = (Id) => {
   if (!enginegaurdstext || !enginegaurdsvalue) {
      setInput15Error('This field is required');
      setInput16Error('This field is required');
      return;
   




    }
    
    const enginedata = {
      enginegaurds:[{
        enginegaurdstext: enginegaurdstext,
       enginegaurdsvalue: enginegaurdsvalue,
    }]
    };
 
    fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/engine?_id=${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enginedata),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Handle the response and any necessary actions here
      })
      .catch((error) => {
        console.error(error);
      });
  
  
    setInput15('');
    setInput16('');
    setInput15Error('');
    setInput16Error('');
    toggleEngineGuardsDropdown();
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
const selectSumpGuardsValue = (Id) => {
  if (!input17 || !input18) {
    setInput17Error('This field is required');
    setInput18Error('This field is required');
    return;
  }
  const sumpgaurdsdata = {
    sumpgaurds: [
      {
        sumpgaurdstext:input17,
        sumpgaurdsvalue: input18,
      },
    ],
  };

  fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/sump?_id=${Id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sumpgaurdsdata),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput17('');
      setInput18('');
     
    })
    .catch((error) => {
      console.error(error);
    });

  
  setInput17Error(''); // Clear error when value is selected
  setInput18Error(''); // Clear error when value is selected
  toggleSumpGuardsDropdown();
};



const toggleHeadlightDropdown = () => {
  setShowHeadlightDropdown(!showHeadlightDropdown);
};

const selectHeadlightValue = (Id) => {
  if (!input23 || !input24) {
    setInput23Error('This field is required');
    setInput24Error('This field is required');
    return;
  }
  const headlightsData = {
    headlight: [
      {
        headlighttext: input23,
        headlightvalue: input24,
      },
    ],
  };

  fetch(`https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/headlight?_id=${Id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(headlightsData),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setInput23('');
      setInput24('');
    })
    .catch((error) => {
      console.error(error);
    });
  
  setInput23Error('');
  setInput24Error('');
  toggleHeadlightDropdown();
};


const removeQuotes = (str) => {
  return str.replace(/["']/g, '');
};

useEffect(() => {
  // Retrieve 'homedata' from AsyncStorage
  AsyncStorage.getItem('ACC')
    .then((id) => {
      if (id !== null) {
        const formattedId = removeQuotes(id);
        fetchBikeDetails(formattedId);
      }
    })
    .catch((error) => {
      console.error('Error retrieving homedata from AsyncStorage:', error);
    });
}, []);

const fetchBikeDetails = async (id) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/getbike/${id}`;

  try {
    const response = await axios.get(url);
    const bike = response.data;
    setDataArray([]);
    setDataArray((prevDataArray) => [...prevDataArray, bike]);
    // await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
    console.log('Bike data stored successfully',bike);
  } catch (error) {
    console.error('Error fetching bike details:', error);
  }
};















const navigateToInventory = () => {
  navigation.navigate('Inventory');
};


const handleRemovesafty = (objId, safetyAccessoryId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/acc/${objId}/${safetyAccessoryId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted safety accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting safety accessory:', error);
      // Handle error
    });
};

const deleteSeats = (objId, seatId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/seats/${objId}/${seatId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted seat:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting seat:', error);
      // Handle error
    });
};

const deleteWindshield = (objId, windshieldId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/wind/${objId}/${windshieldId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted windshield:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting windshield:', error);
      // Handle error
    });
};

const deleteBackrest = (objId, backrestId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/back/${objId}/${backrestId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted backrest:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting backrest:', error);
      // Handle error
    });
};

const deleteEngine = (objId, engineId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/engine/${objId}/${engineId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted engine:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting engine:', error);
      // Handle error
    });
};
const deletesumpguard = (objId, sumpId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/sump/${objId}/${sumpId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted sump guard:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting sump guard:', error);
      // Handle error
    });
};

const deletefoot = (objId, footpegId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/foot/${objId}/${footpegId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted footpeg accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting footpeg accessory:', error);
      // Handle error
    });
};


const deletepanniers = (objId, panId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/pan/${objId}/${panId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted footpeg accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting footpeg accessory:', error);
      // Handle error
    });
};

const deleteMirrors = (objId, mirrorId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/mirrors/${objId}/${mirrorId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted mirrors accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting mirrors accessory:', error);
      // Handle error
    });
};

const deleteoilfiller = (objId, oilId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/oil/${objId}/${oilId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted mirrors accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting mirrors accessory:', error);
      // Handle error
    });
};

const deletheadlight = (objId, headId) => {
  const url = `https://dull-plum-woodpecker-veil.cyclic.cloud/formdetails/headlight/${objId}/${headId}`;

  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Deleted mirrors accessory:', data);
      // Perform any desired actions after successful deletion
      // For example, update your app's state or UI accordingly
    })
    .catch((error) => {
      console.error('Error deleting mirrors accessory:', error);
      // Handle error
    });
};



  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
        <ScrollView>
        {dataArray.map((data, index) => (
      <View key={index} style={styles.container}>
        <Text style={styles.title}>Vehicle Accessories</Text>
        <TouchableOpacity onPress={navigateToInventory} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Vehicle</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>{data.vehiclename}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Model</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{data.model}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>EngineCC</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{data.EngineCC}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Color</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>{data.vehiclecolor}</Text>
        </View>
  

        <Text style={styles.accessoriesText}>Available Accessories</Text>

       {/* Add tabs for Style, Comfort, and Protection */}
       <View style={styles.accessoriesText}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? 'rgba(249, 249, 249, 0.5)' : 'transparent' }} onPress={() => setSelectedTab('Style')}>
      Style
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? 'rgba(249, 249, 249, 0.5)' : 'transparent'  }} onPress={() => setSelectedTab('Comfort')}>
      Comfort
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ?'rgba(249, 249, 249, 0.5)' : 'transparent'  }} onPress={() => setSelectedTab('Protection')}>
      Protection
    </Text>
  </View>
</View>
       

       <View>
        {/* Show dropdowns based on the selected tab */}
        {selectedTab === 'Style' && (
          // Add your dropdown components for Style here
          <>
           
           
    {/* Mirrors Dropdown */}
    <TouchableOpacity onPress={toggleMirrorsDropdown}>
  <View style={styles.dropdown}>
    <Text style={styles.dropdownText}>
      {showMirrorsDropdown ? 'Close Mirrors' : 'Open Mirrors'}
    </Text>
  </View>
</TouchableOpacity>
{showMirrorsDropdown && (
  <View style={styles.dropdown}>
    <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
    <TextInput
      style={styles.inputField}
      placeholder="Enter Mirrors Text"
      value={input19}
      onChangeText={(text) => setInput19(text)}
    />
    
    <TextInput
      style={styles.inputField2}
      placeholder="Enter Mirrors Value"
      value={input20}
      onChangeText={(text) => setInput20(text)}
    />
    <TouchableOpacity style={styles.selectButton} onPress={()=>selectMirrorsValue(data._id)}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>


  </View>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
            {input19Error ? <Text style={styles.errorText}>{input19Error}</Text> : null}
            {input20Error ? <Text style={styles.errorText}>{input20Error}</Text> : null}

          </View>
          <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.mirrors.map((mirror, mirrorIndex) => (
    <View key={mirrorIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteMirrors(data._id,mirror._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{mirror.mirrorstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{mirror.mirrorsvalue}</Text>
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
      {showOilFillerCapDropdown ? 'Close Oil Filler Cap' : 'Open Oil Filler Cap'}
    </Text>
  </View>
</TouchableOpacity>
{showOilFillerCapDropdown && (
  <View style={styles.dropdown}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
    <TextInput
      style={styles.inputField}
      placeholder="Enter Oil Filler Cap Text"
      value={input21}
      onChangeText={(text) => setInput21(text)}
    />
    <TextInput
      style={styles.inputField2}
      placeholder="Enter Oil Filler Cap Value"
      value={input22}
      onChangeText={(text) => setInput22(text)}
    />
    <TouchableOpacity style={styles.selectButton} onPress={()=>selectOilFillerCapValue(data._id)}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
  </View>
  <View>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
           {input21Error ? <Text style={styles.errorText}>{input21Error}</Text> : null}       
           {input22Error ? <Text style={styles.errorText}>{input22Error}</Text> : null}

          </View>
  </View>
  <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.oilfillercap.map((oil, oilIndex) => (
    <View key={oilIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteoilfiller(data._id,oil._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{oil.oilfillercaptext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{oil.oilfillercapvalue}</Text>
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
      {showHeadlightDropdown ? 'Close Headlight' : 'Open Headlight'}
    </Text>
  </View>
</TouchableOpacity>
{showHeadlightDropdown && (
  <View style={styles.dropdown} >
  <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    <TextInput
      style={styles.inputField}
      placeholder="Enter Headlight Text"
      value={input23}
      onChangeText={(text) => setInput23(text)}
    />
    <TextInput
      style={styles.inputField2}
      placeholder="Enter Headlight Value"
      value={input24}
      onChangeText={(text) => setInput24(text)}
    />
    <TouchableOpacity style={styles.selectButton} onPress={()=>selectHeadlightValue(data._id)}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
  </View>
  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
    {input23Error ? <Text style={styles.errorText}>{input23Error}</Text> : null}
    {input24Error ? <Text style={styles.errorText}>{input24Error}</Text> : null}
  </View>
  <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.headlight.map((head, headIndex) => (
    <View key={headIndex}>
      <View>
      <TouchableOpacity onPress={() => deletheadlight(data._id,head._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{head.headlighttext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{head.headlightvalue}</Text>
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

{selectedTab === 'Comfort' && (
          // Add your dropdown components for Comfort here
          <>
           {/* Windshield Dropdown */}
        <TouchableOpacity onPress={toggleWindshieldDropdown}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {showWindshieldDropdown ? 'Close Windshield' : 'Open Windshield'}
            </Text>
          </View>
        </TouchableOpacity>
        {showWindshieldDropdown && (
          <View style={styles.dropdown}>
          <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
            <TextInput
              style={styles.inputField}
              placeholder="Enter Windshield Text"
              value={input3}
              onChangeText={(text) => setInput3(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Windshield Value"
              value={input4}
              onChangeText={(text) => setInput4(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectWindshieldValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input3Error ? <Text style={styles.errorText}>{input3Error}</Text> : null}
  {input4Error ? <Text style={styles.errorText}>{input4Error}</Text> : null}
</View>

<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.windshields.map((wind, windIndex) => (
    <View key={windIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteWindshield(data._id,wind._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{wind.windshieldstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{wind.windshieldsvalue}</Text>
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
              {showSeatsDropdown ? 'Close Seats' : 'Open Seats'}
            </Text>
          </View>
        </TouchableOpacity>
        {showSeatsDropdown && (
          <View style={styles.dropdown}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Seats Text"
              value={input5}
              onChangeText={(text) => setInput5(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Seats Value"
              value={input6}
              onChangeText={(text) => setInput6(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectSeatsValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input5Error ? <Text style={styles.errorText}>{input5Error}</Text> : null}
  {input6Error ? <Text style={styles.errorText}>{input6Error}</Text> : null}
</View>
<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.seats.map((seat, seatIndex) => (
    <View key={seatIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteSeats(data._id,seat._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{seat.seatstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{seat.seatsvalue}</Text>
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
              {showBackrestsDropdown ? 'Close Backrests' : 'Open Backrests'}
            </Text>
          </View>
        </TouchableOpacity>
        {showBackrestsDropdown && (
          <View style={styles.dropdown}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Backrests Text"
              value={input7}
              onChangeText={(text) => setInput7(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Backrests Value"
              value={input8}
              onChangeText={(text) => setInput8(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectBackrestsValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input7Error ? <Text style={styles.errorText}>{input7Error}</Text> : null}
  {input8Error ? <Text style={styles.errorText}>{input8Error}</Text> : null}
</View>
<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.backrests.map((back, backIndex) => (
    <View key={backIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteBackrest(data._id,back._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{back.backreststext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{back.backrestsvalue}</Text>
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
              {showPanniersDropdown ? 'Close Panniers' : 'Open Panniers'}
            </Text>
          </View>
        </TouchableOpacity>
        {showPanniersDropdown && (
          <View style={styles.dropdown}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}} >
            <TextInput
              style={styles.inputField}
              placeholder="Enter Panniers Text"
              value={input11}
              onChangeText={(text) => setInput11(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Panniers Value"
              value={input12}
              onChangeText={(text) => setInput12(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectPanniersValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input11Error ? <Text style={styles.errorText}>{input11Error}</Text> : null}
  {input12Error ? <Text style={styles.errorText}>{input12Error}</Text> : null}
</View>
<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.panniers.map((pan, panIndex) => (
    <View key={panIndex}>
      <View>
      <TouchableOpacity onPress={() => deletepanniers(data._id,pan._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{pan.pannierstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{pan.panniersvalue}</Text>
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
              {showFootpegsDropdown ? 'Close Footpegs' : 'Open Footpegs'}
            </Text>
          </View>
        </TouchableOpacity>
        {showFootpegsDropdown && (
          <View style={styles.dropdown}>
          <View  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}} >
            <TextInput
              style={styles.inputField}
              placeholder="Enter Footpegs Text"
              value={input13}
              onChangeText={(text) => setInput13(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Footpegs Value"
              value={input14}
              onChangeText={(text) => setInput14(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={()=>selectFootpegsValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input13Error ? <Text style={styles.errorText}>{input13Error}</Text> : null}
  {input14Error ? <Text style={styles.errorText}>{input14Error}</Text> : null}
</View>
<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.footpegs.map((foot, footIndex) => (
    <View key={footIndex}>
      <View>
      <TouchableOpacity onPress={() => deletefoot(data._id,foot._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{foot.footpegstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{foot.footpegsvalue}</Text>
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
              {showEngineGuardsDropdown ? 'Close Engine Guards' : 'Open Engine Guards'}
            </Text>
          </View >
        </TouchableOpacity>
        {showEngineGuardsDropdown && (
          <View style={styles.dropdown}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine Guards Text"
              value={enginegaurdstext}
              onChangeText={(text) => setInput15(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Engine Guards Value"
              value={enginegaurdsvalue}
              onChangeText={(text) => setInput16(text)}
            />
            <TouchableOpacity style={styles.selectButton}  onPress={() => selectEngineGuardsValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  {input15Error ? <Text style={styles.errorText}>{input15Error}</Text> : null}
  {input16Error ? <Text style={styles.errorText}>{input16Error}</Text> : null}
</View>

<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.enginegaurds.map((engine, engineIndex) => (
    <View key={engineIndex}>
      <View>
      <TouchableOpacity onPress={() => deleteEngine(data._id,engine._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{engine.enginegaurdstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{engine.enginegaurdsvalue}</Text>
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
              {showSumpGuardsDropdown ? 'Close Sump Guards' : 'Open Sump Guards'}
            </Text>
          </View>
        </TouchableOpacity>
        {showSumpGuardsDropdown && (
          <View  style={styles.dropdown}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Sump Guards Text"
              value={input17}
              onChangeText={(text) => setInput17(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Sump Guards Value"
              value={input18}
              onChangeText={(text) => setInput18(text)}
            />
            <TouchableOpacity style={styles.selectButton}  onPress={()=>selectSumpGuardsValue(data._id)}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {input17Error ? <Text style={styles.errorText}>{input17Error}</Text> : null}
                {input18Error ? <Text style={styles.errorText}>{input18Error}</Text> : null}
              </View>

              <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.sumpgaurds.map((sump, sumpIndex) => (
    <View key={sumpIndex}>
      <View>
      <TouchableOpacity onPress={() => deletesumpguard(data._id,sump._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{sump.sumpgaurdstext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{sump.sumpgaurdsvalue}</Text>
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
      {showSafetyAccessoriesDropdown ? 'Close Safety Accessories' : 'Open Safety Accessories'}
    </Text>
  </View>
</TouchableOpacity>
{showSafetyAccessoriesDropdown && (
  <View style={styles.dropdown}>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter Safety Accessories Text"
        value={input1}
        onChangeText={(text) => {
          setInput1(text);
          setInput1Error(''); // Clear the error message when text changes
        }}
      />
    </View>
    <View>
   
    </View>
   
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField2}
        placeholder="Enter Safety Accessories Value"
        value={input2}
        onChangeText={(text) => {
          setInput2(text);
          setInput2Error(''); // Clear the error message when text changes
        }}
      />
    </View>
 

    <TouchableOpacity style={styles.selectButton} onPress={()=>selectSafetyAccessoriesValue(data._id)}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
  </View>
  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {input1Error ? <Text style={styles.errorText}>{input1Error}</Text> : null}
                {input2Error ? <Text style={styles.errorText}>{input2Error}</Text> : null}
              </View>
              <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
  {data.safetyaccessories.map((safty, saftyIndex) => (
    <View key={saftyIndex}>
      <View>
      <TouchableOpacity onPress={() => handleRemovesafty(data._id,safty._id)}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'right', width: 150 }}>X</Text>
        </TouchableOpacity>
        <View style={{ borderWidth: 1, borderColor: 'white', height: 50, width: 150, color: 'white', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{safty.safetyaccessoriestext}</Text>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{safty.safetyaccessoriesvalue}</Text>
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
       ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 170,
    height:45,
    borderWidth:1,
    borderColor:'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  accessoriesText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 30,
  },
  dropdownText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
  },
  dropdown: {
    backgroundColor: 'rgba(249, 249, 249, 0.1)',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
   
  },
  inputField: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  inputField2: {
    height: 40,
    width: 100,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  selectButton: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 500,
    width: 44,
    padding: 0,
    height: 43,
    alignItems: 'center',
  },
  selectButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },

  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 17,
    marginTop: 4,
    marginLeft:0
  },
});

export default Accessories;



