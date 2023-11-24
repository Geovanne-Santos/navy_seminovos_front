import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import axios from "axios";

//Rota dos carros Foda-Se
export const conection = axios.get("http://localhost:3000/carros").then((response) => response)



const firebaseConfig = {
    apiKey: "AIzaSyD-s8_15tuIkyV0DvAp2lnBoFx9e0cX87k",
    authDomain: "projeto-fatec-locadora.firebaseapp.com",
    databaseURL: "https://projeto-fatec-locadora-default-rtdb.firebaseio.com",
    projectId: "projeto-fatec-locadora",
    storageBucket: "projeto-fatec-locadora.appspot.com",
    messagingSenderId: "428810569718",
    appId: "1:428810569718:web:cd755ea98ed5be2efba9d7",
    measurementId: "G-ECR55G0KD3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export const fetchCarros = async () => {
      const dbRef = ref(db, "Carros");
      const snapshot = await get(dbRef);
      if (snapshot.exists()){
        return snapshot.val();
      } else {
        throw new Error("Nenhuma query")
      }
  }