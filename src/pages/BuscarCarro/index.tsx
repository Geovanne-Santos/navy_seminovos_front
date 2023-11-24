import { useQuery } from "react-query";
import { CarroCard } from "../../components/CarroCard";
import * as Style from "./Buscar.styled";
import { fetchCarros } from "../../api/utils/firebaseConfig";
import { Skeleton } from "@mui/material";



export const BuscarCarro = () => {
  const { isLoading, isError, data, error } = useQuery("carros", fetchCarros);

  if (isLoading) {
    return (
      <Style.BuscarCarroContainer>
        <Style.BuscarCarroGaleria>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" width={210} height={118} />
          ))}
        </Style.BuscarCarroGaleria>
      </Style.BuscarCarroContainer>
    );
  }

  console.log(data)

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
              title={item.marcaCarro}
              subtitle={item.modeloCarro}
              tipo={item.cambioCarro}
              km={`${item.km} km`}
              data={item.ano}
              image={item.imagem}
              price={item.preco}
            />
          ))}
        </Style.BuscarCarroGaleria>
      </Style.BuscarCarroContainer>
    );
  }

  return null; // ou algum outro fallback render
};

