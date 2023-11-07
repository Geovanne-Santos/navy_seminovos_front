import { useEffect, useState } from "react";
import { Autocomplete, Grid } from "@mui/material";
import * as Style from "./home.styled";

export const Home = () => {
  const [ufData, setUfData] = useState([]);
  const [cidadeData, setCidadeData] = useState([]);
  const [selectedUf, setSelectedUf] = useState(null);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => response.json())
      .then((data) => setUfData(data));
  }, []);

  useEffect(() => {
    selectedUf &&
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf.id}/municipios`
      )
        .then((response) => response.json())
        .then((data) => setCidadeData(data));
  }, [selectedUf]);

  return (
    <Style.secaoInicio>
      <Style.containerInicio>
        <div className="card">
          <h2>
            CONFIE NA <span>NAVY</span> PARA ENCONTRAR SEMINOVOS DE VERDADE!
          </h2>
          <div className="secao-card">
            <Grid sx={{display: "flex", placeItems: "center"}}>
              <Autocomplete
                sx={{ m: 1, minWidth: 120 }}
                options={ufData}
                getOptionLabel={(uf) => (uf ? uf.sigla : "")}
                onChange={(_, newValue) => setSelectedUf(newValue)}
                renderInput={(params) => (
                  <Style.Label {...params} label="Selecione a UF" variant="outlined" />
                )}
              />

              <Autocomplete
                includeInputInList
                disabled={!selectedUf}
                options={cidadeData}
                getOptionLabel={(cidade) => (cidade ? cidade.nome : "")}
                sx={{ width: 150 }}
                renderInput={(params) => (
                  <Style.Label {...params} label="Selecione a cidade" />
                )}
                isOptionEqualToValue={(option, value) =>
                  option.nome === value.nome
                }
                filterOptions={(options, params) => {
                  const filtrados = options.filter((cidade) =>
                    cidade.nome
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()
                      .includes(
                        params.inputValue
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()
                      )
                  );

                  return filtrados.slice(0, 20);
                }}
                />
            </Grid>
          </div>
        </div>

        {/*         <Style.fundoCard>
          <div></div>
        </Style.fundoCard> */}
      </Style.containerInicio>
    </Style.secaoInicio>
  );
};
