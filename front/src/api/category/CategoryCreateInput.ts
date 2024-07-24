import { FlashcardCreateNestedManyWithoutCategoriesInput } from "./FlashcardCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  flashcards?: FlashcardCreateNestedManyWithoutCategoriesInput;
};
