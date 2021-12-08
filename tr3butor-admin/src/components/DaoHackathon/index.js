import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoHackathonEntity} from './daoHackathonEntity'

export const DaoHackathonCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoHackathonEntity)}
    </SimpleForm>
  </Create>
);
export const DaoHackathonEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoHackathonEntity)}
    </SimpleForm>
  </Edit>
);
