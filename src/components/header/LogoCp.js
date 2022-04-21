import React from 'react';
import { Link } from 'react-router-dom';
import styled, { color } from 'styled';

const LogoTitle = styled.h1`
  font-size: 1.5em;
  margin-left: .75em;
  color: ${color.light};
`

const LogoCp = () => {
  return (
    <LogoTitle>
      <Link to="/">Booldook</Link>
    </LogoTitle>
  )
}

export default LogoCp