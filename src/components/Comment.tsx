import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export type CommentProps = {
  content: string
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
       <Avatar 
        hasBorder={false} 
        image='https://avatars.githubusercontent.com/u/22802518?v=4' 
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Doe</strong>
              <time
                title='16 de Junho às 16:28'
                dateTime='2022-06-11 16:28:30'
              >
                  Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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