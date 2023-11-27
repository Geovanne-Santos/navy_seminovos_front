import { CarroCard } from "../../components/CarroCard";
import * as Style from "./Buscar.styled";
import { Skeleton } from "@mui/material";
import { UseGetPorModelo } from "../../api/controllers/carros";
import { useCarrosContext } from "../../context/carrosContext";
import { useEffect } from "react";



export const BuscarCarro = () => {
  const {filtro} = useCarrosContext();
  const { isLoading, isError, data, error } = UseGetPorModelo(filtro);

  useEffect(() => {
    console.log(filtro, "sds")
}, [filtro])

  if (isLoading) {
    return (
      <Style.BuscarCarroContainer>
        <Style.BuscarCarroGaleria>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={210}
              height={118}
            />
          ))}
        </Style.BuscarCarroGaleria>
      </Style.BuscarCarroContainer>
    );
  }
   
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (data) {
    return (
      <Style.BuscarCarroContainer>
        <Style.BuscarCarroGaleria>
          {Object.values(data).map((item, index) => (
            <CarroCard
              key={index}
              marca={item.marcaCarro}
              modelo={item.modeloCarro}
              cambio={item.cambioCarro}
              km={item.km}
              ano={item.ano}
              imagem={item.imagem}
              preco={item.preco}
            />
          ))}
        </Style.BuscarCarroGaleria>
      </Style.BuscarCarroContainer>
    );
  }

  return null;
};