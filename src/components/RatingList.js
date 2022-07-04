import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const RatingList = (props) => {
  return (
    <List {...props}>
      <div style={{ display: "flex" }}>
        <button
          style={{ marginLeft: "auto" }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/admin/alert";
          }}
        >
          Rating Alert
        </button>
      </div>
      <Datagrid>
        <TextField source="id" />
        <TextField source="serviceid" />
        <TextField source="username" />
        <NumberField source="point" />
        <TextField source="comment" />
        <DateField source="date" />
        {/* <EditButton basePath="/rating" /> */}
        <DeleteButton basePath="/rating" />
      </Datagrid>
    </List>
  );
};

export default RatingList;
