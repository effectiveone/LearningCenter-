import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";

export const UserProgressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProgresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="correctAnswers" source="correctAnswers" />
        <TextField label="incorrectAnswers" source="incorrectAnswers" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Flashcard"
          source="flashcard.id"
          reference="Flashcard"
        >
          <TextField source={FLASHCARD_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
