import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
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
