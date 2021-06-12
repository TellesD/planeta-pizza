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
  ScrollView,
  AsyncStorage
} from 'react-native';
import UsuarioService from '../../services/UsuarioService';


export default function TelaCad(props) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  
  const [habilitarBotao, setHabilitarBotao] = useState(false)

  const salvarCadastro = async () => {
    try {
      const data = {
         nome,
        telefone,
        email
      }
      UsuarioService.create(data)
      console.warn('Usuário cadastrado com sucesso');
      voltar();
    } catch {
      alert("erro ao cadastrar funcionario")
    
    }
  }

  useEffect(() => {
    setHabilitarBotao(nome && telefone && email )
  }, [nome, telefone, email])

  const voltar = () => {
    props.navigation.navigate('Produto')
  }
  const listar = () => {
    props.navigation.navigate('ListarFuncionario')
  }

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.logo}>
        <Image source={require('../../assets/planeta_pizza.png')} />
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
        <TouchableOpacity disabled={!habilitarBotao} onPress={() => salvarCadastro()} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
            REALIZAR CADASTRO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => listar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Listar 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => voltar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Voltar 
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
