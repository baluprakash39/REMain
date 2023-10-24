// import React, { useState, useEffect } from 'react';
// import { View, Text, CheckBox } from 'react-native';
// import axios from 'axios'; // Import the Axios library

// const CheckboxExample = () => {
//   const [checkboxes, setCheckboxes] = useState([]);

//   useEffect(() => {
//     // Make an HTTP GET request to fetch checkbox values from the database
//     axios
//       .get('https://your-api-endpoint.com/checkboxes')
//       .then((response) => {
//         // Assuming the response.data is an array of checkbox values like [{ label: 'Checkbox 1', value: true }, ...]
//         setCheckboxes(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching checkbox values:', error);
//       });
//   }, []);

//   const handleCheckboxChange = (index) => {
//     const newCheckboxes = [...checkboxes];
//     newCheckboxes[index].value = !newCheckboxes[index].value;
//     setCheckboxes(newCheckboxes);
//   };

//   return (
//     <View>
//       {checkboxes.map((checkbox, index) => (
//         <View key={index}>
//           <Text>{checkbox.label}</Text>
//           <CheckBox
//             value={checkbox.value}
//             onValueChange={() => handleCheckboxChange(index)}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default CheckboxExample;
import React, { Component, useState, useEffect } from 'react';
import { View, Text, Modal, Button } from 'react-native';

const Dummy = () => {
  const sessionTimeoutInMinutes = 5; // Set the session timeout in minutes
  const countdownDurationInMilliseconds = sessionTimeoutInMinutes * 60 * 1000;
  const warningDurationInMilliseconds = 2 * 60 * 1000; // 2 minutes

  const [modalVisible, setModalVisible] = useState(false);
  const [countdown, setCountdown] = useState(countdownDurationInMilliseconds);

  useEffect(() => {
    let interval;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1000);

        if (countdown <= warningDurationInMilliseconds) {
          // Show the modal when the countdown reaches the warning duration
          setModalVisible(true);
        }
      }, 1000);
    } else {
      // Session has timed out - you can log out or perform other actions here
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <View>
      <Text>Session Timeout Countdown: {Math.ceil(countdown / 1000)} seconds</Text>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Warning: Your session will time out soon. Do you want to continue?</Text>
          <Button title="Yes, Continue" onPress={() => setModalVisible(false)} />
          <Button title="No, Log Out" onPress={() => console.log('Logged out')} />
        </View>
      </Modal>
    </View>
  );
};

export default Dummy;
