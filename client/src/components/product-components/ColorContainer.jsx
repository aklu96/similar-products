import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  margin: auto;
`;

const ColorContainer = (props) => {
  const { variations } = props;

  return (
    <Wrapper>
      {variations.map((variation) => <Color key={variation.color} color={variation.color} />)}
    </Wrapper>
  );
};

ColorContainer.propTypes = {
  variations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorContainer;
