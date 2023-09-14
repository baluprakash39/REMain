
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet,Button,ScrollView  } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

const Care = () => {
    const [basic, setValue] = useState('');
    const [Nilldip, setnilldip] = useState('');
    const [EP, setEP] = useState('');
    const [RTI, setRTI] = useState('');
    const [YES,setYES]=useState('');
    const [NO,setNO]=useState('');
    const [four,setfour]=useState('');
    const [five,setfive]=useState('');
    const[fiveRsa,setRsa]=useState('')
  return (
   
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container} contentContainerStyle={{ minHeight: 1000 }}>
      <View style={[styles.container, { height: 1000 }]}>
        {/* Your content here */}
        <Text style={styles.title}>Vehicle Care</Text>
      
        <View style={styles.line}></View>
        <View style={{ flexDirection: 'row', marginLeft: 30,marginTop:20 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Vehicle</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 25,fontWeight:700}}>Scooty</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Model</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>125</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>EngineCC</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>250cc</Text>
</View>
<View style={{ flexDirection: 'row', marginLeft: 30 }}>
  <Text style={{ color: 'white', fontSize: 20, width: 150 }}>Color</Text>
  <Text style={{ color: 'white', fontSize: 20, width: 50, textAlign: 'center' }}>:</Text>
  <Text style={{ color: 'white', fontSize: 20 }}>Red</Text>
</View>
<Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Insurance
</Text>


<View style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Basic</Text>
            
            <TextInput
              style={styles.inputField}
              placeholder="Enter Basic insurence value"
              placeholderTextColor="gray"
              value={basic}
              onChangeText={(text) => setValue(text)}
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Nildip</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Nilldip value"
              placeholderTextColor="gray"
              value={Nilldip}
              onChangeText={(text) =>setnilldip(text)}
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>EP</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter EP value"
              placeholderTextColor="gray"
              value={EP}
              onChangeText={(text) =>setEP(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>RTI</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter RTI value"
              placeholderTextColor="gray"
              value={RTI}
              onChangeText={(text) =>setRTI(text)}
            />
          </View>


        </View>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Hypothication
</Text>


<View style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>Yes</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter Yes value"
              placeholderTextColor="gray"
              value={YES}
              onChangeText={(text) => setYES(text)}
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>No</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter No value"
              placeholderTextColor="gray"
              value={NO}
              onChangeText={(text) =>setNO(text)}
            />
          </View>
          
         

          

       
        </View>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', marginLeft: 30, marginTop: 30 }}>
  Extended Warrenty
</Text>


<View style={{ flexDirection: 'column', marginTop: 20 }}>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>4Years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 4Years value"
              placeholderTextColor="gray"
              value={four}
              onChangeText={(text) => setfour(text)}
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>5years</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 5years value"
              placeholderTextColor="gray"
              value={five}
              onChangeText={(text) =>setfive(text)}
            />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,width:500,marginLeft: 30 }}>
            <Text style={{ width: 120, marginRight: 10, color: 'white' }}>5yeasr+Rsa</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter 5years+Rsa value"
              placeholderTextColor="gray"
              value={fiveRsa}
              onChangeText={(text) =>setRsa(text)}
            />
          </View>

        


        </View>

      
        
      </View>

      <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Add your logic to add the vehicle here
            }}
          >
            <Text style={styles.buttonText}>Edit/AddDetails</Text>
          </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
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
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        marginBottom:100
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
      },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    padding: 16,
    height:1
   
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
  
  
  
});

export default Care;
