import React from 'react'
import styled from 'styled';

import LogoCp from 'components/header/LogoCp';
import NaviCp from 'components/header/NaviCp';

const Header = styled.header`
  display: flex;
  align-items: center;
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