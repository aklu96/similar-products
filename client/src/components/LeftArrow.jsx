import React from 'react';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
  margin-top: 140px;
  margin-left: 10px;
  position: absolute;
  z-index: 1;
`;

const StyledArrow = styled.i`
  border: solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-top: 28px;
  margin-left: 30px;
  margin-bottom: 28px;
  margin-right: 26px;
`;

const LeftArrow = () => (
  <CircleWrapper>
    <StyledArrow />
  </CircleWrapper>
);

export default LeftArrow;

/* Attempted Hover animation:

&:hover {
  transition: transform .2s cubic-bezier(.235,0,.05,.95);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.235, 0, 0.05, 0.95);
  transition-delay: 0s;
} */
