import { FlashcardWhereInput } from "./FlashcardWhereInput";
import { FlashcardOrderByInput } from "./FlashcardOrderByInput";

export type FlashcardFindManyArgs = {
  where?: FlashcardWhereInput;
  orderBy?: Array<FlashcardOrderByInput>;
  skip?: number;
  take?: number;
};
