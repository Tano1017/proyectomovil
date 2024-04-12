import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UserProfileEditScreen = () => {
  const [userId, setUserId] = useState('');
  const [userFound, setUserFound] = useState(null);

  const searchUserById = (userId) => {
    // Simulación de la búsqueda del usuario.
    // Esto debe reemplazarse posteriormente con la lógica de búsqueda real.
    // Ejemplo de usuario encontrado:
    if (userId === "1") {
      setUserFound({
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        country: 'United States',
        isActive: true,
        balance: '1500',
      });
    } else {
      Alert.alert("User not found", "The user with the given ID was not found.");
      setUserFound(null); // Limpia el formulario si el usuario no se encuentra.
    }
  };

  const handleUpdate = () => {
    console.log('Updating user info:', userFound);
    // Lógica para enviar la información actualizada al backend aquí.
  };

  const handleChange = (name, value) => {
    setUserFound({ ...userFound, [name]: value });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter User ID to search"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={() => searchUserById(userId)}>
        <Text style={styles.buttonText}>Search User</Text>
      </TouchableOpacity>

      {userFound && (
        <>
          <TextInput
            style={styles.input}
            value={userFound.name}
            onChangeText={(text) => handleChange('name', text)}
            placeholder="Name"
          />

          <TextInput
            style={styles.input}
            value={userFound.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Email"
          />

          <TextInput
            style={styles.input}
            value={userFound.balance.toString()}
            onChangeText={(text) => handleChange('balance', text)}
            placeholder="Balance"
            keyboardType="numeric"
          />

          <Picker
            selectedValue={userFound.country}
            style={styles.picker}
            onValueChange={(itemValue) => handleChange('country', itemValue)}
          >
            <Picker.Item label="Select a country" value="" />
            <Picker.Item label="United States" value="United States" />
            <Picker.Item label="Colombia" value="Colombia" />
            {/* Más opciones segun se agreguen */}
          </Picker>
        
          <View style={styles.switchContainer}>
            <Text>Active:</Text>
            <Switch
              value={userFound.isActive}
              onValueChange={(newValue) => handleChange('isActive', newValue)}
            />
          </View>

          <TouchableOpacity onPress={handleUpdate} style={styles.button}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserProfileEditScreen;