import React from 'react'; // Importa a biblioteca React
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa o criador de navegação em pilha do React Navigation

import Home from '../pages/Home'; // Importa a página Home
import Detalhes from '../pages/Detalhes'; // Importa a página Detalhes

const Stack = createNativeStackNavigator(); // Cria o navegador de pilha nativa

// Componente funcional StackRoutes
export default function StackRoutes(){
  return (
    <Stack.Navigator>
      {/* Tela Home */}
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false, // Esconde o cabeçalho da tela Home
        }}
      />

      {/* Tela Detalhes */}
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
      />
    </Stack.Navigator>
  )
}
