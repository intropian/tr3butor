import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  Filter,
  required,
} from 'react-admin';
import {generateInputs} from 'utils/generateInputs';
import {talentEntity} from './talentEntity';

export const TalentCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(talentEntity)}
    </SimpleForm>
  </Create>
);
export const TalentEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(talentEntity)}
    </SimpleForm>
  </Edit>
);
