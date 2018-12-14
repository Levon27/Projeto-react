import React, { Component } from 'react';
import { View, Modal,TextInput,Button,Alert } from 'react-native';

import app from '@firebase/app';
import '@firebase/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username:'', password:'', modalVisible:false, newUser:'',newUserPass:'',retypedPass:''

    };

    const config = {
      apiKey: "AIzaSyAvWfxUhCZIeBh4B8A7pQt0hKQAuMzbEIk",
      authDomain: "projeto-react-f5b2c.firebaseapp.com",
      databaseURL: "https://projeto-react-f5b2c.firebaseio.com",
      projectId: "projeto-react-f5b2c",
      storageBucket: "projeto-react-f5b2c.appspot.com",
      messagingSenderId: "459346341374"
    };
    //tirar isso daqui dps
    app.initializeApp(config);

  }
  
  abrirRegistrar(){
    this.setState({modalVisible: true}); //altera variavel modalVisible do state
  }

  voltar(){
    this.setState({modalVisible: false});
  }
 
  registrar(){
    newUser = this.state.newUser;
    newUserPass = this.state.newUserPass;
    retypedPass = this.state.retypedPass;
   
    if (newUserPass==retypedPass){
      app.auth().createUserWithEmailAndPassword(newUser,newUserPass)
      .then(response=>{Alert.alert("Conta criada com sucesso");})
      .catch(err => console.warn(err.message));
      this.setState({modalVisible: false});
    }
    else
      console.warn("Senhda diferentes");
  }

  logar(){
	  user = this.state.username;
    pass = this.state.password; 

    app.auth().signInWithEmailAndPassword(user,pass).then(response => {this.props.navigation.navigate('TelaLista')})
    .catch(err => {Alert.alert("Dados incorretos. Digite novamente.")})

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
		    style={styles.estiloInput}/>
        <TextInput onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder="Senha"
        secureTextEntry={true}
		    onChangeText={(password) => this.setState({password})}
		    style={styles.estiloInput}/>
		    <Button title="Entrar"
		    onPress={this.logar.bind(this)}> </Button>
        <Button title="Registrar"
		    onPress={this.abrirRegistrar.bind(this)}> </Button>
      

      <View style={styles.estilocontainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.voltar();
        }}>
          <View style={styles.estiloModal}>    
            <TextInput placeholder="E-mail"
              onChangeText={(newUser) => this.setState({newUser})}/>
            <TextInput placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(newUserPass) => this.setState({newUserPass})}/>
            <TextInput placeholder="Redigite sua senha"
              secureTextEntry={true}
              onChangeText={(retypedPass) => this.setState({retypedPass})}/>
            <Button title="Registrar conta"
              onPress={this.registrar.bind(this)}>
            </Button>
          </View> 
      </Modal>   
    </View>
    </View>
    );
  }
}

const styles = {
  estiloInput:{
    fontSize: 24,
    backgroundColor:'#ddd'
  },
  estilocontainer:{
    backgroundColor:"powderblue",
    alignItems: 'center'
  },estiloModal : {
    fill:1,
  },
} 
