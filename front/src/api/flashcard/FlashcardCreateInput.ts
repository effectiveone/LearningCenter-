import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";
import { UserProgressCreateNestedManyWithoutFlashcardsInput } from "./UserProgressCreateNestedManyWithoutFlashcardsInput";

export type FlashcardCreateInput = {
  question?: string | null;
  answer?: string | null;
  language?: LanguageWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  level?: LevelWhereUniqueInput | null;
  userProgresses?: UserProgressCreateNestedManyWithoutFlashcardsInput;
};
