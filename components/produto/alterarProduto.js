import ProdutoService from '../../services/ProdutoService';

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
import { ProdutoContext } from '../context/ProdutoContext';

export default function AlterarProduto(props) {

  const [produto, setProduto] = useContext(ProdutoContext);
  const handleChange = (value, name) => {
    setProduto({ ...produto, [name]: value });
}
  useEffect(() => {

  }, [])

 

  const alterar = async () => {
try{
    const id = produto.id
    const data ={
     nome: produto.nome,
      preco: produto.preco,
      quantidade: produto.quantidade
    } 

    ProdutoService.update(id, data);
    alert("produto alterado")
    voltar();
  }catch{
      alert("erro ao alterar produto")
    }
  }

  const voltar = async (id) => {
    props.navigation.navigate('Produto')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
        Produto
      </Text>

      <View style={styles.container}>
        <View style={styles.cardContant}>

          <TextInput
            style={styles.input}
            placeholder='Nome do produto'
            autoCorrect={false}
            value={produto.nome}
            onChangeText={(text) => handleChange(text, "nome")}
          />
          <TextInput
            style={styles.input}
            placeholder='Preço do produto'
            autoCorrect={false}
            value={produto.preco}
            onChangeText={(text) => handleChange(text, "preco")}

          />
          <TextInput
            style={styles.input}
            placeholder='Quantidade'
            autoCorrect={false}
            value={produto.quantidade}
            onChangeText={(text) => handleChange(text, "quantidade")}
          />
        </View>

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
    width: '90%',
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

