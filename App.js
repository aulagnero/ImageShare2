import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />

      <Text style={styles.instructions} >
      To share a photo from your phone with a friend just press the button below!
      </Text>

      <TouchableOpacity
      onPress={() => alert('Hello, world!')}
      style={styles.button}>
      <Text style={{ fontSize:20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: 'darkgray',
    fontSize: 18,
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: 'darkslategray',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize:20,
    color: '#fff',
  }
});
