# Physics 9–10 AI Learning Hub 2.0

এই version-এ আছে:
- ১৪টি chapter structure
- Chapter শুরুতে Teacher/Student Manual checklist
- Concept-by-concept notes: explanation, formula, exam focus, common mistake
- Chapter-specific live editable Diagram Board (inputs বদলালে SVG update হয়)
- Concept-linked question cards with year/source/type/difficulty/importance + solution
- Practice Zone: all chapters/current chapter, MCQ/CQ/year filter
- JSON question import for verified board/school question corpus
- Local notes/progress via browser storage
- Server-side Live AI Tutor

## Run
```bash
npm install
npm run dev
```
তারপর Vite port 5173 খুলবে। AI server 8787-এ চলে।

## Live AI
`.env` তৈরি করে server-side secret রাখো:
```env
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-5.5
PORT=8787
```
API key কখনও frontend code-এ দিও না।

## Verified 6-year questions
Project-এ sample/teaching questions আছে। প্রকৃত ৬ বছরের board + school question corpus যোগ করার জন্য `Import Questions` ব্যবহার করা হয়েছে। JSON item format:
```json
{
  "id":"p2-2025-01", "chapter":"p2", "year":2025, "source":"Board",
  "type":"MCQ", "difficulty":"সহজ", "importance":5, "concept":"ত্বরণ",
  "q":"প্রশ্ন...", "options":["A","B","C","D"], "answer":"A", "solution":"ব্যাখ্যা..."
}
```
