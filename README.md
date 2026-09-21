# Dev Insights Mini Blog

Internal mini blog for Dev Insights, built with **React**, **TypeScript**, and **Vite**. Staff can read short web-dev tips and add a new post from the header. This is a front-end foundation only: posts are stored in component state, not a database.

## Install, run, and test

You need Node.js, then:

```bash
npm install
npm run dev
```

Vite starts a local server (usually [http://localhost:5173](http://localhost:5173)).

Other scripts:

```bash
npm run build    # TypeScript check + production build
npm run preview  # serve the production build
npm run lint     # Oxlint
```

Open the browser, confirm the header and three sample posts, click **New Post**, publish a post, and check the console for `Header mounted` / `Header unmounted` (React Strict Mode logs both in development).

## Component choices

**Header** is a functional component, as the brief asked. It shows a text logo and a New Post control.

**Post** is also a **functional** component, wrapped in `React.memo`. I chose a function over a class because this card has no local state and no lifecycle of its own: it only displays props (title, author, preview, date). A class with `this.props` and `render()` would show the same UI with more code. Week 3 still matters here: I know a class would fit if the card had to remember something itself (for example an expand/collapse flag). For a presentational card, the function is the simpler fit.

**PostList** maps the array and renders a `Post` for each item. **App** is the root: it holds the posts, the form open/closed flag, and renders Header + optional form + PostList.

## Styling

I used **two** of the allowed methods (no Tailwind or UI kits):

1. **External CSS** in `src/index.css` and `src/styles/` for layout, the header bar, cards, and the form.
2. **Inline styles** on the Dev Insights logo and on the **New!** badge.

Conditional styling:

- Posts by **Emmanuel Annor** get an extra `post--featured` class (cream background and orange border).
- The **newest** post (latest `datePosted`) gets the **New!** badge. The brief’s example was “last 24 hours”; I used newest-post so only one card is badged, and a post you just published always shows it.

## Optimisation and HOCs

- Each list item uses a stable **`key={post.id}`**, not the array index.
- **`React.memo`** wraps `Post` so a card can skip re-rendering when its props have not changed (for example when you only open the form).
- **`withLogger`** (`src/hoc/withLogger.tsx`) is a higher-order component: it takes a component in and returns the same UI with `console.log` on mount and unmount. It is applied to **Header**.

## Challenges

The Vite `react-ts` starter uses TypeScript import extensions (`.tsx` / `.ts`). Missing them caused “Cannot find module” errors until I matched `main.tsx`. React 19 also marks `FormEvent` as deprecated, so the form submit handler uses `SubmitEvent`. Making New Post actually work meant lifting posts into `App` state so the form and the list share one array.

## Extra beyond the brief

The brief said the New Post link did not have to work. I still added a form that opens on click, publishes a post to the top of the list, and then closes. Posts do not survive a refresh.

## Packages

No extra UI libraries. From `package.json`:

**Runtime:** `react`, `react-dom`

**Dev:** `vite`, `typescript`, `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`, `@types/node`, `oxlint`
