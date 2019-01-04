import PropTypes from "prop-types";

export const COMMENT = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const POST = {
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};
