import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  farm: PropTypes.number.isRequired,
  server: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Photo = (props) => {
  const {
    farm, server, id, secret, alt,
  } = props;
  const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <li>
      <img src={url} alt={alt} />
    </li>
  );
};

Photo.propTypes = propTypes;

export default Photo;
