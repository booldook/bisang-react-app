import React from 'react';
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

const SearchCp = () => {
  const onSubmit = (e) => {

  }
  const onChange = (e) => {

  }
  return (
    <SearchForm onSubmit={onSubmit}>
      <input className="form-control" onChange={onChange} />
      <CloseBt className="fa fa-times-circle" />
    </SearchForm>
  )
}

export default SearchCp