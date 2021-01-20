import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <span>{product.name}</span>
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
