import React from "react";

export const generateMetadata = async ({ params }) => {
  const id = params.id;
  const employee = await callEmployee(id);

  return {
    title: employee.title,
    description: employee.body,
  };
};

const callEmployee = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const id = params.id;
  const employee = await callEmployee(id);
  return (
    <div>
      <h2>{employee.title}</h2>
      <p>{employee.body}</p>
    </div>
  );
};

export default page;
