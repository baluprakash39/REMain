import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

const MyDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('default'); // Initialize with a default value

  // Define an array of options with labels and values, including the "Select" option
  const options = [
    { label: 'mirrors' },
    { label: 'Option 1', value: 'value1' },
    { label: 'Option 2', value: 'value2' },
    { label: 'Option 3', value: 'value3' },
  ];

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item
            key={index}
            label={index === 0 ? option.label : `${option.label} (${option.value})`} // Display both label and value for index 1 and onwards
            value={index === 0 ? 'default' : option.value} // Assign a default value for index 0 and actual values for index 1 and onwards
          />
        ))}
      </Picker>
    </View>
  );
};

export default MyDropdown;
