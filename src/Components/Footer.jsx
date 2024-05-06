import React from 'react'
import { Navbar,Container } from 'react-bootstrap'


const Footer = () => {
  return (
    <div>
       <Navbar className="bg-body-tertiary fixed-bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Footer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
