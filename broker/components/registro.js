// Primero, importamos los componentes de React y React Native que necesitaremos.
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

// Definimos el componente RegisterScreen.
const RegisterScreen = ({ navigation }) => {
  // Estados para cada campo del formulario.
  const [fullName, setFullName] = useState(""); // Nombre completo del usuario.
  const [email, setEmail] = useState(""); // Correo electrónico del usuario.
  const [password, setPassword] = useState(""); // Contraseña elegida por el usuario.
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmación de la contraseña.
  const [country, setCountry] = useState(""); // País del usuario.
  const [phoneNumber, setPhoneNumber] = useState(""); // Número de teléfono del usuario (opcional).
  const [birthday, setBirthday] = useState(""); // Fecha de nacimiento del usuario (opcional).
  const [gender, setGender] = useState(""); // Género del usuario (opcional).
  const [termsAndConditions, setTermsAndConditions] = useState(false); // Estado que indica si se aceptaron los términos y condiciones.

  // Función para cambiar el estado de los términos y condiciones.
  const toggleTermsAndConditions = () => {
    setTermsAndConditions(!termsAndConditions);
  };

  // Función para manejar la lógica de registro al presionar el botón.
  const handleRegister = () => {
    // Aquí agregarías la lógica para validar los campos y proceder con el registro.
    console.log("Registrando al usuario:", fullName, email);
    // Navegación a otra pantalla si se requiere, después de un registro exitoso.
  };

  // La UI del componente, envuelta en ScrollView para garantizar que sea desplazable.
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.formContainer}>
        {/* Campo para el nombre completo */}
        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="John Doe"
        />

        {/* Campo para el correo electrónico */}
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="john.doe@example.com"
        />

        {/* Campos para contraseña y confirmación de la misma */}
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="********"
        />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholder="********"
        />

        {/* Resto de campos para información adicional */}
        <Text style={styles.label}>Country:</Text>
        <TextInput
          style={styles.input}
          value={country}
          onChangeText={setCountry}
          placeholder="Your Country"
        />
        <Text style={styles.label}>Phone Number (optional):</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="+1234567890"
        />
        <Text style={styles.label}>Date of Birth (optional):</Text>
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
          placeholder="YYYY-MM-DD"
        />
        <Text style={styles.label}>Gender (optional):</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholder="Male/Female/Other"
        />

        {/* Botón para aceptar términos y condiciones */}
        <TouchableOpacity onPress={toggleTermsAndConditions} style={styles.termsAndConditionsContainer}>
          <Text style={styles.termsText}>
            {termsAndConditions ? "✔ Accepted" : "✘ Not Accepted"} Accept Terms and Conditions
          </Text>
        </TouchableOpacity>

        {/* Botón de registro, desactivado si los términos y condiciones no se han aceptado */}
        <Button title="Register" disabled={!termsAndConditions} onPress={handleRegister} />
      </View>
    </ScrollView>
  );
};

// Estilos usados en el componente.
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Asegura que el contenido pueda crecer para llenar el espacio
    justifyContent: "center", // Centra el contenido
    padding:  20, // Espacio alrededor del contenido
    paddingBottom: 20, // Espacio al final del scroll
  },
  formContainer: {
    paddingHorizontal: 20, // Espacio horizontal para el formulario
  },
  label: {
    marginTop: 15, // Espacio superior para cada etiqueta
    marginBottom: 5, // Espacio inferior para cada etiqueta
    fontWeight: "bold", // Texto en negrita para las etiquetas
  },
  input: {
    height: 40, // Altura fija para los inputs
    borderColor: "gray", // Color del borde
    borderWidth: 1, // Ancho del borde
    borderRadius: 5, // Bordes redondeados
    marginBottom: 10, // Espacio inferior para cada input
    paddingHorizontal: 10, // Espacio interior horizontal
  },
  termsAndConditionsContainer: {
    marginTop: 20, // Espacio superior antes de los términos y condiciones
    flexDirection: "row", // Ordena los elementos en fila
    alignItems: "center", // Centra los elementos verticalmente
    justifyContent: "center", // Centra los elementos horizontalmente
  },
  termsText: {
    color: "blue", // Color del texto de términos
  },
});

export default RegisterScreen; // Exportación del componente para su uso en otras partes de la aplicación.