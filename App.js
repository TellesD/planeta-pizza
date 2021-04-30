
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
import TelaLogin from './TelaLogin'
import TelaCad from './TelaCad'
import Produto from './Produto'
import Pagamento from './index'

const stackNavigation = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName='Produto' >
        <stackNavigation.Screen
          name='TelaLogin'
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <stackNavigation.Screen
          name='TelaCad'
          component={TelaCad}
          options={{ headerShown: false }}
        />
      
      <stackNavigation.Screen
        name='Pagamento'
        component={Pagamento}
        options={{ headerShown: false }}
      />
        <stackNavigation.Screen
        name='Produto'
        component={Produto}
        options={{ headerShown: false }}
      />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}


