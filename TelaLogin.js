import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaLogin(props) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [habilitarBotao, setHabilitarBotao] = useState(false)

  const fazerLogin = async () => {
    const value = await AsyncStorage.getItem('Usuario')
    let usuario = JSON.parse(value)

    if (email == usuario.Email && senha == usuario.Senha)
      abrirProduto()
    else{
      console.warn('Você não está logado');
    }
  }

  useEffect(() => {
    setHabilitarBotao(email && senha)
  }, [email, senha])



  const abrirCadastro = () => {
    props.navigation.navigate('TelaCad')
  }
  const abrirProduto = () => {
    props.navigation.navigate('Produto')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image source={require('./assets/planeta_pizza.png')} />
      </View>

      <View style={styles.container}>

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
        <TouchableOpacity disabled={!habilitarBotao} onPress={() => fazerLogin()} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
            ENTRAR
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirCadastro()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            CADASTRAR-SE
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => abrirCarrinho()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Carrinho
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

