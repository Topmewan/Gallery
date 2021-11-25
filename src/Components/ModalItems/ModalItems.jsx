import Loader from "../Loader/Loader";
import ModalImage from "../ModalImage/ModalImage";
import Comments from "../../Containers/Comments/Comments";
import ModalClose from "../ModalClose/ModalClose";

import styles from './ModalItems.module.css';


const ModalItems = ({photo,isLoading,closeModal,isError,error}) => {


    if(isError){
        return <h1>Error: {error.message}</h1>
    }

    return (
        <div className={styles.wrapper__modal} onClick={(e) => e.stopPropagation()}>
            {isLoading
                ? <Loader/>
                : <ModalImage photo={photo}/>
            }
            <Comments/>
            <ModalClose closeModal={closeModal}/>
        </div>
    );
};

export default ModalItems;