import React from 'react'; // Importa a biblioteca React
import { NavigationContainer } from '@react-navigation/native'; // Importa o contêiner de navegação do React Navigation

import Routes from './src/routes'; // Importa as rotas da aplicação

// Componente funcional principal da aplicação
export default function App(){
  return(
    //ontainer principal de navegação 
    <NavigationContainer> 
      {/* Componente que contém as rotas da aplicação  */}
      <Routes /> 
    </NavigationContainer>
  )
}
