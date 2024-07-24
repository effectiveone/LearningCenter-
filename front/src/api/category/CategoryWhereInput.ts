import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  flashcards?: FlashcardListRelationFilter;
};
