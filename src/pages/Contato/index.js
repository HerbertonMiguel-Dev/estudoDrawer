import React from 'react'; // Importa a biblioteca React
import { View, Text, StyleSheet } from 'react-native'; // Importa os componentes View e Text do React Native

// Componente funcional Contato
export default function Contato(){
  return(
    //Container principal
    <View style={styles.container}> 
      {/* Texto exibido na tela */}
      <Text>Pagina Contato</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})