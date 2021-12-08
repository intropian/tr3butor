import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  List,
  Datagrid,
  Filter,
  required,
} from 'react-admin';
import {generateInputs,generateFields} from 'utils/generateInputs';
import {blogArticleEntity} from './blogArticleEntity';

export const BlogArticleCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
        {generateInputs(blogArticleEntity)}
    </SimpleForm>
  </Create>
);
export const BlogArticleEdit = props => (
  <Edit {...props} title="Edit entity">
    <SimpleForm redirect="list">
      {generateInputs(blogArticleEntity)}
    </SimpleForm>
  </Edit>
);
export const BlogArticleList = props => (
    <List {...props}>
        <Datagrid>
            {generateFields(blogArticleEntity)}
        </Datagrid>
    </List>
);
