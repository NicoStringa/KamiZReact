import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import { MdHome } from 'react-icons/md'

import {
  ContainerInfoStyle,
  TextStyle,
  ImgStyle,
  TitleStyle,
} from './CongratulationsStyles';

const Congratulations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyle>
        <ImgStyle>
        <img
          src='/src/assets/Goku.png'
          alt=''
        />
        </ImgStyle>
        <ContainerInfoStyle>
          <TitleStyle>¡Congrats!</TitleStyle>
          <p>Your order was made</p>
        </ContainerInfoStyle>
        <Button onClick={() => navigate('/')}><MdHome/></Button>
      </TextStyle>
    </div>
  );
};

export default Congratulations;