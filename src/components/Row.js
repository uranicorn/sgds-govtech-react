import React from "react";
import PropTypes from "prop-types";
const Row = ({ children, multiline }) => {
  return (
    <div className={`row ${multiline ? "is-multiline" : ""}`}>{children}</div>
  );
};
Row.propTypes = {
  multiline: PropTypes.bool,
};
export default Row;
