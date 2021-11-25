
import like from './img/like.png';
import styles from './ModalImage.module.css';

const ModalImage = ({photo}) => {
    return (
        <div className={styles.container}>
            <img className={styles.like} src={like} alt="like"/>
            <img className={styles.modal__img} src={photo} alt="photo"/>
        </div>
    );
};

export default ModalImage;