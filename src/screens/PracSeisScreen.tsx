import React from 'react';
import { StyleSheet, View } from 'react-native';

const PracSeisScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};

export default PracSeisScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#28425B',
    },
    cajaMorada: {
        flex: 2,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        flex: 2,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        flex: 4,
        borderWidth: 10,
        borderColor: '#fff',
        backgroundColor: '#28C4D9',
    },
});