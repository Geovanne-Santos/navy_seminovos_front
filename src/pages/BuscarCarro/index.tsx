import { CarroCard } from "../../components/CarroCard";
import * as Style from "./Buscar.styled";
import Image from '../../assets/exemplo.png';

const cardExample = {
  title: "Renault",
  subtitle: "Renault Logan Zen 1.0",
  tipo: "Manual",
  km: 56.143,
  data: 2022,
  image: Image
}


export const BuscarCarro = () => {
    return (
      <Style.BuscarCarroContainer>
        {
          Array.from({ length: 10 }, (_, i) => <CarroCard key={i} title={cardExample.title} subtitle={cardExample.subtitle} tipo={cardExample.tipo} km={cardExample.km} data={cardExample.data} image={cardExample.image} />)
        }
      </Style.BuscarCarroContainer>
    );
  };
  