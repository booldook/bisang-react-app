// rafce

// import React, { useState } from 'react';
// import styled from '@emotion/styled';
import styled from 'styled-components';

import MyBox from './MyBox';



const MyWrap = styled.div`
  border: ${({ borderWidth }) => (borderWidth || '2')}px solid ${ ({ color }) => (color || 'red')};
  font-size: 2em;
  padding: 0.5em;
  margin: 1em;
`

const StMyBox = styled(MyBox)`
  border: 5px solid green !important;
  font-size: 5em;
  background-color: yellow;
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
      <MyBox title="그냥 박스" />
      <StMyBox title="스타일 박스"/>
    </MyWrap>
  )
}

export default SearchStyledCp