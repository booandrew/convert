import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import { MainLayout } from '../components/main-layout'
import { ModalWindowConsumer } from '../context/context'
import Modal from 'react-modal'

export default function Posts() {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout>
            <ModalWindowConsumer>{({ isModalOpen, showModal, hideModal }) => {
                return (
                    <>
                        <button onClick={showModal}>Show</button>
                        <Modal isOpen={isModalOpen} onRequestClose={hideModal} ariaHideApp={false}>
                            <h2>Title</h2>
                            <p>Body of the body of the body</p>
                            <div onClick={hideModal}>Close</div>
                        </Modal>
                    </>
                )
            }}</ModalWindowConsumer>

        </MainLayout>
    )
}

const ModalStyle = styled(Modal)`
    
`
