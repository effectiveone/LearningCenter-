import * as React from 'react';

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from 'react-admin';

import { UserProgressTitle } from '../userProgress/UserProgressTitle';
import { UserSetTitle } from '../userSet/UserSetTitle';
import { ROLES_OPTIONS } from './RolesOptions';

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label='First Name' source='firstName' />
        <TextInput label='Last Name' source='lastName' />
        <TextInput label='Username' source='username' />
        <TextInput label='Email' source='email' type='email' />
        <PasswordInput label='Password' source='password' />
        <SelectArrayInput
          source='roles'
          choices={ROLES_OPTIONS}
          optionText='label'
          optionValue='value'
        />
        <ReferenceArrayInput
          source='userProgresses'
          reference='UserProgress'
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProgressTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source='userSets'
          reference='UserSet'
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSetTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
