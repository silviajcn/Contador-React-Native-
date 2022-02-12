import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AlignItemsScreen = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.cajaUno}>Caja 1</Text>
      <Text style={styles.cajaDos}>Caja 2</Text>
      <Text style={styles.cajaTres}>Caja 3</Text>
    </View>
  );
};

export default AlignItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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