import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'



export function Comment (){
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
                            <button title='Deletar comentário'>
        
                            <Trash size={20}/>

                            </button>
                </header>
                <p>Muito bom dev, meus parabens!!!</p>

            </div>


            <footer>
                <button>
               <ThumbsUp />
               Aplaudir <span>20</span>
               </button>
            </footer>

        </div>
        </div>
    )   
}