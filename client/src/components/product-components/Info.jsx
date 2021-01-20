import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
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
    <div>
      <Name>{product.name}</Name>
      <Price>{product.price}</Price>
      <div>impacts placeholder</div>
      <Colors>
        <span>{product.num_colors}</span>
        <span> colors</span>
      </Colors>
    </div>
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
