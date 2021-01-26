import React from 'react';
import PropTypes from 'prop-types';
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
  left: calc(100vw - 85px);
  position: absolute;
  z-index: 1;
  transition: all 0.2s ease;
  &:hover {
    transform:scale(1.05);
  }
`;

const StyledArrow = styled.i`
  border: solid black;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-top: 28px;
  margin-left: 26px;
  margin-bottom: 28px;
  margin-right: 30px;
`;

const RightArrow = (props) => {
  const { onClick } = props;

  return (
    <CircleWrapper onClick={onClick}>
      <StyledArrow />
    </CircleWrapper>
  );
};

RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightArrow;
