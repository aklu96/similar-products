/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import WishListItem from './WishListItem';

const WishList = (props) => {
  const { wishList } = props;
  return (
    <div>
      {wishList.map((product) => (
        <WishListItem
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

WishList.propTypes = {
  wishList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WishList;
