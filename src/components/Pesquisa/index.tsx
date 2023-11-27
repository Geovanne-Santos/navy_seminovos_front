import { InputAdornment} from "@mui/material";
import * as Style from "./pesquisa.styled";
import Lupa from "../../assets/lupa.svg";
import { fetchCarros } from "../../api/utils/firebaseConfig";
import { useState } from "react";

export const Pesquisa = () => {

    const [query, setQuery] = useState("");
    const buscar = async (e) => {
        e.preventDefault();
        const novaQuery = e.target.value; 
        setQuery(novaQuery);
        console.log(fetchCarros(query));
        console.log(query)
    }

  return (
    <Style.BarraPesquisa>
        <Style.InputPesquisa
            sx={{"& input": {padding: "12.5px 14px"}}}
            endAdornment={<InputAdornment position="end"><img src={Lupa} alt="Ícone da barra de busca" className="iconeBusca" /></InputAdornment>}
            placeholder="Pesquise por marca ou modelo"
            onChange={buscar}
            value={query}
        />
    </Style.BarraPesquisa>
  )
}
