import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultScreen({ route }) {
    const { productName, originalValue, increase, newValue, percentage } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>

            <Text style={styles.text}>Produto: {productName}</Text>
            <Text style={styles.text}>Valor Original: R$ {originalValue.toFixed(2)}</Text>
            <Text style={styles.text}>Aumento: {percentage}%</Text>
            <Text style={styles.text}>Valor do Aumento: R$ {increase.toFixed(2)}</Text>
            <Text style={styles.text}>Novo Valor: R$ {newValue.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});