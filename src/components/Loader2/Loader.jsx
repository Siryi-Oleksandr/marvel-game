import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeCircles
        height="100"
        width="100"
        color="#002350"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderStyled>
  );
};

export default Loader;
