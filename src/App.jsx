import React from "react";
import "./App.css";
import { Button, ListItem } from "./custom/index";
import { employees as initialEmployees } from "./utils/employees";
export default function App() {
  // search state to store search input
  const [search, setSearch] = React.useState("");
  const [employees, setEmployees] = React.useState(initialEmployees);

  // to filter employees based on search input
  const employeesList = employees.filter((employee) => {
    const fullName = (
      employee.firstName +
      " " +
      employee.lastName
    ).toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  // Toggle employee team status
  const handleToggleTeam = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id
          ? { ...employee, isInTeam: !employee.isInTeam }
          : employee
      )
    );
  };
  return (
    <>
      <h2 className="title">Add members to Front-end development team</h2>
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="search"
          placeholder="Find Members"
          name="searchEmps"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="list-container">
        {employeesList.map((employee) => {
          return (
            <ListItem
              key={employee.id}
              id={employee.id}
              fullName={employee.firstName + " " + employee.lastName}
              isInTeam={employee.isInTeam}
              onToggleTeam={handleToggleTeam}
            />
          );
        })}
      </div>
      <div className="button-container">
        <Button
          text={"Cancel"}
          bg_color={["rgb(255,20,45)","rgb(255,25,12)",]}
          txt_color="white"
        />
        <Button
          text={"SAVE"}
          bg_color={["rgb(108,183,255)", "rgb(121,133,255)"]}
          txt_color="white"
        />
      </div>
    </>
  );
}
