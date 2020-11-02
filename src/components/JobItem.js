import React from "react";

const JobItem = (props) => {
  return (
    <div
      className={props.className}
      style={{ border: `10px solid ${props.color}` }}
    >
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </div>
  );
};

export default JobItem;
