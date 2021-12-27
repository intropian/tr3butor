import {
  TextInput,
  DateField,
  TextField,
  ArrayInput,
  ArrayField,
  SimpleFormIterator,
  Datagrid,
  SingleFieldList,
  ChipField,
  RichTextField,
} from 'react-admin';
import { useRecordContext } from 'ra-core';
import RichTextInput from 'ra-input-rich-text';


function SimpleArrayContent(props) {
    const array = Object.values(props.data);
    if(array && Array.isArray(array)) {
        return <ul>
            {array.map(item => <li>{item}</li>)}
        </ul>;
    }
    return null;
}
export function generateInputs (entity)  {
    return Object.entries(entity).map(([name, type], idx) => {
            if(type ==='richtext') {
                return <RichTextInput source={name} key={name}/>;
            } else if(type ==='string') {
                return  <TextInput source={name} key={`${name}_${idx}`}/>;
            } else if (type === '[string]') {
                return <ArrayInput source={name} key={name}>
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput>;
            } else if (type === 'Date') {
                return <DateField source={name} key={name}/>;
            } else if (type === '[text_blocks]') {
                return <ArrayInput source={name} key={name}>
                    <SimpleFormIterator>
                        <TextInput source="title" />
                        <RichTextInput source="content" />
                    </SimpleFormIterator>
                </ArrayInput>
            }
            return undefined;
        });
}
export function generateFields (entity)  {
    return Object.entries(entity).map(([name, type], idx) => {
            if(type === 'richtext') {
                return <RichTextField source={name} key={name}/>;
            } else if(type==='string') {
                return  <TextField source={name} key={`${name}_${idx}`}/>;
            } else if (type === '[string]') {
                return <ArrayField source={name} key={name} >
                    <SimpleArrayContent />
                </ArrayField>
                //<SimpleArray source={name} key={name} />;
            } else if (type === 'Date') {
                return <DateField source={name} key={name}/>;
            } else if (type === '[text_blocks]') {
                console.log('[text_blocks] name=', name);
                return <ArrayField source={name} key={name}>
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ArrayField>
            }
            return undefined;
        });
}
export function generateShowFields (entity)  {
    return Object.entries(entity).map(([name, type], idx) => {
            if(type === 'richtext') {
                return <RichTextField source={name} key={name}/>;
            } else if(type==='string') {
                return  <TextField source={name} key={`${name}_${idx}`}/>;
            } else if (type === '[string]') {
                return <ArrayField source={name} key={name} >
                    <SimpleArrayContent />
                </ArrayField>
            } else if (type === 'Date') {
                return <DateField source={name} key={name}/>;
            } else if (type === '[text_blocks]') {
                return <ArrayField source="text_blocks" key={name}>
                    <Datagrid>
                        <TextField source="title" />
                        <RichTextField source="content" />
                    </Datagrid>
                </ArrayField>
            }
            return undefined;
        });
}

// https://marmelab.com/react-admin/List.html
