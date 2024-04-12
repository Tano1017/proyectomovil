import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const ActionsListScreen = () => {
  const [country, setCountry] = useState('Colombia');
  const actionsByCountry = {
    'Colombia': [
      { id: 1, name: 'Ecopetrol', value: 20 },
      { id: 2, name: 'Bancolombia', value: 50 },
      { id: 3, name: 'ISA', value: 10 },
    ],
    'United States': [
      { id: 1, name: 'Apple', value: 150 },
      { id: 2, name: 'Tesla', value: 700 },
      { id: 3, name: 'Amazon', value: 3200 },
      { id: 4, name: 'Google', value: 2800 },
      { id: 5, name: 'Facebook', value: 350 },
    ],
  };
  const userName = 'Usuario1'; // Placeholder for username

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: 'INSERT_LOGO_URL_HERE'}}
          style={styles.logo}
        />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <ScrollView>
        <View style={styles.countrySelector}>
          {Object.keys(actionsByCountry).map((key) => (
            <TouchableOpacity key={key} onPress={() => setCountry(key)} style={styles.countryButton}>
              <Text style={styles.countryName}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={actionsByCountry[country]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.actionItem}>
              <Text style={styles.actionName}>{item.name}</Text>
              <Text style={styles.actionValue}>${item.value}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  userName: {
    fontSize: 18,
  },
  countrySelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  countryButton: {
    padding: 10,
  },
  countryName: {
    fontSize: 16,
    color: '#007bff',
  },
  actionItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionName: {
    fontSize: 16,
  },
  actionValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActionsListScreen;