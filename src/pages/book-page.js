import React from 'react';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';

const BookWrap = styled.div`

`

const BookPage = () => {
  return (
    <BookWrap>
      <TitleCp color={color.dark}>도서검색</TitleCp>
    </BookWrap>
  )
}

export default BookPage