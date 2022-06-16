import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://avatars.githubusercontent.com/u/22802518?v=4" 
          />
          <div className={styles.authorInfo}>
            <strong>John Doe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title='16 de Junho às 16:28'
          dateTime='2022-06-11 16:28:30'
        >
            Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}