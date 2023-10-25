import Skeleton from '@mui/material/Skeleton';
import * as Style from './home.styled';
import Fundo from '../../assets/fundoHome.png';

export const Home = () => {
  return (
    <Style.secaoInicio>
      <Style.containerInicio>
        <div className='card'>
          <Skeleton variant="rounded" animation="wave" />
        </div>
        <Style.fundoCard>
          <img src={Fundo} />
        </Style.fundoCard> 
      </Style.containerInicio>
    </Style.secaoInicio>
  )
}
