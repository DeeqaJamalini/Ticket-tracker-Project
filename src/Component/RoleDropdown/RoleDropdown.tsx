
import React from "react";

type RoleDropdownProps = {
  employees: { role: string }[];
  onSelectRole: (selectedRole: string) => void;
};

const RoleDropdown = ({ employees, onSelectRole }: RoleDropdownProps) => {
    const roles = Array.from(new Set(employees.map((employee) => employee.role)));
  
    return (
      <div>
        <label>Search by Role:</label>
        <select onChange={(e) => onSelectRole(e.target.value)}>
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    );
  };
  

export default RoleDropdown;
