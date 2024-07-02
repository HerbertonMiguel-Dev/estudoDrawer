import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'; // Importa componentes do React Native

import { useNavigation, StackActions } from "@react-navigation/native"; // Importa hooks de navegação e ações da pilha de navegação

export default function Contato() {
    const navigation = useNavigation(); // Obtém a função de navegação

    // Função para voltar à tela inicial
    function handleHome() {
        navigation.dispatch(StackActions.popToTop()); // Despacha uma ação para voltar à tela inicial
    }

    return (
        // Define o layout da tela
        <View style={styles.container}>
            <Text>Pagina Contatos</Text>

            {/* Botão para voltar à tela inicial */}
            <Button title="VOLTAR HOME" onPress={handleHome} />
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
