import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkmark from './Checkmark';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: auto;
  cursor: pointer;
`;

const Color = (props) => {
  const { variation, currentVariation, changeVariation } = props;

  let checkmark;
  if (currentVariation === variation) {
    checkmark = <Checkmark />;
  } else {
    checkmark = null;
  }

  return (
    <Wrapper
      color={variation.color}
      onClick={() => {
        changeVariation(variation);
      }}
    >
      {checkmark}
    </Wrapper>
  );
};

Color.propTypes = {
  variation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
  currentVariation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
  changeVariation: PropTypes.func.isRequired,
};

export default Color;
