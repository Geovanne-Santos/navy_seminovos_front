import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "../../../node_modules/@mui/material/index";
import * as Style from "./home.styled";

export const Home = () => {

  const [cidadeData, setCidadeData] = useState([]);
  const [textoBuscado, setTextoBuscado] = useState("");
  const [cidadeFiltrada, setCidadeFiltrada] = useState([]);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
      .then(response => response.json())
      .then(data => setCidadeData(data));
  }, [])

  useEffect(() => {
    const filtrados = cidadeData.filter(cidade =>
      cidade.nome.toLowerCase().includes(textoBuscado.toLowerCase())
    );

    setCidadeFiltrada(filtrados);
  }, [textoBuscado, cidadeData]);

  const cidades: any[] = [];

  for (let i = 0; i < cidadeData.length; i++) {
    cidades.push(cidadeData[i]);
  }
  console.log(cidades)

  return (
    <Style.secaoInicio>
      <Style.containerInicio>
        <div className="card">
          <h2>
            CONFIE NA <span>NAVY</span> PARA ENCONTRAR SEMINOVOS DE VERDADE!
          </h2>
          <div className="secao-card">
            <Autocomplete
              id="auto-complete"
              autoComplete
              includeInputInList
              options={cidadeFiltrada}
              getOptionLabel={(cidade) => (cidade ? cidade.nome : "")}
              value={cidadeFiltrada.find((cidade) => cidade.nome === textoBuscado) || null}
              onInputChange={(_, newInputValue) => setTextoBuscado(newInputValue)}
              sx={{ width: 150 }}
              renderInput={(params) => (
                <TextField {...params} label="Selecione a cidade" />
              )}
              isOptionEqualToValue = {(option, value) => option.nome === value.nome}
              getOptionSelected = {(option, value) => option.nome === value.nome}
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
