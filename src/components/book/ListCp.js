import React from 'react';
import styled, { color, media } from 'styled';

const Book = styled.li`
  border: 1px solid ${color.light};
  margin: 1%;
  padding: 1em;
  width: 98%;
  @media ${media.xs} {
    width: 48%;
  }
  @media ${media.sm} {
    width: 31.3333%;
  }
`

const ListCp = ({ book }) => {
  return (
    <Book>{book.title}</Book>
  )
}

export default React.memo(ListCp);