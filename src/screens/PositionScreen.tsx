import React from 'react';
import { View, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text>PositionScreen</Text> */}
        
        <View style={styles.cajaRosada} />
        
        <View style={styles.cajaMorada} />
        
        <View style={styles.cajaNaranja} />
        
        <View style={styles.cajaVerde} />
        
    </View>
    
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
// PRACTICA POSICION ABSOLUTA
  container: {
    flex: 1,
    // width: 300,
    // height: 300,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: '#5ff03b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cajaRosada: {
    // width: 100,
    // height: 100,
    backgroundColor: '#ff98f1',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },

// PRACTICA POSICION RELATIVA
//   container: {
//     flex: 1,
//     // width: 300,
//     // height: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#28C4D9',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#5856D6',
//     borderWidth: 10,
//     borderColor: 'white',
//     bottom: 20,
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#F0A23B',
//     borderWidth: 10,
//     borderColor: 'white',
//     top: -50,
//   },
});