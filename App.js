
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TelaCad from './components/usuario/TelaCad'
import Produto from './components/produto/Produto'
import Pagamento from './components/cartao/index'
import TelaCarrinho from './components/carrinho/TelaCarrinho';
import ListarProduto from './components/produto/listarProduto';
import ListarPedido from './components/carrinho/listarPedido';
import ListarCartao from './components/cartao/listarCartao';
import AlterarProduto from './components/produto/alterarProduto';
import { ProdutoProvider } from './components/context/ProdutoContext';
import { UsuarioProvider } from './components/context/UsuarioContext';
import AlterarFuncionario from './components/usuario/alterarFuncionario';
import { CarrinhoProvider } from './components/context/CarrinhoContext';
import { CartaoProvider } from './components/context/CartaoContext';
import AlterarCarrinho from './components/carrinho/alterarCarrinho';
import AlterarCartao from './components/cartao/alterarCartao';
import ListarFuncionarios from './components/usuario/listarFuncionarios';
const stackNavigation = createStackNavigator()

export default function App() {
  return (
    <ProdutoProvider>
    <CarrinhoProvider>
    <CartaoProvider>
    <UsuarioProvider>
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName='Produto' >
       
        <stackNavigation.Screen
          name='TelaCad'
          component={TelaCad}
          options={{ headerShown: false }}
        />
        <stackNavigation.Screen
          name='ListarFuncionario'
          component={ListarFuncionarios}
          options={{ headerShown: false }}
        />
          <stackNavigation.Screen
          name='AlterarFuncionario'
          component={AlterarFuncionario}
          options={{ headerShown: false }}
        />
      
      <stackNavigation.Screen
        name='Pagamento'
        component={Pagamento}
        options={{ headerShown: false }}
      />
       <stackNavigation.Screen
        name='AlterarCartao'
        component={AlterarCartao}
        options={{ headerShown: false }}
      />
        <stackNavigation.Screen
        name='Carrinho'
        component={TelaCarrinho}
        options={{ headerShown: false }}
      />
      <stackNavigation.Screen
        name='AlterarCarrinho'
        component={AlterarCarrinho}
        options={{ headerShown: false }}
      />
        <stackNavigation.Screen
        name='Produto'
        component={Produto}
        options={{ headerShown: false }}
      />
      <stackNavigation.Screen
        name='ListarProduto'
        component={ListarProduto}
        options={{ headerShown: false }}
      />
      <stackNavigation.Screen
        name='AlterarProduto'
        component={AlterarProduto}
        options={{ headerShown: false }}
      />
      <stackNavigation.Screen
        name='ListarPedido'
        component={ListarPedido}
        options={{ headerShown: false }}
      />
       <stackNavigation.Screen
        name='ListarCartao'
        component={ListarCartao}
        options={{ headerShown: false }}
      />
      </stackNavigation.Navigator>
    </NavigationContainer>
    </UsuarioProvider>
    </CartaoProvider>
    </CarrinhoProvider>
    </ProdutoProvider>

    
  );
}


