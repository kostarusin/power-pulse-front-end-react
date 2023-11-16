import { Overlay } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Overlay>
      <Oval
        height={80}
        width={80}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="gray"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Overlay>
  );
};

export default Loader;
