import { ThreeCircles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';
import { pallete } from 'helpers/variables';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeCircles
        height="100"
        width="100"
        color={pallete.primaryBlue}
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
