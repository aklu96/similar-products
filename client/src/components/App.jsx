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
      products: [],
      moveDirection: '',
      carouselIndex: 0,
      leftArrow: true,
      rightArrow: true,
    };

    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/products/24')
      .then((res) => {
        this.setState({
          products: res.data,
        });
      });
  }

  onLeftArrowClick() {
    this.updateCarouselView('left');
  }

  onRightArrowClick() {
    this.updateCarouselView('right');
  }

  updateCarouselView(moveDirection) {
    let { carouselIndex, leftArrow, rightArrow } = this.state;
    const { products } = this.state;

    if (moveDirection === 'left') {
      carouselIndex -= 320;
    }

    if (moveDirection === 'right') {
      carouselIndex += 320;
    }

    if (carouselIndex === 0) {
      leftArrow = false;
    } else {
      leftArrow = true;
    }
    if (carouselIndex === (products.length - 3) * 320) {
      rightArrow = false;
    } else {
      rightArrow = true;
    }

    this.setState({
      carouselIndex,
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
    const { products, carouselIndex } = this.state;
    return (
      <div>
        <Title>Similar to this Product</Title>
        <CarouselContainer>
          {this.renderLeftArrow()}
          <Carousel products={products} index={carouselIndex} />
          {this.renderRightArrow()}
        </CarouselContainer>
      </div>
    );
  }
}

export default App;
