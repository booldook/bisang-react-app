import React, { useState, useRef, useCallback, useMemo } from 'react';
import styled, { color } from 'styled';

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

const SearchCp = ({ changeQuery }) => {
  const [query, setQuery] = useState('');

  const searchRef = useRef();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    changeQuery(query);
  }, [changeQuery, query]);

  const onChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onRemove = useCallback((e) => {
    setQuery('');
    changeQuery('');
    searchRef.current.value = '';
    searchRef.current.focus();
  }, [changeQuery]);
  return (
    <SearchForm onSubmit={onSubmit}>
      <input className="form-control" onChange={onChange} ref={searchRef} autoFocus />
      {query.length ? <CloseBt className="fa fa-times-circle" onClick={onRemove} /> : ''}
    </SearchForm>
  )
}

export default React.memo(SearchCp);