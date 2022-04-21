import React from 'react';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';

const HomeWrap = styled.div`

`

const HomePage = () => {
  return (
    <HomeWrap>
      {/* <TitleCp title="메인페이지" color={color.dark}/> */}
      <TitleCp color={color.dark}>메인페이지</TitleCp>
    </HomeWrap>
  )
}

export default HomePage