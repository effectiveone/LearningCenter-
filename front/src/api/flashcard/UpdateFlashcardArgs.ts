import { FlashcardWhereUniqueInput } from "./FlashcardWhereUniqueInput";
import { FlashcardUpdateInput } from "./FlashcardUpdateInput";

export type UpdateFlashcardArgs = {
  where: FlashcardWhereUniqueInput;
  data: FlashcardUpdateInput;
};
