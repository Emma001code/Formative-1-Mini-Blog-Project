import type { Post as BlogPost } from '../types/post'

interface PostProps {
  post: BlogPost
}

function getPreview(content: string): string {
  const words = content.split(' ').slice(0, 16)
  const preview = words.join(' ')
  return content.split(' ').length > 16 ? `${preview}…` : preview
}

export function Post({ post }: PostProps) {
  const postedOn = post.datePosted.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{getPreview(post.content)}</p>
      <time dateTime={post.datePosted.toISOString()}>{postedOn}</time>
    </article>
  )
}
