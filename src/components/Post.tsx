import { ChangeEvent, useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBr  from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export type Author = {
  avatarUrl: string;
  name: string;
  role: string;
}

export type Content = {
  type: string
  content: string
}

export type PostProps = {
  author: Author
  content: Content[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<string[]>(['Novo Post'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar image={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
            {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          return (
            <div key={index}>
              {line.type === 'paragraph' && (
                <p>{line.content}</p>
              )}
              {line.type === 'link' && (
                <p><a href="#">{line.content}</a></p>
              )}
            </div>
          )
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange} 
          placeholder='Deixe um comentário' 
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment content={comment} />
        ))}
      </div>

    </article>
  )
}