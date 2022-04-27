import React, { useEffect } from 'react';
import { useDispatch, useSelecter } from 'react-redux';
import { setPage, retrievePost } from 'store/slice/post-slice';
import styled, { color } from 'styled';

import TitleCp from 'components/common/TitleCp';

const PostWrap = styled.div`

`

const PostPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePost({ page: 1 }))
  }, [dispatch])

  return (
    <PostWrap>
      {/* <TitleCp title="게시판" color={color.dark}/> */}
      <TitleCp color={color.dark}>게시판</TitleCp>
    </PostWrap>
  )
}

export default React.memo(PostPage)