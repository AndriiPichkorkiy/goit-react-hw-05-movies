import Spiner from '../../imgs/loader.svg'
import { LoaderImg } from './Loader.styled';

const Loader = () => {
    return (
        <>
            <LoaderImg src={Spiner} alt="" width='100px' height={'100px'} />
        </>
    );
}

export default Loader;