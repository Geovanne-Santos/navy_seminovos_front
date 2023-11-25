import axios from "axios";

//Rota dos carros Foda-Se
export const fetchCarros = () => 
  axios.get("http://localhost:3000/carros")
    .then((response) => {
      const data = response.data;
      return data;
    });


