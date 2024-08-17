import React from "react";
const callProduct = async (id) => {
  const res = await fetch(
    `https://dummy.restapiexample.com/api/v1/employee/${id}`
  );
  const data = await res.json();
  return data.data;
};

const page = async ({ searchParams }) => {
  const id = searchParams.id;
  const employee = await callProduct(id);

  return <div>{employee.employee_name}</div>;
};

export default page;
