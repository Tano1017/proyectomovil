import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

const CombinedScreen = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    country: 'United States'
  });
  const [selectedActions, setSelectedActions] = useState([]);
  const [country, setCountry] = useState('United States');
  
  const availableActions = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Tesla' },
  ];
  const actionsByCountry = {
    'Colombia': ['Ecopetrol', 'Bancolombia'],
    'United States': ['Apple', 'Tesla'],
  };

  const updateUser = () => {
    console.log('User updated:', user);
  };

  const toggleActionSelection = (actionName) => {
    setSelectedActions(
      selectedActions.includes(actionName)
        ? selectedActions.filter((a) => a !== actionName)
        : [...selectedActions, actionName]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* User Edit Section */}
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={user.country}
          onChangeText={(text) => setUser({ ...user, country: text })}
          placeholder="Country"
        />
        <Button title="Update User" onPress={updateUser} />
      </View>
      {/* Action Association Section */}
      <View style={styles.section}>
        <Text>Associate Actions:</Text>
        {availableActions.map((action) => (
          <TouchableOpacity 
            key={action.id} 
            style={styles.button} 
            onPress={() => toggleActionSelection(action.name)}
          >
            <Text>{selectedActions.includes(action.name) ? 'Unselect' : 'Select'} {action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Actions by Country Section */}
      <View style={styles.section}>
        <Text>Actions available in {country}:</Text>
        {actionsByCountry[country].map((action, index) => (
          <Text key={index}>{action}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 5,
  }
});

export default CombinedScreen;