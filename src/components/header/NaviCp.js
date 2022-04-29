import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { color } from 'styled';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { logOut } from 'store/slice/auth-slice';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogging = useSelector(state => state.auth.isLogging)
  const onLogOut = useCallback(e => {
    dispatch(logOut());
  }, [dispatch])

  const onNavigate = useCallback((e) => {
    // dispatch()
    const path = e.target.dataset['path'];
    navigate(path);
  }, [navigate])

  return (
    <NavWrap>
      <NavLink to="/">HOME</NavLink>
      <NavButton onClick={onNavigate} data-path="/book">BOOK</NavButton>
      { isLogging && <NavLink to="/post">POST</NavLink> }
      { !isLogging && <NavLink to="/login">LOGIN</NavLink> }
      { isLogging && <NavButton onClick={onLogOut}>LOGOUT</NavButton> }
    </NavWrap>
  )
}

export default NaviCp;