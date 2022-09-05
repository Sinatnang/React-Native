import React, { Component } from 'react';
import { Alert, Button,View, StyleSheet,TextInput,TouchableOpacity,Text } from 'react-native';

export default class Registers extends Component {
constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword:'',
      validate:false
    };
  }
  validate = (text) => {
    console.log(text);
    let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!reg.test(text)) {
      console.log("Email is Not Correct");
    }
    else {
      this.setState({ email: text })
      console.log("Email is Correct");
    }
  }
  onRegister(){
    const {email,password,confirmPassword}=this.state;

        if ((this.state.email==='') && (this.state.password === '')) {
          Alert.alert('Email or Password is not empty');
        }
        else if(this.state.password != this.state.confirmPassword){
            Alert.alert('password is not march');
           }
        else{
          Alert.alert('YOUR Credential',`Your Email: ${email}\nYour Password is: ${password}`);
        }


  }
  render() {
    return (
      <View style={styles.registers}>
        <Text style={styles.header}>Registers</Text>
        <TextInput style={styles.input}
            onChangeText={(email)=>this.setState({email})}
            placeholder="Email" underlineColorAndroid={'transparent'}
            value={this.state.email}
        />
        <TextInput style={styles.input}
            value={this.state.password}
            onChangeText={(password)=>this.setState({password})}
            placeholder="Password" underlineColorAndroid={'transparent'}
        />
        <TextInput style={styles.input}
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword)=>this.setState({confirmPassword})}
            placeholder="Confirm password" secureTextEntry={true} underlineColorAndroid={'transparent'}
        />
        <Button
            onPress={this.onRegister.bind(this)}
            title="Sing Up"
            style={styles.button}
        />
      </View>
    );
  }

 }

const styles = StyleSheet.create({
  registers: {
    alignSelf:'stretch',
  },
  header:{
    fontSize:24,
    color:'#F8F9F9',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#900C3F',
    borderBottomWidth:1,
  },
  input:{
    alignSelf:'stretch',
    fontSize:16,
    height:40,
    color:'#F8F9F9',
    marginBottom:30,
    borderBottomColor:'#F8F9F9',
    borderBottomWidth:1,

  },
  button:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor:'#85C1E9',
    marginTop:30,
  },
  btntext:{
    color:'#F8F9F9',
    fontWeight:'bold',
  }

});

