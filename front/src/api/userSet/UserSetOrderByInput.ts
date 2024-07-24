import { SortOrder } from "../../util/SortOrder";

export type UserSetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
};
