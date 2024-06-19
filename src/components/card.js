import { Text, View } from "react-native";
//dar estilos a la tarjeta

export const Card = ({ nombre }) => {
  return (
    <View style={{ backgroundColor: "red", margin: 2, height: 300 }}>
      <Text>{nombre}</Text>
    </View>
  );
};
