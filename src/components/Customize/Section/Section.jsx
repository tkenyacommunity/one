import React from "react";
import cn from "clsx";

const Section = ({ title, children, className }) => {
  return (
    <div className={cn("my-6", className)}>
      <div className="text-slate-400 mb-2 font-semibold ">{title}</div>
      {children}
    </div>
  );
};

export default Section;
