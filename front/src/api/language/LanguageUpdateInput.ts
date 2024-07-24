import { FlashcardUpdateManyWithoutLanguagesInput } from "./FlashcardUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  name?: string | null;
  flashcards?: FlashcardUpdateManyWithoutLanguagesInput;
};
