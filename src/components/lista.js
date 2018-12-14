import React, { Component } from 'react';
import { View, Text,FlatList,Button,Alert,Modal,TextInput,TouchableHighlight} from 'react-native';
import ItemLista from './item_lista';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {dados: [
      {key:"Nota 1"},
      {key:"nota 2"}
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
        <FlatList
        data= {this.state.dados}
        extraData = {this.state.refresh}
        renderItem={({item}) => <ItemLista texto={item.key} data={'13:00:00'}/>}
        />
        <Button title="Adicionar"
		    onPress={this.abrirModal.bind(this)}>      
        </Button>
      <View style={styles.estilocontainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.estiloModal}>    
              <TextInput placeholder="Nova anotação"
              onChangeText={(novaNota) => this.setState({novaNota})}/>
              <Button title="Adicionar Novo"
                onPress={this.adicionarNovo.bind(this)}>
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
    fill:1,
  },
  estilocontainer:{
    backgroundColor:"powderblue",
    alignItems: 'center'
  }
}
