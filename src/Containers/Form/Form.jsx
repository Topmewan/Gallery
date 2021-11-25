import {useState} from "react";

import styles from './Form.module.css';

const Form = ({addComment}) => {

    const [commentValue,setCommentValue] = useState('');

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(commentValue);
        setCommentValue('');
    };

    return (
        <form  className={styles.form} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea}
                value={commentValue}
                onChange={handleChange}
                placeholder='Введите комментарий'
            />
            <button className={styles.button}>Оставить Комментарий</button>
        </form>
    );
};

export default Form;