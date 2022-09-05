import React, { Component } from 'react';
import { Alert, Button,Text, TextInput, View, StyleSheet,TouchableOpacity } from 'react-native';
import Registers from './app/components/Registers';
//import Product from './app/components/Product';
import {products} from './products.json';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Registers/>
      </View>
    );
  }

 }

const styles = StyleSheet.create({
  container: {
    flex:1,
     justifyContent:'center',
     backgroundColor:'#5D6D7E',
     paddingLeft:60,
     paddingRight:60,
  },

});
