import React, { Component } from 'react';
import { Alert, Button,Text, TextInput, View, StyleSheet,TouchableOpacity,ScrollView, FlatList } from 'react-native';
//import Registers from './app/components/Registers';
import Product from './app/components/Product';
import {products} from './products.json';
export default class App extends Component {
  render() {
      const Products = () => {
          return (
              // <ScrollView style={styles.scrollView}>
              //     {
              //     products.map(product => {
              //         console.log('Production=======>',products);
              //         return(
              //            <Product
              //                 key={product.id}
              //                 id={product.id}
              //                 title={product.title}
              //                 description={product.description}
              //                 image={product.thumbnail}
              //            />
              //         );
              //     })
              //     }
              // </ScrollView>
              <FlatList 
                data={products} 
                renderItem={prop =>{
                // console.log(prop.item.title)
                <Product 
                  key={prop.item.id} 
                  id={prop.item.id}
                  title={prop.item.title} 
                  description={prop.item.description}  
                  image={prop.item.thumbnail} />
              }}
              />
          );
       };
    return (
      <View style={styles.container}>
        <Products/>
      </View>
    );
  }

 }

const styles = StyleSheet.create({
  container: {
    flex:1,
//     justifyContent:'center',
//     backgroundColor:'#5D6D7E',
//     paddingLeft:60,
//     paddingRight:60,
  },

});
