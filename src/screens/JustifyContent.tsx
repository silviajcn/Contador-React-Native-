import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const JustifyContent = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.cajaUno}>Caja 1</Text>
      <Text style={styles.cajaDos}>Caja 2</Text>
      <Text style={styles.cajaTres}>Caja 3</Text>
    </View>
  );
};

export default JustifyContent;

const styles = StyleSheet.create({

    // El justifyContent cambia dependiendo del flexDirection (PENDIENTE)
    // Ej: Si el elemento esta en flexDirection: Row,
    // el justifyContent funcionara horizontalmente y al reves si esta en Column
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: '#28C4D9',
  },
  cajaUno: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
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