import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel';

const Title = styled.h1`
  font-family: Roboto, sans-serif;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/api/products/3')
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Title>Similar to this Product</Title>
        <Carousel products={products} />
      </div>
    );
  }
}

export default App;
