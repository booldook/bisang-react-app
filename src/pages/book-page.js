import React, { useState } from 'react';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';
import SearchCp from 'components/book/SearchCp';

const BookWrap = styled.div`

`

const BookPage = () => {

  const [query, setQuery] = useState('') 

  return (
    <BookWrap>
      <TitleCp color={color.dark}>도서검색</TitleCp>
      <SearchCp onQuery={setQuery}/>
    </BookWrap>
  )
}

export default BookPage