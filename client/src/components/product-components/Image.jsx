import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  height: 325px;
  border-radius: 15px;
`;

const Image = (props) => {
  let image;
  const { variation } = props;
  const { mouseOn } = props;

  if (mouseOn === false) {
    image = variation.original;
  } else {
    image = variation.onHover;
  }

  return (
    <Img src={image} alt="" />
  );
};

Image.propTypes = {
  variation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
  mouseOn: PropTypes.bool.isRequired,
};

export default Image;
