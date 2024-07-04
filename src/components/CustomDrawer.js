import React from "react";
import { View, Image, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

// Componente de função padrão para criar um menu de gaveta personalizado
export default function CustomDrawer(pros) {
  return (
    // DrawerContentScrollView é usado para permitir rolagem no conteúdo da gaveta
    <DrawerContentScrollView {...pros}>
      <View style={{
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
        {/* Exibe uma imagem de perfil */}
        <Image 
          source={require('../assets/perfil.png')}
          style={{ width: 65, height: 65}}
        />
        
        {/* Texto de boas-vindas abaixo da imagem */}
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 35}}>
          Bem-vindo!
        </Text>
      </View>

      {/* DrawerItemList é usado para renderizar a lista de itens da gaveta de navegação */}
      <DrawerItemList {...pros}/>
    </DrawerContentScrollView>
  );
}
