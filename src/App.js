import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import API from "./utils/API";
import Search from "./components/Search";
import EmployeeRow from "./components/EmployeeRow";

function App() {
  const [empArray, setEmpArray] = useState([]);

  useEffect(() => {
    API.search().then((res) => {
      setEmpArray(res.data.results);
    });
  }, []);
  console.log(empArray);
  return (
    <>
      <Header />
      <Table empArray={empArray} />
      {/* <Search empArray={empArray} /> */}
      {/* <EmployeeRow empArray={empArray} /> */}
    </>
  );
}
export default App;
