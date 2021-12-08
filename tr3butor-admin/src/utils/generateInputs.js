import {
  TextInput,
  DateField,
  TextField,
} from 'react-admin';

export function generateInputs (entity)  {
    return Object.entries(entity).map(([name, type], idx) => {
            if(type==='string') {
                return  <TextInput source={name} key={`${name}_${idx}`}/>;
            } else if (type === '[string]') {
                return <div key={name}>
                    <TextInput source={`${name}[]`} key={`${name}_${idx}_1`} />
                    <TextInput source={`${name}[]`} key={`${name}_${idx}_2`} />
                    <TextInput source={`${name}[]`} key={`${name}_${idx}_3`} />
                </div>;
            } else if (type === 'Date') {
                return <DateField source={name} key={name}/>;
            }
            return undefined;
        });
}
export function generateFields (entity)  {
    return Object.entries(entity).map(([name, type], idx) => {
            if(type==='string') {
                return  <TextField source={name} key={`${name}_${idx}`}/>;
            } else if (type === '[string]') {
                return <div key={name}>
                    <TextField source={`${name}[]`} key={`${name}_${idx}_1`} />
                    <TextField source={`${name}[]`} key={`${name}_${idx}_2`} />
                    <TextField source={`${name}[]`} key={`${name}_${idx}_3`} />
                </div>;
            } else if (type === 'Date') {
                return <DateField source={name} key={name}/>;
            }
            return undefined;
        });
}

// https://marmelab.com/react-admin/List.html
