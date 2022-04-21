import React from 'react';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';
import SearchCp from 'components/book/SearchCp';

const BookWrap = styled.div`

`

const BookPage = () => {
  return (
    <BookWrap>
      <TitleCp color={color.dark}>도서검색</TitleCp>
      <SearchCp />
    </BookWrap>
  )
}

export default BookPage