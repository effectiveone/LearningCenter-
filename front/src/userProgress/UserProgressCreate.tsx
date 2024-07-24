import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { FlashcardTitle } from "../flashcard/FlashcardTitle";

export const UserProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="correctAnswers" source="correctAnswers" />
        <NumberInput
          step={1}
          label="incorrectAnswers"
          source="incorrectAnswers"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="flashcard.id"
          reference="Flashcard"
          label="Flashcard"
        >
          <SelectInput optionText={FlashcardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
