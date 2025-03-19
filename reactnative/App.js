// imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela (Template feito com JSX)
export default function App() {
  // lógica do meu componente
  const nome = "Lucas"

  function alerta() {
    alert("Clicou no botão do CR7")
  }

  // retorno com o jsx
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={{
          uri: "https://i.pinimg.com/236x/5f/9c/fb/5f9cfb5435cc38b42750e5859be6c7eb.jpg"
        }}

        style={{
          height: 400,
          width: 400
        }}
      
      />


      <Text>Texto dentro</Text>

      <Text>Bem vindo {nome}</Text>
      
      <Text>{2 + 2}</Text>

      <Button title='Clicar' onPress={alerta}></Button>


    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});