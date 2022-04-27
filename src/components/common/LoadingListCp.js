import React from 'react';
import styled from 'styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  text-align: center;
`;

const Spinner = styled.span`
  color: #222;
  font-size: 1em;
`

const LoadingListCp = () => {
  return (
    <Wrapper>
      <Spinner className="fa fa-spin fa-spinner" />
    </Wrapper>
  )
}

export default React.memo(LoadingListCp);