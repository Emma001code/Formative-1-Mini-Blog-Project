import type { Post as BlogPost } from '../types/post.ts'
import '../styles/PostList.css'
import { Post } from './Post.tsx'

interface PostListProps {
  posts: BlogPost[]
}

function getNewestPostId(posts: BlogPost[]): number | null {
  if (posts.length === 0) {
    return null
  }

  return posts.reduce((newest, post) => {
    if (post.datePosted.getTime() > newest.datePosted.getTime()) {
      return post
    }
    if (post.datePosted.getTime() === newest.datePosted.getTime() && post.id > newest.id) {
      return post
    }
    return newest
  }).id
}

// Maps the array into Post cards. key={post.id} helps React track each item.
export function PostList({ posts }: PostListProps) {
  const newestPostId = getNewestPostId(posts)

  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} isNewest={post.id === newestPostId} />
      ))}
    </section>
  )
}
