import "./App.css";
import CollapsibleTable from "./components/Table/Table";
// **Question:**

// Imagine you're tasked with building a React app that displays a table of employees using the Material-UI library, specifically the collapsible table component from [Material-UI React Table](https://mui.com/material-ui/react-table/#collapsible-table

// React Table component - Material UI
// Tables display sets of data. They can be fully customized.
// mui.com
// ). Each employee in the table should have the following details:

// 1. **Employee Details:**
//    - Employee ID
//    - Name (First Name, Last Name)
//    - Position/Title
//    - Department
//    - Email Address
//    - Phone Number
//    - Date of Joining

// 2. **Reporting Structure:**
//    - Manager (Employee ID or Name)
//    - Subordinates (List of Employee IDs or Names reporting to the employee)

// The table should initially show a list of employees, and when you click on a row, it should expand to reveal a sublist of employees who report to the selected employee.

// Additionally, the app needs to have filter options for applicable fields. Users should be able to filter the employee list based on the following criteria:

// 3. **Filter Options:**
//    - Name
//    - Department
//    - Position/Title
//    - Date of Joining (range)
//    - Any other relevant fields specific to your organization

// Can you outline the steps you would take to implement this functionality? Please consider the components, state management, and any additional libraries or tools you might use in the process. Feel free to provide code snippets or a high-level overview of your approach.
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "10px 0px" }}>
        Employee Management System
      </h1>
      <CollapsibleTable />
    </div>
  );
}

export default App;
