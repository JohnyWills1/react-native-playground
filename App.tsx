import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Components/Button';

function onButtonPress(): void {
    alert('Pressed!');
}

function App() {
    const [counter, setCounter] = useState(0);

    function incrementCounter(): void {
        setCounter(counter + 1);
    }

    function resetCounter(): void {
        setCounter(0);
    }

    return (
        <View style={styles.container}>
            <Text>{counter}</Text>
            <Button color="blue" text="+" onPress={incrementCounter} />
            <Button color="blue" text="Reset" onPress={resetCounter} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
