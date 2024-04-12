import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Home component with a logo and favorites section
export default function Home() {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fixedUserData = {
      name: 'John Doe',
      balance: 1000,
      // Agrega otras propiedades de datos de usuario aquí
    };
    setUserData(fixedUserData);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../imag/logo.png')}
        style={styles.logo}
      />
      <View style={styles.main}>
        {/* User summary section */}
        <View style={styles.userContainer}>
          <Image
            source={require('../imag/perfil.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.userTitle}>Resumen de Usuario</Text>
          <Text>Nombre: {userData ? userData.name : 'Cargando...'}</Text>
          <Text>Saldo de cuenta: {userData ? userData.balance : 'Cargando...'}</Text>
        </View>
        {/* Favorites section */}
        <View style={styles.favoritesContainer}>
          <Text style={styles.favoritesTitle}>Favoritos</Text>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </View>
        {/* Popular items section */}
        <View style={styles.popularContainer}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </View>
      </View>
      
      {/* Footer */}
      <View style={{ backgroundColor: '#f2f2f2', padding: 10, marginTop: 16 }}>
        <Text style={{ textAlign: 'center' }}>Copyright © 2023 Mi Aplicación. Todos los derechos reservados.</Text>
        <Text style={{ textAlign: 'center', marginTop: 8 }}>Versión 1.0.0</Text>
      </View>

      {/* Navigation to register */}
      <TouchableOpacity onPress={() => navigation.navigate("Component2")}>
        <Text style={{ textAlign: 'center', marginTop: 16 }}> regresar a inicio </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userContainer: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  favoritesContainer: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  popularContainer: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
