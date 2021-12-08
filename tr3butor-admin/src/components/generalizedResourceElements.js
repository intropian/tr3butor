import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  List,
  Datagrid,
  Show,
  SimpleShowLayout,
  TextField
} from 'react-admin';
import {generateInputs, generateFields} from 'utils/generateInputs';



export const ResourceCreateFn = entity => props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(entity)}
    </SimpleForm>
  </Create>
);
export const ResourceEditFn = entity => props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(entity)}
    </SimpleForm>
  </Edit>
);

export const ResourceListFn = entity => props => (
    <List {...props}>
        <Datagrid rowClick="show">
            {generateFields(entity)}
        </Datagrid>
    </List>
);

export const ResourceShowFn = entity => props => (
    <Show title="View entity" {...props}>
        <SimpleShowLayout>
            {generateFields(entity)}
        </SimpleShowLayout>
    </Show>
);
