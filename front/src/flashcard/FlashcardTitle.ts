import { Flashcard as TFlashcard } from "../api/flashcard/Flashcard";

export const FLASHCARD_TITLE_FIELD = "question";

export const FlashcardTitle = (record: TFlashcard): string => {
  return record.question?.toString() || String(record.id);
};
