"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div>
      <h2>There is a Error in the request.</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;
