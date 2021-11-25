import styles from './ModalClose.module.css';
import close from './img/close.svg';

const ModalClose = ({closeModal}) => {
    return <img className={styles.close} src={close} alt="close" onClick={closeModal}/>
};

export default ModalClose;