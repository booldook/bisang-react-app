import React from 'react';
import styled, { color } from 'styled';

const Title = styled.h2`
  font-size: 1.325em;
  padding: 0.5em 0;
  color: ${p => p.color || color.darker};
`

const TitleCp = ({ children, color }) => {
  return (
    <Title color={color}>{children}</Title>
  )
}

export default TitleCp