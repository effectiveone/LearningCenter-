import { Flashcard } from "../flashcard/Flashcard";

export type Language = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  flashcards?: Array<Flashcard>;
};
