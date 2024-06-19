import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { getValueFor } from "../utils/storage";
import { obtenerMaterias } from "../apis/getmaterias";
import { Card } from "../components/card";

export default Home = () => {
  const [token, setToken] = useState();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const tk = await getValueFor("token");
      setToken(tk);
    };

    const getMaterias = async () => {
      const data = await obtenerMaterias(token);
      setMaterias(data);
    };

    getToken();
    getMaterias();
  }, [token]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text>Lista de materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Card nombre={item.nombre} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
