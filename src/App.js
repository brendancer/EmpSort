import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Table from "./components/Table";
import EmployeeRow from "./components/EmployeeRow";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [empArr, setEmpArr] = useState([]);
  const [empSortArr, setEmpSortArr] = useState([]);
  const [firstNameArray, setFirstNameArray] = useState([]);
  const [lastNameArray, setLastNameArray] = useState([]);
  const [cityArray, setCityArray] = useState([]);
  const [theStateArray, setTheStateArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    API.search().then((res) => {
      setEmpArr(res.data.results);
      setEmpSortArr(res.data.results);
      setOriginalArray(res.data.results);
    });
  }, []);

  useEffect(() => {
    let arr = [];
    arr = [...empSortArr].filter((emp) => {
      return (
        emp.name.first.includes(searchFilter) ||
        emp.name.last.includes(searchFilter)
      );
    });
    setEmpSortArr(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilter]);

  function handleFirstSort() {
    let firstName = empArr.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setFirstNameArray(firstName);
    setEmpArr(firstNameArray);
    return setEmpArr(originalArray);
  }
  function handleLastSort() {
    let lastName = empArr.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    setLastNameArray(lastName);
    setEmpArr(lastNameArray);
    return setEmpArr(originalArray);
  }

  function handleCitySort() {
    let city = empArr.sort((a, b) =>
      a.location.city > b.location.city ? 1 : -1
    );
    setCityArray(city);
    setEmpArr(cityArray);
    return setEmpArr(originalArray);
  }
  function handleTheStateSort() {
    let theState = empArr.sort((a, b) =>
      a.location.state > b.location.state ? 1 : -1
    );
    setTheStateArray(theState);
    setEmpArr(theStateArray);
    return setEmpArr(originalArray);
  }
  function handleReset() {
    window.location.reload(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setEmpSortArr(empArr);
    } else {
      setSearchFilter(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      <Table
        handleFirstSort={handleFirstSort}
        handleLastSort={handleLastSort}
        handleCitySort={handleCitySort}
        handleTheStateSort={handleTheStateSort}
        handleReset={handleReset}
      >
        {empSortArr.map((emp) => {
          return <EmployeeRow key={emp.login.uuid} emp={emp} />;
        })}
      </Table>
    </>
  );
}

export default App;
