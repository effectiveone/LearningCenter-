import { JsonValue } from "type-fest";
import { UserProgress } from "../userProgress/UserProgress";
import { UserSet } from "../userSet/UserSet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userProgresses?: Array<UserProgress>;
  userSets?: Array<UserSet>;
};
