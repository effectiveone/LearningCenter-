import { SortOrder } from "../../util/SortOrder";

export type UserProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  correctAnswers?: SortOrder;
  incorrectAnswers?: SortOrder;
  userId?: SortOrder;
  flashcardId?: SortOrder;
};
