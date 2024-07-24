import { UserProgress as TUserProgress } from "../api/userProgress/UserProgress";

export const USERPROGRESS_TITLE_FIELD = "id";

export const UserProgressTitle = (record: TUserProgress): string => {
  return record.id?.toString() || String(record.id);
};
