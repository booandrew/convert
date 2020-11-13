import React from 'react'
import styled from 'styled-components'

export default function Input() {
  return (
    <Wrapper>
      <CustomInput placeholder='asdaasdasdasdasdsd' />
    </Wrapper>
  )
}

const CustomInput = styled.input`
  color: #000;
  font-size: 16px;
  color: #444;
  line-height: 1.3;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  background: rgba(9,19,33,0.0638304);
`

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  margin: 16px;
  justify-content: center;
  align-items: center;
`
