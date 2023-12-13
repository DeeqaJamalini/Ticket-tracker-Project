
import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import RoleDropdown from "../RoleDropdown/RoleDropdown";

type EmployeeType = {
  id: number;
  name: string;
  role: string;
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
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeType[]>(employees);
  //const [selectedRole, setSelectedRole] = useState<string | null>(null);

 
  const handleSearch = (searchTerm: string) => {
    const filteredEmployees = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredEmployees(filteredEmployees);
  };

  

  const handleRoleDropdown = (selectedRole: string) => {

    const filteredEmployees = employees.filter((employee) => {
      return employee.role.toLowerCase().includes(selectedRole.toLowerCase());
    });

    setFilteredEmployees(filteredEmployees);
  }


  
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
      <RoleDropdown  employees={employees} onSelectRole={handleRoleDropdown} />
      <SearchBox onSearch={handleSearch} />
      {filteredEmployees.map((employee) => (
        <div key={employee.id}>
          <p>Name: {employee.name}</p>
          <p>Role: {employee.role}</p>
          <p>Tickets: {employeeTickets[employee.id]}</p>
          <button onClick={() => handleIncrement(employee.id)}>Increment</button>
          <button onClick={() => handleDecrement(employee.id)}>Decrement</button>
        </div>
      ))}
    </div>
  );
};

export default Employee;
