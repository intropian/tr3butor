import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoJobEntity} from './daoJobEntity';

export const DaoJobCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoJobEntity)}
    </SimpleForm>
  </Create>
);
export const DaoJobEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoJobEntity)}
    </SimpleForm>
  </Edit>
);
