import styles from './Comments.module.css';
import {useState} from "react";
import Comment from "../../Components/Comment/Comment";
import Form from "../Form/Form";

const Comments = () => {
    const [comments,setComments] = useState([]);

    const addComment = (commentValue) => {
        if(commentValue){
            const newComment = {
                id: Math.random().toString(36).substr(2,9),
                message:commentValue,
            }
            setComments([...comments,newComment]);
        }
    };

    const removeComment = (id) => {
        setComments([...comments.filter(comment => comment.id !== id)])

    };

    return (
        <div className={styles.modal__comments}>
            <div className={styles.comments__wrapper}>
                {comments.length > 0
                ? comments.map(comment => (
                    <Comment
                        key={comment.id}
                        removeComment={removeComment}
                        comment={comment}
                    />
                    ))
                :<h1>Пока нет комментариев</h1>}
            </div>
            <Form addComment={addComment}/>
        </div>
    );
};

export default Comments;