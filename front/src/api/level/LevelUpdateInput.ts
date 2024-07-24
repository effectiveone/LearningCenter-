import { FlashcardUpdateManyWithoutLevelsInput } from "./FlashcardUpdateManyWithoutLevelsInput";

export type LevelUpdateInput = {
  name?: string | null;
  flashcards?: FlashcardUpdateManyWithoutLevelsInput;
};
