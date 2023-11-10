import * as Style from './card.styled';


interface CarProps {
  id: number,
  url: string,
  model: string
}

export const CategoriaCard = ({car}: {car: CarProps}) => {
  return (
    <Style.Card>
      <img src={car.url} alt="Imagem Alt" />
      <div>
        <h2>{car.model}</h2>
      </div>
    </Style.Card>
  )
}
