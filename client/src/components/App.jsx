import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel';

const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 700;
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
      // change back to empty array later if possible
      products: [{
        _id: null,
        variations: [{
          original: null,
        }, {
          original: null,
        }],
      }],
    };
  }

  componentDidMount() {
    axios.get('/api/products/69')
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
        {/* for purposes of creating a single product component,
        just adding one product to the carousel for now
        as an array - remember to remove enclosing brackets */}
        {/* <CarouselContainer> */}
        <Carousel products={[products[0]]} />
        {/* </CarouselContainer> */}
      </div>
    );
  }
}

export default App;
