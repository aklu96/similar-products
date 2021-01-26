import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 450px;
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
  width: 400px;
  margin-left: 10px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  height: 40px;
  padding: 0px 10px;
`;

const Button = styled.div`
  cursor: pointer;
  font-family: Roboto, sans-serif;
  position: relative;
  margin: auto;
  font-weight: 500;
  font-size: 12px;
  height: 20px;
`;

class WishListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOn: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({
      mouseOn: true,
    });
  }

  onMouseLeave() {
    this.setState({
      mouseOn: false,
    });
  }

  renderButtonView() {
    const { mouseOn } = this.state;
    const { product, remove } = this.props;
    if (mouseOn) {
      return (
        <ButtonWrapper>
          <Button
            onClick={(e) => {
              remove(product);
              e.preventDefault();
            }}
          >
            Remove
          </Button>
        </ButtonWrapper>
      );
    }
    return null;
  }

  render() {
    const { product } = this.props;

    return (
      <Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Name>
          {product.name}
        </Name>
        <Price>
          {product.price}
        </Price>
        {this.renderButtonView()}
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
  remove: PropTypes.func.isRequired,
};

export default WishListItem;
