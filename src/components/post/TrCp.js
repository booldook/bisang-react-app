import React from 'react';
import styled, { color } from 'styled';

const Tr = styled.tr`
  td {
    text-align: center;
    &:nth-of-type(2) {
      text-align: left;
    }
  }
`

const TrCp = ({ post }) => {
  return (
    <Tr>
      <td>{post.idx}</td>
      <td>{post.title}</td>
      <td>{post.writer}</td>
      <td>{post.wdate}</td>
    </Tr>
  )
}

export default TrCp