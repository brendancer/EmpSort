import React, { useState, useEffect } from "react";

function Table(props) {
  const [tableArray, setTableArray] = useState([]);
  const [firstNameArray, setFirstNameArray] = useState([]);
  const [lastNameArray, setLastNameArray] = useState([]);

  useEffect(() => {
    setTableArray(props.empArray);
    console.log(tableArray);
  }, [props.empArray, tableArray]);

  function handleFirstSort() {
    let firstName = tableArray.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setFirstNameArray(firstName);
    setTableArray(firstNameArray);
    console.log(tableArray);
  }
  function handleLastSort() {
    let lastName = tableArray.sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    setLastNameArray(lastName);
    setTableArray(lastNameArray);
  }

  // const sortLast = (props) => {
  //   let lastNameArray = props.empArray.sort((a, b) =>
  //     a.name.last > b.name.last ? 1 : -1
  //   );
  //   setTableArray(lastNameArray);
  // };

  return (
    <>
      <button onClick={handleFirstSort}>Sort by First Name</button>
      <button onClick={handleLastSort}>Sort by Last Name</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {tableArray.map((employees) => (
            <tr key={employees.login.uuid}>
              <td>{employees.name.first}</td>
              <td>{employees.name.last}</td>
              <td>{employees.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
