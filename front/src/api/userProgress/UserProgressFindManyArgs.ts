import { UserProgressWhereInput } from "./UserProgressWhereInput";
import { UserProgressOrderByInput } from "./UserProgressOrderByInput";

export type UserProgressFindManyArgs = {
  where?: UserProgressWhereInput;
  orderBy?: Array<UserProgressOrderByInput>;
  skip?: number;
  take?: number;
};
