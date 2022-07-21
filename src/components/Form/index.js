import React from "react";
import { useState } from "react";
import "./Form.css";
import { Rate } from "./Rate.js";

export const Form = ({ onSubmit }) => {
  const [optionList, setOptionList] = useState([{ option: "", rate: "" }]);
  const handleOptionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...optionList];
    list[index][name] = value;
    setOptionList(list);
    console.log(optionList.rate);
  };

  const handleOptionRemove = (index) => {
    const list = [...optionList];
    list.splice(index, 1);
    setOptionList(list);
  };

  const handleOptionAdd = () => {
    setOptionList([...optionList, { option: "" }]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="option">Other option(s)</label>

        {optionList.map((singleOption, index) => (
          <div key={index} className="options">
            <div className="first-division">
              <div className="combined">
                <input
                  name="option"
                  type="text"
                  id="option"
                  value={singleOption.option}
                  onChange={(e) => handleOptionChange(e, index)}
                  required
                />
                <Rate rate={singleOption.rate} />
                {optionList.length - 1 === index && optionList.length < 5 && (
                  <button onClick={handleOptionAdd} className="button">
                    <span>Add more</span>
                  </button>
                )}
              </div>
            </div>
            <div className="second-division">
              {optionList.length !== 1 && (
                <button
                  type="buttonn"
                  onClick={() => handleOptionRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
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
