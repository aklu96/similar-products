import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Info from './info/Info';
import ColorContainer from './colors/ColorContainer';

const Wrapper = styled.div`
  height: 425px;
  width: 300px;
  padding: 10px;
  cursor: pointer;
`;

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
    const { product } = this.props;
    const { currentVariation, mouseOn } = this.state;

    // show the available colors when mouse hovers over component
    if (mouseOn) {
      return (
        <ColorContainer
          variations={product.variations}
          currentVariation={currentVariation}
          changeVariation={this.changeVariation}
        />
      );
    }

    // default view is info panel
    return <Info product={product} />;
  }

  render() {
    const { currentVariation, mouseOn } = this.state;

    return (
      <Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Image variation={currentVariation} mouseOn={mouseOn} />
        {this.renderBottomView()}
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
