import React from 'react';
import styled, { color } from 'styled';

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.span`
  color: #fff;
  font-size: 2em;
`

const LoadingCp = () => {
  return (
    <Wrapper>
      <Spinner className="fa fa-spin fa-spinner" />
    </Wrapper>
  )
}

export default React.memo(LoadingCp);