import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoGrantEntity} from './daoGrantEntity'

export const DaoGrantCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoGrantEntity)}
    </SimpleForm>
  </Create>
);
export const DaoGrantEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoGrantEntity)}
    </SimpleForm>
  </Edit>
);
