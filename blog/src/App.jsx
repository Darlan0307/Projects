import Blog from "./components/Blog"
import { PostsProvider } from "./components/context/PostsProvider"

function App() {
  

  return (
    <>
      <PostsProvider>
        <Blog/>   
      </PostsProvider> 
    </>
  )
}

export default App
