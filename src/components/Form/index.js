import React from "react";
import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="service">Services</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input name="service" type="text" id="service" />
              <button type="button" className="add-btn">
                <span>Add new</span>
              </button>
            </div>
            <div className="second-division">
              <button type="button" className="remove-btn">
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="username">Your name</label>
        <input className="form-control" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          cols="20"
        ></textarea>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
