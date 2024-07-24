import { User } from "../user/User";
import { Flashcard } from "../flashcard/Flashcard";

export type UserProgress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  correctAnswers: number | null;
  incorrectAnswers: number | null;
  user?: User | null;
  flashcard?: Flashcard | null;
};
