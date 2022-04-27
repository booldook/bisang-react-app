import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { color } from 'styled';

const NavWrap = styled.nav`
  display: flex;
  margin-left: auto;
`
const NavLink = styled(Link)`
  padding: 1em;
`

const NavButton = styled.div`
  padding: 1em; 
  color: ${color.white};
  cursor: pointer;
`

const NaviCp = () => {
  const onLogOut = useCallback(e => {
    window.alert('로그아웃');
  }, [])
  return (
    <NavWrap>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/book">BOOK</NavLink>
      <NavLink to="/post">POST</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavButton onClick={onLogOut}>LOGOUT</NavButton>
    </NavWrap>
  )
}

export default NaviCp;