import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoTemplateEntity} from './daoTemplateEntity';

export const DaoTemplateCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoTemplateEntity)}
    </SimpleForm>
  </Create>
);
export const DaoTemplateEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoTemplateEntity)}
    </SimpleForm>
  </Edit>
);
