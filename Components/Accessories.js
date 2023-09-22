

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import SharePdf from './SharePdf'; 
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation(); // Initialize navigation

  const navigateToSharePdf = (formData) => {
    navigation.navigate('SharePdfScreen', { formData }); // Navigate to SharePdf and pass formData
  }
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
  const [input15, setInput15] = useState('');
  const [input16, setInput16] = useState('');

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

  const toggleSafetyAccessoriesDropdown = () => {
    setShowSafetyAccessoriesDropdown(!showSafetyAccessoriesDropdown);
  };

  const selectSafetyAccessoriesValue = () => {
    const selectedValue = `${input1} - ${input2}`;
    console.log('Selected Safety Accessories Value:', selectedValue);
    setInput1('');
    setInput2('');
    toggleSafetyAccessoriesDropdown();
  };

  const toggleWindshieldDropdown = () => {
    setShowWindshieldDropdown(!showWindshieldDropdown);
  };

  const selectWindshieldValue = () => {
    const selectedValue = `${input3} - ${input4}`;
    console.log('Selected Windshield Value:', selectedValue);
    setInput3('');
    setInput4('');
    toggleWindshieldDropdown();
  };

  const toggleSeatsDropdown = () => {
    setShowSeatsDropdown(!showSeatsDropdown);
  };

  const selectSeatsValue = () => {
    const selectedValue = `${input5} - ${input6}`;
    console.log('Selected Seats Value:', selectedValue);
    setInput5('');
    setInput6('');
    toggleSeatsDropdown();
  };

  const toggleBackrestsDropdown = () => {
    setShowBackrestsDropdown(!showBackrestsDropdown);
  };

  const selectBackrestsValue = () => {
    const selectedValue = `${input7} - ${input8}`;
    console.log('Selected Backrests Value:', selectedValue);
    setInput7('');
    setInput8('');
    toggleBackrestsDropdown();
  };

  const toggleStorageAccessoriesDropdown = () => {
    setShowStorageAccessoriesDropdown(!showStorageAccessoriesDropdown);
  };

  const selectStorageAccessoriesValue = () => {
    const selectedValue = `${input9} - ${input10}`;
    console.log('Selected Storage Accessories Value:', selectedValue);
    setInput9('');
    setInput10('');
    toggleStorageAccessoriesDropdown();
  };

  // Additional Dropdown Functions
  const togglePanniersDropdown = () => {
    setShowPanniersDropdown(!showPanniersDropdown);
  };

  const selectPanniersValue = () => {
    const selectedValue = `${input11} - ${input12}`;
    console.log('Selected Panniers Value:', selectedValue);
    setInput11('');
    setInput12('');
    togglePanniersDropdown();
  };

  const toggleFootpegsDropdown = () => {
    setShowFootpegsDropdown(!showFootpegsDropdown);
  };

  const selectFootpegsValue = () => {
    const selectedValue = `${input13} - ${input14}`;
    console.log('Selected Footpegs Value:', selectedValue);
    setInput13('');
    setInput14('');
    toggleFootpegsDropdown();
  };

  const toggleEngineGuardsDropdown = () => {
    setShowEngineGuardsDropdown(!showEngineGuardsDropdown);
  };

  const selectEngineGuardsValue = () => {
    const selectedValue = `${input15} - ${input16}`;
    console.log('Selected Engine Guards Value:', selectedValue);
    setInput15('');
    setInput16('');
    toggleEngineGuardsDropdown();
  };

  const toggleSumpGuardsDropdown = () => {
    setShowSumpGuardsDropdown(!showSumpGuardsDropdown);
  };

  const selectSumpGuardsValue = () => {
    const selectedValue = `${input17} - ${input18}`;
    console.log('Selected Sump Guards Value:', selectedValue);
    setInput17('');
    setInput18('');
    toggleSumpGuardsDropdown();
  };


  const toggleMirrorsDropdown = () => {
  setShowMirrorsDropdown(!showMirrorsDropdown);
};

const selectMirrorsValue = () => {
  const selectedValue = `${input19} - ${input20}`;
  console.log('Selected Mirrors Value:', selectedValue);
  setInput19('');
  setInput20('');
  toggleMirrorsDropdown();
};

// Oil Filler Cap Dropdown
const toggleOilFillerCapDropdown = () => {
  setShowOilFillerCapDropdown(!showOilFillerCapDropdown);
};

const selectOilFillerCapValue = () => {
  const selectedValue = `${input21} - ${input22}`;
  console.log('Selected Oil Filler Cap Value:', selectedValue);
  setInput21('');
  setInput22('');
  toggleOilFillerCapDropdown();
};

// Headlight Dropdown
const toggleHeadlightDropdown = () => {
  setShowHeadlightDropdown(!showHeadlightDropdown);
};

const selectHeadlightValue = () => {
  const selectedValue = `${input23} - ${input24}`;
  console.log('Selected Headlight Value:', selectedValue);
  setInput23('');
  setInput24('');
  toggleHeadlightDropdown();
};
  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Vehicle Accessories</Text>
        <View style={styles.line}></View>
        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Vehicle</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>Scooty</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Model</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>125</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>EngineCC</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>250cc</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
          <Text style={{ color: '#CBCBCA', fontSize: 20, width: 150 }}>Color</Text>
          <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>Red</Text>
        </View>
  

        <Text style={styles.accessoriesText}>Available Accessories</Text>

       {/* Add tabs for Style, Comfort, and Protection */}
       <View style={styles.accessoriesText}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Style' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Style')}>
      Style
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Comfort' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Comfort')}>
      Comfort
    </Text>
    <Text style={{ ...styles.tab, backgroundColor: selectedTab === 'Protection' ? 'white' : 'rgba(249, 249, 249, 0.5)' }} onPress={() => setSelectedTab('Protection')}>
      Protection
    </Text>
  </View>
</View>
       

       
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
    <TouchableOpacity style={styles.selectButton} onPress={selectMirrorsValue}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
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
    <TouchableOpacity style={styles.selectButton} onPress={selectOilFillerCapValue}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
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
  <View style={styles.dropdown}>
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
    <TouchableOpacity style={styles.selectButton} onPress={selectHeadlightValue}>
      <Text style={styles.selectButtonText}>+</Text>
    </TouchableOpacity>
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
              {showWindshieldDropdown ? 'Close Windshield' : 'Open Windshield'}
            </Text>
          </View>
        </TouchableOpacity>
        {showWindshieldDropdown && (
          <View style={styles.dropdown}>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectWindshieldValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectSeatsValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectBackrestsValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectPanniersValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectFootpegsValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          
        )}
      
    <TouchableOpacity onPress={() => navigateToSharePdf(formData)}>
      <Text>Go to SharePdf</Text>
    </TouchableOpacity>


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
          </View>
        </TouchableOpacity>
        {showEngineGuardsDropdown && (
          <View style={styles.dropdown}>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine Guards Text"
              value={input15}
              onChangeText={(text) => setInput15(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Engine Guards Value"
              value={input16}
              onChangeText={(text) => setInput16(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={selectEngineGuardsValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
          <View style={styles.dropdown}>
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
            <TouchableOpacity style={styles.selectButton} onPress={selectSumpGuardsValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
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
            <TextInput
              style={styles.inputField}
              placeholder="Enter Safety Accessories Text"
              value={input1}
              onChangeText={(text) => setInput1(text)}
            />
            <TextInput
              style={styles.inputField2}
              placeholder="Enter Safety Accessories Value"
              value={input2}
              onChangeText={(text) => setInput2(text)}
            />
            <TouchableOpacity style={styles.selectButton} onPress={selectSafetyAccessoriesValue}>
              <Text style={styles.selectButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
          </>
        )}
 


      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tab: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: 170,
    height:45
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
});

export default Accessories;



