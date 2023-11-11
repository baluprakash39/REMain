import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';



const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
       navigation.navigate('Getstarted')
        },2000)
      },[])


    return (
        <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animatable.Text style={{ color: 'white', fontWeight: 800, fontSize: 100 }}duration={2000}animation={'zoomInDown'}>Q|G</Animatable.Text>

        </View>

    )
}
export default Splash;

const styles = StyleSheet.create({})