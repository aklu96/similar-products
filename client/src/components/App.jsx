import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel';

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  padding: 15px 30px;
`;

/* const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`; */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/api/products/24')
      .then((res) => {
        this.setState({
          products: res.data,
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Title>Similar to this Product</Title>
        <Carousel products={products.slice(0, 4)} />
      </div>
    );
  }
}

export default App;
