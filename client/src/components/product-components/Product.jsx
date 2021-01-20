import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Info from './Info';
import ColorContainer from './ColorContainer';

const Wrapper = styled.div`
  height: 450px;
  width: 350px;
`;

class Product extends React.Component {
  constructor(props) {
    super(props);

    const { product } = this.props;
    console.log(product);

    this.state = {
      variation: product.variations[1],
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

  render() {
    const { product } = this.props;
    const { variation } = this.state;
    const { mouseOn } = this.state;
    return (
      <Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Image variation={variation} mouseOn={mouseOn} />
        <Info product={product} />
        <ColorContainer variations={product.variations} />
      </Wrapper>
    );
  }
}

// Basically my schema listed out on the frontend
Product.propTypes = {
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

export default Product;
