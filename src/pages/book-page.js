/* 
data watch
1. computed(useMemo) -> 쳐다보고 있는 변수가 변하면 계산된 값을 리턴
2. watch(useCallback) -> 쳐다보고 있는 변수가 변하면 함수를 실행

- Memorized
1. Component => React.memo(Component);
2. 함수 => useCallback();
3. 객체 => useMemo();
*/

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled, { color } from 'styled';
import { InView } from 'react-intersection-observer';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import currency from 'currency.js';

import { resetBook, retrieveBook } from 'store/slice/book-slice';

import TitleCp from 'components/common/TitleCp';
import SearchCp from 'components/book/SearchCp';
import ListCp from 'components/book/ListCp';
import LoadingCp from 'components/common/LoadingCp';
import LoadingListCp from 'components/common/LoadingListCp';

const BookWrap = styled.div`

`

const SearchHead = styled.header`
  display: flex;
  justify-content: space-between;
`

const BookList = styled.ul`
  padding: 0;
  width: 102%;
  margin: 1em 0 0 -1%;
  display: flex;
  flex-wrap: wrap;
`

const BookPage = () => {
  const dispatch = useDispatch();
  const { query, totalCount, isEnd, books } = useSelector(state => state.book, shallowEqual);
  const isLoading = useSelector(state => state.book.isLoading);
  const [inView, setInView] = useState(true);
  const [page, setPage] = useState(1);

  const getBookQuery = useMemo(() => {
    return query.length ? '검색어는 ' + query + ' 입니다. ' : '';
  }, [query]);
  
  const getBookCount = useMemo(() => {
    return totalCount && query ? '검색결과: ' + currency(totalCount, {symbol: '', precision: 0}).format() + '건' : '';
  }, [totalCount, query]);

  /* useEffect(() => {
    'componentDidMount 컴포넌트가 시작될때 할일 - 아래 배열이 비었을 때'
    'componentDidUpdate 컴포넌트의 아래 배열로 주어진 스테이트값이 업데이트 될때 '
    return () => {'componentWillUnMount 컴포넌트가 삭제될 때'}
  }, []); */

  useEffect(() => {
    console.log('마운트');
    return () => {
      console.log('언마운트');
      dispatch(resetBook());
    }
  }, [dispatch]);

  useEffect(() => {
    if(inView && !isEnd && query) {
      dispatch(retrieveBook({ query, page: page + 1 }));
      setPage(page + 1);
      setInView(false);
    }
  }, [query, inView, isEnd, page, dispatch])

  const onChangeInView = useCallback(async (inView, entry) => {
    setInView(inView);
  }, []);

  return (
    <BookWrap>
      <SearchHead>
        <div>{ getBookQuery }</div>
        <div>{ getBookCount }</div>
      </SearchHead>
      <TitleCp color={color.dark}>도서검색</TitleCp>
      <SearchCp/>
      <BookList>
        { books.map((book, i) => <ListCp book={book} key={"book_" + i}/>)}
      </BookList>
      {/* {isLoading ? <LoadingCpList /> : ''} */}
      {isLoading ? <LoadingListCp /> : ''}
      <InView onChange={onChangeInView}/>
    </BookWrap>
  )
}

export default React.memo(BookPage);