import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  ReferenceInput,
  SelectInput,
  Filter,
    List,
  Datagrid,
  Show,
  SimpleShowLayout,
  required,
} from 'react-admin';
import {generateInputs, generateFields} from 'utils/generateInputs';
import {daoJobEntity} from './daoJobEntity';



export const DaoJobCreate = props => (
  <Create {...props} title="Create DaoJob">
    <SimpleForm redirect="show">
        <ReferenceInput label="Dao" source="dao" reference="dao" validate={[required()]}>
          <SelectInput optionText="name" />
        </ReferenceInput>
        {generateInputs(daoJobEntity)}
    </SimpleForm>
  </Create>
);
export const DaoJobEdit = props => (
  <Edit {...props} title="Edit Dao Job">
    <SimpleForm redirect="list">
      <ReferenceInput label="Dao" source="dao" reference="dao" validate={[required()]}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      {generateInputs(daoJobEntity)}
    </SimpleForm>
  </Edit>
);

export const DaoJobList = props => (
    <List {...props} title="List of Dao Jobs">
        <Datagrid rowClick="show">
            {generateFields(daoJobEntity)}
        </Datagrid>
    </List>
);

export const DaoJobShow = props => (
    <Show title="View Dao Job" {...props}>
        <SimpleShowLayout>

            {generateFields(daoJobEntity)}
        </SimpleShowLayout>
    </Show>
);
