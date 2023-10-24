// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = {
  watchFolders: [
    // Add the path to your project's root directory here
    path.resolve(__dirname, 'C:\\Users\\91986\\Desktop\\RE\\royal-React-Native'),
  ],
  resolver: {
    extraNodeModules: {
      // Add any extra modules you need here
    },
    blockList: [
      // Rules to allow following symlinks
      /node_modules\/.*\/node_modules\/react-native\/.*/,
      /node_modules\/.*\/node_modules\/react\/.*/,
      /node_modules\/.*\/node_modules\/@react-native-community\/.*/,
      // Add more rules as needed
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname));


