# Employee Ticket Management System

The Employee Ticket Management System is a React-based web application designed to facilitate the management of tickets assigned to employees within an organization. The system provides a user-friendly interface with features such as role-based filtering, employee search functionality, and individual ticket count management.

## Features

- **Role Filtering:** Utilize a dropdown menu to filter employees based on their roles.
- **Employee Search:** Easily find employees by name using the search box.
- **Ticket Management:** Increment or decrement the ticket count for each employee individually.

## Components

### 1. SearchBox Component

The `SearchBox` component provides a search input for users to enter and search for employees by name.

### 2. RoleDropdown Component

The `RoleDropdown` component offers a dropdown menu for selecting roles, allowing users to filter employees based on their roles.

### 3. Employee Component

The `Employee` component serves as the main interface, displaying a list of employees with their names, roles, and current ticket counts. Users can increment or decrement ticket counts for each employee.

### 4. App Component

The `App` component is the entry point of the application, rendering the `Employee` component with sample data.

