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
            

        </MainLayout>
    )
}

const ModalStyle = styled(Modal)`
    
`
