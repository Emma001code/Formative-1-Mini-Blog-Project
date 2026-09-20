import { Header } from './components/Header'
import { Post } from './components/Post'
import { initialPosts } from './data/samplePosts'

function App() {
  return (
    <>
      <Header />
      <Post post={initialPosts[0]} />
    </>
  )
}

export default App
