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
              onClick={() => props.handleSort("name.first")}
              className="btn"
            >
              <strong>First Name</strong>
            </button>
            <button
              onClick={() => props.handleSort("name[first]")}
              className="btn"
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
            <button
              onClick={() => props.handleSort("location.city")}
              className="btn"
            >
              <strong>City</strong>
            </button>
          </th>
          <th scope="col">
            <button
              onClick={() => props.handleSort("location.state")}
              className="btn"
            >
              <strong>State</strong>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
