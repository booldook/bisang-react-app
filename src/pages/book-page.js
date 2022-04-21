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

const BookWrap = styled.div`

`

const SearchHead = styled.header`
  display: flex;
  justify-content: space-between;
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
    return totalCount ? '검색결과: ' + totalCount + '건' : '';
  }, [totalCount]);

  const getData = useCallback(async (value) => {
    try {
      setQuery(value);
      // 통신
      const url = 'https://dapi.kakao.com/v3/search/book?query='+value;
      const options = {
        headers: {
          Authorization: 'KakaoAK 1ae5438e757ddd9346ddcffd9b85c1a6'
        }
      }
      const { data } = await axios.get(url, options);
      setIsEnd(data.meta.is_end);
      setTotalCount(data.meta.total_count);
      setBookList(data.documents);
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
    </BookWrap>
  )
}

export default BookPage