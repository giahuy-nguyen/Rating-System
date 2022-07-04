import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function RatingTable(props) {
  const [rating, setRatings] = useState([]);
  const [ratingFilted, setFilted] = useState([]);
  const [startDate, setStartDateFilter] = useState("");
  const [endDate, setEndDateFilter] = useState("");
  const month = props.month;
  console.log(props.month);
  const check = () => {
    setStartDateFilter("2022-" + month + "-01");
    setEndDateFilter("2022-" + month + "-31");
    fetch(`http://18.222.115.58:8086/api/v1/rate`)
      .then((response) => response.json())
      .then((json) => {
        setRatings(json);
        const date = rating.filter(
          (item) =>
            new Date(item.date).getTime() > new Date(startDate) &&
            new Date(item.date).getTime() < new Date(endDate)
        );

        // const newState = date.map((obj) => {
        //   // 👇️ if id equals 2 replace object
        //   if (obj.serviceid === 1) {
        //     return { username: "Amazon EC2" };
        //   } else if (obj.serviceid === 2) {
        //     return { username: "Amazon RDS" };
        //   } else if (obj.serviceid === 21) {
        //     return { username: "AWS Elastic Cache" };
        //   } else if (obj.serviceid === 5) {
        //     return { username: "Amazon VPC" };
        //   }
        // });
        setFilted(date);
      });
  };
  // console.log(startDate);
  // console.log(props.month);
  console.log(ratingFilted);
  return (
    <TableContainer component={Paper}>
      <button onClick={check} type="checkdata">
        Check
      </button>
      <Table sx={{ minWidth: 120 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <b>Service</b>
            </TableCell>
            <TableCell align="center">
              <b>Username</b>
            </TableCell>
            <TableCell align="center">
              <b>Point</b>
            </TableCell>
            <TableCell align="center">
              <b>Comment</b>
            </TableCell>
            <TableCell align="center">
              <b>Date Rated</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ratingFilted
            .sort((a, b) => a.point - b.point)
            .map((rate) => (
              <TableRow
                key={rate.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rate.serviceName}
                </TableCell>
                <TableCell align="center">{rate.username}</TableCell>
                <TableCell align="center">{rate.point}</TableCell>
                <TableCell align="center">{rate.comment}</TableCell>
                <TableCell align="center">{rate.date}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
