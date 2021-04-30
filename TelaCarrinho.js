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
  ScrollView, 
  Picker
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaCarrinho(props) {
  const [cartao, setSelectedValue] = useState("");
  const [endereco, setEndereco] = useState('');
  const [habilitarBotao, setHabilitarBotao] = useState(false);
  const [exibir, setExibir] = useState([]);

  const [pedidos, setPedidos] = useState([
    { name: 'pizza 1', preco: 12 },
   { name: 'pizza 2', preco: 10 },
   ]);

 

  useEffect(() => {
  mostrarCartoes();
  })
 
const fazerCompra = () =>{
  console.tron.log(cartao)
  AsyncStorage.setItem('pedido', JSON.stringify({pedidos, cartao, endereco}))
  alert("pedido realizado");
  
}
const mostrarCartoes = async () => {
  try {
    
    const dados = await AsyncStorage.getItem('zap');
    if(dados) {
    setExibir(JSON.parse(dados));
  }else{
      setExibir([{nomeCartao: 'sem cartões'}]);
    }
  } catch (e) {
    alert('Falha ao mostrar cartões')
  }
  }

  const mostrarCompra = async () => {
    try {
      
      const dados = await AsyncStorage.getItem('pedido');
      if(dados) {
      alert(dados);
      
    }else{
      alert("sem pedidos");
    }
    } catch (e) {
      alert('Falha ao mostrar pedidos');
    }
    }

    const deletar = async () => {
      try {
        await AsyncStorage.clear()
        alert('Compras canceladas');
      } catch (e) {
        alert('Falha ao cancelar compras')
      }
    }


  const abrirPagamento = () => {
    props.navigation.navigate('Pagamento')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.letra} >
          Carrinho:
      </Text>
       <ScrollView>
        <View>
          {pedidos
            .map(item => (
              <View style={styles.tabela}>
              <Text style={styles.nome}>{item.name} ----</Text>
              <Text style={styles.preco}>---- R$ {item.preco}</Text>
              </View>
              
            ))}
        </View>
      </ScrollView>
     
      <View style={styles.piquer}>
      <Picker
        selectedValue={cartao}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
         {exibir.map(item => (
        
        <Picker.Item label={item.nomeCartao} value={item.nomeCartao} />
              
            ))}
        
       
      </Picker>
    </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Endereço'
          autoCorrect={false}
          value={endereco}
          onChangeText={endereco => setEndereco(endereco)}
        />
        <TouchableOpacity  onPress={() => fazerCompra()} style={styles.buttonEntrar}>
          <Text style={styles.textoEntrar}>
            Comprar
            </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => mostrarCompra()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            mostrar pedidos
            </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => deletar()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Cancelar pedidos
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirPagamento()} style={styles.buttonCad}>
          <Text style={styles.textCad}>
            Cadastrar cartão
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
  },
  piquer: {
    fontSize: 20,
    marginLeft: '-50%'
  }
})

