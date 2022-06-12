import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

const RatingEdit = (props) => {
  return (
    <Edit title="Edit Rating" {...props}>
      <SimpleForm>
        <TextInput disable source="id" />
        <TextInput source="serviceid" />
        <TextInput source="username" />
        <NumberInput source="point" />
        <TextInput source="comment" />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Edit>
  );
};

export default RatingEdit;
