
import ProdutoService from '../../services/ProdutoService';
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


	const [nome, setProduto] = useState('')
	const [preco, setPreco] = useState('')
	const [quantidade, setQuantidade] = useState('')
	const [habilitarBotao, setHabilitarBotao] = useState(false)
	const [exibir, setExibir] = useState({
		nome: 'a',
		preco: 'b',
		quantidade: 'c',
		descricao: 'd'
	})

	
	const addProduto = async() => {
	try{	const data= {
			nome: nome,
			preco: preco,
			quantidade: quantidade,
			
		  };
		  
		ProdutoService.create(data)
		alert("produto cadastrado")
	}catch{alert("erro ao adicionar produto")}
}

	  const exibirProdutos = async () => {
		props.navigation.navigate('ListarProduto')
	  }
	 

	  const cadastro= async () => {
		props.navigation.navigate('TelaCad')
	  }


	  useEffect(() => {
		setHabilitarBotao(nome && preco && quantidade )
	  }, [nome, preco, quantidade])
	  
	  const abrirCarrinho = () => {
		props.navigation.navigate('Carrinho')
	  }


	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.background}>

				<View style={styles.logo}>
					<Image source={require('../../assets/planeta_pizza.png')} />
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
								value={nome}
								onChangeText={nome => setProduto(nome)}
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
					<TouchableOpacity onPress={() => abrirCarrinho()} style={styles.button}>
						<Text style={styles.textButton}>
							carrinho
            		</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => cadastro()} style={styles.button}>
						<Text style={styles.textButton}>
							funcionario
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
