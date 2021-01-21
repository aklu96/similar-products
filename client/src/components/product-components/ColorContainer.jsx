import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  margin: auto;
  padding: 10px;
`;

const ColorContainer = (props) => {
  const { variations, changeVariation } = props;

  return (
    <Wrapper>
      {variations.map((variation) => (
        <Color
          key={variation.color}
          variation={variation}
          changeVariation={changeVariation}
        />
      ))}
    </Wrapper>
  );
};

ColorContainer.propTypes = {
  variations: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeVariation: PropTypes.func.isRequired,
};

export default ColorContainer;
