import React from 'react'; // Importa a biblioteca React
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importa o criador de navegação por abas inferiores do React Navigation

import StackRoutes from './stackRoutes'; // Importa as rotas em pilha
import Sobre from '../pages/Sobre'; // Importa a página Sobre
import Contato from '../pages/Contato'; // Importa a página Contato

import Feather from 'react-native-vector-icons/Feather'; // Importa os ícones Feather

const Tab = createBottomTabNavigator(); // Cria o navegador de abas

// Componente funcional Routes
export default function Routes(){
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho das telas
        tabBarHideOnKeyboard: true, // Esconde a barra de abas quando o teclado é exibido
        tabBarShowLabel: false, // Esconde os rótulos das abas
        tabBarActiveTintColor: '#FFF', // Define a cor dos ícones das abas ativas

        tabBarStyle: {
          backgroundColor: '#202225', // Define a cor de fundo da barra de abas
          borderTopWidth: 0 // Remove a borda superior da barra de abas
        }
      }}
    >
      {/* Tela HomeStack */}
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} /> // Define o ícone da aba HomeStack
          },
        }}
      />

      {/* Tela Sobre */}
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file-text" color={color} size={size} /> // Define o ícone da aba Sobre
          }
        }}
      />

      {/* Tela Contato */}
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          //headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="phone-call" color={color} size={size} /> // Define o ícone da aba Contato
          }
        }}
      />
    </Tab.Navigator>
  )
}
