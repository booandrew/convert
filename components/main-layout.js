import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { ModalWindowConsumer } from "../context/context";
import Modal from 'react-modal'
import BaseModal from "./base-modal";

export const MainLayout = ({ children, title = 'Next app' }) => {
  return (
    <ModalWindowConsumer>{({ showModal, isModalOpen }) => {
      return (
        <>
          <Head>
            <title>
              {title}
            </title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />
          </Head>

          <Layout >
            <HeaderContainer>

              <NavigationContainer>
                <Link href={'/'}><Text>Главная</Text></Link>
                <Link href={'/quotation'}><Text>Котировки</Text></Link>
              </NavigationContainer>

              <Link href={'/'}>
                <LogoContainer>
                  <div>
                    <img src='./assets/Logo.png' />
                  </div>
                </LogoContainer>
              </Link>


              <ModalButtonContainer>
                <CustomButton onClick={showModal}>Модальное окно</CustomButton>
              </ModalButtonContainer>
              {isModalOpen && <BaseModal  />}
            </HeaderContainer>
            <MainContent>
              {children}
            </MainContent>
          </Layout>
        </>
      )
    }}
    </ModalWindowConsumer>


  );
}

export default MainLayout

const Roro = styled.div`
color: red;
background-color: red;
background: red;
`

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 85px;
  }
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  margin-top: 85px; 
  padding: 0px 20px 0px 20px;
`

const Layout = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
`

const Text = styled.p`
  margin: 0%;
  font-weight: 500;
  cursor: pointer;
`

const CustomButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0065F2;
  padding: 6px 15px;
  color: #FFF;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.1px;
  line-height: 24px;
  cursor: pointer;
`

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

const LogoContainer = styled.div`
  
`
const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`

const CustomModal = styled(Modal)`
  width: 200px;
  height: 500px ;
  margin: 100px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 0;
`   