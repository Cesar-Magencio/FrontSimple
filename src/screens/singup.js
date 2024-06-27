import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { createUser } from "../apis/singup"; // Asegúrate de importar tu función para crear usuarios

const Signup = ({ navigation }) => {
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userData = {
        dni: dni,
        nombre: nombre,
        password: password,
      };

      const response = await createUser(userData);

      if (response.success) {
        Alert.alert("Éxito", "Usuario creado exitosamente");
        navigation.navigate("Login"); // Navegar a la pantalla de login después de crear la cuenta
      } else {
        Alert.alert("Error", "No se pudo crear la cuenta");
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      Alert.alert("Error", "Ocurrió un error al intentar crear la cuenta");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="DNI"
        value={dni}
        onChangeText={setDni}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Crear cuenta" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
});

export default Signup;
