import { Flashcard } from "../flashcard/Flashcard";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  flashcards?: Array<Flashcard>;
};
