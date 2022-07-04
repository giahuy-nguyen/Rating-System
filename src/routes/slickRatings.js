import React, { Component } from "react";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

function MultipleItems(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://18.222.115.58:8086/api/v1/rate`)
      .then((response) => response.json())
      .then((json) => {
        setServices(json);
      });
  }, []);
  return (
    <div>
      <h2 style={{ marginLeft: "65px" }}> Other Ratings </h2>
      <div
        style={{
          border: "2px solid ",
          marginLeft: "30px",
          marginRight: "20px",
          marginBottom: "7px",
        }}
      >
        <span>
          {services.map((service, index) =>
            service.serviceid === props.id ? (
              <span key={index}>
                <h3>
                  {service.username}{" "}
                  <span>
                    <Rating
                      name="read-only"
                      value={service.point}
                      precision={0.1}
                      readOnly
                    />{" "}
                  </span>
                </h3>
                <p>{service.comment}</p>
              </span>
            ) : null
          )}
        </span>
      </div>
    </div>
  );
}

export default MultipleItems;
