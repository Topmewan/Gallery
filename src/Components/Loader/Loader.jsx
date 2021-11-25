import spinner from './img/spinner.svg';

import styles from './Loader.module.css';


const Loader = () => {
    return (
        <div className={styles.container}>
            <img className={styles.spinner} src={spinner} alt="loading"/>
        </div>
    );
};

export default Loader;