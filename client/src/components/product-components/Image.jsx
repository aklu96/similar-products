import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  height: 350px;
  border-radius: 8px;
`;

const Image = (props) => {
  const { image } = props;
  return (
    <Img src={image} alt="" />
  );
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
