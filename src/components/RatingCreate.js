import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

const RatingCreate = (props) => {
  return (
    <Create title="Add new Rating" {...props}>
      <SimpleForm>
        <TextInput disable source="id" />
        <TextInput source="serviceid" />
        <TextInput source="username" />
        <NumberInput source="point" />
        <TextInput source="comment" />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Create>
  );
};

export default RatingCreate;
