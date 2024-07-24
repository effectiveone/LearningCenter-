import { LevelWhereInput } from "./LevelWhereInput";
import { LevelOrderByInput } from "./LevelOrderByInput";

export type LevelFindManyArgs = {
  where?: LevelWhereInput;
  orderBy?: Array<LevelOrderByInput>;
  skip?: number;
  take?: number;
};
