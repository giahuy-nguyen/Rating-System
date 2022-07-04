import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const ServiceEdit = (props) => {
  return (
    <Edit title="Edit Service" {...props}>
      <SimpleForm>
        <TextInput disable source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
        <TextInput source="image" />
        <NumberInput source="avgscore" />
      </SimpleForm>
    </Edit>
  );
};

export default ServiceEdit;
