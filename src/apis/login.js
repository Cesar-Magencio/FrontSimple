import { login } from "../config/urlapis";

export const loginCheck = async (dni, contra) => {
  //peticion a la url
  const res = await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, contra }),
  });
  //devolver la respues del servidor

  console.log(dni);
  console.log(contra);
  return await res.json();
};
