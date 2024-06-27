import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { createMateria } from "../apis/createmateria";

const CrearMateria = ({ navigation }) => {
  const [nombre, setNombre] = useState("");

  const handleCrearMateria = async () => {
    try {
      const data = await createMateria(nombre);
      if (data.success) {
        Alert.alert("Éxito", "Materia creada exitosamente");
        navigation.navigate("tabs"); // Asegúrate de que esta sea la pantalla correcta
      } else {
        Alert.alert("Error", "No se pudo crear la materia");
      }
    } catch (error) {
      console.error("Error al crear la materia:", error);
      Alert.alert("Error", "Ocurrió un error al intentar crear la materia");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre de la Materia</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <Button title="Crear Materia" onPress={handleCrearMateria} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  form: {
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default CrearMateria;
