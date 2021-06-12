

import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Picker
} from 'react-native';
import { CarrinhoContext } from '../context/CarrinhoContext';
import CarrinhoService from '../../services/CarrinhoService';

export default function AlterarCarrinho(props) {

  const [carrinho, setCarrinho] = useContext(CarrinhoContext);
  const handleChange = (value, name) => {
    setCarrinho({ ...carrinho, [name]: value });
}
  useEffect(() => {

  }, [])

 

  const alterar = async () => {
try{
    const id = carrinho.id
    const data ={
     pedidos: carrinho.pedidos, cartao: carrinho.cartao, endereco: carrinho.endereco
    } 

    CarrinhoService.update(id, data);
    alert("endereco alterado")
    voltar();
  }catch{
      alert("erro ao alterar endereço")
    }
  }

  const voltar = async (id) => {
    props.navigation.navigate('Carrinho')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
        endereco
      </Text>

      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='endereco'
            autoCorrect={false}
            value={carrinho.endereco}
            onChangeText={(text) => handleChange(text, "endereco")}
          />
      

        <TouchableOpacity onPress={() => alterar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            alterar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => voltar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Cancelar
          </Text>
        </TouchableOpacity>



      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D38803'
  },
  letra: {
    justifyContent: 'flex-start',
    marginBottom: "10%",
    marginTop: "20%",
    marginLeft: "-50%",
    fontSize: 30
  },
  nome: {

    fontSize: 20
  },
  preco: {
    fontSize: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  tabela: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: '5%',
    marginBottom: '10%',
    color: '#222',
    fontSize: 15,
    borderRadius: 7,
    padding: 10
  },
  buttonEntrar: {
    backgroundColor: '#065fd4',
    width: '45%',
    marginRight: '5%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 7


  },
  textoEntrar: {
    color: '#fff',
    fontSize: 20
  },
  buttonCad: {
    marginTop: 15,
  },
  textCad: {
    color: '#fff'
  },
  piquer: {
    fontSize: 20,
    marginLeft: '-50%'
  }
})

