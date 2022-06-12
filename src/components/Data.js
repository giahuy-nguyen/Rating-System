// import PropTypes from "prop-types";
// import Detail from "../routes/Detail";
// import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import banner from "./component/assets/banner.png";

// function Data({ serviceImg, name, desc, avgScore }) {
//   const [value, setValue] = React.useState(2);
//   return (
//     <div>
//       <img src={serviceImg} alt="pic" />
//       <div>
//         <h1>{name}</h1>
//         <h2>{desc}</h2>
//       </div>
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={avgScore}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </div>
//   );
// }

// Detail.propTypes = {
//   avgScore: PropTypes.number.isRequired,
//   serviceImg: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
// };

// export default Data;
