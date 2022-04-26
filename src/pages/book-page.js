/* 
data watch
1. computed(useMemo) -> 쳐다보고 있는 변수가 변하면 계산된 값을 리턴
2. watch(useCallback) -> 쳐다보고 있는 변수가 변하면 함수를 실행

- Memorized
1. Component => React.memo(Component);
2. 함수 => useCallback();
3. 객체 => useMemo();
*/

import React, { useState, useCallback, useMemo } from 'react';
import styled, { color } from 'styled';
import axios from 'axios';
import { InView } from 'react-intersection-observer';

import TitleCp from 'components/common/TitleCp';
import SearchCp from 'components/book/SearchCp';
import ListCp from 'components/book/ListCp';

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

  const [query, setQuery] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [bookList, setBookList] = useState([]);

  const getBookQuery = useMemo(() => {
    return query.length ? '검색어는 ' + query + ' 입니다. ' : '';
  }, [query]);
  
  const getBookCount = useMemo(() => {
    return totalCount && query ? '검색결과: ' + totalCount + '건' : '';
  }, [totalCount, query]);


  const onChangeInView = useCallback(async (inView, entry) => {
    // if(inView && !isEnd && query) await onFetch(query);
  }, [isEnd, query]);

  return (
    <BookWrap>
      <SearchHead>
        <div>{ getBookQuery }</div>
        <div>{ getBookCount }</div>
      </SearchHead>
      <TitleCp color={color.dark}>도서검색</TitleCp>
      <SearchCp/>
      <BookList>
        { bookList.map((book, i) => <ListCp book={book} key={"book_" + i}/>)}
      </BookList>
      <InView className="border border-danger p-2" onChange={onChangeInView}/>
    </BookWrap>
  )
}

export default React.memo(BookPage);