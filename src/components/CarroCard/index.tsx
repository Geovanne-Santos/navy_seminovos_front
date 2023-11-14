import * as Style from './card.style';


interface cardExampleType {
    title: string,
    subtitle: string,
    tipo: string,
    km: number,
    data: number,
    image: string
}

export const CarroCard = ({title, subtitle, tipo, km, data, image}: cardExampleType) => {
  return (
    <Style.CarroCard>
        <img src={image} />
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>

            <p>{tipo}</p>
            <p>{km}</p>
            <p>{data}</p>
        </div>
    </Style.CarroCard>
  )
}
