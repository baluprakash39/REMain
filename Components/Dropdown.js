// import React, { useState, } from 'react';
// import { Picker } from '@react-native-picker/picker';
// import { View } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState('default'); // Initialize with a default value

//   // Define an array of options with labels and values, including the "Select" option
//   const options = [

//     { label: 'Option 1', value: 'value1' },
//     { label: 'Option 2', value: 'value2' },
//     { label: 'Option 3', value: 'value3' },
//   ];

//   return (
//     <ScrollView>
//     <View>

//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue) => setSelectedValue(itemValue)}
//       >
//         {options.map((option, index) => (
//           <Picker.Item
//             key={index}
//             label={ `${option.label} (${option.value})`} // Display both label and value for index 1 and onwards
//             value={option.value} // Assign a default value for index 0 and actual values for index 1 and onwards
//           />
//         ))}
//       </Picker>
//     </View>
//     </ScrollView>
//   );
// };

// export default Dropdown;

import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Dropdown = () => {
  const [selectedMirrorstext, setSelectedMirrorstext] = useState(''); // Initialize with a default value
  const [selectedMirrorsvalue, setSelectedMirrorsvalue] = useState('');

  console.log('selectedMirrorstext', selectedMirrorstext);
  console.log('selectedMirrorsvalue', selectedMirrorsvalue);

  // Define the "mirrors" array
  const mirrors = [
    {
      mirrorstext: 'black bar',
      mirrorsvalue: '6000',
      _id: '64f55ed9f1f9ba6ea15d948c',
    },
    {
      mirrorstext: 'end mirrors',
      mirrorsvalue: '6400',
      _id: '64f5607e06166d115b87d567',
    },
    {
      mirrorstext: 'touring mirrors',
      mirrorsvalue: '6500',
      _id: '64f5607e06166d115b87d568',
    },
  ];

  return (
    <ScrollView>
      <View>
        <Picker
          selectedValue={selectedMirrorstext}
          onValueChange={(itemValue) => {
            const selectedMirror = mirrors.find(
              (mirror) => mirror.mirrorstext === itemValue
            );
            setSelectedMirrorstext(selectedMirror ? selectedMirror.mirrorstext : '');
            setSelectedMirrorsvalue(selectedMirror ? selectedMirror.mirrorsvalue : '');
          }}
        >
          <Picker.Item label="select Mirrors" value="" />
          {mirrors.map((mirror) => (
            <Picker.Item
              key={mirror._id}
              label={`${mirror.mirrorstext} (${mirror.mirrorsvalue})`}
              value={mirror.mirrorstext}
            />
          ))}
        </Picker>
      </View>
    </ScrollView>
  );
};

export default Dropdown;
