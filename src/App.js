import React from 'react';
import HeaderCp from 'components/HeaderCp';
import BodyCp from 'components/BodyCp';
import FooterCp from 'components/FooterCp';
import styled from 'styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Body = styled(BodyCp)`
  flex-grow: 1;
  padding: 1em;
`

const App = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <Body className="container"/>
      <FooterCp />
    </Wrapper>
  );
}

export default App;
