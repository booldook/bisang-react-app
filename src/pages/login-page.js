import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled, { color } from 'styled';
import TitleCp from 'components/common/TitleCp';
import axios from 'axios';

const Wrapper = styled.div`

`

const StyledForm = styled(Form)`
  margin-top: 5em;
`

const LoginPage = () => {
  const onFinish = async ({ userid, userpw }) => {
    // redux --> cookie(session) / token / localStorage
    // await axios.get(url, options)
    try {
      const url = process.env.REACT_APP_SERVER_URL + '/api/auth';
      const data = { userid, userpw }
      const options = { withCredentials: true }
      const result = await axios.post(url, data, options);
      console.log(userid, userpw, result);
    }
    catch(err) {
      console.log(err)
    } 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
    </Wrapper>
  )
}

export default LoginPage