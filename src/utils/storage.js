import * as SecureStore from "expo-secure-store";

// Guardar un valor
export const save = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Obtener un valor
export const get = async (key) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Obtener un valor
export const getValueFor = async (key) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteValue = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
