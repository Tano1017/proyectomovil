import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const handleRegistration = () => {
    // Handle registration logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number (optional)"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender (optional)"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Information (optional)"
        value={contactInfo}
        onChangeText={(text) => setContactInfo(text)}
      />
      <View style={styles.termsAndConditionsContainer}>
        <Text style={styles.termsAndConditionsText}>
          I accept the terms and conditions
        </Text>
        <Button
          title={termsAndConditions ? "Accepted" : "Not Accepted"}
          onPress={() => setTermsAndConditions(!termsAndConditions)}
        />
      </View>
      <Button
        title="Register"
        disabled={!termsAndConditions}
        onPress={handleRegistration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
    width: "100%",
  },
  termsAndConditionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  termsAndConditionsText: {
    fontSize: 16,
    color: "gray",
  },
});

export default RegistrationScreen;