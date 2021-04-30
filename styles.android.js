import { StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({
	card:{
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#000',
		shadowOffset: {width:1, height: 1},
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		width: '90%',
		alignItems: 'center',
	},
	cardContant:{
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
		backgroundColor: '#065fd4',
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
	  buttonCartao: {
		marginTop: 15,
	  },
	  textCartao: {
		color: '#fff'
	  }
})