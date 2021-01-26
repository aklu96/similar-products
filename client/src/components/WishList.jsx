/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const WishList = (props) => {
  const { wishList } = props;
  return (
    <div>
      {wishList.map((product) => <div key={product._id}>{product.name}</div>)}
    </div>
  );
};

WishList.propTypes = {
  wishList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WishList;
