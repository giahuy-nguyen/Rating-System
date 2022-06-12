import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  // EditButton,
  // DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="password" />
        <TextField source="email" />
        <TextField source="role" />
        {/* <EditButton basePath="/users" />
        <DeleteButton basePath="/users" /> */}
      </Datagrid>
    </List>
  );
};

export default UserList;
