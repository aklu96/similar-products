/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 40px;
  margin: 5px 5px 5px 50px;
  border: solid 3px lightblue;
  border-radius: 20px;
  vertical-align: middle;
  line-height: 40px;
`;

const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 350px;
  margin-left: 10px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 2px;
`;

const WishList = (props) => {
  const { wishList } = props;
  return (
    <div>
      {wishList.map((product) => (
        <Wrapper key={product._id}>
          <Name>
            {product.name}
          </Name>
          <Price>
            {product.price}
          </Price>
        </Wrapper>
      ))}
    </div>
  );
};

WishList.propTypes = {
  wishList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WishList;
