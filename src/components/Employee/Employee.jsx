import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = ({ employeeArr }) => {
  const showAllEmployees = () => {
    return employeeArr.map((employee) => (
      <div className="employeeBox">
        <h3 className="employee__name">{employee.name}</h3>
        <h3 className="employee__role">{employee.role}</h3>
        <Counter employee={employee} />
      </div>
    ));
  };

  return <>{showAllEmployees()}</>;
};

export default Employee;
