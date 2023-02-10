import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const Login = () => {
  return (
    <Container>
       
        <Row className='mt-5 mb-5'>
            <Col>
                <Image src={logo} width='150px' />
            </Col>
        </Row>
        
            <div className='d-grid gap-5'>
            <Link to='/signup'>
                <Button variant='primary' size='lg' >Sign Up</Button>
            </Link>
            <Link to='/signin'>
                <Button variant='primary' size='lg'>Sign In</Button>
            </Link>
            </div>
            
            
        
    </Container>
  )
}

export default Login