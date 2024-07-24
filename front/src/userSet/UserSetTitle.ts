import { UserSet as TUserSet } from "../api/userSet/UserSet";

export const USERSET_TITLE_FIELD = "name";

export const UserSetTitle = (record: TUserSet): string => {
  return record.name?.toString() || String(record.id);
};
