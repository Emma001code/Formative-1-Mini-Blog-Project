import { memo } from 'react'
import type { Post as BlogPost } from '../types/post.ts'
import '../styles/Post.css'

interface PostProps {
  post: BlogPost
  isNewest: boolean
}

function getPreview(content: string): string {
  const words = content.split(' ').slice(0, 16)
  const preview = words.join(' ')
  return content.split(' ').length > 16 ? `${preview}…` : preview
}

const FEATURED_AUTHOR = 'Emmanuel Annor'

function PostComponent({ post, isNewest }: PostProps) {
  const postedOn = post.datePosted.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  const isFeatured = post.author === FEATURED_AUTHOR

  return (
    <article className={isFeatured ? 'post post--featured' : 'post'}>
      <div className="post__header">
        <h2 className="post__title">{post.title}</h2>
        {isNewest && (
          <span
            style={{
              background: '#14213d',
              color: '#fff',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              padding: '0.2rem 0.5rem',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}
          >
            New!
          </span>
        )}
      </div>
      <p className="post__author">{post.author}</p>
      <p className="post__preview">{getPreview(post.content)}</p>
      <time className="post__date" dateTime={post.datePosted.toISOString()}>
        {postedOn}
      </time>
    </article>
  )
}

// memo skips a redraw when this card's props have not changed.
export const Post = memo(PostComponent)
