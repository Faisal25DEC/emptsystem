function createData(
  employeeId,
  firstName,
  lastName,
  department,
  position,
  email,
  phoneNumber,
  joiningDate
) {
  return {
    employeeId,
    name: {
      firstName,
      lastName,
    },
    department,
    position,
    email,
    phoneNumber,
    joiningDate,
    subordinates: [
      {
        id: 1,
        name: "Faisal",
        joiningDate: "2022-05-23",
        department: "Medical",
      },
      {
        id: 1,
        name: "Faisal",
        joiningDate: "2022-05-23",
        department: "Medical",
      },
    ],
  };
}

export const departmentOptions = ["Engineering", "Medical", "Other"];
export const positionOptions = ["SDE", "SDE-2", "Nurse", "Builder"];
export default createData;
