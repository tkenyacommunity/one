import clsx from "clsx";
import React from "react";

const TextInput = ({ name, placeholder, value, className, onChange }) => {
  return (
    <input
      className={clsx(
        "border border-[#31363F] bg-slate-700 flex-1 rounded-lg px-3 outline-none",
        className
      )}
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
