import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import { primaryColor } from "../config/colors";
import { Input } from "../components/input";
import { PassInput } from "../components/passinput";
import { Botonn } from "../components/boton";
import { loginCheck } from "../apis/login";
import { save } from "../utils/storage";

const Login = ({ navigation }) => {
  const [dni, setDni] = useState();
  const [password, setPassword] = useState();

  const handleValidar = async () => {
    try {
      const Data = await loginCheck(dni, password);

      console.log(Data);
      if (Data.success) {
        await save("token", Data.token);

        navigation.navigate("tabs");
      } else {
        Alert.alert("Error", "Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);
      Alert.alert("Error", "Ocurrió un error al intentar iniciar sesión");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: Platform.OS === "android" && 30,
          backgroundColor: "skyblue",
          flex: 1,
        }}
      >
        <ImageBackground
          source={require("../../assets/fondo.jpg")}
          resizeMode="cover"
          style={{ flex: 1, backgroundColor: "gray" }}
        >
          <View style={styles.logo}>
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: primaryColor,
              }}
              source={require("../../assets/logo.jpg")}
            />
            <Text style={{ fontSize: 35, color: "black", textAlign: "center" }}>
              Codiando como un campeón
            </Text>
          </View>
          <View style={styles.inputs}>
            <Input
              label="Ingrese su DNI"
              value={dni}
              onChange={setDni}
              icon="alien"
              type="numeric"
            />
            <PassInput
              label="Ingrese su contraseña"
              value={password}
              onChange={setPassword}
            />
            <Botonn title="Ingresar" onPress={handleValidar} />
            <Botonn title="Crear cuenta" mode="outlined" />
          </View>
          <View style={styles.olvide}>
            <Text>Próximamente</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 0.5,
    alignItems: "center",
    alignContent: "center",
    padding: 10,
  },
  inputs: {
    flex: 0.4,
    padding: 10,
    justifyContent: "center",
  },
  olvide: {
    flex: 0.1,
  },
});

export default Login;
