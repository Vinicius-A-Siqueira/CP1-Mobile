import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormScreen({ navigation }) {
    const [productName, setProductName] = useState('');
    const [originalValue, setOriginalValue] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleCalculate = () => {
        if (!productName || !originalValue || !percentage) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos!');
            return;
        }

        const original = parseFloat(originalValue);
        const percent = parseFloat(percentage);
        const increase = (original * percent) / 100;
        const newValue = original + increase;

        navigation.navigate('Result', {
            productName,
            originalValue: original,
            increase,
            newValue,
            percentage,
        });
    };

    return (
        <View style={styles.container} >
            <Text style={styles.title}> Calculadora de Aumento de Produto </Text>

            < TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={productName}
                onChangeText={setProductName}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor Original"
                keyboardType="numeric"
                value={originalValue}
                onChangeText={setOriginalValue}
            />
            <TextInput
                style={styles.input}
                placeholder="Porcentagem de Aumento"
                keyboardType="numeric"
                value={percentage}
                onChangeText={setPercentage}
            />

            <Button title="Calcular" onPress={handleCalculate} />
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
    },
});