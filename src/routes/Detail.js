import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import banner from "../assets/banner.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Container } from "../components/Container";
import "./Detail.css";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import "react-confirm-alert/src/react-confirm-alert.css";

var dataObj = {};
const filter = createFilterOptions();
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [valuee, setValue] = React.useState("");
  const [getAvgscore, setEventStart] = useState();
  const triggerText = "Rate this service";
  const t = new Date(Date.now()).toGMTString();
  const outputDate = moment(t).format("yyyy-MM-DD");
  const options = ["Security", "Performance"];
  const handleChange = () => {
    let { options, input } = this.state;
    options.push(input);
  };
  const onSubmit = (event) => {
    event.preventDefault(event);
    dataObj.username = event.target.username.value;
    dataObj.comment = event.target.comment.value;
    dataObj.date = outputDate;
    console.log(event.target.username.value);
    console.log(event.target.comment.value);
    console.log(t);
    console.log(outputDate);
    console.log(dataObj);
    fetch("http://18.222.115.58:8086/api/v1/rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetch(`http://18.222.115.58:8086/api/v1/services/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetail(json.data);
        setLoading(false);
        setEventStart(json.data.avgscore);
      });
  });
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading....</span>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${banner})`,
            // backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          <div style={{ marginTop: "1px", marginLeft: "30px" }}>
            <img
              src={detail.image}
              alt="pic"
              width={400}
              height={350}
              style={{ borderRadius: "50px" }}
            />
          </div>
        </div>
      )}
      <div>
        <h1 style={{ marginLeft: "80px" }}>{detail.name}</h1>
        <h2>
          <Box style={{ marginLeft: "80px" }}>
            <Typography>
              Average Rating:{" "}
              <span STYLE="font-size:16.0pt; font-weight: bold;">
                {Math.round((detail.avgscore + Number.EPSILON) * 100) / 100}{" "}
              </span>
            </Typography>
            <Rating
              // style={{ marginTop: "20px" }}
              value={getAvgscore}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
                dataObj.point = newValue;
                dataObj.id = Math.floor(Math.random() * 100);
                dataObj.serviceid = detail.id;
                dataObj.serviceName = detail.name;
                console.log(dataObj);
                console.log(getAvgscore);
              }}
            />{" "}
            <Container triggerText={triggerText} onSubmit={onSubmit} />
          </Box>
        </h2>
        <h3 style={{ marginLeft: "80px" }}>Description </h3>{" "}
        <div className="font-link" style={{ marginLeft: "80px" }}>
          {detail.description}
        </div>
      </div>
    </div>
  );
}

export default Detail;
