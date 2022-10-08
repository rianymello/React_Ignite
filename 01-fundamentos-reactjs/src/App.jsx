import { Header } from "./componets/Header"
import { Post } from "./Post"
import './global.css'

export function App() {

  return (
    <div>

      <Header />

      <Post
        author="Riany Mello"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cupiditate dolorem nisi tenetur ea, iure distinctio vero dicta repellat perferendis debitis nobis quasi laborum expedita quis similique, ipsam architecto facere?"
      />
      <Post 
        author="Gabriel"
        content="oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      />
      
      </div>
    )
  }


