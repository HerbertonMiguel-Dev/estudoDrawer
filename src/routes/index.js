import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';  // Importa as rotas empilhadas (stack navigator)
import Sobre from '../pages/Sobre';       // Importa a página "Sobre"
import Contato from '../pages/Contato';   // Importa a página "Contato"

import CustomDrawer from '../components/CustomDrawer';  // Importa o componente de gaveta personalizado

const Drawer = createDrawerNavigator();  // Cria um navegador de gaveta

// Função de componente principal para definir as rotas de navegação da gaveta
export default function Routes() {
  return (
    // Definição do navegador de gaveta
    <Drawer.Navigator 
      drawerContent={CustomDrawer}  // Define o conteúdo personalizado da gaveta
      screenOptions={{
        headerShown: false,  // Oculta o cabeçalho padrão
        drawerStyle:{
          // Você pode definir estilos personalizados para a gaveta aqui
        },
        drawerActiveBackgroundColor: '#00dae4',  // Cor de fundo para o item ativo da gaveta
        drawerActiveTintColor: '#fff',  // Cor do texto para o item ativo da gaveta
        drawerInactiveBackgroundColor: '#f1f1f1',  // Cor de fundo para os itens inativos da gaveta
        drawerInactiveTintColor: '#000',  // Cor do texto para os itens inativos da gaveta
      }}
    >
      {/* Define a rota para a tela "Home" que usa StackRoutes */}
      <Drawer.Screen
        name="Home"
        component={StackRoutes}
        options={{
          title: 'Inicio'  // Título exibido na gaveta
        }}
      />

      {/* Define a rota para a tela "Sobre" */}
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
      />

      {/* Define a rota para a tela "Contato" */}
      <Drawer.Screen
        name="Contato"
        component={Contato}
      />
    </Drawer.Navigator>
  );
}
