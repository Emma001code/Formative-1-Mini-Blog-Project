import type { Post } from '../types/post.ts'

// Hardcoded starter posts so the list works without a backend.
export const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Keep React components small and focused',
    author: 'Emmanuel Ngwoke',
    content:
      'Split the page into pieces that each do one job. A header should not also render a post list. Small components are easier to type, restyle, and reuse.',
    datePosted: new Date(),
  },
  {
    id: 2,
    title: 'TypeScript catches post shape mistakes early',
    author: 'Ibrahim Salami',
    content:
      'If a post must have a title, author, content, and date, describe that shape as a type. Then the compiler flags missing fields before the UI breaks.',
    datePosted: new Date('2026-09-10T09:00:00'),
  },
  {
    id: 3,
    title: 'Cameras on, or you are out of class',
    author: 'Emmanuel Annor',
    content:
      'As an ALU facilitator, my rule is simple: turn your camera on in class, unless you want to get kicked out. Showing up on screen is how we stay present, ask questions, and actually learn the work together.',
    datePosted: new Date('2026-08-22T14:30:00'),
  },
]
