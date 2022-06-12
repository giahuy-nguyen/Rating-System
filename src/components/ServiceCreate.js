import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const ServiceCreate = (props) => {
  return (
    <Create title="Add new Service" {...props}>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
        <TextInput source="image" />
        <NumberInput source="avgscore" />
      </SimpleForm>
    </Create>
  );
};

export default ServiceCreate;
