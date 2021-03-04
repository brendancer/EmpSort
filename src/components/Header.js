import React from "react";

function Header() {
  return (
    <>
      <header>
        <h1>Employee Directory</h1>
      </header>
      <p>
        Sort the table alphabetically by clicking the table head buttons. After
        a search is completed, click the button to reset your search. Each
        search can be completed once before reset.
      </p>
      <p>
        Search for an employee by entering the first few letters of either their
        first name or last name. (The search field is case sensitive)
      </p>
    </>
  );
}
export default Header;
