import React from 'react'
import styled, { color } from 'styled';

import LogoCp from 'components/header/LogoCp';
import NaviCp from 'components/header/NaviCp';

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${color.dark};
`


const HeaderCp = () => {
  return (
    <Header>
      <LogoCp />
      <NaviCp />
    </Header>
  )
}

export default HeaderCp