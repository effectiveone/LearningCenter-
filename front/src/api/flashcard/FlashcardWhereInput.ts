import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";
import { UserProgressListRelationFilter } from "../userProgress/UserProgressListRelationFilter";

export type FlashcardWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  answer?: StringNullableFilter;
  language?: LanguageWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  level?: LevelWhereUniqueInput;
  userProgresses?: UserProgressListRelationFilter;
};
