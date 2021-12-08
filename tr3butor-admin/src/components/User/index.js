import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {userEntity} from './userEntity';

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(userEntity)}
    </SimpleForm>
  </Create>
);
export const UserEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(userEntity)}
    </SimpleForm>
  </Edit>
);
