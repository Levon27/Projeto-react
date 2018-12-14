import React, { Component } from 'react';
import { View, Modal,TextInput,Button,Alert } from 'react-native';

import app from '@firebase/app';
import '@firebase/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username:'',  password:'', 
    modalVisible:false, 
    newUser:'',
    newUserPass:'',
    retypedPass:''
    };

    const config = {
      apiKey: "AIzaSyAvWfxUhCZIeBh4B8A7pQt0hKQAuMzbEIk",
      authDomain: "projeto-react-f5b2c.firebaseapp.com",
      databaseURL: "https://projeto-react-f5b2c.firebaseio.com",
      projectId: "projeto-react-f5b2c",
      storageBucket: "projeto-react-f5b2c.appspot.com",
      messagingSenderId: "459346341374"
    };
    //criar classe depois com isso
    app.initializeApp(config);

    Alert.alert("Bem-vindo","Projeto criado com React-Native e autenticação feita via Firebase. \n Dica de usuário e senha: teste@teste.br - 123456")
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
   
    if ((newUserPass==retypedPass)){
      app.auth().createUserWithEmailAndPassword(newUser,newUserPass)
      .then(response=>{
        Alert.alert("Conta criada com sucesso");
        this.setState({modalVisible: false});})
      .catch(err => console.warn(err.message));
      
    }
    else
      console.warn("Senhas diferentes");
  }

  logar(){
	  user = this.state.username;
    pass = this.state.password; 

    app.auth().signInWithEmailAndPassword(user,pass)
    .then(response => {this.props.navigation.navigate('TelaLista')})
    .catch(err => {Alert.alert("Dados incorretos. Digite novamente.")})

  }

  render() {
    return (
      <View>
        <TextInput onChangeText={(username) => this.setState({username})}
        deafultValue={this.state.defaulEmail}
        placeholder="Login"
		    onChangeText={(username) => this.setState({username})}
		    style={styles.estiloInput}/>
        <TextInput onChangeText={(password) => this.setState({password})}
        placeholder="Senha"
        secureTextEntry={true}
		    onChangeText={(password) => this.setState({password})}
		    style={styles.estiloInput}/>
        <View style={styles.estiloBotao}>
          <Button title="Entrar"
          onPress={this.logar.bind(this)}> </Button>
        </View>
        <View style={styles.estiloBotao}>
          <Button title="Registrar"
          onPress={this.abrirRegistrar.bind(this)}> </Button>
        </View>

      <View style={styles.estilocontainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.voltar();
        }}>
          <View style={styles.estiloModal}>    
            <TextInput placeholder="E-mail" style={styles.estiloInput}
              onChangeText={(newUser) => this.setState({newUser})}/>
            <TextInput placeholder="Senha" style={styles.estiloInput}
              secureTextEntry={true}
              onChangeText={(newUserPass) => this.setState({newUserPass})}/>
            <TextInput placeholder="Redigite sua senha"
              secureTextEntry={true} style={styles.estiloInput}
              onChangeText={(retypedPass) => this.setState({retypedPass})}/>
            <Button title="Registrar conta" style={styles.estiloBotao}
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
    backgroundColor:'#ddd',
    margin:3
  },
  estilocontainer:{
    backgroundColor:"powderblue",
    alignItems: 'center'
  },estiloModal : {
    fill:1,
  },estiloBotao:{
    marginTop: 10
  }
} 
