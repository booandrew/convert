import { createContext, useState } from 'react'
import { Normalize } from 'styled-normalize'
import { ModalWindowConsumer, ModalWindowProvider } from '../context/context'
import '../styles/globals.css'

export const WindowContext = createContext()

const MyApp = ({ Component, pageProps }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => setIsModalOpen(true)
  const hideModal = () => setIsModalOpen(false)

  const state = {
    isModalOpen,
    showModal,
    hideModal
  }

  return (<>
    <ModalWindowProvider value={state}>
      <Component {...pageProps} />
    </ModalWindowProvider>
    <Normalize />
  </>
  )
}

export default MyApp