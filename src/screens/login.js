import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { primaryColor } from "../config/colors";
import { Input } from "../components/input";
import { useState } from "react";
import { PassInput } from "../components/passinput";
import { Botonn } from "../components/boton";
import { loginCheck } from "../apis/login";
import { save } from "../utils/storage";

export default Login = ({ navigation }) => {
  const [dni, setDni] = useState();
  const [password, setPassword] = useState();

  const handleValidar = async () => {
    //comprobar success, guardar el token, enviarme a la siguiente pantalla

    const Data = await loginCheck(dni, password);

    if (Data.success) {
      const result = await save("token", Data.token);

      navigation.navigate("tabs");
    } else {
      //primer tarea:
      //mostrar un mensaje al usuario: "usuario o contraseña incorrecto"
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
          style={{
            flex: 1,
            backgroundColor: "gray",
          }}
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
              label="ingrese su dni"
              value={dni}
              onChage={setDni}
              icon="alien"
              type="numeric"
            />
            <PassInput
              label="ingresa tu contraseña"
              value={password}
              onChange={setPassword}
            />

            <Botonn title="ingresar" onPress={() => handleValidar()} />
            <Botonn title="crear cuenta" mode="outlined" />
          </View>
          <View style={styles.olvide}>
            <Text>proximamente</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  texto: {},
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
