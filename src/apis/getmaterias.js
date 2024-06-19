import { materias } from "../config/urlapis";

export const obtenerMaterias = async (token) => {
  const response = await fetch(materias, {
    method: "GET",
    headers: {
      auth: token,
    },
  });
  return await response.json();
};
