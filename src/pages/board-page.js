import React from 'react';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';

const BoardWrap = styled.div`

`

const BoardPage = () => {
  return (
    <BoardWrap>
      {/* <TitleCp title="게시판" color={color.dark}/> */}
      <TitleCp color={color.dark}>게시판</TitleCp>
    </BoardWrap>
  )
}

export default BoardPage