import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProgressListRelationFilter } from "../userProgress/UserProgressListRelationFilter";
import { UserSetListRelationFilter } from "../userSet/UserSetListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userProgresses?: UserProgressListRelationFilter;
  userSets?: UserSetListRelationFilter;
};
