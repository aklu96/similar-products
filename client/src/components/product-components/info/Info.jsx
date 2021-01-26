import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderImpacts from './impacts/renderImpacts';
import WishListButton from '../../WishListButton';

const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  height: 60px;
`;

const BottomLeftWrapper = styled.div`
  width: 80px;
  height: 60px;
`;

const ButtonWrapper = styled.div`
  padding-top: 15px;
  padding-right: 10px;
`;

const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 280px;
  height: 32px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 2px;
`;

const Colors = styled.div`
  font-family: Roboto, sans-serif;
  color: grey;
  font-weight: 100;
  font-size: 12px;
`;

const Info = (props) => {
  const { product } = props;
  return (
    <Wrapper>
      <Name>{product.name}</Name>
      <BottomWrapper>
        <BottomLeftWrapper>
          <Price>{product.price}</Price>
          {renderImpacts(product.impacts)}
          <Colors>
            <span>{product.num_colors}</span>
            <span> colors</span>
          </Colors>
        </BottomLeftWrapper>
        <ButtonWrapper>
          <WishListButton />
        </ButtonWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

Info.propTypes = {
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

export default Info;
