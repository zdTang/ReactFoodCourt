import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-[3rem] rounded-[5px] border border-gray-300 font-inherit pl-2"
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
