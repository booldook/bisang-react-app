import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled, { color } from 'styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TitleCp from 'components/common/TitleCp';

import { logIn, logOut, resetAuth } from 'store/slice/auth-slice';
import { setGlobalIsShow } from 'store/slice/global-slice';
import ModalCp from 'components/common/ModalCp';


const Wrapper = styled.div`

`

const StyledForm = styled(Form)`
  margin-top: 5em;
`

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogging = useSelector(state => state.auth.isLogging);
  const user = useSelector(state => state.auth.user);
  const message = useSelector(state => state.auth.message);

  const onFinish = useCallback(({ userid, userpw }) => {
    dispatch(logIn({ userid, userpw }));
  }, [dispatch]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  /* useEffect(() => {
    console.log(isLogging, user, message);
    if(!isLogging && user === null && message.length) {
      // dispatch(setGlobalIsShow(true));
    }
  }, [isLogging, user, message, dispatch]); */

  useEffect(() => {
    if(isLogging) navigate('/');
  }, [navigate, isLogging])


  return (
    <Wrapper>
      <TitleCp color={color.dark}>로그인</TitleCp>
      <StyledForm name="loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="아이디" name="userid"
          rules={[{ required: true, message: '아이디를 입력하세요' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="패스워드" name="userpw"
          rules={[{ required: true, message: '패스워드를 입력하세요' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 8 }}>
          <Checkbox>아이디 저장</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">로그인</Button>
        </Form.Item>
      </StyledForm>
      <ModalCp title={message} />
    </Wrapper>
  )
}

export default LoginPage