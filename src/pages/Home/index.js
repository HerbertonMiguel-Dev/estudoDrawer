import React from 'react'; // Importa a biblioteca React
import { View, Text, StyleSheet, Button } from 'react-native'; // Importa os componentes View, Text, StyleSheet e Button do React Native
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation do React Navigation

// Componente funcional Home
export default function Home() {
  // Inicializa o hook useNavigation para navegação
  const navigation = useNavigation(); 

  // Função para navegar para a tela de detalhes
  function navegaDetalhes() {
    // Navega para a tela 'Detalhes'
    navigation.navigate('Detalhes'); 
  }

  return (
    //Container principal 
    <View style={styles.container}> 
    {/* Texto exibido na tela */}
      <Text>Tela HOME</Text> 
     {/* Botão para navegar para a tela de detalhes */}
      <Button title="Ir para detalhes" onPress={navegaDetalhes} />  
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Alinha os itens ao centro verticalmente
    alignItems: 'center', // Alinha os itens ao centro horizontalmente
    
  }
});
