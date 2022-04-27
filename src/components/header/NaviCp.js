import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled';

const NavWrap = styled.nav`
  display: flex;
  margin-left: auto;
`
const NavLink = styled(Link)`
  padding: 1em;
`

const NaviCp = () => {
  return (
    <NavWrap>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/book">BOOK</NavLink>
      <NavLink to="/post">POST</NavLink>
    </NavWrap>
  )
}

export default NaviCp;