import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

class Product extends React.Component {
  constructor(props) {
    super(props);

    const { product } = this.props;
    console.log(product);

    this.state = {
      image: product.variations[0].original,
    };
  }

  render() {
    // const { product } = this.props;
    const { image } = this.state;
    return (
      <div>
        <Image image={image} />
        {/* <Info product={product} /> */}
      </div>
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
