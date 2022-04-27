import React from 'react';
import styled, { color, media } from 'styled';

const Book = styled.li`
  border: 1px solid ${color.light};
  margin: 1%;
  padding: 1em;
  width: 98%;
  display: flex;
  align-items: flex-start;
  @media ${media.xs} {
    width: 48%;
  }
  @media ${media.sm} {
    width: 31.3333%;
  }
`;

const Thumbnail = styled.img`
  width: 150px;
  margin-right: 1em;
  border: 1px solid ${color.light};
  padding: 0.25em;
`;

const ContentWrap = styled.div`
  flex-grow: 1;
  padding: 0.5em;
`;

const Title = styled.div`
  margin-bottom: 1em;
  font-weight: bold;
  border-bottom: 1px solid ${color.light};
`;

const Content = styled.div`
  
`;

const ListCp = ({ book }) => {
  return (
    <Book>
      <Thumbnail src={book.thumbnail} />
      <ContentWrap>
        <Title>{book.title}</Title>
        <Content>{book.contents.substr(0, 50) + '...'}</Content>
      </ContentWrap>
    </Book>
  )
}

export default React.memo(ListCp);