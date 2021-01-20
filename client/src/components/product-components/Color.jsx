import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background: ${(props) => props.color};
margin: auto;
`;

const Color = (props) => {
  const { variation, changeVariation } = props;

  return (
    <Wrapper
      color={variation.color}
      onClick={() => {
        changeVariation(variation);
      }}
    />
  );
};

Color.propTypes = {
  variation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
  changeVariation: PropTypes.func.isRequired,
};

export default Color;
