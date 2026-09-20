/*
 * SSC Physics Question Bank
 *
 * Every verified question should follow this structure.
 * Do NOT invent board/year/answer data.
 */

export const QUESTION_TYPES = {
  MCQ: "MCQ",
  CQ: "CQ"
};

export const QUESTION_SOURCES = {
  BOARD: "Board",
  SCHOOL: "School",
  MODEL: "Model",
  USER: "User Added"
};

export const QUESTION_DIFFICULTIES = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard"
};

export const QUESTION_IMPORTANCE = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1
};

/*
Example:

{
  id: "phy-p1-2025-mcq-001",
  chapter: "p1",
  year: 2025,
  source: "Board",
  type: "MCQ",
  difficulty: "Medium",
  importance: 3,
  concept: "ভৌত রাশি",
  q: "Question text",
  options: ["A", "B", "C", "D"],
  answer: "A",
  solution: "Verified solution",
  verified: true
}

CQ example:

{
  id: "phy-p1-2025-cq-001",
  chapter: "p1",
  year: 2025,
  source: "Board",
  type: "CQ",
  difficulty: "Hard",
  importance: 3,
  concept: "পরিমাপ",
  stimulus: "উদ্দীপক...",
  q: "ক) ...\nখ) ...\nগ) ...\nঘ) ...",
  answer: "Verified answer",
  solution: "Verified solution",
  verified: true
}
*/

export function normalizeQuestion(q) {
  return {
    id: q.id || "",
    chapter: q.chapter || "",
    year: Number(q.year) || null,
    source: q.source || "",
    type: q.type || "",
    difficulty: q.difficulty || "Medium",
    importance: Number(q.importance) || 1,
    concept: q.concept || "",
    q: q.q || "",
    options: Array.isArray(q.options) ? q.options : [],
    answer: q.answer || "",
    solution: q.solution || "",
    stimulus: q.stimulus || "",
    verified: Boolean(q.verified)
  };
}

export function validateQuestion(q) {
  const required = [
    "id",
    "chapter",
    "source",
    "type",
    "concept",
    "q"
  ];

  const missing = required.filter(
    key => !q?.[key]
  );

  return {
    valid: missing.length === 0,
    missing
  };
}

export function sortQuestions(list, mode="importance") {
  const copy = [...list];

  if (mode === "year") {
    return copy.sort(
      (a,b) => (b.year || 0) - (a.year || 0)
    );
  }

  if (mode === "difficulty") {
    const rank = {
      Hard: 3,
      Medium: 2,
      Easy: 1
    };

    return copy.sort(
      (a,b) =>
        (rank[b.difficulty] || 0) -
        (rank[a.difficulty] || 0)
    );
  }

  return copy.sort(
    (a,b) =>
      (b.importance || 0) - (a.importance || 0) ||
      (b.year || 0) - (a.year || 0)
  );
}

export function filterQuestions(list, filters={}) {
  return list.filter(q => {

    if (
      filters.chapter &&
      q.chapter !== filters.chapter
    ) return false;

    if (
      filters.type &&
      q.type !== filters.type
    ) return false;

    if (
      filters.year &&
      Number(q.year) !== Number(filters.year)
    ) return false;

    if (
      filters.difficulty &&
      q.difficulty !== filters.difficulty
    ) return false;

    if (
      filters.source &&
      q.source !== filters.source
    ) return false;

    if (
      filters.importance &&
      Number(q.importance) < Number(filters.importance)
    ) return false;

    return true;
  });
}

/*
 * Future verified question data goes here.
 *
 * Keep this empty until actual Board/School
 * questions are supplied/imported and verified.
 */
export const verifiedQuestionBank = [];
