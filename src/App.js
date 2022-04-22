	// 1ae5438e757ddd9346ddcffd9b85c1a6

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderCp from 'components/HeaderCp';
import FooterCp from 'components/FooterCp';
import styled from 'styled';

import HomePage from 'pages/home-page';
import BookPage from 'pages/book-page';
import BoardPage from 'pages/board-page';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Body = styled.div`
  flex-grow: 1;
  padding: 1em;
`

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <HeaderCp />
        <Body className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/board" element={<BoardPage />} />
          </Routes>
        </Body>
        <FooterCp />
      </Wrapper>
    </BrowserRouter>
  );
}

export default React.memo(App);
