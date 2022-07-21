import React from "react";
import Rating from "@mui/material/Rating";

export function Rate(prop) {
  const [value, setValue] = React.useState(0);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        prop = value;
      }}
    />
  );
}
export default Rate;
