import React, { Component } from 'react';
import { View, Text,FlatList,Button,Alert,Modal,TextInput,TouchableHighlight} from 'react-native';
import ItemLista from './item_lista';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {dados: [
      {key:"Nota 1"},
      {key:"Nota 2"}
    ],
    refresh : false,
    modalVisible: false,
    novaNota : ''
    };
  }

  abrirModal() {
    this.setState({modalVisible: true}); //altera variavel modalVisible do state
  }

  fecharModal(){
    this.setState({modalVisible: false}); //altera variavel modalVisible do state
  }
 

  adicionarNovo(){
    const { refresh, dados } = this.state; // recupera variáveis do estate
    this.setState({
      dados: [...dados, {key:this.state.novaNota}], //insere nova anotação nos dados
      refresh: !refresh //troca o valor da variável para atualziar o FlatList
    })
    this.fecharModal();
  }
  render() {
    
    return (
      <View>   
        <View>   
          <FlatList
          data= {this.state.dados}
          extraData = {this.state.refresh}
          renderItem={({item}) => <ItemLista texto={item.key}/>}
          />
          <Button title="Adicionar"
          style={styles.estiloBotao}
          onPress={this.abrirModal.bind(this)}>      
          </Button>
        </View>
      <View style={styles.estilocontainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
            <View style={styles.estiloModal}>    
              <TextInput placeholder="Nova anotação"
              style={styles.estiloInput}
              onChangeText={(novaNota) => this.setState({novaNota})}/>
              <Button title="Adicionar Novo"
                onPress={this.adicionarNovo.bind(this)} style={styles.estiloBotao}>
              </Button>
            </View> 
        </Modal>   
      </View>
    </View>
    );
  }
}

const styles = {
  estiloModal : {
    flex:1,
  },
  estilocontainer:{
    backgroundColor:"powderblue",
    alignItems: 'center'
  },estiloBotao:{
    margin: 3,
    position:"absolute",
    bottom: "3%"
  },
  estiloInput:{
    fontSize: 24,
    backgroundColor:'#ddd',
    margin:3
  },
}
