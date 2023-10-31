import Skeleton from '@mui/material/Skeleton';
import * as Style from './home.styled';

export const Home = () => {
  return (
    <Style.secaoInicio>
      <Style.containerInicio>
        <div className='card'>
          <Skeleton variant="rounded" animation="wave" />
        </div>
        <Style.fundoCard>
          <div></div>
        </Style.fundoCard> 
      </Style.containerInicio>
    </Style.secaoInicio>
  )
}
