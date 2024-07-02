import React from "react"; // Importa a biblioteca React
import { View, Text, StyleSheet, Button } from "react-native"; // Importa componentes do React Native

import { useNavigation } from "@react-navigation/native"; // Importa o hook de navegação

export default function Home() {
  const navigation = useNavigation(); // Obtém a função de navegação

  // Função para navegar para a tela "Sobre" com parâmetros
  function navegaSobre() {
    navigation.navigate('Sobre', { 
      nome: 'lucas silva', // Passa o parâmetro "nome"
      email: 'fulano@gmail.com' // Passa o parâmetro "email"
    });
  }

  return (
    // Define o layout da tela
    <View style={styles.container}> 
      <Text>Tela HOME</Text>
      {/* Botão que chama a função navegaSobre ao ser pressionado */}
      <Button title="Ir para Sobre" onPress={navegaSobre} /> 
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Alinha os itens ao centro verticalmente
    alignItems: 'center', // Alinha os itens ao centro horizontalmente
  },
});
