import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Ola amigos 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na Rocketseat. O nome do projeto é IgniteFeed 🚀' },
      { type: 'link', content: 'Rocketseat.Diego/IginiteFeed' },
    ],
    publishedAt: new Date('2022-12-03 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerinha 👋' },
      { type: 'paragraph', content: 'Acabei de ser promovido a Educador na Rocktseat. É uma enorme conquista pra mim, estou muito grato pela oportunidade🚀' },
      { type: 'paragraph', content: 'Aqui em baixo tem o link da minha ultima aula. Vai lá conferir!' },
      { type: 'link', content: 'Rocketseat.Maykbrito/Aula-1' },
    ],
    publishedAt: new Date('2022-12-18 20:00:00'),
  },
];

import styles from './App.module.css';



export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
      
      </div>
    )
  }


