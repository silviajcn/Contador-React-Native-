import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FlexWrap = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
        </View>
    );
};

export default FlexWrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cajaUno: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'center',
  },
  cajaDos: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  cajaTres: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});