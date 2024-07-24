import { FlashcardUpdateManyWithoutCategoriesInput } from "./FlashcardUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  flashcards?: FlashcardUpdateManyWithoutCategoriesInput;
};
