import React, { useLayoutEffect } from "react"; // Importa React e o hook useLayoutEffect
import { View, Text, StyleSheet, Button } from "react-native"; // Importa componentes do React Native

import { useRoute, useNavigation } from "@react-navigation/native"; // Importa hooks de navegação e roteamento

export default function Sobre() {
  const route = useRoute(); // Obtém informações da rota atual
  const navigation = useNavigation(); // Obtém a função de navegação

  // useLayoutEffect para definir opções de navegação
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome // Define o título da tela com base no parâmetro 'nome'
    });
  }, [navigation]); // Dependência do efeito: navegação

  return (
    // Define o layout da tela
    <View style={styles.container}>
      <Text>Pagina SOBRE</Text>

      {/* Exibe os parâmetros passados na navegação */}
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.nome}</Text>

      {/* Botão para navegar para a tela "Contato" */}
      <Button title="TELA CONTATOS" onPress={() => navigation.navigate('Contato')} />
      
      {/* Botão para voltar para a tela anterior */}
      <Button title="Voltar tela" onPress={() => navigation.goBack()} />
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
