import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FlexScreen = () => {
  return (
        <View style={styles.container}>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
        </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  cajaUno: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  cajaDos: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  cajaTres: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});