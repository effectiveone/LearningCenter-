import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { LevelTitle } from "../level/LevelTitle";
import { UserProgressTitle } from "../userProgress/UserProgressTitle";

export const FlashcardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="question" source="question" />
        <TextInput label="answer" source="answer" />
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="Language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="level.id" reference="Level" label="Level">
          <SelectInput optionText={LevelTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="userProgresses"
          reference="UserProgress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProgressTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
