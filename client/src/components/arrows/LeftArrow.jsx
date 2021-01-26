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
  border: solid 1px white;
  background-color: white;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,.2);
  margin-top: 140px;
  margin-left: 15px;
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
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-top: 28px;
  margin-left: 30px;
  margin-bottom: 28px;
  margin-right: 26px;
`;

const LeftArrow = (props) => {
  const { onClick } = props;

  return (
    <CircleWrapper onClick={onClick}>
      <StyledArrow />
    </CircleWrapper>
  );
};

LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LeftArrow;
