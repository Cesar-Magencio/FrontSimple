import { login } from "../config/urlapis";

export const loginCheck = async (dni, password) => {
  //peticion a la url
  const res = await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, password }),
  });
  //devolver la respues del servidor
  return await res.json();
};
