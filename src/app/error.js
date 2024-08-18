"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h2>There is a Error in the request.</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default Error;
