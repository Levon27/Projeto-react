import React, { Component } from 'react';
import { View, Text,TextInput,Button,Alert } from 'react-native';

export default class ItemLista extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}> 
        <View style = {styles.estiloItem}><Text style = {styles.estiloTexto}> {this.props.texto}</Text></View>
        <View style = {styles.estiloItem}><Text style = {styles.estiloTexto}> {this.props.data}</Text></View>
  
      </View>
    );
  }
}

const styles = {
    estiloItem :{
        width: '48%',
        borderWidth: 0.5,
        margin: 1,
    },

    estiloTexto :{
        fontSize: 18,
        textAlign: 'center'
    }
}