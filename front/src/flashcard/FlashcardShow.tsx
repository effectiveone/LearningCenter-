import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FLASHCARD_TITLE_FIELD } from "./FlashcardTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LEVEL_TITLE_FIELD } from "../level/LevelTitle";

export const FlashcardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="UserProgress"
          target="flashcardId"
          label="UserProgresses"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
