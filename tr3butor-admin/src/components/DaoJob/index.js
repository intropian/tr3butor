import React from 'react';
import {
  Create,
  SimpleForm,
  Edit,
  ReferenceInput,
  SelectInput,
  List,
  Datagrid,
  Show,
  TextField,
  ReferenceField,
  SimpleShowLayout,
  required
} from 'react-admin';
import {generateInputs, generateFields, generateShowFields} from 'utils/generateInputs';
import {daoJobEntity} from './daoJobEntity';

/*
const IncludedReferenceField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    const elemWithName = record[source];
    return <span>{elemWithName.name ?? elemWithName.id}</span>;
}*/

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
            <ReferenceField label="Dao" source="dao" reference="dao" link={false}>
                <TextField source="name" />
            </ReferenceField>
            {generateFields(daoJobEntity)}
        </Datagrid>
    </List>
);

export const DaoJobShow = props => (
    <Show title="View Dao Job" {...props}>
        <SimpleShowLayout>
            <ReferenceField label="Dao" source="dao" reference="dao" link={false}>
                <TextField source="name" />
            </ReferenceField>
            {generateShowFields(daoJobEntity)}
        </SimpleShowLayout>
    </Show>
);
