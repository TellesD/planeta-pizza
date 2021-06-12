import UsuarioService from '../../services/UsuarioService';

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
import { UsuarioContext } from '../context/UsuarioContext';

export default function AlterarFuncionario(props) {

  const [usuario, setUsuario] = useContext(UsuarioContext);
  const handleChange = (value, name) => {
    setUsuario({ ...usuario, [name]: value });
}
  useEffect(() => {

  }, [])

 

  const alterar = async () => {
try{
    const id = usuario.id
    const data ={
     nome: usuario.nome,
     telefone: usuario.telefone,
     email: usuario.email
    } 

    UsuarioService.update(id, data);
    alert("usuario alterado")
    voltar();
  }catch{
      alert("erro ao alterar usuario")
    }
  }

  const voltar = async (id) => {
    props.navigation.navigate('TelCad')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
       Funcionario
      </Text>

      <View style={styles.container}>

          <TextInput
            style={styles.input}
            placeholder='nome'
            autoCorrect={false}
            value={usuario.nome}
            onChangeText={(text) => handleChange(text, "nome")}
          />
          <TextInput
            style={styles.input}
            placeholder='telefone'
            autoCorrect={false}
            value={usuario.telefone}
            onChangeText={(text) => handleChange(text, "telefone")}

          />
          <TextInput
            style={styles.input}
            placeholder='email'
            autoCorrect={false}
            value={usuario.email}
            onChangeText={(text) => handleChange(text, "email")}
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

