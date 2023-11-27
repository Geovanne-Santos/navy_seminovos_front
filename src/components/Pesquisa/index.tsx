import { InputAdornment} from "@mui/material";
import * as Style from "./pesquisa.styled";
import Lupa from "../../assets/lupa.svg";
import { PesquisaProps } from "./Pesquisa.types";

export const Pesquisa = ({query, setQuery}: PesquisaProps) => {

    const buscar = (e: any) => {
        e.preventDefault();
        const novaQuery = e.target.value; 
        setQuery(novaQuery);
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
