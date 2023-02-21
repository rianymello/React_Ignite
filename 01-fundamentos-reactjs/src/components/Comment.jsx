import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)
   
    function handleDeleteComment() {
      onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);  
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

    
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandez</strong>
                        <time title='11 de maio ás 08:50' dateTime='2022-05-11 08:50:30'>Cerca de 20 minutos atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário">
        
                            <Trash size={20}/>

                            </button>
                </header>
                <p>{content}</p>

            </div>


            <footer>
                <button onClick={handleLikeComment}>
               <ThumbsUp />
               Aplaudir <span>{likeCount}</span>
               </button>
            </footer>

        </div>
        </div>
    )   
}