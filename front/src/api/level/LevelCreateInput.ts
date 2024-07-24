import { FlashcardCreateNestedManyWithoutLevelsInput } from "./FlashcardCreateNestedManyWithoutLevelsInput";

export type LevelCreateInput = {
  name?: string | null;
  flashcards?: FlashcardCreateNestedManyWithoutLevelsInput;
};
