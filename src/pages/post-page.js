import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setPage, resetPost, retrievePost } from 'store/slice/post-slice';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';
import TrCp from 'components/post/TrCp';
import withError from 'hoc/withError';

const PostWrap = styled.div`

`;

const Table = styled.table`
  margin: 1em;
  th {
    text-align: center;
  }
`

const PostPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post, shallowEqual)

  useEffect(() => {
    dispatch(resetPost());
    dispatch(retrievePost({ page: 1 }))
  }, [dispatch])

  return (
    <PostWrap>
      <TitleCp color={color.dark}>게시판</TitleCp>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (<TrCp post={post} key={`post_${i}`} />))}
        </tbody>
      </Table>
    </PostWrap>
  )
}

// const PostHocPage =  withError(React.memo(PostPage));
const PostHocPage =  React.memo(PostPage);
export default PostHocPage;