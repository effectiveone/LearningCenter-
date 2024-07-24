import { Language } from "../language/Language";
import { Category } from "../category/Category";
import { Level } from "../level/Level";
import { UserProgress } from "../userProgress/UserProgress";

export type Flashcard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  question: string | null;
  answer: string | null;
  language?: Language | null;
  category?: Category | null;
  level?: Level | null;
  userProgresses?: Array<UserProgress>;
};
