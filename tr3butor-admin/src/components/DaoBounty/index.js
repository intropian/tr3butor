import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {daoBountyEntity} from './daoBountyEntity';

export const DaoBountyCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoBountyEntity)}
    </SimpleForm>
  </Create>
);
export const DaoBountyEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoBountyEntity)}
    </SimpleForm>
  </Edit>
);
