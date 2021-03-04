import React from "react";

function EmployeeRow(props) {
  console.log(props);
  return (
    <tr>
      <td>
        <img src={props.emp.picture.thumbnail} alt={props.emp.name.first} />
      </td>
      <td>
        {props.emp.name.first} {props.emp.name.last}
      </td>
      <td>{props.emp.phone}</td>
      <td>{props.emp.email}</td>
      <td>{props.emp.location.city}</td>
      <td>{props.emp.location.state}</td>
    </tr>
  );
}

export default EmployeeRow;
