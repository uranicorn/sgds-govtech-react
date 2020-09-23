import React from "react";
import PropTypes from "prop-types";
const Col = ({ children, size }) => {
  return <div className={`col ${size ? "is-" + size : ""}`}>{children}</div>;
};
Col.propTypes = {
  size: PropTypes.number,
};
export default Col;
