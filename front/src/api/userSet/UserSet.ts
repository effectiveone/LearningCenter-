import { User } from "../user/User";

export type UserSet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  user?: User | null;
};
