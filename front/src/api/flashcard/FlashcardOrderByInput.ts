import { SortOrder } from "../../util/SortOrder";

export type FlashcardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  question?: SortOrder;
  answer?: SortOrder;
  languageId?: SortOrder;
  categoryId?: SortOrder;
  levelId?: SortOrder;
};
