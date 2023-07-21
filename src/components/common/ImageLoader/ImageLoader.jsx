import PropType from 'prop-types';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const ImageLoader = ({ src, alt, className, circle, height, width }) => {
  const loadedImages = {};
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    loadedImages[src] = true;
    setLoaded(true);
  }

  return (
    <>
      {!loaded && (
        <Skeleton
        circle={circle}
        height={height}
        width={width}
        className={`${className}`}
        />
      )}
      <img
        alt={alt || ''}
        className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
        onLoad={onLoad}
        style={{ display: !loaded ? 'none' : undefined }}
        src={src}
      />
    </>
  );
};

ImageLoader.defaultProps = {
  alt: 'Image',
  circle: false,
  width: '100%',
  height: '100%'
}

ImageLoader.propTypes = {
  src: PropType.string.isRequired,
  alt: PropType.string,
  className: PropType.string,
  circle: PropType.bool,
  height: PropType.string,
  width: PropType.string,
};

export default ImageLoader;
