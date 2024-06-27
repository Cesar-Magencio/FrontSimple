import { createmateria } from "../config/urlapis";
import { get } from "../utils/storage"; // Asegúrate de importar la función de obtención del token

export const createMateria = async (nombre_materia) => {
  try {
    const token = await get("token"); // Obtener el token del almacenamiento local

    const response = await fetch(createmateria, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: token, // Incluir el token en el header 'auth'
      },
      body: JSON.stringify({ nombre_materia }),
    });

    console.log("Código de estado HTTP:", response.status);

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al crear la materia:", error);
    throw error;
  }
};
