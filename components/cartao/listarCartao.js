
import { CartaoContext } from '../context/CartaoContext';
import React, { useState, useEffect, useContext  } from 'react';
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
import CartaoService from '../../services/CartaoService';

export default function ListarPedido(props) {

    const [exibir, setExibir] = useState([]);
    const [cartao, setCartao] = useContext(CartaoContext);


    useEffect(() => {
        mostrarCartoes();
        }, [])

const mostrarCartoes = async () => {
  try {
    
    const dados = await CartaoService.get();
    setExibir(dados.data)
    

  } catch (e) {
    alert('Falha ao buscar cartões')
  }
  }

  const voltar = () => {
    props.navigation.navigate('Pagamento')
  }
  const alterar = () => {
    props.navigation.navigate('AlterarCartao')

  }

  const deletar = async (id) => {
   try{
      CartaoService.remove(id);
      alert("deletado com sucesso")
      voltar()
    }catch{
          alert('falha ao deletar cartão')
      }
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
         Cartões
      </Text>
       <ScrollView>
        <View>
          {exibir
            .map(item => (
              <View style={styles.tabela} >
              <Text style={styles.nome}>{item.nomeCartao}</Text>
              <View style= { styles.linha }>
           <TouchableOpacity  onPress={() => deletar(item.id)} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           apagar cartão
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => {
        setCartao(item)
        alterar();
        }} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           Alterar dados
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

