import React from 'react';
import styled from 'styled-components';

const CheckWrapper = styled.div`
  height: 11px;
  width: 11px;
  fill: #ccc;
  margin-left: 2px;
  position: relative;
  bottom: 3px;
`;

const Checkmark = () => (
  <CheckWrapper>
    <svg viewBox="0 0 13.7 10.4" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4 1.1l-.8-.8c-.4-.4-1-.4-1.4 0L5.1 6.4 2.5 3.7c-.4-.4-1-.4-1.4 0l-.8.8c-.4.4-.4 1 0 1.4L4.4 10c.4.4 1 .4 1.4 0l.7-.7 6.8-6.8c.5-.4.5-1 .1-1.4z" />
    </svg>
  </CheckWrapper>
);

export default Checkmark;
