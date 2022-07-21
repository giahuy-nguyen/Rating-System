// import React from "react";
// import { Admin, Button, Resource } from "react-admin";
// import simpleRestProvider from "ra-data-json-server";
// import ServiceList from "../components/ServiceList";
// import ServiceCreate from "../components/ServiceCreate";
// import ServiceEdit from "../components/ServiceEdit";
// import UserList from "../components/UserList";
// import UserCreate from "../components/UserCreate";
// import UserEdit from "../components/UserEdit";
// import RatingList from "../components/RatingList";
// import RatingCreate from "../components/RatingCreate";
// import RatingEdit from "../components/RatingEdit";
// import MyLayout from "../MyLayout";
// import { theme } from "../theme";
// const restClient = simpleRestProvider("http://18.222.115.58:8086/api/v1");
// function AppAdmin() {
//   return (
//     <Admin layout={MyLayout} theme={theme} dataProvider={restClient}>
//       <Resource
//         name="services"
//         list={ServiceList}
//         create={ServiceCreate}
//         edit={ServiceEdit}
//       />
//       <Resource
//         name="user"
//         list={UserList}
//         create={UserCreate}
//         edit={UserEdit}
//       />
//       <Resource
//         name="rate"
//         list={RatingList}
//         create={RatingCreate}
//         edit={RatingEdit}
//       />
//     </Admin>
//   );
// }

import { Refine } from "@pankod/refine-core";
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine-antd/dist/styles.min.css";

const AppAdmin: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("http://18.222.115.58:8086/api/v1")}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
    />
  );
};

export default AppAdmin;
