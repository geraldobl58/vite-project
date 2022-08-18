import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/22802518?v=4',
      name: 'John Doe',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-19 12:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6412038?v=4',
      name: 'Jane Doe',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'O melhor lorem ipsum do mundis. 👋' },
      { type: 'paragraph', content: 'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Leite de capivaris, leite de mula manquis sem cabeça.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Casamentiss faiz malandris se pirulitá. 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-06-15 12:08:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((item) => (
            <Post 
              key={item.id}
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt} 
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
