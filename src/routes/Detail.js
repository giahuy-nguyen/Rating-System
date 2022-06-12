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

var dataObj = {};
function Detail() {
  const [loading, setLoading] = useState(true);
  const { uuid } = useParams();
  const [detail, setDetail] = useState({});
  const [valuee, setValue] = React.useState("");
  const [getAvgscore, setEventStart] = useState();
  const triggerText = "Rate this service";
  const t = new Date(Date.now()).toGMTString();
  const onSubmit = (event) => {
    event.preventDefault(event);
    dataObj.username = event.target.username.value;
    dataObj.comment = event.target.comment.value;
    dataObj.date = t;
    console.log(event.target.username.value);
    console.log(event.target.comment.value);
    console.log(t);
    fetch("http://18.222.115.58:8086/api/v1/rate/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(dataObj), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const answer = window.confirm("Do you want to submit this?");
    if (answer) {
      // Save it!
      console.log("Thing was saved to the database.");
      window.location.reload(false);
    } else {
      // Do nothing!
      console.log("Thing was not saved to the database.");
    }
  };
  useEffect(() => {
    fetch(`http://18.222.115.58:8086/api/v1/services/${uuid}`)
      .then((response) => response.json())
      .then((json) => {
        setDetail(json.data);
        setLoading(false);
        setEventStart(json.data.avgscore);
      });
  }, []);
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
          <div style={{ marginLeft: "40px" }}>
            <img src={detail.image} alt="pic" width={400} height={350} />
          </div>
        </div>
      )}
      <div>
        <h1 style={{ marginLeft: "80px" }}>{detail.name}</h1>
        <h2>
          <Box
            sx={{
              "& > legend": { mt: 3 },
            }}
            style={{ marginLeft: "80px" }}
          >
            <Typography component="legend">
              Average Rating:{" "}
              <span STYLE="font-size:16.0pt; font-weight: bold;">
                {detail.avgscore}
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
