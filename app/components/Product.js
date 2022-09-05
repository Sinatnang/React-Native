import React, { Component } from 'react';
import { Alert, Button,Text, TextInput, View, StyleSheet } from 'react-native';
 export default class Product extends Component {
  render() {
  const Products=()=>{
              return{
               <ScrollView>
                  {products.map(product => {
                      console.log{'production ======>',product}
                      return{
                          <Product
                              key={product.id}
                              id={product.id}
                              title={product.title}
                              description={product.description}
                              image={product.thumbnail}
                           />
                      }
                  })}
               </ScrollView>
              }
            }
    return (
      <View style={styles.myStyle}>
        <TouchableWithoutFeedback onPress={()=>alert(this.props.id)}
            <Text style={styles.title}>{this.props.title}</Text>
        </TouchableWithoutFeedback>
        <Text>{this.props.description}</Text>
        <Image source={{uri:this.props.image}} style={styles.image}/>
      </View>
    );
  }

 }

const styles = StyleSheet.create({
  image: {
    height:100,
    width:'100%',
  },
  title:{
    fontSize:25,
  }
  myStyle:{
    margin:8,
  }

});
