// RoleDropdown.tsx
import React, { useState } from "react";

type RoleDropdownProps = {
  roles: string[];
  onSelect: (role: string) => void;
};

const RoleDropdown = ({ roles, onSelect }: RoleDropdownProps) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleSelect = () => {
    onSelect(selectedRole);
  };

  return (
    <div>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button onClick={handleSelect}>Select</button>
    </div>
  );
};

export default RoleDropdown;
