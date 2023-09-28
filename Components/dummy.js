import React, { useState, useEffect } from 'react';
import { View, Text, CheckBox } from 'react-native';
import axios from 'axios'; // Import the Axios library

const CheckboxExample = () => {
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch checkbox values from the database
    axios
      .get('https://your-api-endpoint.com/checkboxes')
      .then((response) => {
        // Assuming the response.data is an array of checkbox values like [{ label: 'Checkbox 1', value: true }, ...]
        setCheckboxes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching checkbox values:', error);
      });
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].value = !newCheckboxes[index].value;
    setCheckboxes(newCheckboxes);
  };

  return (
    <View>
      {checkboxes.map((checkbox, index) => (
        <View key={index}>
          <Text>{checkbox.label}</Text>
          <CheckBox
            value={checkbox.value}
            onValueChange={() => handleCheckboxChange(index)}
          />
        </View>
      ))}
    </View>
  );
};

export default CheckboxExample;