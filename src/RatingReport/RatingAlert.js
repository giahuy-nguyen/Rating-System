import { useEffect, useState } from "react";
import * as React from "react";
import RatingTable from "./RatingTable";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Alert() {
  const [loading, setLoading] = useState(true);
  const [value, setValues] = useState("");
  const [month, setMonth] = useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  // const changeHandler = (e) => {
  //   setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={1}>Jan</MenuItem>
          <MenuItem value={2}>Feb</MenuItem>
          <MenuItem value={3}>Mar</MenuItem>
          <MenuItem value={4}>Apr</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>Jun</MenuItem>
          <MenuItem value={7}>Jul</MenuItem>
          <MenuItem value={8}>Aug</MenuItem>
          <MenuItem value={9}>Sep</MenuItem>
          <MenuItem value={10}>Oct</MenuItem>
          <MenuItem value={11}>Nov</MenuItem>
          <MenuItem value={12}>Dec</MenuItem>
        </Select>
      </FormControl>
      <div>
        <RatingTable month={month} />
      </div>
    </Box>
  );
}

export default Alert;
