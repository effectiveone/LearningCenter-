import { InputJsonValue } from "../../types";
import { UserProgressUpdateManyWithoutUsersInput } from "./UserProgressUpdateManyWithoutUsersInput";
import { UserSetUpdateManyWithoutUsersInput } from "./UserSetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userProgresses?: UserProgressUpdateManyWithoutUsersInput;
  userSets?: UserSetUpdateManyWithoutUsersInput;
};
