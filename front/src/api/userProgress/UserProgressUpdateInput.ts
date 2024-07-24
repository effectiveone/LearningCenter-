import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";

export type UserProgressUpdateInput = {
  correctAnswers?: number | null;
  incorrectAnswers?: number | null;
  user?: UserWhereUniqueInput | null;
  flashcard?: FlashcardWhereUniqueInput | null;
};
