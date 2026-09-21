import { useState } from 'react'
import { Header } from './components/Header.tsx'
import { NewPostForm } from './components/NewPostForm.tsx'
import { PostList } from './components/PostList.tsx'
import { initialPosts } from './data/samplePosts.ts'
import type { Post as BlogPost } from './types/post.ts'

// App holds the shared data so the form and the list stay in sync.
function App() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [isFormOpen, setIsFormOpen] = useState(false)

  function addPost(details: Pick<BlogPost, 'title' | 'author' | 'content'>) {
    setPosts((current) => [
      {
        // Next unused id, then put the new post at the top of the list.
        id: Math.max(0, ...current.map((item) => item.id)) + 1,
        title: details.title,
        author: details.author,
        content: details.content,
        datePosted: new Date(),
      },
      ...current,
    ])
    setIsFormOpen(false)
  }

  return (
    <>
      <Header onNewPostClick={() => setIsFormOpen((open) => !open)} />
      {/* Only draw the form after New Post is clicked. */}
      {isFormOpen && (
        <NewPostForm
          onAddPost={addPost}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
      <PostList posts={posts} />
    </>
  )
}

export default App
