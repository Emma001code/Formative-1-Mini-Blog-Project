import { withLogger } from '../hoc/withLogger.tsx'
import '../styles/Header.css'

interface HeaderProps {
  onNewPostClick: () => void
}

function HeaderComponent({ onNewPostClick }: HeaderProps) {
  return (
    <header className="site-header">
      {/* Inline styles = one of the two required styling methods. */}
      <p
        style={{
          margin: 0,
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        Dev Insights
      </p>
      <nav>
        <button type="button" onClick={onNewPostClick}>
          New Post
        </button>
      </nav>
    </header>
  )
}

// Functional header, wrapped so the console logs when it mounts and unmounts.
export const Header = withLogger(HeaderComponent, 'Header')
