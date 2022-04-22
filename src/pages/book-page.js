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
  const [totalCount, setTotalCount] = useState(0);
  const [bookList, setBookList] = useState([]);

  /* const getBooks2 = useCallback(() => {
    console.log(query);
  }, [query]) */
  
  const getBookQuery = useMemo(() => {
    return query.length ? '검색어는 ' + query + ' 입니다. ' : '';
  }, [query]);
  
  const getBookCount = useMemo(() => {
    return totalCount && query ? '검색결과: ' + totalCount + '건' : '';
  }, [totalCount, query]);

  const getData = useCallback(async (query) => {
    try {
      setQuery(query);
      // 통신
      if(query) {
        const url = process.env.REACT_APP_BOOK_URL;
        const options = {
          params: { query },
          headers: {
            Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAO_KEY
          }
        }
        const { data } = await axios.get(url, options);
        setIsEnd(data.meta.is_end);
        setTotalCount(data.meta.total_count);
        setBookList(data.documents);
      }
      else {
        setBookList([]);
      }
    }
    catch(err) {
      console.log(err)
    }
  }, [])


  return (
    <BookWrap>
      <SearchHead>
        <div>{ getBookQuery }</div>
        <div>{ getBookCount }</div>
      </SearchHead>
      <TitleCp color={color.dark}>도서검색</TitleCp>
      <SearchCp getData={getData}/>
      <BookList>
        { bookList.map((book, i) => <ListCp book={book} key={"book_" + i}/>)}
      </BookList>
    </BookWrap>
  )
}

export default React.memo(BookPage);