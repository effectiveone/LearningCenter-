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
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LEVEL_TITLE_FIELD } from "../level/LevelTitle";

export const FlashcardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Flashcards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="question" source="question" />
        <TextField label="answer" source="answer" />
        <ReferenceField
          label="Language"
          source="language.id"
          reference="Language"
        >
          <TextField source={LANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Level" source="level.id" reference="Level">
          <TextField source={LEVEL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
