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
  const {
    variations,
    currentVariation,
    changeVariation,
    inWishList,
    addToWishList,
    product,
  } = props;

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
        <WishListButton
          inWishList={inWishList}
          addToWishList={addToWishList}
          product={product}
        />
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

  // the below is passed down to the add to wish list button
  inWishList: PropTypes.bool.isRequired,
  addToWishList: PropTypes.func.isRequired,
  product: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    impacts: PropTypes.arrayOf(PropTypes.string),
    num_colors: PropTypes.number,
    variations: PropTypes.arrayOf(PropTypes.object),
    relatedProductIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,

};

export default ColorContainer;
