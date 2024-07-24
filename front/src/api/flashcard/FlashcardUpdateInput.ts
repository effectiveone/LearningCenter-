import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";
import { UserProgressUpdateManyWithoutFlashcardsInput } from "./UserProgressUpdateManyWithoutFlashcardsInput";

export type FlashcardUpdateInput = {
  question?: string | null;
  answer?: string | null;
  language?: LanguageWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  level?: LevelWhereUniqueInput | null;
  userProgresses?: UserProgressUpdateManyWithoutFlashcardsInput;
};
