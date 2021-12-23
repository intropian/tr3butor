import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  List,
  Datagrid,
  required,
  email,
} from 'react-admin';
import {generateInputs, generateFields, generateShowFields} from 'utils/generateInputs';
import daoEntity from './daoEntity';

export const DaoCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(daoEntity)}
    </SimpleForm>
  </Create>
);
export const DaoEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(daoEntity)}
    </SimpleForm>
  </Edit>
);

export const DaoList = props => (
    <List {...props}>
        <Datagrid>
            {generateFields(daoEntity)}
        </Datagrid>
    </List>
);

export const DaoShow = props => (
    <Show title="View Dao" {...props}>
        <SimpleShowLayout>
            {generateShowFields(daoEntity)}
        </SimpleShowLayout>
    </Show>
);
