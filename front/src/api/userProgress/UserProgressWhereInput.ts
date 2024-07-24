import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";

export type UserProgressWhereInput = {
  id?: StringFilter;
  correctAnswers?: IntNullableFilter;
  incorrectAnswers?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  flashcard?: FlashcardWhereUniqueInput;
};
