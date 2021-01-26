import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: cadetblue;
  border-color: cadetblue;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  width: 120px;
  height: 30px;
  color: #fff;
  border-radius: 12px;
`;

const WishListButton = () => (
    <Button>
      Add to Wish List
    </Button>
);

export default WishListButton;
