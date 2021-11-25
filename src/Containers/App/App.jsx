import Header from "../../Components/Header/Header";
import {urlImages} from "../../utils/apiParams";
import {useGetImages} from "../../hooks/hooks";
import {useState} from "react";

import styles from './App.module.css';
import Loader from "../../Components/Loader/Loader";
import ImageList from "../../Components/ImageList/ImageList";


const App = () => {

    const {data,isLoading,isError,error} = useGetImages(urlImages);

    const [id,setId] = useState(null);
    const [isModal,setIsModal] = useState(false);

    const showModal = (id) => {
        setId(id);
        setIsModal(prev => !prev);
    }

    const closeModal = () => {
        setIsModal(prev => !prev);
    }



    return (
        <>
            <Header/>
            {isLoading
                ? <Loader/>
                : (
                    <div className={styles.wrapper}>
                        {data && data.map(image => (
                            <ImageList
                                key={image.id}
                                url={image.urls.regular}
                                id={image.id}
                                showModal={showModal}
                            />
                        ))}
                    </div>
                )

            }


        </>
    );
};

export default App;