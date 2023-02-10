import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col>
          <h2>Menu</h2>
        </Col>
      </Row>
      <Row className='justify-content-md-center mt-5'>
        <Col lg='4'>
        <div className='d-grid gap-5'>
        <Link to='/qrscan'>
        <Button variant='primary' size='lg'>
            Scan QR Code
        </Button>
        </Link>
        <Link to='/chvehiclenumber'>
        <Button variant='primary' size='lg'>
            Vehicle Number Plate Checker
        </Button>
        </Link>
      </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Link to='/signin'>
          <Button size='lg' variant='danger'>
            Logout
          </Button>
          </Link>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Home