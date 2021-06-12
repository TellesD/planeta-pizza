

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
import { CartaoContext } from '../context/CartaoContext';
import CartaoService from '../../services/CartaoService';

export default function AlterarCartao(props) {

  const [cartao, setCartao] = useContext(CartaoContext);
  const handleChange = (value, name) => {
    setCartao({ ...cartao, [name]: value });
}
  useEffect(() => {

  }, [])

 

  const alterar = async () => {
try{
    const id = cartao.id
    const data ={ nome: cartao.nome, nomeCartao: cartao.nomeCartao, numero:cartao.numero, data: cartao.data, cvv: cartao.cvv }

    CartaoService.update(id, data);
    alert("dados alterados")
    voltar();
  }catch{
      alert("erro ao alterar dados")
    }
  }

  const voltar = async (id) => {
    props.navigation.navigate('Pagamento')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
        cartao
      </Text>

      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='nome'
            autoCorrect={false}
            value={cartao.nome}
            onChangeText={(text) => handleChange(text, "nome")}
          />
           <TextInput
            style={styles.input}
            placeholder='nomeCartao'
            autoCorrect={false}
            value={cartao.nomeCartao}
            onChangeText={(text) => handleChange(text, "nomeCartao")}
          />
           <TextInput
            style={styles.input}
            placeholder='numero'
            autoCorrect={false}
            value={cartao.numero}
            onChangeText={(text) => handleChange(text, "numero")}
          />
          <TextInput
            style={styles.input}
            placeholder='data'
            autoCorrect={false}
            value={cartao.data}
            onChangeText={(text) => handleChange(text, "data")}
          />
           <TextInput
            style={styles.input}
            placeholder='cvv'
            autoCorrect={false}
            value={cartao.cvv}
            onChangeText={(text) => handleChange(text, "cvv")}
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

