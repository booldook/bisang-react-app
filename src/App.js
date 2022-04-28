	// 1ae5438e757ddd9346ddcffd9b85c1a6

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderCp from 'components/HeaderCp';
import FooterCp from 'components/FooterCp';
import styled from 'styled';

import HomePage from 'pages/home-page';
import BookPage from 'pages/book-page';
import PostPage from 'pages/post-page';
import LoginPage from 'pages/login-page';
import LoadingCp from 'components/common/LoadingCp';
import ErrorCp from 'components/common/ErrorCp';

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
  const error = useSelector(state => state.global.error);
  const isLoading = useSelector(state => state.global.isLoading);
  return (
    <React.Fragment>
      {
        error 
          ? <ErrorCp code={500}/>
          : <BrowserRouter>
            <Wrapper>
              <HeaderCp />
              <Body className="container">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/book" element={<BookPage />} />
                  <Route path="/post" element={<PostPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<ErrorCp code={404} />} />
                </Routes>
              </Body>
              <FooterCp />
              {/* { isLoading && <LoadingCp /> } */}
            </Wrapper>
          </BrowserRouter>
      }
    </React.Fragment>
    
  );
}

export default React.memo(App);
