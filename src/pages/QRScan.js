import React, { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import QrReader from 'react-qr-reader';
import {useNavigate, Link} from 'react-router-dom';

const QRScan = () => {
const navigate = useNavigate();
const qrRef = useRef(null);
const [type, setType] = useState('');
useEffect(() => {
  setType('1');
},[])
const webcamError = (error) => {
  if(error){
    console.log(error);
  }
}

const webcamScan = (result) => {
  if(result){
    // const changedResult = result.split('//')[1];
    navigate('/details',{state:{id:result,type}});
  }
}

  return (
    <Container>
      <Row className='mt-5 mb-3'>
        <Col>
        <h2>Scan QR Code</h2>
        </Col>
      </Row>

      <Row>
      <Col className='mb-5'>
        

      <Form.Label>Select Type</Form.Label>
      <Form.Select onChange={(e) => setType(e.target.value)}>
      <option value="1">Soil and Sand</option>
      <option value="2">Timber and Wood</option>
      </Form.Select>
        
      </Col>
      </Row>
      

      <Row>
      <Col className='d-flex justify-content-center mb-5'>
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <QrReader
        ref={qrRef}
        deday={300}
        onError={webcamError}
        onScan={webcamScan}
        legecyMode={false}
        facingMode={"user"}
      />
      
    </Card>
      </Col>
    </Row>
    
    <Link to='/home'>
    <Button variant='secondary' size='lg'>
        Back
    </Button>
    </Link>
    </Container>
  )
}

export default QRScan