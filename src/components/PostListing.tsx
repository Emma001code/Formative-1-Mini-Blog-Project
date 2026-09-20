import { initialPosts } from '../data/samplePosts.ts'
import { Post } from './Post.tsx'

export function PostListing() {
  return (
    <section>
      {initialPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}
