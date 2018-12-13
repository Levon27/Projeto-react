import React, { Component } from 'react';
import { View, Text,TextInput,Button,Alert } from 'react-native';

import app from '@firebase/app';
import '@firebase/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username:'',password:''
    };

    const config = {
      apiKey: "AIzaSyAvWfxUhCZIeBh4B8A7pQt0hKQAuMzbEIk",
      authDomain: "projeto-react-f5b2c.firebaseapp.com",
      databaseURL: "https://projeto-react-f5b2c.firebaseio.com",
      projectId: "projeto-react-f5b2c",
      storageBucket: "projeto-react-f5b2c.appspot.com",
      messagingSenderId: "459346341374"
    };
    app.initializeApp(config);

  }
  
 
  logar(){
	  user = this.state.username;
    pass = this.state.password; 

    app.auth().signInWithEmailAndPassword(user,pass).then(response => {Alert.alert("dados corretos")}).catch(err => {Alert.alert("dados errados")})

    /*
    Autenticação antiga

    user_login = ''
    pass_login = ''

    if ((user == user_login) && (pass == pass_login)){
      //Alert.alert('AVISO!','Login e senha corretos')
      this.props.navigation.navigate('TelaLista')
    }
    else
      Alert.alert('AVISO!','Dados incorretos!')
    }
    */
  }

  render() {
    return (
      <View>
        <TextInput onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        placeholder="Login"
		    onChangeText={(username) => this.setState({username})}
		    style={Styles.estiloInput}/>
        <TextInput onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder="Senha"
        secureTextEntry={true}
		    onChangeText={(password) => this.setState({password})}
		    style={Styles.estiloInput}/>
		    <Button title="Entrar"
		    onPress={this.logar.bind(this)}> </Button>
      </View>
    );
  }
}

const Styles = {
  estiloInput:{
    fontSize: 24,
    backgroundColor:'#ddd'
  }
} 
