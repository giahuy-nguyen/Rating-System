import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-json-server";
import ServiceList from "../components/ServiceList";
import ServiceCreate from "../components/ServiceCreate";
import ServiceEdit from "../components/ServiceEdit";
import UserList from "../components/UserList";
import UserCreate from "../components/UserCreate";
import UserEdit from "../components/UserEdit";
import RatingList from "../components/RatingList";
import RatingCreate from "../components/RatingCreate";
import RatingEdit from "../components/RatingEdit";
const restClient = simpleRestProvider("http://18.222.115.58:8086/api/v1");

function AppAdmin() {
  return (
    <Admin dataProvider={restClient}>
      <Resource
        name="services"
        list={ServiceList}
        create={ServiceCreate}
        edit={ServiceEdit}
      />
      <Resource
        name="user"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="rate"
        list={RatingList}
        create={RatingCreate}
        edit={RatingEdit}
      />
    </Admin>
    // <main className="App">
    //   <Login />
    // </main>
  );
}

export default AppAdmin;
