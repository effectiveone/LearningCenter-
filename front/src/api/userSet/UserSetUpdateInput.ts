import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSetUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
