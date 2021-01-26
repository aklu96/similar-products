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
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.1);
  }
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

class WishListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;

    return (
      <Wrapper>
        <Name>
          {product.name}
        </Name>
        <Price>
          {product.price}
        </Price>
      </Wrapper>
    );
  }
}

WishListItem.propTypes = {
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

export default WishListItem;