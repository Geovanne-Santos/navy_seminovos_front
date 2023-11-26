import { InputAdornment} from "@mui/material";
import * as Style from "./pesquisa.styled";
import Lupa from "../../assets/lupa.svg";
import { fetchCarros } from "../../api/utils/firebaseConfig";
import { useState } from "react";

console.log(await fetchCarros())

export const Pesquisa = () => {

    const [query, setQuery] = useState("");
    const buscar = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
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
