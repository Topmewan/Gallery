import {useQuery} from "react-query";
import {apiRoot,apiKey} from "../../utils/apiParams";

import styles from './Modal.module.css';
import ModalItems from "../../Components/ModalItems/ModalItems";

const Modal = ({id,closeModal,isModal}) => {

    const {
        data: {urls= {}} ={},
        isLoading,
        isError,
        error
    } = useQuery(id,async () => {
        return fetch(`${apiRoot}/${id}?client_id=${apiKey}`)
            .then(res => res.json());
    },{
        enabled:!!id,
        refetchOnWindowFocus:false
    })


    return (
        <>
            {isModal
                ? (
                    <div className={styles.container} onClick={() => closeModal()}>
                        <ModalItems
                            photo={urls.regular}
                            closeModal={closeModal}
                            isLoading={isLoading}
                            isError={isError}
                            error={error}
                        />
                    </div>
                )
                : null}
        </>
    );
};

export default Modal;