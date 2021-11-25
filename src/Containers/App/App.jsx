import Header from "../../Components/Header/Header";
import {urlImages} from "../../utils/apiParams";
import {useGetImages} from "../../hooks/hooks";
import {useState} from "react";

import styles from './App.module.css';


const App = () => {

    const {data,isLoading,isError,error} = useGetImages(urlImages);

    const [id,setId] = useState(null);
    const [isModal,setIsModal] = useState(false);



    return (
        <>
            <Header/>


        </>
    );
};

export default App;