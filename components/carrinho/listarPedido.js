import CarrinhoService from '../../services/CarrinhoService';
import { CarrinhoContext } from '../context/CarrinhoContext';
import React, { useState, useEffect,useContext  } from 'react';
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

export default function ListarPedido(props) {

    const [exibir, setExibir] = useState([]);
    const [carrinho, setCarrinho] = useContext(CarrinhoContext);

    useEffect(() => {
        mostrarPedidos();
        }, [])

const mostrarPedidos = async () => {
  try {
    
    const dados = await CarrinhoService.get();
    setExibir(dados.data)
    

  } catch (e) {
    alert('Falha ao buscar pedidos')
  }
  }

  const voltar= () => {
    props.navigation.navigate('Carrinho')
  }

  const deletar = async (id) => {
   try{
      CarrinhoService.remove(id);
      alert("deletado com sucesso")
      voltar()
    }catch{
          alert('falha ao deletar pedido')
      }
  }
  const alterar = ()=>{
    props.navigation.navigate('AlterarCarrinho')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
         Pedidos
      </Text>
       <ScrollView>
        <View>
          {exibir
            .map(item => (
              <View style={styles.tabela} >
              <Text style={styles.nome}>Pedido-{item.id}</Text>
              <View style= { styles.linha }>
           <TouchableOpacity  onPress={() => deletar(item.id)} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           apagar pedido
            </Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={() => {
        setCarrinho(item)
        alterar();
        }} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
           Alterar Endereço
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

