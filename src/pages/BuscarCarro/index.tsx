import { useQuery } from "react-query";
import { CarroCard } from "../../components/CarroCard";
import * as Style from "./Buscar.styled";
import { fetchCarros } from "../../api/utils/firebaseConfig";
import { Skeleton } from "@mui/material";


interface CarroDataType {
  marcaCarro: string;
  modeloCarro: string;
  cambioCarro: string;
  km: number;
  ano: number;
  imagem: string;
  preco: number;
}

export const BuscarCarro = () => {
  const { isLoading, isError, data, error } = useQuery<[CarroDataType]>("carros", fetchCarros);

  console.log(data)

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