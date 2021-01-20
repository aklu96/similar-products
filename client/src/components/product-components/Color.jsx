import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background: ${(props) => props.color};
margin: auto;
`;

const Color = (props) => {
  const { color } = props;

  return (
    <Wrapper color={color} />
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Color;
