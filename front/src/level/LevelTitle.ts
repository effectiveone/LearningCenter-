import { Level as TLevel } from "../api/level/Level";

export const LEVEL_TITLE_FIELD = "name";

export const LevelTitle = (record: TLevel): string => {
  return record.name?.toString() || String(record.id);
};
