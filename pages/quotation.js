import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import { MainLayout } from '../components/main-layout'
import { Modal } from '../components/modal'
import { ModalWindowConsumer } from '../context/context'


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
                        {isModalOpen && <><Modal /><ModalBackground onClick={hideModal} {...showModal}/></>}
                    </>
                )
            }}</ModalWindowConsumer>

        </MainLayout>
    )
}

const ModalBackground = styled.div`
    background-color: rgba(16, 17, 17, 0.459);
    height: 100%;
    width: 100%;
    position: fixed;
`
