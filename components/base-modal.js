import React from 'react'
import { ModalWindowConsumer } from '../context/context'
import Modal from 'react-modal'
import styled from 'styled-components';
import Input from './input';


export default function BaseModal({ className, ...props }) {
  const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: 'none',
      outline: 'none',
      padding: '20px',
      display: "flex",
      alignItems: 'center',
      flexDirection: 'column',
      width: '540px',
      height: '570px',
    }
  }

  return (
    <ModalWindowConsumer>{({ isModalOpen, hideModal }) => {
      return (

        <Modal
          isOpen={isModalOpen}
          onRequestClose={hideModal}
          style={style}>
          <h2>Модальное окно</h2>
          <Input/>
          <Input/>
          <Input/>
        </Modal>

      )
    }}
    </ModalWindowConsumer>
  )
}

const asd = styled.div`
  
`