import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Info from './info/Info';
import ColorContainer from './colors/ColorContainer';

// --- NOTE ---
// This file contains both the Product and Image components
// This is because the Image should expand when the Product component is hovered over
// It's unclear to me how to achieve this with styled components in separate files
// I'll achieve this functionality by having both components defined in this file

const ProductWrapper = styled.div`
  height: 425px;
  width: 300px;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  height: 325px;
  border-radius: 15px;
  width: 300px;
  overflow: hidden;
`;

const Img = styled.img`
  height: 325px;
  transition: all 0.2s ease;
  ${ProductWrapper}:hover & {
    transform:scale(1.2)
  }
  position: relative;
  right: 12px;
`;

// Image Component (stateless)
const Image = (props) => {
  let image;
  const { variation } = props;
  const { mouseOn } = props;

  if (mouseOn === false) {
    image = variation.original;
  } else {
    image = variation.onHover;
  }

  return (
    <ImageWrapper>
      <Img src={image} alt="" mouseOn={mouseOn} />
    </ImageWrapper>
  );
};

// Product component (stateful)
class Product extends React.Component {
  constructor(props) {
    super(props);

    const { product } = this.props;

    this.state = {
      currentVariation: product.variations[0],
      mouseOn: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.changeVariation = this.changeVariation.bind(this);
  }

  // these functions toggle the 'mouseOn' state property,
  // which then impacts which view is rendered
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

  changeVariation(currentVariation) {
    this.setState({
      currentVariation,
    });
  }

  renderBottomView() {
    const { inWishList, addToWishList, product } = this.props;
    const { currentVariation, mouseOn } = this.state;

    // show the available colors when mouse hovers over component
    if (mouseOn) {
      return (
        <ColorContainer
          variations={product.variations}
          currentVariation={currentVariation}
          changeVariation={this.changeVariation}
          inWishList={inWishList}
          addToWishList={addToWishList}
          product={product}
        />
      );
    }

    // default view is info panel
    return <Info product={product} />;
  }

  render() {
    const { currentVariation, mouseOn } = this.state;

    return (
      <ProductWrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Image variation={currentVariation} mouseOn={mouseOn} />
        {this.renderBottomView()}
      </ProductWrapper>
    );
  }
}

// --- PropTypes ---
Image.propTypes = {
  variation: PropTypes.shape({
    color: PropTypes.string,
    original: PropTypes.string,
    onHover: PropTypes.string,
  }).isRequired,
  mouseOn: PropTypes.bool.isRequired,
};

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
  inWishList: PropTypes.bool.isRequired,
  addToWishList: PropTypes.func.isRequired,
};

export default Product;
