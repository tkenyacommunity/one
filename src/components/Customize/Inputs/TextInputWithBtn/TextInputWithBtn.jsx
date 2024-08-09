import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const TextInputWithBtn = ({
  name,
  placeholder,
  value,
  onChange,
  className,
  onClick,
}) => {
  return (
    <div className="flex gap-2 odd:my-3 ">
      <TextInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      <Button onClick={onClick}>Save</Button>
    </div>
  );
};

export default TextInputWithBtn;
