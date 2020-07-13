import React from "react";
import PropTypes from "prop-types";
import url from "url";
import Table from "react-bootstrap/Table";

const Cell = ({ data }) => (
  <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
