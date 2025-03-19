import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, ScrollView, View } from "react-native";

export default function App() {
  const nomeTime = "Flamengo";

  function alerta() {
    alert("Gol do Flamengo! Mengão!!!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Text style={styles.nomeTime}>{nomeTime}</Text>
        
        <Text style={styles.info}>Fundação: 17 de novembro de 1895</Text>
        <Text style={styles.info}>Estádio: Maracanã</Text>
        <Text style={styles.info}>Títulos Brasileiros: 8</Text>
        <Text style={styles.info}>Títulos da Libertadores: 3</Text>
        <Text style={styles.info}>Maior Ídolo: Zico</Text>
        
        <Button title='GOL' onPress={alerta} color="red" />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/6f/d3/b2/6fd3b20a502ee7d46df48dd821242f38.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/77/d6/ab/77d6abb47a4c0e4dd826fb561be4238b.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/236x/18/ca/30/18ca3011593e41ae769ebf9296c2fa88.jpg' }}
          style={styles.imagem}
        />
        
        <Image
          source={{ uri: 'https://i.pinimg.com/474x/5e/4b/b4/5e4bb467ae193d36c9f8681f0eeaf4a3.jpg' }}
          style={styles.imagem}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  nomeTime: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  imagem: {
    height: 200,
    width: 300,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  }
});
