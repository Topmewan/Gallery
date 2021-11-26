import styles from './Comment.module.css';

const Comment = ({comment,removeComment}) => {
    return (
        <div className={styles.item__comment}>
            <div className={styles.comment__message}>
                <p>{comment.message}</p>
            </div>
            <button
                className={styles.item__delete}
                onClick={() => removeComment(comment.id)}
            >
                Удалить
            </button>
        </div>
    );
};

export default Comment;