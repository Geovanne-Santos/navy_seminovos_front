import { useEffect } from "react";
import { Autocomplete } from "../../../node_modules/@mui/material/index";
import * as Style from "./home.styled";

export const Home = () => {

  useEffect({
    let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';
  }, [])


  return (
    <Style.secaoInicio>
      <Style.containerInicio>
        <div className="card">
          <h2>
            CONFIE NA <span>NAVY</span> PARA ENCONTRAR SEMINOVOS DE VERDADE!
          </h2>
          <div className="secao-card">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Selecione a cidade" />
              )}
            />
          </div>
        </div>

        <Style.fundoCard>
          <div></div>
        </Style.fundoCard>
      </Style.containerInicio>
    </Style.secaoInicio>
  );
};
