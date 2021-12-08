import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoEventEntity} from './daoEventEntity';

export const DaoEventCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoEventEntity)}
    </SimpleForm>
  </Create>
);
export const DaoEventEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoEventEntity)}
    </SimpleForm>
  </Edit>
);
