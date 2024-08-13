import React from "react";
import css from "../../page.module.css";
import addCss from "./bookadd.module.css";

const page = () => {
  return (
    <div className={css.description}>
      <h2 className={addCss.header}>Add Book</h2>

      <img src={"/preview.jpg"} />
    </div>
  );
};

export default page;
