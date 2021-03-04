import React from "react";
import "./styles.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <strong>Sort by:</strong>
          </th>
          <th scope="col">
            <button
              onClick={() => props.handleFirstSort()}
              className="btn"
              id="fname"
            >
              <strong>First Name</strong>
            </button>
            <button
              onClick={() => props.handleLastSort()}
              className="btn"
              id="lname"
            >
              <strong>Last Name</strong>
            </button>
          </th>
          <th scope="col">
            <strong>Phone</strong>
          </th>
          <th scope="col">
            <strong>Email</strong>
          </th>
          <th scope="col">
            <button onClick={() => props.handleCitySort()} className="btn">
              <strong>City</strong>
            </button>
          </th>
          <th scope="col">
            <button onClick={() => props.handleTheStateSort()} className="btn">
              <strong>State</strong>
            </button>
          </th>
          <th scope="col">
            <button onClick={() => props.handleReset()} className="btn">
              <strong>Reset your Search</strong>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
