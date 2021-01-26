import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Plain = styled.div`
  background: cadetblue;
  border-color: cadetblue;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  width: 120px;
  height: 30px;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
`;

const Button = styled.button`
  background: cadetblue;
  border-color: cadetblue;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  width: 120px;
  height: 30px;
  color: #fff;
  border-radius: 15px;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.05);
  }
`;

const WishListButton = (props) => {
  const { inWishList, addToWishList, product } = props;
  let ButtonView;

  if (inWishList) {
    ButtonView = (
      <Plain>
        In Wish List
      </Plain>
    );
  } else {
    ButtonView = (
      <Button
        onClick={(e) => {
          addToWishList(product);
          e.preventDefault();
        }}
      >
        Add to Wish List
      </Button>
    );
  }

  return ButtonView;
};

WishListButton.propTypes = {
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

export default WishListButton;
