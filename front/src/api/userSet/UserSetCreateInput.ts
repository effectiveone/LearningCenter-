import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSetCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
