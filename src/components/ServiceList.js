import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
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
        <EditButton basePath="/services" />
        <DeleteButton basePath="/services" />
      </Datagrid>
    </List>
  );
};

export default ServiceList;
