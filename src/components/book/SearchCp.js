import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { color } from 'styled';

import { resetBook, setQuery, retrieveBook } from 'store/slice/book-slice';

const SearchForm = styled.form`
  position: relative;
`

const CloseBt = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  right: 0.5em;
  top: 0.25em;
`

const SearchCp = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.book.query)

  const searchRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const query = searchRef.current.value;
    dispatch(resetBook());
    dispatch(retrieveBook({ query }));
    dispatch(setQuery(query));
  }, [dispatch]);


  const onRemove = useCallback((e) => {
    dispatch(resetBook());
    searchRef.current.value = '';
    searchRef.current.focus();
  }, [dispatch]);

  useEffect(() => {
    searchRef.current.value = query;
  }, [query])

  return (
    <SearchForm onSubmit={onSubmit}>
      <input className="form-control" ref={searchRef} autoFocus />
      {query.length ? <CloseBt className="fa fa-times-circle" onClick={onRemove} /> : ''}
    </SearchForm>
  )
}

export default React.memo(SearchCp);