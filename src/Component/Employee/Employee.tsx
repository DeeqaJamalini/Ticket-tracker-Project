// Employee.tsx
import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import RoleDropdown from "../RoleDropdown/RoleDropdown";

type EmployeeType = {
  id: number;
  name: string;
};

type EmployeeProps = {
  employees: EmployeeType[];
};

const Employee = ({ employees }: EmployeeProps) => {
  const initialEmployeeTickets: { [key: number]: number } = {};

  employees.forEach((employee) => {
    initialEmployeeTickets[employee.id] = 0;
  });

  const [employeeTickets, setEmployeeTickets] = useState(initialEmployeeTickets);

  const handleIncrement = (id: number) => {
    setEmployeeTickets((prevTickets) => ({
      ...prevTickets,
      [id]: prevTickets[id] + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    if (employeeTickets[id] > 0) {
      setEmployeeTickets((prevTickets) => ({
        ...prevTickets,
        [id]: prevTickets[id] - 1,
      }));
    }
  };

  return (
    <div>
      <h1>Ticket Managing System</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Tickets: {employeeTickets[employee.id]}</p>
          <button onClick={() => handleIncrement(employee.id)}>Increment</button>
          <button onClick={() => handleDecrement(employee.id)}>Decrement</button>
        </div>
      ))}
    </div>
  );
};

export default Employee;
