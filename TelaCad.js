import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaCad(props) {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [habilitarBotao, setHabilitarBotao] = useState(false)

  const salvarCadastro = () => {
    AsyncStorage.setItem('Usuario', JSON.stringify({
      Nome: nome,
      Telefone: telefone,
      Email: email,
      Senha: senha
    }))
    console.warn('Usuário cadastrado com sucesso');
  }

  useEffect(() => {
    setHabilitarBotao(nome && telefone && email && senha)
  }, [nome, telefone, email, senha])

  const abrirLogin = () => {
    props.navigation.navigate('TelaLogin')
  }

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.logo}>
        <Image source={require('./assets/planeta_pizza.png')} />
      </View>

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder='Nome'
          autoCorrect={false}
          value={nome}
          onChangeText={nome => setNome(nome)}
        />
        <TextInput
          style={styles.input}
          placeholder='Telefone'
          autoCorrect={false}
          value={telefone}
          onChangeText={telefone => setTelefone(telefone)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          value={email}
          onChangeText={email => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
          autoCorrect={false}
          value={senha}
          onChangeText={senha => setSenha(senha)}
        />
        <TouchableOpacity disabled={!habilitarBotao} onPress={() => salvarCadastro()} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
            REALIZAR CADASTRO
        </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => abrirLogin()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Voltar Login
            </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D38803'
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    borderRadius: 7,
    padding: 10
  },
  buttonEntrar: {
    backgroundColor: '#065fd4',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
})
