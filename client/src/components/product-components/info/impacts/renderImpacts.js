import React from 'react';
import styled from 'styled-components';
import Recycled from './Recycled';
import FairTrade from './FairTrade';
import Organic from './Organic';
import Hemp from './Hemp';

const Wrapper = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
`;

const renderImpacts = (impacts) => {
  let recycled;
  let fairtrade;
  let organic;
  let hemp;

  if (impacts.includes('recycled polyester')) {
    recycled = <Recycled />;
  } else {
    recycled = null;
  }
  if (impacts.includes('fair trade')) {
    fairtrade = <FairTrade />;
  } else {
    fairtrade = null;
  }
  if (impacts.includes('organic cotton')) {
    organic = <Organic />;
  } else {
    organic = null;
  }
  if (impacts.includes('hemp')) {
    hemp = <Hemp />;
  } else {
    hemp = null;
  }

  return (
    <Wrapper>
      {recycled}
      {fairtrade}
      {organic}
      {hemp}
    </Wrapper>
  );
};

export default renderImpacts;
