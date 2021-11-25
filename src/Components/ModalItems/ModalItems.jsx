import styles from './ModalItems.module.css';
import Loader from "../Loader/Loader";
import ModalImage from "../ModalImage/ModalImage";
import Comments from "../../Containers/Comments/Comments";
import ModalClose from "../ModalClose/ModalClose";

const ModalItems = ({photo,isLoading,closeModal}) => {
    return (
        <div className={styles.wrapper__modal} onClick={(e) => e.stopPropagation()}>
            {isLoading ? <Loader/> : <ModalImage photo={photo}/>}
            <Comments/>
            <ModalClose closeModal={closeModal}/>
        </div>
    );
};

export default ModalItems;