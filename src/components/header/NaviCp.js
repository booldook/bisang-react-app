import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { color } from 'styled';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { logOut } from 'store/slice/auth-slice';

import { resetBook } from 'store/slice/book-slice';
import { resetPost } from 'store/slice/post-slice';

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
    const path = e.target.dataset['path'];
    if(path === '/book') dispatch(resetBook());
    if(path === '/post') dispatch(resetPost());
    navigate(path);
  }, [navigate, dispatch])

  return (
    <NavWrap>
      <NavLink to="/">HOME</NavLink>
      <NavButton onClick={onNavigate} data-path="/book">BOOK</NavButton>
      { isLogging && <NavButton onClick={onNavigate} data-path="/post">POST</NavButton> }
      { !isLogging && <NavButton onClick={onNavigate} data-path="/login">LOGIN</NavButton> }
      { isLogging && <NavButton onClick={onLogOut}>LOGOUT</NavButton> }
    </NavWrap>
  )
}

export default NaviCp;