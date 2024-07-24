import { InputJsonValue } from "../../types";
import { UserProgressCreateNestedManyWithoutUsersInput } from "./UserProgressCreateNestedManyWithoutUsersInput";
import { UserSetCreateNestedManyWithoutUsersInput } from "./UserSetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userProgresses?: UserProgressCreateNestedManyWithoutUsersInput;
  userSets?: UserSetCreateNestedManyWithoutUsersInput;
};
