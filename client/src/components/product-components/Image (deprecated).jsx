import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 325px;
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
`;

// This component needs to transform when the entire product component is hovered over
const Img = styled.img`
  height: 325px;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.1)
  }
  position: relative;
  right: 12px;
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
    <ImageWrapper>
      <Img src={image} alt="" mouseOn={mouseOn} />
    </ImageWrapper>
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
