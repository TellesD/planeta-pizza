import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native'
import Styles from './styles.android'
import './config/ReactotronConfig';

export default function Pagamento(props) {
	const [nome, setNome] = useState('')
	const [nomeCartao, setNomeCartao] = useState('')
	const [numero, setNumero] = useState('')
	const [data, setData] = useState('')
	const [cvv, setCvv] = useState('')


	const salvarCartao = async () => {

		try {
			let cartao = [];
			let dados = await AsyncStorage.getItem('zap');

			if (dados) {
				cartao = JSON.parse(dados);
			};

			const novoCartao = { nome: nome, nomeCartao: nomeCartao, numero: numero, data: data, cvv: cvv };
			cartao.push(novoCartao);
			
			AsyncStorage.setItem('zap', JSON.stringify(cartao))
			alert('Cartão salvo com sucesso')

		} catch (e) {
			alert('Falha ao salvar cartão')
		}
	}

	const mostrarCartoes = async () => {
		try {

			const exibir = await AsyncStorage.getItem('zap')
			
			if (exibir !== null) {

				alert(exibir);
			}

		} catch (e) {

			alert('Falha ao mostrar cartões')
		}
	}
	const deletar = async () => {
		try {
			await AsyncStorage.clear()
			alert('Cartões deletados com sucesso')
		} catch (e) {
			alert('Falha ao deletar cartões')
		}
	}

	const abrirCartao = () => {
		props.navigation.navigate('Cartao')
	}



	return (
		<ScrollView>
			<KeyboardAvoidingView style={Styles.background}>

				<View style={Styles.logo}>
					<Image source={require('./assets/planeta_pizza.png')} />
				</View>
				<View style={{ borderRadius: 5, backgroundColor: '#000', width: '80%', alignItems: 'center' }}>
					<Text style={{ color: '#fff', fontSize: 25 }}>
						ADICIONAR CARTÃO
						</Text>
				</View>
				<View style={Styles.container}>
					<View style={Styles.card}>
						<View style={Styles.cardContant}>

							<TextInput
								style={Styles.input}
								placeholder='Nome do cartão'
								autoCorrect={false}
								value={nomeCartao}
								onChangeText={nomeCartao => setNomeCartao(nomeCartao)}
							/>
							<TextInput
								style={Styles.input}
								placeholder='Nome no cartão'
								autoCorrect={false}
								value={nome}
								onChangeText={nome => setNome(nome)}
							/>
							<TextInput
								style={Styles.input}
								placeholder='Número no cartão'
								autoCorrect={false}
								value={numero}
								onChangeText={numero => setNumero(numero)}
							/>
							<TextInput
								style={Styles.input}
								placeholder='Data de validade'
								autoCorrect={false}
								value={data}
								onChangeText={data => setData(data)}
							/>

							<TextInput
								style={Styles.input}
								secureTextEntry={true}
								placeholder='CVV'
								autoCorrect={false}
								value={cvv}
								onChangeText={cvv => setCvv(cvv)}
							/>

						</View>
						<TouchableOpacity onPress={() => salvarCartao()} style={Styles.textoEntrar} style={Styles.buttonSalvar}>
							<Text>
								SALVAR
        				</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => mostrarCartoes()} style={Styles.buttonCartao}>
						<Text style={Styles.textCartao}>
							MOSTRAR CARTÕES SALVOS
            		</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => deletar()} style={Styles.buttonCartao}>
						<Text style={Styles.textCartao}>
							DELETAR TODOS OS CARTOES
            		</Text>
					</TouchableOpacity>
					

				</View>

			</KeyboardAvoidingView>
		</ScrollView>
	);
}
