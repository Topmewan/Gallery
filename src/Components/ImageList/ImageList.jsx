
import styles from './ImageList.module.css';

const ImageList = ({url,id,showModal}) => {
    return <img className={styles.images} src={url} alt="photo" onClick={() => showModal(id)}/>
};

export default ImageList;