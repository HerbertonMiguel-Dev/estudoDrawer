import React from 'react'; // Importa a biblioteca React
import { NavigationContainer } from '@react-navigation/native'; // Importa o contêiner de navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importa a função para criar um stack navigator

import Home from './src/pages/Home'; // Importa o componente da página Home
import Sobre from './src/pages/Sobre'; // Importa o componente da página Sobre
import Contato from './src/pages/Contato'; // Importa o componente da página Contato

const Stack = createNativeStackNavigator(); // Cria uma instância do stack navigator

export default function App() {
  return (
    // Envolve a navegação no contêiner de navegação
    <NavigationContainer>
      {/* Define o stack navigator e suas telas */}
      <Stack.Navigator>

        {/* Define a tela "Home" com opções de configuração */}
        <Stack.Screen
          name="Home" // Nome da rota
          component={Home} // Componente que será renderizado
          options={{
            title: 'Tela inicio', // Título exibido no cabeçalho
            headerStyle: {
              backgroundColor: '#121212' // Estilo do cabeçalho (cor de fundo)
            },
            headerTintColor: '#fff' // Cor do texto do cabeçalho
          }}
        />

        {/* Define a tela "Sobre" sem opções de configuração adicionais */}
        <Stack.Screen
          name="Sobre" // Nome da rota
          component={Sobre} // Componente que será renderizado
        />

        {/* Define a tela "Contato" sem opções de configuração adicionais */}
        <Stack.Screen
          name="Contato" // Nome da rota
          component={Contato} // Componente que será renderizado
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
