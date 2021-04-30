import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity
} from 'react-native';

export default function Produtos(props) {


	const [produto, setProduto] = useState('')
	const [preco, setPreco] = useState('')
	const [quantidade, setQuantidade] = useState('')
	const [descricao, setDescricao] = useState('')
	const [habilitarBotao, setHabilitarBotao] = useState(false)
	const [exibir, setExibir] = useState({
		produto: 'a',
		preco: 'b',
		quantidade: 'c',
		descricao: 'd'
	})
	
	const addProduto = () => {
		AsyncStorage.setItem('Produto', JSON.stringify({
		  produto: produto,
		  preco: preco,
		  quantidade: quantidade,
		  descricao: descricao
		}))
		alert('Produto cadastrado com sucesso');
	  }

	  const exibirProdutos = async () => {
		try {
		  const value = await AsyncStorage.getItem('Produto')
		  let produto = JSON.parse(value)
		  setExibir(produto)
		  if (exibir !== null) {
			alert(value)
		  }
		  
		} catch (e) {
		  alert('Falha ao mostrar cartões')
		}
	  }
	  useEffect(() => {
		exibirProdutos();
	  }, [])

	  const deletar = async () => {
		try {
		  await AsyncStorage.clear()
		  alert('Produtos deletados com sucesso')
		} catch (e) {
		  alert('Falha ao deletar produtos')
		}
	  }


	  useEffect(() => {
		setHabilitarBotao(produto && preco && quantidade && descricao)
	  }, [produto, preco, quantidade, descricao])
	  
	  const abrirCarrinho = () => {
		props.navigation.navigate('Carrinho')
	  }


	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.background}>

				<View style={styles.logo}>
					<Image source={require('./assets/planeta_pizza.png')} />
				</View>
				<View style={{ borderRadius: 5, backgroundColor: '#FFDA2F', width: '80%', alignItems: 'center', height: 30 }}>
					<Text style={{ color: '#FF4B4B', fontSize: 25 }}>
						ADICIONAR PRODUTO
						</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.card}>
						<View style={styles.cardContant}>

							<TextInput
								style={styles.input}
								placeholder='Nome do produto'
								autoCorrect={false}
								value={produto}
								onChangeText={produto => setProduto(produto)}
							/>
							<TextInput
								style={styles.input}
								placeholder='Preço do produto'
								autoCorrect={false}
								value={preco}
								onChangeText={preco => setPreco(preco)}

							/>
							<TextInput
								style={styles.input}
								placeholder='Quantidade'
								autoCorrect={false}
								value={quantidade}
								onChangeText={quantidade => setQuantidade(quantidade)}
							/>
							<TextInput
								style={styles.input}
								placeholder='Descrição'
								autoCorrect={false}
								value={descricao}
								onChangeText={descricao => setDescricao(descricao)}
							/>
						</View>
						<TouchableOpacity disabled={!habilitarBotao} onPress={() => addProduto()} style={styles.buttonSalvar}>
							<Text style={styles.textoSalvar}>
								SALVAR
        				</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => exibirProdutos()} style={styles.button}>
						<Text style={styles.textButton}>
							EXIBIR PRODUTOS
            		</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => deletar()} style={styles.button}>
						<Text style={styles.textButton}>
							EXCLUIR
            		</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => abrirCarrinho()} style={styles.button}>
						<Text style={styles.textButton}>
							carrinho
            		</Text>
					</TouchableOpacity>
				</View>

			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#FFDA2F',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		width: '90%',
		alignItems: 'center',
	},
	cardContant: {
		marginHorizontal: 18,
		marginVertical: 20,
		width: '90%'
	},
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
	buttonSalvar: {
		backgroundColor: '#FF4B4B',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10
	},
	textoSalvar: {
		color: '#fff',
		fontSize: 20
	},
	button: {
		marginTop: 15,
		borderRadius: 5,
		backgroundColor: '#FFDA2F',
		width: '80%',
		alignItems: 'center',
		height: 35,
		marginBottom: 15
	},
	textButton: {
		color: '#FF4B4B',
		fontSize: 30
	}
});
