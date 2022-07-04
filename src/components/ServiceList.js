import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  CloneButton,
} from "react-admin";

const ServiceList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="image" />
        <NumberField source="avgscore" />
        <CloneButton label="Edit" />
        {/* <EditButton basePath="/services" /> */}
        <DeleteButton basePath="/services" />
      </Datagrid>
    </List>
  );
};

export default ServiceList;
