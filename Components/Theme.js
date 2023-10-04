// Theme.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Theme = ({ isDarkTheme, toggleTheme, navigation }) => {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        isDarkTheme ? { backgroundColor: 'black' } : { backgroundColor: 'white' },
      ]}
    >
      <Text style={isDarkTheme ? { color: 'white' } : { color: 'black' }}>
        This is a demo of default dark/light theme using appearance.
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: 'blue', marginTop: 20 }}>
          Toggle Theme (Dark/Light)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Theme;

