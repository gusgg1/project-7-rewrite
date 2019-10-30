import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import NotFound from './NotFound';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const Gallery = (props) => {
  const { isLoading, photos } = props;
  let phostosDisplay;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (photos.length > 0) {
    phostosDisplay = photos.map((photo) => (
      <Photo
        key={photo.id}
        id={photo.id}
        farm={photo.farm}
        secret={photo.secret}
        server={photo.server}
        alt={photo.title}
      />
    ));
  } else {
    return <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{phostosDisplay}</ul>
    </div>
  );
};

Gallery.propTypes = propTypes;

export default Gallery;
