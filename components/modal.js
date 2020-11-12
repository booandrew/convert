import React from 'react';
import styled from 'styled-components';


export const Modal = () => {
  return (<>
    <ModalWrapper>
      <ModalHeader>
        Hello Modal
    </ModalHeader>
      <ModalBody>
        <p>Lorem isasdasxdasdxadasdkojasclskjrcno woei joncs ldjvnsd kfjnsdkj<br></br> fnw ejcpnecbnwfhbwshfbwecf wqedc wiuxdishbqiw xdqiwbdiqw dbiqwd xiqubw</p>
      </ModalBody>
    </ModalWrapper>
  </>);
}

const ModalWrapper = styled.div`
  background: tomato;
  width: 80%;
  min-width: 500px;
  margin: 4rem auto;

`

const ModalHeader = styled.h2`
  
`

const ModalBody = styled.div`
  
`
