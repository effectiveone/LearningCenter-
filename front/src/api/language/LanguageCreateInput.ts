import { FlashcardCreateNestedManyWithoutLanguagesInput } from "./FlashcardCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  name?: string | null;
  flashcards?: FlashcardCreateNestedManyWithoutLanguagesInput;
};
