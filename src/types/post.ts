// One post always looks like this. Date stays a real Date, not a string.
export interface Post {
  id: number
  title: string
  author: string
  content: string
  datePosted: Date
}
