import React, { useState, useRef, useCallback, useMemo } from 'react';
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
  const [query, setQuery] = useState('');

  const searchRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(retrieveBook({ query: searchRef.current.value, page: 1 }));
  }, [dispatch]);

  const onChange = useCallback((e) => {
    
  }, []);

  const onRemove = useCallback((e) => {

  }, []);
  return (
    <SearchForm onSubmit={onSubmit}>
      <input className="form-control" onChange={onChange} ref={searchRef} autoFocus />
      {query.length ? <CloseBt className="fa fa-times-circle" onClick={onRemove} /> : ''}
    </SearchForm>
  )
}

export default React.memo(SearchCp);