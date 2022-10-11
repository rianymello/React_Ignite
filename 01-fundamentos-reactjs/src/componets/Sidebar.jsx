import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar() {
    return(
        <aside className={styles.Sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1607496220596-ec431b041a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
 
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://github.com/rianymello.png" alt="" />
                <strong>Riany Mello</strong>
            <span> Web Developer</span>
            </div>
       
            <footer>
                <a href="oiii">
                
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>


        </aside>
    )
}