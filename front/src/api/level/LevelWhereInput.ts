import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";

export type LevelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  flashcards?: FlashcardListRelationFilter;
};
