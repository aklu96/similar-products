import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from './Color';
import WishListButton from './WishListButton';

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  margin: auto;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 280px;
  height: 60px;
  padding-left: 92px;
  padding-top: 15px;
`;

const ColorContainer = (props) => {
  const { variations, currentVariation, changeVariation } = props;

  return (
    <div>
      <ColorWrapper>
        {variations.map((variation) => (
          <Color
            key={variation.color}
            variation={variation}
            currentVariation={currentVariation}
            changeVariation={changeVariation}
          />
        ))}
      </ColorWrapper>
      <ButtonWrapper>
        <WishListButton />
      </ButtonWrapper>
    </div>
  );
};

ColorContainer.propTypes = {
  variations: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeVariation: PropTypes.func.isRequired,
  currentVariation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
};

export default ColorContainer;
