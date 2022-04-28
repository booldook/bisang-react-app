import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { color } from 'styled';

import { setGlobalIsShow } from 'store/slice/global-slice';


const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 300px;
  padding: 1em;
  border: 2px solid ${color.light};
  border-radius: 0.25em;
  background-color: ${color.white};
`

const Title = styled.h2`
  text-align: center;
  color: ${color.dark};
`;

const ModalCp = ({ title }) => {
  const dispatch = useDispatch();
  const isShow = useSelector(state => state.global.isShow)

  const onClose = useCallback(() => {
    dispatch(setGlobalIsShow(false))
  }, [dispatch]);



  return (
    <div>
      <div>{isShow.toString()}</div>
      {isShow && <Wrapper>
        <Modal>
          <Title>{title}</Title>
          <button className="btn btn-primary" onClick={onClose}>닫기</button>
        </Modal>
      </Wrapper>}
    </div>
  )
}

export default ModalCp