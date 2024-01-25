import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import createData, { departmentOptions, positionOptions } from ".";
import Row from "./_legos/Row/Row";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const rows = [
  createData(
    1,
    "Faisal",
    "Mohd",
    "Engineering",
    "Builder",
    "faisal1@gmail.com",
    9136858295,
    "2023-08-21"
  ),
  createData(
    2,
    "Tayyab",
    "Ashraf",
    "Engineering",
    "SDE",
    "faisal1@gmail.com",
    9136858295,
    "2023-08-21"
  ),
  createData(
    3,
    "Zahid",
    "Malik",
    "Engineering",
    "SDE",
    "faisal1@gmail.com",
    9136858295,
    "2023-08-28"
  ),
  createData(
    4,
    "Umer",
    "Mohd",
    "Medical",
    "Nurse",
    "faisal1@gmail.com",
    9136858295,
    "2023-08-21"
  ),
  createData(
    5,
    "Arjun",
    "Dangi",
    "Engineering",
    "SDE-2",
    "faisal1@gmail.com",
    9136858295,
    "2023-08-21"
  ),
];

const initialFormData = {
  id: "",
  firstName: "",
  lastName: "",
  department: "",
  position: "",
  email: "",
  phoneNumber: "",
  joiningDate: "",
};

export default function CollapsibleTable() {
  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const [rowsData, setRowsData] = useState(rows);

  const handleClick = () => {
    let filteredData = [...rows];
    console.log(filteredData);
    if (name !== "") {
      filteredData = filteredData.filter(
        (item) =>
          item.name.firstName.toLowerCase().includes(name.toLowerCase()) ||
          item.name.lastName.toLowerCase().includes(name.toLowerCase())
      );
      console.log(filteredData);
    }
    if (department !== "") {
      console.log(department);
      filteredData = filteredData.filter((item) => {
        console.log(item.department);
        return item.department === department;
      });
      console.log(filteredData);
    }
    if (position !== "") {
      console.log(filteredData);
      filteredData = filteredData.filter((item) => item.position === position);
    }

    console.log(filteredData);
    setShowDatePicker(false);
    setRowsData([...filteredData]);
  };
  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      firstName,
      lastName,
      department,
      position,
      joiningDate,
      email,
      phoneNumber,
    } = formData;
    setRowsData([
      ...rowsData,
      createData(
        id,
        firstName,
        lastName,
        department,
        position,
        email,
        phoneNumber,
        joiningDate
      ),
    ]);
    handleClose();
  };
  console.log(formData);
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <div className="filter-container">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name=""
          id=""
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
        >
          <option value="">--Choose Department--</option>
          {departmentOptions.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select
          name=""
          id=""
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option name="" id="" value="">
            --Choose Position--
          </option>
          {positionOptions.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className="joining-date-container">
          <button
            className="joining-date-button"
            onClick={() => setShowDatePicker((prev) => !prev)}
          >
            Joining Date range
          </button>
          {showDatePicker && (
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
          )}
        </div>{" "}
        <button className="apply-filter" onClick={handleClick}>
          Apply filters
        </button>
        <button className="button" onClick={handleOpen}>
          Add Employee
        </button>
      </div>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", margin: "auto", marginTop: "50px" }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">department</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Joining Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        position="center"
      >
        <div className="form-container">
          <form action="" className="form" onSubmit={handleSubmit}>
            <h1>Add An Employee</h1>
            <input
              type="text"
              className="input"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleFormFieldChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input"
              required
              onChange={handleFormFieldChange}
            />
            <select
              name="department"
              className="input"
              id=""
              required
              onChange={handleFormFieldChange}
            >
              <option value="">--Choose Department--</option>
              {departmentOptions.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select
              className="input"
              name="position"
              id=""
              required
              onChange={handleFormFieldChange}
            >
              <option value="">--Choose Position--</option>
              {positionOptions.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <input
              type="number"
              className="input"
              placeholder="Phone Number"
              name="phoneNumber"
              required
              onChange={handleFormFieldChange}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
              onChange={handleFormFieldChange}
            />
            <button className="button">Submit form</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
