import { Header } from "./componets/Header";
import { Post } from "./componets/Post";
import { Sidebar } from "./componets/Sidebar";

import './global.css';

import styles from './App.module.css';



export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
        <Post
        author="Riany Mello"
        content="met consectetur adipisicing elit. Beatae cupiditate dolorem nisi tenetur ea, iure distinctio vero dicta repellat perferendis debitis"
      />
      <Post 
        author="Gabriel"
        content="oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeese"
      />
        </main>

      </div>
      
      </div>
    )
  }


