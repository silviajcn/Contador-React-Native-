import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AlignSelf = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
        </View>
    );
};

export default AlignSelf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // En este caso el justifyContent no hace nada porque predomina el alignSelf
    alignItems: 'flex-start',
    backgroundColor: '#28C4D9',
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
    alignSelf: 'flex-end',
  },
  cajaTres: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    alignSelf: 'flex-start',
  },
});