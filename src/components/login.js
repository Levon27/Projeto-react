import React, { Component } from 'react';
import { View, Text,TextInput,Button,Alert } from 'react-native';
import 'firebase/auth';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username:'',password:''
    };
  }
  
  logar(){
	user = this.state.username
	pass = this.state.password

  


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
