import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  margin: auto;
`;

const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: blue;
  margin: auto;
`;

const Colors = () => (
  <ColorContainer>
    <Color />
    <Color />
    <Color />
    <Color />
  </ColorContainer>
);

export default Colors;
