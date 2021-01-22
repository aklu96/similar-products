import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 325px;
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
`;

// Would like: ${Product}:hover & {}

const Img = styled.img`
  height: 325px;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.1)
  }
  object-fit: cover;
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
    <Wrapper>
      <Img src={image} alt="" mouseOn={mouseOn} />
    </Wrapper>
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
