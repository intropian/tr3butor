import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoQuestEntity}  from './daoQuestEntity';

export const DaoQuestCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoQuestEntity)}
    </SimpleForm>
  </Create>
);
export const DaoQuestEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoQuestEntity)}
    </SimpleForm>
  </Edit>
);
