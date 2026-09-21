import { useState, type SubmitEvent } from 'react'
import '../styles/NewPostForm.css'

interface NewPostFormProps {
  onAddPost: (details: { title: string; author: string; content: string }) => void
  onCancel: () => void
}

export function NewPostForm({ onAddPost, onCancel }: NewPostFormProps) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault() // stay on this page; do not reload

    if (!title.trim() || !author.trim() || !content.trim()) {
      return
    }

    onAddPost({
      title: title.trim(),
      author: author.trim(),
      content: content.trim(),
    })
  }

  return (
    <section id="new-post" className="new-post">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="title"
            required
          />
        </label>
        <label>
          Author
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            name="author"
            required
          />
        </label>
        <label>
          Content
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            name="content"
            rows={4}
            required
          />
        </label>
        <div className="new-post__actions">
          <button type="submit">post</button>
          <button type="button" className="new-post__cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}
