import React from "react";
import PropTypes from "prop-types";

export const MyInput = React.forwardRef(
  ({ name, id, type, label, ...rest }, ref) => {
    return (
      <div className="form-input">
        <label htmlFor={id ?? name}>{label}</label>
        <input type={type} id={id ?? name} name={name} {...rest} ref={ref} />
      </div>
    );
  }
);

MyInput.displayName = "MyInput";

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
