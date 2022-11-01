import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

        <header>
            <div  className={styles.author}>
                <img  className={styles.avatar} src="https://github.com/rianymello.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong> Riany Mello</strong>
                    <span>web Developer</span>
                </div>
            </div>

            <time title="2 de maio" dateTime="2022-05-11 08:13:35"> Publicado há 1 hora </time>

        </header>
            <div className={styles.content}>

                <p>Fala galeraa 👋</p>
               <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare </p>
              <p>👋{' '} <a href="https://www.youtube.com/watch?v=iB3K1f7CFbo"> jane.design/doctorcare </a></p> 
              <p>
              <a href="https://www.youtube.com/watch?v=iB3K1f7CFbo"> #novoprojeto</a> {' '} 
              <a href="https://www.youtube.com/watch?v=iB3K1f7CFbo"> #nlw </a>  {' '} 
              <a href="https://www.youtube.com/watch?v=iB3K1f7CFbo"> #rocketseat</a>
               </p> 
            </div>

                <form className={styles.comentForm}>
                    <strong> Deixe seu Feedback</strong>

                    <textarea 
                        placeholder='Deixe um comentário'
                    /> 

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

        </article>
    )
}