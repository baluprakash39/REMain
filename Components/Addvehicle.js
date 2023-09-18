
// import React, { useState ,useEffect} from 'react';
// import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button} from 'react-native';

// import { Dropdown } from 'react-native-element-dropdown';

// const AddVehicle = () => {
//   const [sections, setSections] = useState([]);
//   const [value, setValue] = useState(null);
//   const [brandName, setBrandName] = useState('');
//   const [vehicleName, setVehicleName] = useState('');
//   const [modelName, setModelName] = useState('');
//   const [engineCC, setEngineCC] = useState('');
//   const [color, setColor] = useState('');
//   const [exShowroomPrice, setExShowroomPrice] = useState('');
//   const [roadTax, setRoadTax] = useState('');
//   const [registration, setRegistration] = useState('');




//   const [brandNameError, setBrandNameError] = useState('');
//   const [vehicleNameError, setVehicleNameError] = useState('');
//   const [modelNameError, setModelNameError] = useState('');
//   const [engineCCError, setEngineCCError] = useState('');
//   const [colorError, setColorError] = useState('');
//   const [exShowroomPriceError, setExShowroomPriceError] = useState('');
//   const [roadTaxError, setRoadTaxError] = useState('');
//   const [registrationError, setRegistrationError] = useState('');
//   const [sectionError, setSectionError] = useState('');
//   console.log(brandName)
//   useEffect(() => {
//     // Fetch sections when the component mounts
//     fetchSections();
//   }, []);

//   const fetchSections = async () => {
//     try {
//       const response = await fetch('https://shy-tan-tam.cyclic.cloud/bikes/bikes');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       if (data && data.sections && data.sections.length > 0) {
//         // Update the sections state with the fetched data
//         setSections(data.sections);
//         console.log('Sections Data:', data.sections);
//       }
//     } catch (error) {
//       console.error('Error fetching sections:', error);
//     }
//   };


//   const addVehicle = () => {
//     // Reset error messages
//     setBrandNameError('');
//     setVehicleNameError('');
//     setModelNameError('');
//     setEngineCCError('');
//     setColorError('');
//     setExShowroomPriceError('');
//     setRoadTaxError('');
//     setRegistrationError('');
//     setSectionError('');
//     // Check for errors
//     let hasErrors = false;
  
//     if (!value) {
//       // Handle section not selected
//       // You can set an error message or handle it as needed
//       hasErrors = true;
//     }
  
//     if (!vehicleName) {
//       setVehicleNameError('Vehicle Name is required');
//       hasErrors = true;
//     }
//     if (!modelName) {
//       setModelNameError('Model Name is required');
//       hasErrors = true;
//     }
//     if (!engineCC) {
//       setEngineCCError('Engine CC is required');
//       hasErrors = true;
//     }
//     if (!color) {
//       setColorError('Color is required');
//       hasErrors = true;
//     }
//     if (!exShowroomPrice) {
//       setExShowroomPriceError('ExShowroom Price is required');
//       hasErrors = true;
//     }
//     if (!roadTax) {
//       setRoadTaxError('Road Tax is required');
//       hasErrors = true;
//     }
//     if (!registration) {
//       setRegistrationError('Registration is required');
//       hasErrors = true;
//     }
    
//     if (!value) {
//       setSectionError('Section is required'); // Set an error message for the dropdown
//       hasErrors = true;
//     }
  
//     if (!hasErrors) {
//       // All required fields are filled, so you can send the POST request here
  
//       const url = 'https://shy-tan-tam.cyclic.cloud/formdetails/uploadbikes';
  
//       const userData = {
//         vehiclename: vehicleName,
//         model: modelName,
//         EngineCC: engineCC,
//         vehiclecolor: color,
//         exShowroomPrice: exShowroomPrice,
//         registration: registration,
//         roadtax: roadTax,
//         section: value,
//       };
  
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           // Clear the input fields by updating state variables
//           setVehicleName('');
//           setModelName('');
//           setEngineCC('');
//           setColor('');
//           setExShowroomPrice('');
//           setRoadTax('');
//           setRegistration('');
//           setSectionError('');
//           setValue(null);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//           // Handle the error here
//         });
//     }
//   };
  


    
//   return (
//     <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         {/* Your content here */}
//         <Text style={styles.title}>Add Vehicle</Text>

//         <View style={styles.line}></View>
//         <View style={{ flexDirection: 'column', marginTop: 20 }}>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Select Section</Text>
//             <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5 }}>
//               <Dropdown
//                 style={styles.dropdown}
//                 placeholderStyle={styles.placeholderStyle}
//                 selectedTextStyle={styles.selectedTextStyle}
//                 inputSearchStyle={styles.inputSearchStyle}
//                 data={sections.map(section => ({ label: section.Sectionname, value: section.Sectionname }))}
//                 search
//                 maxHeight={300}
//                 labelField="label"
//                 valueField="value"
//                 placeholder="Select Section"
//                 searchPlaceholder="Search..."
//                 value={value}
//                 onChange={(item) => {
//                   setValue(item.value);
//                 }}
//               />
//             </View>
           
//           </View>
//           <Text style={styles.errorText}>{sectionError}</Text>
//            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Brand Name</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Brand Name"
//               placeholderTextColor="gray"
//               value={brandName}
//               onChangeText={(text) => setBrandName(text)}
//             />
             
//           </View>
//           <Text style={styles.errorText}>{brandNameError}</Text> */}


// <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//   <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Vehicle Name</Text>
//   <TextInput
//     style={styles.inputField}
//     placeholder="Enter Vehicle Name"
//     placeholderTextColor="gray"
//     value={vehicleName}
//     onChangeText={(text) => {
//       setVehicleName(text); // Update the state with the input value
//       setVehicleNameError(''); // Clear the error message
//     }}
//   />
// </View>
// <Text style={styles.errorText}>{vehicleNameError}</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Model Name</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Model Name"
//               placeholderTextColor="gray"
//               value={modelName}
//               onChangeText={(text) => setModelName(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{modelNameError}</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Engine CC</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Engine CC"
//               placeholderTextColor="gray"
//               value={engineCC}
//               onChangeText={(text) => setEngineCC(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{engineCCError}</Text>

//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Color</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Color"
//               placeholderTextColor="gray"
//               value={color}
//               onChangeText={(text) => setColor(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{colorError}</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>ExShowroom Price</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter ExShowroom price"
//               placeholderTextColor="gray"
//               value={exShowroomPrice}
//               onChangeText={(text) => setExShowroomPrice(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{exShowroomPriceError}</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Road tax</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Roadtax"
//               placeholderTextColor="gray"
//               value={roadTax}
//               onChangeText={(text) => setRoadTax(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{registrationError}</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
//             <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Registartion(fixed)</Text>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Enter Registartion"
//               placeholderTextColor="gray"
//               value={registration}
//               onChangeText={(text) => setRegistration(text)}
//             />
//           </View>
//           <Text style={styles.errorText}>{registrationError}</Text>
//           <TouchableOpacity
//   style={styles.button}
//   onPress={addVehicle} // Add the addVehicle function to the onPress handler
// >
//   <Text style={styles.buttonText}>Add Vehicle</Text>
// </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({

//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 16,
//   },
//   line: {
//     height: 1,
//     backgroundColor: 'white',
//     width: '100%',
//   },
//   dropdown: {
//     height: 40,
//     width: '100%',
//     justifyContent: 'center', // Center the text vertically
//     paddingLeft: 10, // Add some padding to align text properly
//   },
//   inputField: {
//     flex: 1,
//     height: 40,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingLeft: 10,
//     color: 'black',

//   },
//   button: {
//     backgroundColor: 'rgba(249, 249, 249, 0.6)',
//     width: 200,
//     alignSelf: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 2,
//   },
//   buttonText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 5,
//     fontSize:15,
//    textAlign:'center'
//   },
// });

// export default AddVehicle;
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Button } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

const AddVehicle = () => {
  const [sections, setSections] = useState([]);
  const [value, setValue] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [vehicleName, setVehicleName] = useState('');
  const [modelName, setModelName] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [color, setColor] = useState('');
  const [exShowroomPrice, setExShowroomPrice] = useState('');
  const [roadTax, setRoadTax] = useState('');
  const [registration, setRegistration] = useState('');

  const [brandNameError, setBrandNameError] = useState('');
  const [vehicleNameError, setVehicleNameError] = useState('');
  const [modelNameError, setModelNameError] = useState('');
  const [engineCCError, setEngineCCError] = useState('');
  const [colorError, setColorError] = useState('');
  const [exShowroomPriceError, setExShowroomPriceError] = useState('');
  const [roadTaxError, setRoadTaxError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [sectionError, setSectionError] = useState('');

  useEffect(() => {
    // Fetch sections when the component mounts
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await fetch('https://shy-tan-tam.cyclic.cloud/bikes/bikes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data && data.sections && data.sections.length > 0) {
        // Update the sections state with the fetched data
        setSections(data.sections);
        console.log('Sections Data:', data.sections);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const addVehicle = () => {
    // Reset error messages
    setBrandNameError('');
    setVehicleNameError('');
    setModelNameError('');
    setEngineCCError('');
    setColorError('');
    setExShowroomPriceError('');
    setRoadTaxError('');
    setRegistrationError('');
    setSectionError('');

    // Check for errors
    let hasErrors = false;

    if (!value) {
      // Handle section not selected
      setSectionError('Section is required');
      hasErrors = true;
    }

    if (!vehicleName) {
      setVehicleNameError('Vehicle Name is required');
      hasErrors = true;
    }

    if (!modelName) {
      setModelNameError('Model Name is required');
      hasErrors = true;
    }

    if (!engineCC) {
      setEngineCCError('Engine CC is required');
      hasErrors = true;
    }

    if (!color) {
      setColorError('Color is required');
      hasErrors = true;
    }

    if (!exShowroomPrice) {
      setExShowroomPriceError('ExShowroom Price is required');
      hasErrors = true;
    }

    if (!roadTax) {
      setRoadTaxError('Road Tax is required');
      hasErrors = true;
    }

    if (!registration) {
      setRegistrationError('Registration is required');
      hasErrors = true;
    }

    if (!hasErrors) {
      // All required fields are filled, so you can send the POST request here
      const url = 'https://shy-tan-tam.cyclic.cloud/formdetails/uploadbikes';

      const userData = {
        vehiclename: vehicleName,
        model: modelName,
        EngineCC: engineCC,
        vehiclecolor: color,
        exShowroomPrice: exShowroomPrice,
        registration: registration,
        roadtax: roadTax,
        section: value,
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // Clear the input fields by updating state variables
          setVehicleName('');
          setModelName('');
          setEngineCC('');
          setColor('');
          setExShowroomPrice('');
          setRoadTax('');
          setRegistration('');
          setSectionError('');
          setValue(null);
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle the error here
        });
    }
  };

  return (
    <ImageBackground source={require('../assets/red.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Your content here */}
        <Text style={styles.title}>Add Vehicle</Text>

        <View style={styles.line}></View>
        <View style={{ flexDirection: 'column', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Select Section</Text>
            <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5 }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={sections.map((section) => ({ label: section.Sectionname, value: section.Sectionname }))}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Section"
                searchPlaceholder="Search..."
                value={value}
                onChange={(item) => {
                  setValue(item.value);
                  setSectionError(''); // Clear the error message
                }}
              />
            </View>
          </View>
          <Text style={styles.errorText}>{sectionError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Vehicle Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Vehicle Name"
              placeholderTextColor="gray"
              value={vehicleName}
              onChangeText={(text) => {
                setVehicleName(text);
                setVehicleNameError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{vehicleNameError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Model Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Model Name"
              placeholderTextColor="gray"
              value={modelName}
              onChangeText={(text) => {
                setModelName(text);
                setModelNameError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{modelNameError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Engine CC</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Engine CC"
              placeholderTextColor="gray"
              value={engineCC}
              onChangeText={(text) => {
                setEngineCC(text);
                setEngineCCError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{engineCCError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Color</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Color"
              placeholderTextColor="gray"
              value={color}
              onChangeText={(text) => {
                setColor(text);
                setColorError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{colorError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>ExShowroom Price</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter ExShowroom price"
              placeholderTextColor="gray"
              value={exShowroomPrice}
              onChangeText={(text) => {
                setExShowroomPrice(text);
                setExShowroomPriceError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{exShowroomPriceError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Road tax</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Roadtax"
              placeholderTextColor="gray"
              value={roadTax}
              onChangeText={(text) => {
                setRoadTax(text);
                setRoadTaxError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{roadTaxError}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Registartion(fixed)</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Registartion"
              placeholderTextColor="gray"
              value={registration}
              onChangeText={(text) => {
                setRegistration(text);
                setRegistrationError(''); // Clear the error message
              }}
            />
          </View>
          <Text style={styles.errorText}>{registrationError}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={addVehicle} // Add the addVehicle function to the onPress handler
          >
            <Text style={styles.buttonText}>Add Vehicle</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  dropdown: {
    height: 40,
    width: '100%',
    justifyContent: 'center', // Center the text vertically
    paddingLeft: 10, // Add some padding to align text properly
  },
  inputField: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'rgba(249, 249, 249, 0.6)',
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 2,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    fontSize: 15,
    textAlign: 'center',
    marginBottom:15
  },
});

export default AddVehicle;
