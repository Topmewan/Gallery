import styles from './ModalItems.module.css';
import Loader from "../Loader/Loader";
import ModalImage from "../ModalImage/ModalImage";

const ModalItems = ({photo,isLoading,closeModal}) => {
    return (
        <div className={styles.wrapper__modal} onClick={(e) => e.stopPropagation()}>
            {isLoading ? <Loader/> : <ModalImage photo={photo}/>}

        </div>
    );
};

export default ModalItems;