# Physics 9–10 AI Learning Hub

A React + Vite + Express starter web app for Bangladesh Class 9–10 Physics.

## Features
- Separate subject structure; Physics is seeded with 14 chapter records.
- Chapter-wise teacher/manual checklist at the start.
- Simple Bangla concept explanations.
- Editable SVG diagram with localStorage saving.
- Chapter question bank with year/source/type/importance metadata.
- Practice Zone with importance sorting and solutions.
- Live AI Tutor through a server-side OpenAI API proxy.
- Notes and learned-progress are saved in browser localStorage.

## Run
1. Install Node.js 22+.
2. `npm install`
3. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`.
4. Optional: set `OPENAI_MODEL=gpt-5.5`.
5. Development: `npm run dev`
6. Production: `npm run build` then `npm run server`

The AI key is intentionally kept on the server; do not put it in React/browser code.

## Adding verified 6-year questions
Edit `src/data/content.js` and add records like:

```js
{
  id:'unique-id', subject:'physics', chapter:'p2', year:2024,
  source:'SSC Board', type:'MCQ', difficulty:'মাঝারি', importance:5,
  q:'...', options:['A','B','C','D'], answer:'B', solution:'...'
}
```

Only add questions from sources you are licensed/allowed to use. The UI is already prepared for 6-year board + school-question data.
