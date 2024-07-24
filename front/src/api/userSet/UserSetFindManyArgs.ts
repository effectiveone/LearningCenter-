import { UserSetWhereInput } from "./UserSetWhereInput";
import { UserSetOrderByInput } from "./UserSetOrderByInput";

export type UserSetFindManyArgs = {
  where?: UserSetWhereInput;
  orderBy?: Array<UserSetOrderByInput>;
  skip?: number;
  take?: number;
};
