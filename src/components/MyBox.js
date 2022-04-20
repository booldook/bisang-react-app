import React from 'react';
import styled from '@emotion/styled';

const StyledMyBox = styled.div`
  border: 2px solid red;
  padding: 1em;
  font-size: 1.5em;
`

const MyBox = ({ title, className }) => {
  return (
    <StyledMyBox className={className}>{ title }</StyledMyBox>
  )
}

export default MyBox