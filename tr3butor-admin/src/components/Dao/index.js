import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  List,
  Datagrid,
  Filter,
  required,
  email,
} from 'react-admin';
import {generateInputs, generateFields} from 'utils/generateInputs';
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
