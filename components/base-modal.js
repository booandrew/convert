import React from 'react'
import styled from 'styled-components';

class BaseModal extends React.Component {

  constructor(props) {
    super(props);
    this.ref = React.createRef()
  }

  onClose = event => {
    if (event.target === this.ref.current) {
      this.props.onReqClose()
    }
  }


  render() {
    const { onReqClose, children, ...rest } = this.props;
    console.log(onReqClose)
    return (
      <Container {...rest}
        onClick={this.onClose}
        ref={this.ref}>
        <Content>
          {children}
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0,0,0,0.7);
  pointer-events: none;
`

const Content = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  z-index: 101;
`

export default BaseModal;