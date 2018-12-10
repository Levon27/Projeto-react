import React, { Component } from 'react';
import { View, Text,FlatList,Button,Alert} from 'react-native';
import ItemLista from './item_lista';

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {dados: [
      {key:"Jade kush"},
      {key:"Alina Li"}
    ],
    refresh : false
    };
  }
  
  adicionar(){
    
    const { refresh, dados } = this.state;
    this.setState({
      dados: [...dados, {key:"Vina sky"}],
      refresh: !refresh
    })  }

  render() {

    return (
      <View>
        <FlatList
        data= {this.state.dados}
        extraData = {this.state.refresh}
        renderItem={({item}) => <ItemLista texto={item.key} data={'13:00:00'}/>}
        />
        <Button title="Adicionar"
		    onPress={this.adicionar.bind(this)}>      
        </Button>
      </View>
    );
  }
}