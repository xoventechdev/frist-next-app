import Link from "next/link";
import React from "react";

const EmployeeList = async () => {
  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  const data = await res.json();
  return data.data;
};

const page = async () => {
  const employees = await EmployeeList();
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>
                <Link
                  href={{
                    pathname: "/employees/view",
                    query: { id: employee.id },
                  }}
                  className="btn btn-primary"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
