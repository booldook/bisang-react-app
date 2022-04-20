// rafce

// import React, { useState } from 'react';
import styled from '@emotion/styled';


const MyWrap = styled.div`
  border: ${({ borderWidth }) => (borderWidth || '2')}px solid ${ ({ color }) => (color || 'red')};
  font-size: 2em;
  padding: 0.5em;
  margin: 1em;
`

const SubComponent = ({ title, title2 }) => {
  return (
    <div>
      <h1>{ title }</h1>
      <h2>{ title2 }</h2>
    </div>
  )
}

const SearchStyledCp = () => {
  return (
    <MyWrap color="green" borderWidth="10">
      <input type="text" />
      <SubComponent title="MyTitle" title2="MyTitle2" />
    </MyWrap>
  )
}

export default SearchStyledCp