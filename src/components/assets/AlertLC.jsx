import PropTypes from 'prop-types';
import React from 'react';

export default function AlertLC(props) {
  const { alertLC } = props;

  if (!alertLC) {
    return null;
  }
  return (<div>Link copied!</div>);
}

AlertLC.propTypes = {
  alertLC: PropTypes.bool.isRequired,
};
