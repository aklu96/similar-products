import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  padding: 15px 30px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      displayProducts: [],
      carouselIndex: 0,
      leftArrow: false,
      rightArrow: true,
    };

    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/products/24')
      .then((res) => {
        this.setState({
          allProducts: res.data,
          displayProducts: res.data.slice(0, 4),
        });
      });
  }

  onLeftArrowClick() {
    let { carouselIndex } = this.state;
    this.updateCarouselView(carouselIndex -= 1);
  }

  onRightArrowClick() {
    let { carouselIndex } = this.state;
    this.updateCarouselView(carouselIndex += 1);
  }

  updateCarouselView(index) {
    const { allProducts } = this.state;
    let { leftArrow, rightArrow } = this.state;
    const displayProducts = allProducts.slice(index, index + 4);

    if (index === 0) {
      leftArrow = false;
    } else {
      leftArrow = true;
    }
    if (index === allProducts.length - 4) {
      rightArrow = false;
    } else {
      rightArrow = true;
    }

    this.setState({
      displayProducts,
      carouselIndex: index,
      leftArrow,
      rightArrow,
    });
  }

  renderLeftArrow() {
    const { leftArrow } = this.state;
    if (leftArrow) {
      return <LeftArrow onClick={this.onLeftArrowClick} />;
    }
    return null;
  }

  renderRightArrow() {
    const { rightArrow } = this.state;
    if (rightArrow) {
      return <RightArrow onClick={this.onRightArrowClick} />;
    }
    return null;
  }

  render() {
    const { displayProducts } = this.state;
    return (
      <div>
        <Title>Similar to this Product</Title>
        <CarouselContainer>
          {this.renderLeftArrow()}
          <Carousel products={displayProducts} />
          {this.renderRightArrow()}
        </CarouselContainer>
      </div>
    );
  }
}

export default App;
