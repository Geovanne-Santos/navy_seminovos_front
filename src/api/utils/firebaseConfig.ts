import axios from "axios";

//Rota dos carros Foda-Se
export const fetchCarros = (query: string) => {
  try {
    axios.get(`http://localhost:3000/carrosOrdenados/${query}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
  } catch (err) {
    console.error("O erro é: ", err.message);
    throw err;
  }

}


