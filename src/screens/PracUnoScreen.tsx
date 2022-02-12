import React from 'react';
import { StyleSheet, View } from 'react-native';

const PracUnoScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};

export default PracUnoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        flex: 1,
        width: 100,
        // height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9',
    },
});