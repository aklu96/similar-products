/* eslint-disable no-underscore-dangle */
// will manage state for the arrows

import React from 'react';
import PropTypes from 'prop-types';
import Product from './product-components/Product';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state for arrows
    };
  }

  render() {
    const { products } = this.props;
    return (
      <div>{products.map((product) => <Product key={product._id} product={product} />)}</div>
    );
  }
}

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
