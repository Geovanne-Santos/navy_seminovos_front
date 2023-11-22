import { useState } from "react";
import { Autocomplete } from "@mui/material";
import * as Style from "./home.styled";
import { ufUrl, cidadeUrl } from "../../api/utils/consultaCidades";
import { useQuery } from "react-query";
import { CategoriaCard } from "../../components/CategoriaCard";
import Images from '../../assets/image 1.png'
import { autoCompleteStyles } from "./home.styled";

const cars = [
  {
    id: 1,
    model: "Sedans",
    url: Images,
  },
  {
    id: 2,
    model: "SUVs",
    url: Images,
  },
  {
    id: 3,
    model: "Picape",
    url: Images,
  },
  {
    id: 4,
    model: "Hatches",
    url: Images
  }
];

interface IbgeTypes {
  id: number;
  sigla: string;
  nome: string;
}


const formatarPreco = (valor) => {
  if(valor) {
    // Converter o valor para um número e formatá-lo diretamente
    const numero = Number(valor);
    if (!isNaN(numero)) {
      return numero.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
  }
  return '';
}



export const Home = () => {
  const [selectedUf, setSelectedUf] = useState<IbgeTypes | null>(null);
  const [precoFormatado, setPrecoFormatado] = useState(null);

  const { data: ufData = [] } = useQuery<IbgeTypes[]>("uf", ufUrl);
  const { data: cidadeData = [] } = useQuery<IbgeTypes[]>(
    ["cidade", selectedUf],
    () => (selectedUf ? cidadeUrl(selectedUf.id) : Promise.resolve([])),
    { enabled: !!selectedUf }
  );

  const alterandoValor = (e) => {
    setPrecoFormatado(formatarPreco(e.target.value));
  }


  return (
    <>
      <Style.secaoInicio>
        <Style.containerInicio>
          <div className="card">
            <h2>
              CONFIE NA <span>NAVY</span> PARA ENCONTRAR SEMINOVOS DE VERDADE!
            </h2>
            <div className="secao-card">
              <div>
                <Autocomplete
                  sx={autoCompleteStyles}
                  options={ufData}
                  getOptionLabel={(uf) => (uf ? uf.sigla : "")}
                  onChange={(_, newValue) => setSelectedUf(newValue)}
                  renderInput={(params) => (
                    <Style.Input
                      sx={{ width: 110 }}
                      {...params}
                      label="UF"
                      variant="outlined"
                    />
                  )}
                />

                <Autocomplete
                  includeInputInList
                  disabled={!selectedUf}
                  options={cidadeData}
                  getOptionLabel={(cidade) => (cidade ? cidade.nome : "")}
                  sx={autoCompleteStyles}
                  renderInput={(params) => (
                    <Style.Input 
                      sx={{width: 200 }}  
                      {...params} 
                      label="Cidade" />
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
              </div>

              <div>
              <Style.Input placeholder="Preço" variant="outlined" value={precoFormatado} onChange={alterandoValor} />
                <Style.Input placeholder="Categoria" variant="outlined" />
              </div>

              <Style.Btn variant="contained" color="error">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.5 9.5C5.5 12.5376 7.96243 15 11 15C11.9892 15 12.9174 14.7389 13.7194 14.2818C13.7801 14.381 13.8534 14.4748 13.9393 14.5607L16.9393 17.5607C17.5251 18.1464 18.4749 18.1464 19.0607 17.5607C19.6464 16.9749 19.6464 16.0251 19.0607 15.4393L16.0607 12.4393C15.9748 12.3534 15.881 12.2801 15.7818 12.2194C16.2389 11.4174 16.5 10.4892 16.5 9.5C16.5 6.46243 14.0376 4 11 4C7.96243 4 5.5 6.46243 5.5 9.5Z"
                      fill="currentColor"
                    />
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.82845 4.82838C2.87583 6.781 2.87583 9.94683 4.82845 11.8994C6.78107 13.8521 9.9469 13.8521 11.8995 11.8994C13.8521 9.94683 13.8521 6.781 11.8995 4.82838C9.9469 2.87576 6.78107 2.87576 4.82845 4.82838ZM11.1924 11.1923C9.63031 12.7544 7.09765 12.7544 5.53556 11.1923C3.97346 9.63024 3.97346 7.09758 5.53556 5.53549C7.09765 3.97339 9.63031 3.97339 11.1924 5.53549C12.7545 7.09758 12.7545 9.63024 11.1924 11.1923Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.1924 12.6274C10.8019 12.2369 10.8019 11.6037 11.1924 11.2132C11.5829 10.8227 12.2161 10.8227 12.6066 11.2132L15.435 14.0416C15.8256 14.4321 15.8256 15.0653 15.435 15.4558C15.0445 15.8463 14.4114 15.8463 14.0208 15.4558L11.1924 12.6274Z"
                    fill="currentColor"
                  />
                </svg>{" "}
                ver ofertas{" "}
              </Style.Btn>
            </div>
          </div>
        </Style.containerInicio>
      </Style.secaoInicio>

      <Style.secaoCategorias>
        <h1>Categorias</h1>
        <div className="galeriaCategorias">
          {cars.map((car) => {
            return <CategoriaCard car={car} key={car.id} />
          })}
        </div>
      </Style.secaoCategorias>
    </>
  );
};
