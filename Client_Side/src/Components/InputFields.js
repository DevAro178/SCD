import React, { useEffect, useState } from "react";
import "../index.css";

const InputFields = ({ placeholder, type }) => {
  let [value, setValue] = useState("");
  useEffect(() => {
    console.log("yell");
  }, [value]);
  return (
    <>
      <div className="wrap-input100">
        <input
          className={`input100 ${value && "has-val"}`}
          type={type}
          name={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          autoComplete="off"
          required
        />
        <span className="focus-input100" data-placeholder={placeholder}></span>
      </div>
      <br></br>
    </>
  );
};

export default InputFields;
