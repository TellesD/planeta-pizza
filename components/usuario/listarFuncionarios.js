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

export default function ListarFuncionarios(props) {

    const [exibir, setExibir] = useState([]);
    const [usuario, setUsuario] = useContext(UsuarioContext);

    useEffect(() => {
        mostrarFuncionarios();
        }, [])

const mostrarFuncionarios = async () => {
  try {
    
    const dados = await UsuarioService.get();
    setExibir(dados.data)
    

  } catch (e) {
    alert('Falha ao buscar funcionarios')
  }
  }


 
  const alterar = () => {
   props.navigation.navigate('AlterarFuncionario')
  
  }

  const deletar = async (id) => {
   try{
      UsuarioService.remove(id);
      alert("deletado com sucesso")
      voltar();
    }catch{
          alert('falha ao deletar Funcionario')
      }
  }
  const voltar = async (id) => {
    props.navigation.navigate('TelaCad')
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
         Funcionarios
      </Text>
       <ScrollView>
        <View>
          {exibir
            .map(item => (
              <View style={styles.tabela} >
              <Text style={styles.nome}>{item.nome}</Text>
              <View style= { styles.linha }>
           <TouchableOpacity  onPress={() => deletar(item.id)} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           apagar funciorio
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => {
        setUsuario(item)
        alterar();
        }} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           alterar funcionario
            </Text>
        </TouchableOpacity>
        </View>
              </View>
              
            ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
     
        
        <TouchableOpacity  onPress={() => voltar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Cancelar 
            </Text>
        </TouchableOpacity>

       

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
linha:{
    flexDirection:'row'
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
    marginLeft:"-50%",
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

